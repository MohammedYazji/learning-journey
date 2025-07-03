const dotenv = require('dotenv');
// we use config to declare where the config file that include all variables is
// so this will read the variable from the file, then save them into nodejs environment variables
dotenv.config({ path: './config.env' });

// must require it after set the config not before, so in app.js when i use environment variables will be declared before
const app = require('./app');

// to see all the environment variables
// console.log(process.env);
// to know in which environment we use now
// console.log(app.get('env'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
