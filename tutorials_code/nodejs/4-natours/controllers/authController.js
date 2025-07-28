const crypto = require('crypto');
const { promisify } = require('util');
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const sendEmail = require('../utils/email');

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
    role: req.body.role,
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
  if (await freshUser.changedPasswordAfter(decoded.iat)) {
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

// restrict specific routes
// specific user-roles can deal with this routes
// for example after login just admin or lead-guide can delete a user
exports.restrictTo = (...roles) => {
  // here the inner function will access the roles array [closure]
  return (req, res, next) => {
    // roles ['admin', 'lead-guide']
    // here i will access the current login user information and properties because we put the user document in the req.user in the previous middleware [protect]
    // console.log(req.user.role);
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError('You do not have permission to perform this action', 403),
      );
    }

    // otherwise we can move to the next middleware and implement it because the current user has the permission to do this task
    next();
  };
};

// make middlewares to reset the password
exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get User based on Posted email
  const user = await User.findOne({ email: req.body.email });

  if (!user) {
    return next(new AppError('There is no user with email address.', 404));
  }

  // 2) Generate the random reset token
  const resetToken = user.createPasswordResetToken();
  // to save the PasswordResetToken and PasswordResetExpires in DB
  await user.save({ validateBeforeSave: false });

  // 3) Send it to user's email
  const resetURL = `${req.protocol}://${req.get('host')}/api/v1/users/resetpassword/${resetToken}`;

  const message = `Forgot your password! Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

  try {
    await sendEmail({
      email: user.email, // or req.body.email
      subject: 'Your password reset token (valid for 10 min)',
      message,
    });

    res.status(200).json({
      status: 'success',
      message: 'Token sent to email!',
    });
  } catch (err) {
    console.log('❌❌❌', err.message);
    // if there is error so make the token invalid
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return next(
      new AppError('There was an error sending the email. Try again later!'),
      500,
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) get user based on the token

  // we need to encrypt the token which will be in the request, to compare it with the one in the DB
  const hashedToken = crypto
    .createHash('sha256')
    .update(req.params.token)
    .digest('hex');

  // get the user with this encrypted token and the expire token is greater than not valid one
  const user = await User.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If token has not expired, and there is user, set the new password
  // so here if i have the user so its exist and the token is valid yet
  if (!user) {
    return next(new AppError('Token is invalid or has expired', 400));
  }

  // update the new password
  user.password = req.body.password;
  user.passwordConfirm = req.body.passwordConfirm;

  // then remove the token info
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;

  // save the user with the new data
  // here we need the validator don't turn it off
  await user.save();

  // 3) Update changedPasswordAt property for the user
  // 4) Log the user in, send JWT
  const token = signToken(user._id);

  res.status(200).json({
    status: 'success',
    token,
  });
});
