const fs = require('fs');
const superagent = require('superagent');

// build a promises
const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      // the result of the promise

      // the error will access from catch method
      if (err) reject('I could not find that file 🥲');
      // as argument in then method [success]
      //   we can call it anything in then callback argument [maybe result]
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('Could not write file 🥲');
      resolve('success');
    });
  });
};

// chaining functions return promises
readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed: ${data}`);

    // get returns a promise
    // so we can use then catch in all this function call
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);

    return writeFilePro(`dog-img.txt`, res.body.message);
  })
  .then(() => {
    console.log('Random dog image saved to file!');
  })
  .catch((err) => console.log(err));
