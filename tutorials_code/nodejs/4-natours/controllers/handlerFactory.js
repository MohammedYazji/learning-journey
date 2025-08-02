// in this file we will factor all controller methods into this file as a template
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

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
