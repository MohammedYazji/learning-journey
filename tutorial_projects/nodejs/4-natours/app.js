const express = require('express');

// express is function so when call it will add many methods to app
const app = express();

// routing //
// when someone hit that url with the base /
// implement the callback functions
// get => http method for request
app.get('/', (req, res) => {
  // send sending a string as response
  //   res.status(200).send('Hello from the server side!');
  res
    .status(200)
    .json({ message: 'Hello from the server side!', app: 'Natours' });
});

// running the server //
// to start our server
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
