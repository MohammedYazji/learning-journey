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
/*
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
*/
////////////////////////////////////
// LET, CONST, VAR //
/*
// Best Practice to Use Const always, if you don't need to change the value after this
// Just use let when you sure that will change in the future

// Can Change it Later
let age = 21;
age = 22;

// Can't Change it later
const birthYear = 2003;
// birthYear = 2004; // Type Error

// Also can not let it empty when declare
// const job // Syntax Error

// DON't USE IT ❌
var job = "Programmer";
job = "Dentist";

// also can declare without Keyword ❌
// lastName = "Yazji";
// console.log(lastName);
*/
////////////////////////////////////
// Basic Operators //
/*
// Math operators
const now = 2025;
const mohAge = now - 2003;
const yosifAge = now - 2010;

console.log(mohAge, yosifAge);

console.log(mohAge * 2);
console.log(mohAge / 10);
console.log(2 ** 3); // means 2 to the power of 3 => 2 * 2 * 2

const firstName = "Mohammed";
const lastName = "Yazji";
// we can use + operator to concat strings
console.log(firstName + " " + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100

let y = 10;
console.log(y++); // print y before increment one => 10
// Now Y = 11
console.log(--y); // print y after decrement one => 10
y--;

// Comparison operators
console.log(mohAge > yosifAge); // >, <, >=, <=
console.log(yosifAge >= 18);

const isFullAge = mohAge >= 18;
*/
////////////////////////////////////
// Operator Precedence //
/*
const now = 2025;
const mohAge = now - 2003;
const yosifAge = now - 2010;

// so here the precedence of - is stronger than >
console.log(now - 2003 > now - 2010);

// execute from left to right
let x, y;
x = y = 25 - 10 - 5; // x = y = (25 - 10) - 5 => 15 - 5 = 10 => y = 10 => x = y = 10
console.log(x, y);

// here parentheses has the highest priority
const averageAge = (mohAge + yosifAge) / 2;
*/
////////////////////////////////////
// CHALLENGE #1 //
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

// TEST DATA 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// TEST DATA 2
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
