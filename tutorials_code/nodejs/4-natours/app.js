const path = require('path');
const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const reviewRouter = require('./routes/reviewRoutes');
const viewRouter = require('./routes/viewRoutes');

// express is function so when call it will add many methods to app
const app = express();

// use the template engine called pug to make server rendering [not like react client rendering]
app.set('view engine', 'pug');
// specify the folder to take the templates from
app.set('views', path.join(__dirname, 'views')); // use path.join to not be worry about slashes

// 1. GLOBAL Middlewares
// general middlewares for all requests and routes

// SET SECURITY HTTP HEADERS //
app.use(helmet());
//Add the following
// Further HELMET configuration for Security Policy (CSP)
const scriptSrcUrls = [
  'https://api.tiles.mapbox.com/',
  'https://api.mapbox.com/',
];
const styleSrcUrls = [
  'https://api.mapbox.com/',
  'https://api.tiles.mapbox.com/',
  'https://fonts.googleapis.com/',
];
const connectSrcUrls = [
  'https://api.mapbox.com/',
  'https://a.tiles.mapbox.com/',
  'https://b.tiles.mapbox.com/',
  'https://events.mapbox.com/',
];
const fontSrcUrls = ['fonts.googleapis.com', 'fonts.gstatic.com'];
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: [],
      connectSrc: ["'self'", ...connectSrcUrls],
      scriptSrc: ["'self'", ...scriptSrcUrls],
      styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
      workerSrc: ["'self'", 'blob:'],
      objectSrc: [],
      imgSrc: ["'self'", 'blob:', 'data:'],
      fontSrc: ["'self'", ...fontSrcUrls],
    },
  }),
);
////////////////////////////////////////

// DEVELOPMENT LOGGING //
// only use morgan in the development environment
if (process.env.NODE_ENV === 'development') {
  // use 3rd Party [logging to console the req information]
  app.use(morgan('dev'));
}

// LIMIT REQUEST FROM SAME API //
// we need to secure our api by limit the rating of request of the same ip address
const limiter = rateLimit({
  max: 100, // number of requests
  windowMs: 60 * 60 * 1000, // window time => here one hour
  message: 'Too many requests from this IP, please try again in an hour!',
});
// we will implement this middleware for all routes have /api
app.use('/api', limiter);

// BODY PARSER, READING DATA FROM BODY INTO req.body //
// express.json is a middleware: function can modify the incoming request data
// we call it middleware because its between the req and the res
app.use(express.json({ limit: '10kb' }));

// clean all data to come into the application to sure its safe data //
// DATA SANITIZATION AGAINST NOSQL QUERY INJECTION

// so for example prevernt enter queiries as email
//  this package handle dots and other characters
app.use(mongoSanitize());

// DATA SANITIZATION AGAINST XSS
// prevent enter js code as a dangour code as an input for my app
app.use(xss());

// PREVENT POPULATION OF PARAMETER //
// for example when we in the request put two sorting queries but we just need one in the apiFeatures
// just take the last one: sort+duration&sort+price => price
app.use(
  hpp({
    // list of parameter that allow repetition
    whitelist: [
      'duration',
      'ratingsQuantity',
      'ratingsAverage',
      'maxGroupSize',
      'difficulty',
      'price',
    ],
  }),
);

// serving static files [just for knowing don't use it] //
// here we serve public folder
// app.use(express.static(`${__dirname}/public`));
app.use(express.static(path.join(__dirname, 'public')));

// TEST MIDDLEWARE //
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  // each request has headers
  // console.log(req.headers);
  next();
});

// 3. Routes
// specific Middlewares

app.use('/', viewRouter);
// this tourRouter Middleware will apply just on this route
app.use('/api/v1/tours', tourRouter);
// this userRouter Middleware will apply just on this route
app.use('/api/v1/users', userRouter);
// this reviewRouter Middleware will apply just on this route
app.use('/api/v1/reviews', reviewRouter);

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
