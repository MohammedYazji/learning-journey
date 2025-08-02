const Review = require('../models/reviewModel');
const factory = require('./handlerFactory');

// I made middleware to run before createReview to set some setup before call the template factory, because this createReview is different a bit from other controllers
exports.setTourUserIds = (req, res, next) => {
  // ALLOW NESTED ROUTES //
  // we will get the tour from the url if there is no data in the body json request
  if (!req.body.tour) req.body.tour = req.params.tourId;
  // we will get the user from the protect middleware after authenticated, if there's no data in the body json request
  if (!req.body.user) req.body.user = req.user.id;

  next();
};
exports.createReview = factory.createOne(Review);

exports.getAllReviews = factory.getAll(Review);
exports.getReview = factory.getOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);
