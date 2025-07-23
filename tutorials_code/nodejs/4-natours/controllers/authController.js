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
