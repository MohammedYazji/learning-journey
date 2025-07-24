const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  // just specify the data we need from the request
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  });

  // create our token
  // valid until 90 days
  const token = signToken(newUser._id);

  // send the token to the client

  //   then send the new user to the client
  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  // get the data from the request using destructuring
  const { email, password } = req.body;

  // 1) if email and password is there
  if (!email || !password) {
    // return to stop the function
    return next(new AppError('Please provide email and password!', 400));
  }

  // 2) check if the user exist and the password is correct

  // get the user if exist with the password
  const user = await User.findOne({ email: email }).select('+password');

  // now check the passwords
  // correctPasswors can access it from all user documents instances
  // if no user there with this email or the pass is wrong
  // 401 unauthorize
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password!', 401));
  }

  // 3) if all is ok send the token to the client

  // create our token
  // valid until 90 days
  const token = signToken(user._id);

  // then send the response with the token to the client
  res.status(200).json({
    status: 'success',
    token,
  });
});

// create a middleware to protect routes from unutilized users
exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting Token and check if it's there
  console.log(req);
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return next(
      new AppError('You are not logged in! Please log on to get access.', 401),
    );
  }

  // 2) Verification token

  // The function promisify is used to convert a callback-based function into a promise-based one, so that you can use async/await syntax with it.
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) check if user still exists [not deleted user], for example we login then delete the account so the auth will not complete and the token not there
  const freshUser = await User.findById(decoded.id);

  if (!freshUser) {
    return next(
      new AppError(
        'The user belonging to this token does no longer exist.',
        401,
      ),
    );
  }

  // 4) check if user changed password after thw token was issued
  if (freshUser.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError('User recently changed password! Please log in again.', 401),
    );
  }

  // if we pass all these steps so call the next middleware in the stack
  // GRANT ACCESS TO PROTECTED ROUTE

  // here we make a new property in this request to can access this authorized user information in the next middlewares
  req.user = freshUser;
  next();
});
