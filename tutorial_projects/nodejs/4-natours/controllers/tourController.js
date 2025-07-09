const Tour = require('../models/tourModel');

exports.getAllTours = async (req, res) => {
  try {
    console.log(req.query);
    // A) BASIC FILTERING
    // make a shallow copy as a new object
    const queryObj = { ...req.query };
    // make an array to remove all these from query if exist
    const excludeFields = ['page', 'sort', 'limit', 'fields'];
    excludeFields.forEach((el) => delete queryObj[el]);

    // console.log(req.query, queryObj);

    // B) ADVANCED FILTERING
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
    ////////////////////////////////////////////
    // 1. First Way
    // const tours = await Tour.find(queryObj);

    // 2. Another Way:
    // const tours = await Tour.find()
    //   .where('duration')
    //   .equals(5)
    //   .where('difficulty')
    //   .equals('easy');

    // 3. Or FIRST BUILD THE QUERY WITHOUT AWAIT
    const query = Tour.find(queryStr);
    // then EXECUTE THE QUERY TO GET THE DOCUMENTS
    const tours = await query;

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
