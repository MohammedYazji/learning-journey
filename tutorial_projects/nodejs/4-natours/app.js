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

// running the server //
// to start our server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
