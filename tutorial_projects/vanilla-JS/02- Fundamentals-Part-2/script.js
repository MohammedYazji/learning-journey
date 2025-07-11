"use strict";

///////////////////////////////////////
// Activating Strict Mode //
/*
// to avoid pugs in our code

let hasDriversLicense = false;
const passTest = true;

// for example if i write the variable name in wrong way, will warning me and throw an error
// if (passTest) hasDrivrsLicense = true; //  referenceError: the variable is not defined

// also if i defined reserved names ❌
// const interface = "Audio"; // SyntaxError: Unexpected strict mode reserved word
// const if = 534; // SyntaxError: Unexpected token 'if'
*/
///////////////////////////////////////
// Functions //
/*
// piece of code we can reuse it over and over again
// declaring function [DRY]
function logger() {
  // block of instructions
  console.log("My name is Mohammed");
}

// Calling / Running / Invoking function
logger();
logger();
logger();

// we can pass data to the function, or return data from it
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// number also is a built-in function, console.log also, and more...
const num = Number("15");
*/
///////////////////////////////////////
// Function Declarations vs. Expressions //
/*
// Function declaration

// we can access the function declaration before initialization [Hoisting]
const age1 = calcAge1(2003);

function calcAge1(birthYear) {
  return 2025 - birthYear;
}

// Function expression
// [we assign the function as a value to the variable calcAge2] => [expressions produce value]
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};
const age2 = calcAge2(2003);

console.log(age1, age2);
*/
///////////////////////////////////////
// Arrow functions //
/*
// function expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

// this also is a function expression so we can assign it to a variable
// without curly brackets because just return one line
const calcAge3 = (birthYear) => 2025 - birthYear;
const age3 = calcAge3(2003);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2003, "Mohammed"));
console.log(yearsUntilRetirement(2010, "Yosif"));
*/
///////////////////////////////////////
// Functions Calling Other Functions //
/*
// 3. then call this function and return to the previous one
function cutFruitPieces(fruit) {
  return fruit * 4;
}

// 2. call this function
function fruitProcessor(apples, oranges) {
  // calling cutFruitPieces here
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
  return juice;
}

// 1. Start from here
console.log(fruitProcessor(2, 3));
*/
///////////////////////////////////////
// Reviewing Functions //

const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  // make multiple functions to make DRY
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired 🎉`);
    return -1; // return is immediately stop and exit the function [Its a little bit like break statement]
    // so anything after return will ignore💥
  }
};

console.log(yearsUntilRetirement(2003, "Mohammed"));
console.log(yearsUntilRetirement(1950, "Ahmad"));
