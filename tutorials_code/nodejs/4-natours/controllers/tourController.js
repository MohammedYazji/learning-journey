const Tour = require('../models/tourModel');
const APIFeatures = require('../utils/apiFeatures');

// middleware for '/top-5-cheap'
// 5 best and cheapest tours
exports.aliasTopTours = (req, res, next) => {
  req.query.limit = '5';
  req.query.sort = '-ratingsAverage,price';
  req.query.fields = 'name, price, ratingsAverage, summary, difficulty';
  next(); // to implement getAllTours after this
};

exports.getAllTours = async (req, res) => {
  try {
    // then EXECUTE THE QUERY TO GET THE DOCUMENTS
    // build
    const features = new APIFeatures(Tour.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    // execute
    const tours = await features.query;

    // SEND A RESPONSE
    res.status(200).json({
      status: 'success',
      results: tours.length,
      data: { tours },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.createTour = async (req, res) => {
  try {
    // 1. First Way
    // const newTour = new Tour({pass the new tour data here});
    // newTour.save();

    // 2. Another Way (create it and save it immediately)
    // also return a promise
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    // bad request
    res.status(400).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.getTour = async (req, res) => {
  try {
    // Tour.findOne({_id: req.params.id}) // IN MONGODB
    const tour = await Tour.findById(req.params.id);

    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.updateTour = async (req, res) => {
  try {
    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // to return thew new document
      runValidators: true, // to run the validation process when update data
    });
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
exports.deleteTour = async (req, res) => {
  try {
    await Tour.findByIdAndDelete(req.params.id);
    // 204 for delete so item no longer exist
    res.status(204).json({
      status: 'success',
      data: null, // no content
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};

// aggregation
// Here I will implement a function to calc a statistics of tours
exports.getTourStats = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err,
    });
  }
};
