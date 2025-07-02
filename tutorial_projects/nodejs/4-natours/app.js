const fs = require('fs');
const express = require('express');

// express is function so when call it will add many methods to app
const app = express();

// express.json is a middleware: function can modify the incoming request data
// we call it middleware because its between the req and the res
app.use(express.json());

// read it sync because we need the data before continue the app
// top level code just execute once when the app run
// we use JSON.parse to convert json to normal JS
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

// to get all tours
app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: { tours },
  });
});

// to create a new tour
app.post('/api/v1/tours', (req, res) => {
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
});

// get a tour
app.get('/api/v1/tours/:id', (req, res) => {
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
});

// PUT => update the entire object, while
// PATCH => update a property within the object
app.patch('/api/v1/tours/:id', (req, res) => {
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
});

// Delete a Tour
app.delete('/api/v1/tours/:id', (req, res) => {
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
});

// running the server //
// to start our server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
