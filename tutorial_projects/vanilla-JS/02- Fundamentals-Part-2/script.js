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
