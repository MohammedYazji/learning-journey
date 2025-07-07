const express = require('express');
const tourController = require('./../controllers/tourController');
const checkID = require('./../controllers/tourController');
const checkBody = require('./../controllers/tourController');

// this router is kind of sub-application for tours resource
const router = express.Router();

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
