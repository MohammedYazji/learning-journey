'use strict';

///////////////////////////////////////
// Scoping in Practice //
/*
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
*/
///////////////////////////////////////
// Hoisting and TDZ Practice //

// VARIABLES

console.log(me); // var hoisted as undefined

// not hoisted [Can't Access them before initialization]
// Still in the TDZ
// console.log(job);
// console.log(year);

var me = 'mohammed';
let job = 'Student';
const year = 2003;

// FUNCTIONS

console.log(addDecl(2, 3)); // function declaration hoisted [We can access it before declaration process]

// but function expression, arrow function not hoisted [Can't Access them before initialization]
// if we declare them using var so => will shown that is not a function because will hoisted as undefined [undefined(2, 3)]
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

////////
// EXAMPLE

// right we can access function declaration before initialization, but the problem that when numProducts hoisted because we use var => so will hoisted as undefined so we always will call the function
// DON'T USE VAR, AND ALWAYS CALL FUNCTIONS AFTER DECLARE THEM ❌
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All Products Deleted!');
}

////
var x = 1;
let y = 2;
const z = 3;

// var will add as window object property
console.log(x === window.x); // true
console.log(y === window.y); // false
console.log(z === window.z); // false
