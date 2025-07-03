const app = require('./app');

// db config, error handling , environment variable all will be here
const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
