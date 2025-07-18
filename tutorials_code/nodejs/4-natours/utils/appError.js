// make the class inherite from the Error class
class AppError extends Error {
  constructor(message, statusCode) {
    // instead of doing this
    // const err = new Error(`the error message`);
    super(message);

    this.statusCode = statusCode;
    // make the status code string and test if start with 4
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

    // this class for operational errors such as failed to connect DB
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
