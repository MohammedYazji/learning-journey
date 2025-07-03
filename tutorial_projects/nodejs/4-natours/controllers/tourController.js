const fs = require('fs');

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
);

// make param middleware function
exports.checkID = (req, res, next, val) => {
  if (val > tours.length) {
    // must return to not send multiple response
    // so if I make request in tours routes and have id param, so if the id invalid => not run next() and implement the other controllers and send another response
    // for example I make request to getTour so if the id invalid so just send this response and not run next() to run the getTour controller function and send another one
    // multiple responses ❌
    return res.status(500).json({
      status: 'fail',
      message: 'Invalid ID',
    });
  }
  // will not run 👍
  next();
};

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

  res.status(200).json({
    status: 'success',
    data: {
      tour,
    },
  });
};
exports.updateTour = (req, res) => {
  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};
exports.deleteTour = (req, res) => {
  // 204 for delete so item no longer exist
  res.status(204).json({
    status: 'success',
    data: null, // no content
  });
};
