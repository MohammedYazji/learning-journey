const Tour = require('./../models/tourModel');

exports.getAllTours = (req, res) => {
  console.log(req.requestTime);
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    //   results: tours.length,
    //   data: { tours },
  });
};
exports.createTour = async (req, res) => {
  try {
    // 1. First Way
    // const newTour = new Tour({pass the new tour data here});
    // newTour.save();

    // 2. Another Way (create it and save it immediately)
    // also return a promise
    const newTour = await Tour.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        tour: newTour,
      },
    });
  } catch (err) {
    // bad request
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!',
    });
  }
};
exports.getTour = (req, res) => {
  // console.log(req.params);
  // type coercion 🩷 [must convert from string to a number]
  const id = req.params.id * 1;

  // const tour = tours.find((el) => el.id === id);

  // res.status(200).json({
  //   status: 'success',
  //   data: {
  //     tour,
  //   },
  // });
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
