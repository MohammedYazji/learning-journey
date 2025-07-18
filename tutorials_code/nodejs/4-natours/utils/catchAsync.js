// so instead of using try catch in multiple places
// so we make a function that wrap my functions and catch the error from them and send it to the next middleware which is the global error handler
module.exports = (fn) => {
  return (req, res, next) => {
    // fn is async function so its return a promise
    // so we catch the error and pass it to the next [error handler middleware]
    fn(req, res, next).catch(next);
  };
};
