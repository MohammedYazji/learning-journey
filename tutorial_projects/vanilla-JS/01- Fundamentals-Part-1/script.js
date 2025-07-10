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
/*
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
*/
////////////////////////////////////
// STRINGS AND TEMPLATE LITERALS //
/*
const firstName = "Mohammed";
const job = "student";
const birthYear = 2003;
const year = 2025;

// Before ES6
const mohammed =
"I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
console.log(mohammed);

// After ES6
// we can add any expression inside the curly braces
const mohammedNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(mohammedNew);

// can also make multiple lines easily
// Before ES6
console.log(
    "String with \n\
    multiple \n\
    lines"
    );
    // After ES6
    console.log(
        `String with
        multiple
        lines`
        );
        */

////////////////////////////////////
// Taking Decisions if  else Statements //
/*
const age = 19;
const isOldEnough = age >= 18;

// Control the flow based on boolean value isOldEnough
if (isOldEnough) console.log(`Sarah can start driving license 🚗`);
else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear = 2003;
let century;

if (birthYear <= 2000) century = 20;
else century = 21;

console.log(century);
*/
////////////////////////////////////
// Challenge #2 //
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/
/*
// TEST 1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// TEST 2
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Marks's (${BMIMark})!`);
}
*/
////////////////////////////////////
// Type Conversion And Coercion //
/*
// 1. type conversion [Manually convert from type to another one] [Explicitly]

const inputYear = "2003";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Mohammed")); // NAN Can't convert to number
console.log(typeof NaN); // Number 😅

// from number to String
console.log(String(23), 23);

// 2. type coercion [JS automatically convert types behind the scene] [Implicitly]

// from number to string +
console.log("I am " + 22 + " years old");
// but the other operators from string to numbers
console.log("23" - "10" - 3); // 23 - 10 - 3 = 10
console.log("23" / "2"); // 23 / 2 = 11.5

// Example:
let n = "1" + 1; // '11'
n = n - 1; // 10
console.log(n);

console.log(2 + 3 + 4 + "5"); // 9 + '5' = '95'
console.log("10" - "4" - "3" - 2 + "5"); // 10 - 4 - 3 - 2 = 1 + '5' = '15'
*/
////////////////////////////////////
// Truthy and Falsy Values //
/*
// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("mohammed")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

// when use these values as a condition in the if else, JS will make type coercion for them automatically

const money = 100;
// type coercion
if (money) console.log("Don't spend it all ;)");
else console.log("You should get a job!");

let height;
if (height) console.log("YAY! Height is defined");
console.log("Height is UNDEFINED");
*/
////////////////////////////////////
// Equality Operators == Vs. === //
/*
const age = "18";
// Compare both type and value
// Best Practice 👍
if (age === 18) console.log("You just became an adult :D (strict)");

// Compare just the value, because it makes type coercion automatically. Don't use it ❌
if (age == 18) console.log("You just became an adult :D (loose)");

///////

// prompt receive a string
const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite); // string

// need to make type conversion before use strict equality
if (favorite === 15) {
  // 15 === '15' -> FALSE
  console.log("Cool! 15 is an amzaing number!");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 15 or 7 or 9");
}

if (favorite !== 15) console.log("Why not 15?");
*/
////////////////////////////////////
// Logical Operators //
/*
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = false;

console.log(hasDriversLicense && hasGoodVision); // the two parts must be true
console.log(hasDriversLicense || hasGoodVision); // just one enough to be true
console.log(!hasDriversLicense); // invert the value

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!");
    } else {
  console.log("Someone else should drive...");
}
*/
////////////////////////////////////
// Challenge #3 //
/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/
/*
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  (scoreDolphins >= 100) & (scoreKoalas >= 100)
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy");
}
*/
////////////////////////////////////
// The switch Statement //

const day = "monday";

// perfect if we have multiple options for the same variable
// Don't Forget break Statement
switch (day) {
  case "monday": // if (day === 'monday')
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday": // else if (day === 'tuesday')
    console.log("Prepare theory videos");
    break;
  case "wednesday": // else if (day === 'wednesday' || day === 'thursday' )
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default: // else
    // here we will not need the break because its the last one
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend :D");
} else {
  console.log("Not a valid day!");
}
