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

const getDogPic = async () => {
  try {
    // we can await the promise until finish execution
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );
    console.log(res.body.message);

    await writeFilePro(`dog-img.txt`, res.body.message);
    console.log('Random dog image saved to file!');
  } catch (err) {
    console.log(err);
    // we must throw error so this will return rejected after the execution done if there is error
    throw err;
  }
  return '2: READY 🐶';
};
/////////////
// runs in the background because takes some times
// and returns a promise so x now is promise because the function is still running
// x is not ready yet while the function running
/*
const x = getDogPic();
console.log(x)
*/
// so we need to await this promise until finish execution,
// 1: by then,
/*
console.log('1: will get dog pics!');
getDogPic()
  .then((x) => {
    console.log(x);
    console.log('3: Done getting dog pics!');
  })
  .catch((err) => console.log('Error 💥'));
  */

// 2: or by async/await [best solution]

// we can make it as expression without call it later😅
(async () => {
  try {
    console.log('1: will get dog pics!');
    const x = await getDogPic();
    console.log(x);
    console.log('3: Done getting dog pics!');
  } catch (err) {
    console.log('Error 💥');
  }
})();
