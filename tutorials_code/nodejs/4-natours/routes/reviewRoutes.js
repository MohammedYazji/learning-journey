const express = require('express');
const reviewController = require('../controllers/reviewController');
const authController = require('../controllers/authController');

// to access the tourId from the tour router
const router = express.Router({ mergeParams: true });

// PROTECT ALL ROUTES AFTER THIS MIDDLEWARE //
router.use(authController.protect);

router
  .route('/')
  .get(reviewController.getAllReviews)
  .post(
    authController.restrictTo('user'),
    reviewController.setTourUserIds,
    reviewController.createReview,
  ); // we just need auth user to post reviews, and only regular user not admin or something else

// just user and admin can update and delete reviews
router
  .route('/:id')
  .get(reviewController.getReview)
  .patch(
    authController.restrictTo('user', 'admin'),
    reviewController.updateReview,
  )
  .delete(
    authController.restrictTo('user', 'admin'),
    reviewController.deleteReview,
  );

module.exports = router;
