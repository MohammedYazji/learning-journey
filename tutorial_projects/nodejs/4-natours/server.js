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

// this return a promise
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful!');
  });

// to see all the environment variables
// console.log(process.env);
// to know in which environment we use now
// console.log(app.get('env'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
