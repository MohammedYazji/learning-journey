// in this file we will factor all controller methods into this file as a template
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');

exports.deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params.id);

    if (!doc) {
      // jump to the global error handler middleware
      // we use return to stop the function and not send two responses one from here and another from the error controller
      return next(new AppError('No document found with that ID', 404));
    }

    // 204 for delete so item no longer exist
    res.status(204).json({
      status: 'success',
      data: null, // no content
    });
  });

exports.updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // to return thew new document
      runValidators: true, // to run the validation process when update data 👍
    });

    if (!doc) {
      // jump to the global error handler middleware
      // we use return to stop the function and not send two responses one from here and another from the error controller
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.getOne = (Model, popOptions) =>
  catchAsync(async (req, res, next) => {
    // so we did this logic because in tour we have populate the query so if pop exist populate the query finally await it to get the data
    let query = Model.findById(req.params.id);
    if (popOptions) query = query.populate(popOptions);

    const doc = await query;

    // if the response is null so there's no document to display 404 not found
    if (!doc) {
      // jump to the global error handler middleware
      // we use return to stop the function and not send two responses one from here and another from the error controller
      return next(new AppError('No document found with that ID', 404));
    }

    res.status(200).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });

exports.getAll = (Model) =>
  catchAsync(async (req, res, next) => {
    // To allow for nested GET reviews on tour
    // just make the searching on these tours of this review [if Review controller call this]
    // if I use /:tourId/reviews [get review of one tour]
    let filter = {};
    if (req.params.tourId) filter = { tour: req.params.tourId };

    // then EXECUTE THE QUERY TO GET THE DOCUMENTS
    // build
    const features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      // add break point here to find the bug
      .limitFields()
      .paginate();

    // execute
    // explain show some info about the result for example the total documents and the search result count
    // const doc = await features.query.explain();
    const doc = await features.query;

    // SEND A RESPONSE
    res.status(200).json({
      status: 'success',
      results: doc.length,
      data: { doc },
    });
  });
