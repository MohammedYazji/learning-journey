const multer = require('multer');
const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const factory = require('./handlerFactory');

const multerStorage = multer.diskStorage({
  // cb here like next in express
  destination: (req, file, cb) => {
    cb(null, 'public/img/users');
  },
  // file here come from  req.file
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
  },
});

// check if the file is image
const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images.', 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

// this middleware will store the file in req.file
// and we above define the destination , file-naming, ...
exports.uploadUserPhoto = upload.single('photo');

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
  // multer will store the file in req.file because we put it in the middleware stack before this middleware
  // console.log(req.file);
  // console.log(req.body);

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
  // if there is photo
  // update the photo name
  if (req.file) filteredBody.photo = req.file.filename;

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
