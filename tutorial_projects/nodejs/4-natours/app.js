const fs = require('fs');
const express = require('express');

// express is function so when call it will add many methods to app
const app = express();

// express.json is a middleware: function can modify the incoming request data
// we call it middleware because its between the req and the res
app.use(express.json());

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

// read it sync because we need the data before continue the app
// top level code just execute once when the app run
// we use JSON.parse to convert json to normal JS
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

const getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: { tours },
  });
};

const createTour = (req, res) => {
  // When the client sends a POST request, it includes data in the request body.
  // By default, Node.js does NOT parse incoming JSON data.
  // That's why we need a middleware (express.json()) to parse it and attach it to req.body.
  const newId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);
  // because we are in a callback function use async methods
  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      if (err) {
        return res
          .status(500)
          .json({ status: 'fail', message: 'Could not save data' });
      }

      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

const getTour = (req, res) => {
  // console.log(req.params);
  // type coercion 🩷 [must convert from string to a number]
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  // if (id > tours.length) {
  if (!tour) {
    return res.status(500).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};

const updateTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(500).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

const deleteTour = (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(500).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }

  // 204 for delete so item no longer exist
  res.status(204).json({
    status: 'success',
    data: null, // no content
  });
};

app.get('/api/v1/tours', getAllTours);
app.post('/api/v1/tours', createTour);
app.get('/api/v1/tours/:id', getTour);
app.patch('/api/v1/tours/:id', updateTour);
app.delete('/api/v1/tours/:id', deleteTour);

// define the base route just once
app.route('/api/v1/tours').get(getAllTours).post(createTour);

// .route also is a middleware but for a specific route
app
  .route('/api/v1/tours/:id')
  .get(getTour)
  .patch(updateTour)
  .delete(deleteTour);

// running the server //
// to start our server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
