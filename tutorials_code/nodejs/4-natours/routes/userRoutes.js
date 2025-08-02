const express = require('express');
const userController = require('./../controllers/userController');
const authController = require('./../controllers/authController');

const router = express.Router();

// this route for dealing immediately with the user
// route just for post data to signup
router.post('/signup', authController.signup);

router.post('/login', authController.login);

// this route for reset password
router.post('/forgotPassword', authController.forgotPassword);

router.patch('/resetPassword/:token', authController.resetPassword);

router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword,
);

// must be authenticated before get his info
// and we make getMe middleware to fake that the id came from url but its from protect auth controller
router
  .route('/me')
  .get(authController.protect, userController.getMe, userController.getUser);

router.patch('/updateMe', authController.protect, userController.updateMe);
router.delete('/deleteMe', authController.protect, userController.deleteMe);

router
  .route('/')
  .get(userController.getAllUsers)
  .post(userController.createUser);

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
