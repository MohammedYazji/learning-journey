const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) {
      newObj[el] = obj[el];
    }
  });

  // just push name and email in the object if exist nothing else
  return newObj;
};

exports.getMe = (req, res, next) => {
  // change the id from URL to be the one from the protect middleware
  req.params.id = req.user.id;

  next(); // to let the getOne execute
};

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) if user POST password data create error
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        'This rout is not for password updates, Please use /updateMyPassword.',
      ),
    );
  }

  // 2) Filtered out unwanted fields names that are not allowed to be updated
  // we need to be sure that just the user can implement the email and password
  const filteredBody = filterObj(req.body, 'name', 'email');

  // 3) update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: 'success',
    data: {
      user: updatedUser,
    },
  });
});

// user can delete his account by inactive it
exports.deleteMe = catchAsync(async (req, res, next) => {
  // set active to false
  await User.findByIdAndUpdate(req.user.id, { active: false });

  res.status(204).json({
    status: 'success',
    message: null,
  });
});

exports.getAllUsers = factory.getAll(User);
exports.getUser = factory.getOne(User);

// only for admin //
exports.updateUser = factory.updateOne(User); // will not update password
exports.deleteUser = factory.deleteOne(User);

// Undefined Route //
exports.createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route is not defined! Please use /signup instead',
  });
};
