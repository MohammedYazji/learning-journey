const AppError = require('../utils/appError');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = (err) => {
  // Example: err.keyValue = { name: 'test-tour' }
  const value = Object.values(err.keyValue)[0];

  const message = `Duplicate field value: ${value}. Please use another value!`;
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    // in production just send a simple response
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } // make generic message for example when forget await in async [programming error not operational]
  // so we don't need to send the details of the error to the client
  else {
    // 1) log error
    console.error('Error 💥', err);
    // 2) send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went very wrong!!',
    });
  }
};

module.exports = (err, req, res, next) => {
  //   console.log(err.stack); // show where the error happened

  // will define it in other places not here
  // make the default t =o be 500
  err.statusCode = err.statusCode || 500;

  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === 'production') {
    // its not best practice to mutate the original error object so we copy it before
    let error = { ...err };

    if (error.name === 'CastError') {
      error = handleCastErrorDB(error); // this function will return AppError
    }
    if (error.code === 11000) {
      error = handleDuplicateFieldsDB(error);
    }

    sendErrorProd(error, res);
  }
};
