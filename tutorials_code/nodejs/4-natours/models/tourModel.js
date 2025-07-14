const mongoose = require('mongoose');

// creating a schema for tours
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
    trim: true,
  },
  duration: {
    type: Number,
    required: [true, 'A tour must have a duration'],
  },
  maxGroupSize: {
    type: Number,
    required: [true, 'A tour must have a group size'],
  },
  difficulty: {
    type: String,
    required: [true, 'A tour must have a difficulty'],
  },
  ratingsAverage: {
    type: Number,
    default: 4.5,
  },
  ratingsQuantity: {
    type: Number,
    default: 0,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  priceDiscount: Number,
  summary: {
    type: String,
    required: [true, 'A tour must have a summary'],
    trim: true, // trim the string and remove white space at beginning and end
  },
  description: {
    type: String,
    trim: true,
  },
  imageCover: {
    type: String,
    required: [true, 'A tour must have a cover image'],
  },
  images: [String], // specify array of Strings
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false, // if we dont to send it to the client like select(-createdAt)
  },
  startDates: [Date], // specify array of Dates
  // "2021-03-21" mongo will parse it as a date
});

// creating a model from this schema
const Tour = mongoose.model('Tour', tourSchema);

// export it to use out (for example in tourController)
module.exports = Tour;
