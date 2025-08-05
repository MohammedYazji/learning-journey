const express = require('express');
const tourController = require('../controllers/tourController');
const authController = require('../controllers/authController');
// const reviewController = require('../controllers/reviewController');
const reviewRouter = require('./reviewRoutes');

// this router is kind of sub-application for tours resource
const router = express.Router();

// POST tour/id_tour12313/reviews
// GET tour/id_tour12313/reviews
// GET tour/id_tour12313/reviews/review_idee3e21

// in the tour router just for this route use the review router as a middleware
// so its by tour then redirected to the review router
router.use('/:tourId/reviews', reviewRouter);

// so we need to make a middleware just for this unique route to manipulate req before move to getAllTours
// 127.0.0.1:3000/api/v1/tours?limit=5&sort=-ratingsAverage,price
router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

// make route for the aggregation pipeline to calc the stats of certain documents
router.route('/tour-stats').get(tourController.getTourStats);
// another route for the aggregation pipeline to calculate the busiest month
// we receive the year as a parameter
router
  .route('/monthly-plan/:year')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide', 'guide'),
    tourController.getMonthlyPlan,
  );

router
  .route('/tours-within/:distance/center/:latlng/unit/:unit')
  .get(tourController.getToursWithin);
//tours-within?distance=233&center=-40&unit=mi [using query]
//tours-within/233/center/-40,45/unit/mi [using this route]

router.route('/').get(tourController.getAllTours).post(
  authController.protect,
  authController.restrictTo('admin', 'lead-guide'),
  tourController.createTour, // just admin and lead-guide can create a tour after login
);

router.route('/distances/:latlng/unit/:unit').get(tourController.getDistances);

router
  .route('/:id')
  .get(tourController.getTour) // free for everyone
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.uploadTourImages,
    tourController.resizeTourImages,
    tourController.updateTour,
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    tourController.deleteTour,
  );

module.exports = router;
