'use strict';

///////////////////////////////////////
// Scoping in Practice //

function calcAge(birthYear) {
  // local scope
  const age = 2025 - birthYear;

  function printAge() {
    // will did variable look-up to find the age and, first Name
    // we can access global variables everywhere, so here we can access firstName
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      // new block scope

      // Creating NEW variable with same name as outer scope's variable [separate from the variable in the outer scope [Just a New One]]
      const firstName = 'Ali';

      // Reassigning outer scope's variable [Mutate the original variable]
      output = 'NEW OUTPUT!';

      var millenial = true;
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    // console.log(str); // we can do this, because let, const is a block scoped and we access it out of his if block scope

    // console.log(add(2, 3)); // also functions are block scope [In Strict Mode] as let, and const so we can access it just inside the if block where we declare it before, BUT when turn off the strict mode so will be a function scope like var👍

    console.log(millenial); // but var is a function scope so we can access it anywhere in the printAge function not just inside the if block scope

    console.log(output); // its mutate inside the inner scope
  }
  printAge();

  return age;
}

const firstName = 'Mohammed'; // global variable [Top-level-code can access it from anywhere you want]

calcAge(1992);

// console.log(age); // we can't access out of his scope [calcAge function]

// printAge() // we cant access this function and call it here because it declared inside the calcAge scope so we just can call it there
