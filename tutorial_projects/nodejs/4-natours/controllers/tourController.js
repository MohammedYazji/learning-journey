const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// put all these methods in exports object
exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    data: { tours },
  });
};
exports.createTour = (req, res) => {
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
exports.getTour = (req, res) => {
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
exports.updateTour = (req, res) => {
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
exports.deleteTour = (req, res) => {
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
