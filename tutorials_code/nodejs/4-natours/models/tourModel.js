const mongoose = require('mongoose');
const slugify = require('slugify');

// creating a schema for tours
const tourSchema = new mongoose.Schema(
  {
    // First object for Schema Definition
    name: {
      type: String,
      required: [true, 'A tour must have a name'],
      unique: true,
      trim: true,
    },
    slug: String,
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
      select: false, // if we dont to send it to the client like select(-createdAt-)
    },
    startDates: [Date], // specify array of Dates
    // "2021-03-21" mongo will parse it as a date
  },
  {
    // second object for Schema Options

    // so here we tell it each time we send the data as json as response so send the virtual with it
    toJSON: { virtuals: true },
    // also if we send it as an object display it too
    toObject: { virtuals: true },
  },
);

// here I use regular function because it has his own this keyword [so this here will point into the current document], because we call it using virtual
// virtual will not save in the DB but just will send as response as json
// we can't use virtuals in queries
tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

///////
// DOCUMENT MIDDLEWARE
// define a middleware on the tour schema that will execute before certain event in this case[ the save event .save() and .create()]
tourSchema.pre('save', function (next) {
  // will print the document is being process
  // console.log(this);
  // add new property for this called slug and put inside it the name and store the slug with the document in the DB
  this.slug = slugify(this.name, { lower: true });
  next();
});

// tourSchema.pre('save', function (next) {
//   console.log('Will save document...');
//   next();
// });

// middleware after the process of saving
// receive doc argument which the document which we have saved
// tourSchema.post('save', function (doc, next) {
//   console.log(doc);
//   next(); // right there's no next after this middleware in thestack but it's best practice to put it
// });
///////

// creating a model from this schema
const Tour = mongoose.model('Tour', tourSchema);

// export it to use out (for example in tourController)
module.exports = Tour;
