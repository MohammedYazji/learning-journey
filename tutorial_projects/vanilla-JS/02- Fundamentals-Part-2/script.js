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
/*
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
*/
///////////////////////////////////////
// Challenge #1 //
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/
/*
// Test 1
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);

// Test 2
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);

const calcAverage = (n1, n2, n3) => (n1 + n2 + n3) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆 (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team wins... ");
  }
};
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/
///////////////////////////////////////
// Introduction to Arrays //
/*
// instead of declare separate variable for each value
const friend1 = "Ali";
const friend2 = "Ahmad";
const friend3 = "Abood";

// declare a big container to store all these data
const friends = ["Ali", "Ahmad", "Abood"];
console.log(friends);

// Another way to declare an array
// Using Array Constructor
const years = new Array(1991, 2000, 2003, 2020);
console.log(years);

// array is a zero-based data-structure
console.log(friends[0]); // Ali
console.log(friends[friends.length - 1]); // access the last element // Abood

// we can mutate the elements values of the array
// either we use const, or let => because we don't change the pointer which point on the address but we mutate the original array in the head memory
friends[2] = "Mohammed";
console.log(friends);

// we can store different data types
const firstName = "Mohammed";
const mohammed = [firstName, "Yazji", 2025 - 2003, "Engineer", friends];
console.log(mohammed);
console.log(mohammed.length); // to get the array length

// Exercise:
const calcAge = function (birthYear) {
  return 2025 - birthYear;
};
const years2 = [1991, 2000, 2003, 2018, 2020];

const age1 = calcAge(years2[0]);
const age2 = calcAge(years2[1]);
const age3 = calcAge(years2[years2.length - 1]);
console.log(age1, age2, age3);

// any position in the array stores expression
const ages = [
  calcAge(years2[0]),
  calcAge(years2[1]),
  calcAge(years2[years2.length - 1]),
];
console.log(ages);
*/
///////////////////////////////////////
// Basic Array Operations (Methods) //

const friends = ["Ali", "Ahmad", "Abood"];

// Add elements, and return the new length
console.log(friends.push("Malek")); // to the end
console.log(friends.unshift("Mahmoud")); // at first

console.log(friends);

// Remove elements, then return the removed values
console.log(friends.pop()); // remove the last element and return it
console.log(friends.shift()); // remove the first, and return it

console.log(friends);

// indexOf: to know the index of a specific item
// return -1 if not exist
console.log(friends.indexOf("Ali"));
console.log(friends.indexOf("Abood"));
console.log(friends.indexOf("BlaBlaBla..."));

// includes: return boolean [true, false] value to check the element in the array
// check it using strict equality ===
friends.push("23");
console.log(friends.includes("Ahmad"));
console.log(friends.includes("Yosif"));
console.log(friends.includes(23)); // false 23 !== '23'

if (friends.includes("Ali")) {
  console.log("You have a friend called Ali");
}
