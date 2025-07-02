const fs = require('fs');
const express = require('express');
const { json } = require('stream/consumers');

// express is function so when call it will add many methods to app
const app = express();

// read it sync because we need the data before continue the app
// top level code just execute once when the app run
// we use JSON.parse to convert json to normal JS
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
);

app.get('/api/v1/tours', (req, res) => {
  res.status(200).json({
    status: 'success',
    results: tours.length,
    data: { tours },
  });
});

// running the server //
// to start our server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
