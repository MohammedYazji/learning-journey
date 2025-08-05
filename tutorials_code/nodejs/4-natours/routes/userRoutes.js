const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout); // get a new cookie with invalid token [overwrite the old one]
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);

// PROTECT ALL ROUTES AFTER THIS MIDDLEWARE //
// all the coming routes we need protect middleware, so instead of writing it inside each route I will use it in the router itself because its a middleware too
// so any route after this statement will has the protect middleware automatically in it's stack
router.use(authController.protect);

router.patch('/updateMyPassword', authController.updatePassword);

// must be authenticated before get his info
// and we make getMe middleware to fake that the id came from url but its from protect auth controller
router.route('/me').get(userController.getMe, userController.getUser);

router.patch(
  '/updateMe',
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe,
);
router.delete('/deleteMe', userController.deleteMe);

// RESTRICT ALL ROUTES AFTER THIS MIDDLEWARE JUST FOR ADMIN //
router.use(authController.restrictTo('admin'));

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
