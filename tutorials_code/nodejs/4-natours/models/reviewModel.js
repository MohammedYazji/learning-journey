const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    review: {
      type: String,
      required: [true, 'Review can not be empty!'],
    },
    rating: {
      type: Number,
      min: 1,
      max: 5,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    tour: {
      type: mongoose.Schema.ObjectId,
      ref: 'Tour',
      required: [true, 'Review must belong to tour.'],
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Review must belong to a user.'],
    },
  },
  {
    // second object for Schema Options

    // so here we tell it each time we send the data as json as response so send the virtual with it
    toJSON: { virtuals: true },
    // also if we send it as an object display it too
    toObject: { virtuals: true },
  },
);

// QUERY MIDDLEWARE

// 1. use populate to replace the id with the actual data of the tour and user how made the review
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'tour', // path to reference
    select: 'name', // just select the name
  }).populate({
    path: 'user', // path to reference
    select: 'name photo', // just select the name
  });

  next();
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
