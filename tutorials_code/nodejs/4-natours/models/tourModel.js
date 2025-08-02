const mongoose = require('mongoose');
const slugify = require('slugify');
// use a validator library
const validator = require('validator');
// const User = require('./userModel');

// creating a schema for tours
const tourSchema = new mongoose.Schema(
  {
    // First object for Schema Definition
    name: {
      type: String,
      // validator
      required: [true, 'A tour must have a name'],

      unique: true,
      trim: true,
      // validator
      maxlength: [40, 'A tour name must have less or equal than 40 characters'],
      // validator
      minlength: [10, 'A tour name must have more or equal than 10 characters'],
      // custom validator using validator library to check if the name only contains letters
      // validate: [validator.isAlpha, 'Tour name must only contain characters'],
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
      // validator
      enum: {
        values: ['easy', 'medium', 'difficult'],
        message: 'Difficulty is either: easy, medium, difficult',
      },
    },
    ratingsAverage: {
      type: Number,
      default: 4.5,
      // validators
      min: [1, 'Rating must be above 1.0'],
      max: [5, 'Rating must be bellow 5.0'],
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: [true, 'A tour must have a price'],
    },
    priceDiscount: {
      type: Number,
      // make a custom validator
      validate: {
        // will use regular function to access this => document property
        validator: function (val) {
          // we need the discount to be less than the price
          // this only points to current doc on NEw document creation [not in update]
          return val < this.price; // val is the priceDiscount
        },
        // we can access the val here [mongo feature]
        message: 'Discount price ({VALUE}) should be below regular price',
      },
    },
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
    secretTour: {
      type: Boolean,
      default: false,
    },
    startLocation: {
      type: { type: String, default: 'Point', enum: ['Point'] },
      coordinates: [Number],
      address: String,
      description: String,
    },
    locations: [
      // here locations will have another documents inside the array inside the tour document
      {
        type: { type: String, default: 'Point', enum: ['Point'] },
        coordinates: [Number],
        address: String,
        description: String,
        day: Number,
      },
    ],
    guides: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
  },
  {
    // second object for Schema Options

    // so here we tell it each time we send the data as json as response so send the virtual with it
    toJSON: { virtuals: true },
    // also if we send it as an object display it too
    toObject: { virtuals: true },
  },
);

// now we make another index in addition of id and sort this index 1 asc, -1 dec
// so now if i search query about price, so will not search on all documents just scan the documents have the price index
// same for ratingsAverage we use it a lot so make index for it so instead of scan the 9 doc, we just scan the doc which has this index
tourSchema.index({ price: 1, ratingsAverage: -1 });
tourSchema.index({ slug: 1 });

// here I use regular function because it has his own this keyword [so this here will point into the current document], because we call it using virtual
// virtual will not save in the DB but just will send as response as json
// we can't use virtuals in queries
tourSchema.virtual('durationWeeks').get(function () {
  return this.duration / 7;
});

// not will save to the DB just virtual populated
// so we need to populate the review data and display them
tourSchema.virtual('reviews', {
  ref: 'Review',
  foreignField: 'tour', // specific the name of property which link the review with tour
  localField: '_id', // this id what we link it there in the review model
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

// TWO WAYS TWO LINK COLLECTIONS
// 1. EMBEDDING [Not Recommended]
// tourSchema.pre('save', async function (next) {
//   // this here is the document itself

//   // so here is an array of promises because return a promise in each loop
//   const guidesPromises = this.guides.map(async (id) => await User.findById(id));

//   // convert array of promises to normal id's, then storee them back as guides not id's
//   this.guides = await Promise.all(guidesPromises);

//   next();
// });

///////
// QUERY MIDDLEWARE

// for example we need when using the queries later to make queries just for the not secret tours
// so if we use get all tours and use the api features and implement the next queries in the stack will not found the the secret tours there
tourSchema.pre(/^find/, function (next) {
  // tourSchema.pre('find', function (next) {
  this.find({ secretTour: { $ne: true } }); // this now is a query object

  this.start = Date.now();
  next();
});

// make middleware to replace the id of guides with the real data of them when send response from getTour, getAllTours
tourSchema.pre(/^find/, function (next) {
  // this is the query

  // Because we store the id in the DB as reference, so we use populate method on the find query to put the actual data of guides in the response when we get the tour
  // also we can except some values from the guide info by use the '-'
  this.populate({
    path: 'guides',
    select: '-__v -passwordChangedAt',
  });
  next();
});

// this will execute after we await the query and will put the returned documents in docs
tourSchema.post(/^find/, function (docs, next) {
  console.log(`Query took ${Date.now() - this.start} milliseconds`);
  // console.log(docs);
  next();
});

///////
// AGGREGATION MIDDLEWARE

// because we remove the secret tours from the queries so we need to remove it from aggregation stats also
// we dont need to implement that in each match stage in aggregation so we make it once here
tourSchema.pre('aggregation', function (next) {
  console.log(this.pipeline()); // here will point to the aggregation  obj
  // so we need to add another match stage to the pipeline array
  this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });
  next();
});
///////
// creating a model from this schema
const Tour = mongoose.model('Tour', tourSchema);

// export it to use out (for example in tourController)
module.exports = Tour;
