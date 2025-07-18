module.exports = (err, req, res, next) => {
  //   console.log(err.stack); // show where the error happened

  // will define it in other places not here
  // make the default t =o be 500
  err.statusCode = err.statusCode || 500;

  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  });
};
