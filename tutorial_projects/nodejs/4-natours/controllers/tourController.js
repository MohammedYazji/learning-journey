const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    console.log(req.query);
    // 1A) BASIC FILTERING
    // make a shallow copy as a new object
    const queryObj = { ...req.query };
    // make an array to remove all these from query if exist
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObj[el]);

    // console.log(req.query, queryObj);

    // 1B) ADVANCED FILTERING
    // What I did in mongo was
    // {difficulty: 'easy', {duration: {$gte: 5}}}
    // but the query in request will came as
    // {difficulty: 'easy', {duration: {gte: '5'}}}
    // so we need to add the $, before gt, gte, lt, lte
    let queryStr = JSON.stringify(queryObj);
    // using regular expression
    // \b to search exactly on these characters
    // g flag to replace many of them is exist not just one
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`);
    queryStr = JSON.parse(queryStr);
    console.log(queryStr);

    let query = Tour.find(queryStr);

    // 2.) SORTING
    // if there is sort property in the query
    if (req.query.sort) {
      // so to remove the , and replace it with a space so convert it to array then make it string again with ' '
      const sortBy = req.query.sort.split(',').join(' ');
      console.log(sortBy);
      // here we must before build the query then execute it becaause we need to access the query methods like sort
      query = query.sort(sortBy);
      // add another creteria to sort if the price is the same in two document
      // query.sort('price, ratingsAverage')
    } else {
      // default sorting if there is not sort query
      query = query.sort('-createdAt');
    }

    // 3) FIELD LIMITING
    if (req.query.fields) {
      const fields = req.query.fields.split(',').join(' ');
      // must change from , to ' ' to pass to select method
      query = query.select(fields);
      // query.select('name duration price')
    } else {
      // if there is no specific fields want to return
      // remove __v from the documents by use - => exclude them
      query = query.select('-__v');
    }

    // then EXECUTE THE QUERY TO GET THE DOCUMENTS
    const tours = await query;
    ////////////////////////////////////////////
    // 1c. First Way
    // const tours = await Tour.find(queryObj);

    // 2c. Another Way:
    // const tours = await Tour.find()
    //   .where('duration')
    //   .equals(5)
    //   .where('difficulty')
    //   .equals('easy');

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
