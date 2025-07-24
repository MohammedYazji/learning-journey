const express = require('express');
const tourController = require('./../controllers/tourController');
const authController = require('../controllers/authController');

// this router is kind of sub-application for tours resource
const router = express.Router();

// so we need to make a middleware just for this unique route to manipulate req before move to getAllTours
// 127.0.0.1:3000/api/v1/tours?limit=5&sort=-ratingsAverage,price
router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

// make route for the aggregation pipeline to calc the stats of certain documents
router.route('/tour-stats').get(tourController.getTourStats);
// another route for the aggregation pipeline to calculate the busiest month
// we receive the year as a parameter
router.route('/monthly-plan/:year').get(tourController.getMonthlyPlan);

router
  .route('/')
  .get(authController.protect, tourController.getAllTours) // protect this route
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
