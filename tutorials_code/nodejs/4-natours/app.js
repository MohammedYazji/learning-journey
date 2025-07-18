const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

// express is function so when call it will add many methods to app
const app = express();

// 1. Middlewares
// general middlewares for all requests and routes

// only use morgan in the development environment
if (process.env.NODE_ENV === 'development') {
  // use 3rd Party [logging to console the req information]
  app.use(morgan('dev'));
}

// express.json is a middleware: function can modify the incoming request data
// we call it middleware because its between the req and the res
app.use(express.json());

// serving static files [just for knowing don't use it]
// here we serve public folder
// app.use(express.static(`${__dirname}/public`));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3. Routes
// specific Middlewares

// this tourRouter Middleware will apply just on this route
app.use('/api/v1/tours', tourRouter);
// this userRouter Middleware will apply just on this route
app.use('/api/v1/users', userRouter);

// run for all http requests that not same as my tours and users routes
// handle unhandled routes * => everything
// it's a regular middleware function
// if it was a correct routes will not reach until here
app.all('*', (req, res, next) => {
  // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
  // err.status = 'fail';
  // err.statusCode = 404;

  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// make a central [global middleware] to handle all errors in the same place
// like the normal middlewares but also nas err argument
app.use(globalErrorHandler);

module.exports = app;
