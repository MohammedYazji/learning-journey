////////////////////////////////////
// LINKING a JAVASCRIPT FILE //
/*
let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");

console.log(40 + 10 - 12);
*/
////////////////////////////////////
// VALUES AND VARIABLES //
/*
console.log("Mohammed");

// Store the data inside a box then access it everywhere
// We Use CamelCase notation to Declare a variable in JS, while in Python we use snake_case
let firstName = "Mohammed";
console.log(firstName, firstName);

// Don't Do This?!?
// let 2years = 600 // Syntax Error
// let mohammed&yazji = 'Mohammed Yazji' // Syntax Error
// let new = 27 // Syntax Error [reserved Word]

// You Can Do This..
let $function = 27;

// To Declare a constant
const PI = 3.14;

// Use Meaningful names: 👍
let myFirstJob = "Programmer";
let myCurrentJob = "Dentist";
// Instead of this.. ❌
// let job1 = "Programmer";
// let job2 = "Dentist";
*/
////////////////////////////////////
// DATA TYPES //

let javascriptIsFun = true;
console.log(javascriptIsFun);

// We Use typeof or typeof() to know the type of this value
console.log("true =>", typeof true);
console.log(javascriptIsFun, " =>", typeof javascriptIsFun);
console.log("22 =>", typeof 22);
console.log("mohammed =>", typeof "Mohammed");

// JavaScript is Dynamic So we can change the data type of the variables if we declare them using let
javascriptIsFun = "Yes!"; // From boolean, to String
console.log(typeof javascriptIsFun);

// Also if we use let when declare the variable so we can keep it empty => undefined, then initialize it [make it a value]
let year;
console.log(year);
console.log(typeof year);

year = 2024;
console.log(typeof year);

// BUG IN JavaScript 🐛
console.log(typeof null); // Object 😅
