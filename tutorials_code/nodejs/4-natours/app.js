const express = require('express');
const morgan = require('morgan');
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

// create our middleware
// app.use => add the middleware to the middleware stack
// this middleware run for each request came after this declaration because we didn't specify any route yet [order matter in nodejs]
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  // must use next to not stuck in the request - response cycle
  next();
});

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

module.exports = app;
