const mongoose = require('mongoose');
const Tour = require('./tourModel');

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
  // this.populate({
  //   path: 'tour', // path to reference
  //   select: 'name', // just select the name
  // }).populate({
  //   path: 'user', // path to reference
  //   select: 'name photo', // just select the name
  // });

  // get rid of the first one because when i make virtual populating in tour I don't need the tours again inside tour
  this.populate({
    path: 'user', // path to reference
    select: 'name photo', // just select the name
  });

  next();
});

// static method not for instance but access it using the model itself
// we need to calc the avgRatings whenever we create a new review or update an existence one
reviewSchema.statics.calcAverageRatings = async function (tourId) {
  const stats = await this.aggregate([
    {
      // 1) select all reviews for this document
      $match: { tour: tourId },
    },
    {
      // 2) calc the statistics
      $group: {
        _id: '$tour', //group result by tour [result for one tour based on id]
        nRating: { $sum: 1 }, // for each review plus the number of rating by one
        avgRating: { $avg: '$rating' }, // calc the average of all reviews in this tour
      },
    },
  ]);
  // console.log(stats);

  // we make if statement to handle if the stats undefined
  if (stats.length > 0) {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: stats[0].nRating,
      ratingsAverage: stats[0].avgRating,
    });
  } else {
    await Tour.findByIdAndUpdate(tourId, {
      ratingsQuantity: 0,
      ratingsAverage: 4.5,
    });
  }
};

// so we calc the stats after save the document in the DB
// ON CREATE A REVIEW //
reviewSchema.post('save', function () {
  // this point to the current review
  this.constructor.calcAverageRatings(this.tour);
});

// ON UPDATE, DELETE A REVIEW //
// findByIdAndUpdate
// findByIdAndDelete
// HERE WE NEED To Access the Query so we use pre
reviewSchema.pre(/^findOneAnd/, async function (next) {
  // when delete or update need to access the current review document id
  // so now r will be the current review doc
  this.r = await this.findOne(); // to pass the data from pre to post middleware
  // console.log(this.r);
  next();
});
// so here after the doc saved we will cal the function
reviewSchema.post(/^findOneAnd/, async function () {
  // await this.findOne(); does NOT work here, query has already executed
  await this.r.constructor.calcAverageRatings(this.r.tour);
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
