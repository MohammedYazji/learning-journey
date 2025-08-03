const Tour = require('../models/tourModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const AppError = require('../utils/appError');

// middleware for '/top-5-cheap'
// 5 best and cheapest tours
exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name, price, ratingsAverage, summary, difficulty';
  next(); // to implement getAllTours after this
};

exports.getAllTours = factory.getAll(Tour);
exports.getTour = factory.getOne(Tour, { path: 'reviews' });
exports.createTour = factory.createOne(Tour);
exports.updateTour = factory.updateOne(Tour);
exports.deleteTour = factory.deleteOne(Tour);

// aggregation
// Here I will implement a function to calc a statistics of tours
exports.getTourStats = catchAsync(async (req, res, next) => {
  // we will use it as we used the query
  // but here we must define the stages we need
  // so the document will go through all these stages
  // will return an aggregate objectso we need to await it later to take the real result [such as the queries]
  const stats = await Tour.aggregate([
    // match will filter the documents, to pass into the next stage [uses standard mongoDB queries]
    // like filter object we use in APIFeatures
    {
      // so in my aggregation pipeline here I need just the documents with ratingAverage >= 4.5
      $match: { ratingsAverage: { $gte: 4.5 } },
    },
    // group is grouping the documents according to a specific identifier, also can use accumulator for each group
    {
      // so here we calculate the average rating using group
      $group: {
        // group the documents based on the difficulty
        _id: { $toUpper: '$difficulty' }, // to make uppercase
        // _id: '$difficulty',

        // accumulators

        // each document will pass through the pipeline will add one for each document
        numTours: { $sum: 1 },

        numRatings: { $sum: '$ratingsQuantity' },

        // specify a new field to be the accumulator, and calc the average of all documents rating which pass the matching stage
        avgRating: { $avg: '$ratingsAverage' },

        avgPrice: { $avg: '$price' },
        minPrice: { $min: '$price' },
        maxPrice: { $max: '$price' },
      },
    },
    {
      // sort baed on the new names which is in my groups
      $sort: { avgPrice: 1 }, // 1 => ascending
    },
    // we can repeat stages, but now match will filter the group documents not all documents, so also we will use group new properties to filter based on them
    // {
    //   $match: { _id: { $ne: 'EASY' } },
    // },
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      stats,
    },
  });
});

// real business problem I asked to build a function to calculate the busiest month [calc how many tours start in each month of a given year]
exports.getMonthlyPlan = catchAsync(async (req, res, next) => {
  // transform it into a number
  const year = req.params.year * 1;

  const plan = await Tour.aggregate([
    {
      // so unwind make many documents from a document so here for each document will make 3 documents based on the startDates Array
      // so for each element in the array will make a new document with all the original document info
      $unwind: '$startDates',
    },
    {
      // after that we will get just the documents that match the input year
      $match: {
        startDates: {
          $gte: new Date(`${year}-01-01`),
          $lte: new Date(`${year}-12-31`),
        },
      },
    },
    {
      // group documents of this year based on specific month
      $group: {
        // $month returns a month as a number between 1 - 12
        _id: { $month: '$startDates' },

        // each document will pass through the pipeline of this month group will add one for in the counter of this month group
        numTourStarts: { $sum: 1 },

        // then need to display these tours of this month as array so we use $push the name fields
        tours: { $push: '$name' },
      },
    },
    {
      // use to add field to the document, to later can remove the id
      // so we make a new field called month and it includes the id filed of the document
      $addFields: { month: '$_id' },
    },
    {
      // so now we can ignore the id and remove it by give it value of zero
      $project: {
        _id: 0,
      },
    },
    {
      $sort: { numTourStarts: -1 }, // descending
    },
    {
      // its exactly like limit in the query
      // so here we need just 12 documents as a result
      $limit: 12,
    },
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      plan,
    },
  });
});

exports.getToursWithin = catchAsync(async (req, res, next) => {
  const { distance, latlng, unit } = req.params;
  const [lat, lng] = latlng.split(',');

  // get the radius of your center point
  const radius = unit === 'mi' ? distance / 3963.2 : distance / 6278.1;

  if (!lat || !lng) {
    return next(
      new AppError(
        'Please provide latitude and longitude in the format lat,lng.',
        400,
      ),
    );
  }

  const tours = await Tour.find({
    startLocation: { $geoWithin: { $centerSphere: [[lng, lat], radius] } },
  });

  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: {
      data: tours,
    },
  });
});

exports.getDistances = catchAsync(async (req, res, next) => {
  const { latlng, unit } = req.params;
  const [lat, lng] = latlng.split(',');

  const multiplier = unit === 'mi' ? 0.000621371 : 0.001;

  if (!lat || !lng) {
    return next(
      new AppError(
        'Please provide latitude and longitude in the format lat,lng.',
        400,
      ),
    );
  }

  const distances = await Tour.aggregate([
    {
      $geoNear: {
        near: {
          type: 'Point',
          coordinates: [lng * 1, lat * 1],
        },
        distanceField: 'distance',
        distanceMultiplier: multiplier,
      },
    },
    {
      $project: {
        distance: 1,
        name: 1,
      },
    },
  ]);

  res.status(200).json({
    status: 'success',
    data: {
      data: distances,
    },
  });
});
