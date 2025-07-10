const express = require('express');
const tourController = require('./../controllers/tourController');

// this router is kind of sub-application for tours resource
const router = express.Router();

// so we need to make a middleware just for this unique route to manipulate req before move to getAllTours
// 127.0.0.1:3000/api/v1/tours?limit=5&sort=-ratingsAverage,price
router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
