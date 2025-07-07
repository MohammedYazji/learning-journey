const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

// we use config to declare where the config file that include all variables is
// so this will read the variable from the file, then save them into nodejs environment variables
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful!');
  });

// creating a schema for tours
const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
});

// creating a model from this schema
const Tour = mongoose.model('Tour', tourSchema);

// creating a new document from Tour model
const testTour = new Tour({
  name: 'The Park Camper',
  price: 997,
});
// save the document to the DB (return a promise)
testTour
  .save()
  .then((doc) => console.log(doc))
  .catch((err) => console.log('ERROR 💥:', err));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
