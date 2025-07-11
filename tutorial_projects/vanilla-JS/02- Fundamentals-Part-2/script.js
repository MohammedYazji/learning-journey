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
/*
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
*/
///////////////////////////////////////
// Challenge #2 //
/*
Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.
2. And now let's use arrays! So create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before.
4. BONUS: Create an array 'total' containing the total values, so the bill + tip.

TEST DATA: 125, 555 and 44

HINT: Remember that an array needs a value in each position, and that value can actually be the returned value of a function! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array) 😉

GOOD LUCK 😀
*/
/*
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// using Arrow Function
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// TEST DATA
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

// bill + the tip for each bill
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/
///////////////////////////////////////
// Introduction to Object //
/*
const myArray = [
  "Mohammed",
  "Yazji",
  2025 - 2003,
  "Engineer",
  ["Ali", "Ahmad", "Abood"],
];

// key-value pairs inside curly brackets
// can include any data types such as the arrays
// this way to create an object called =>  object literal syntax, because literally we use { } to declare it
// and here the order doesn't matter
const myObj = {
  firstName: "Mohammed",
  lastName: "Yazji",
  age: 2025 - 2003,
  job: "Engineer",
  friends: ["Ali", "Ahmad", "Abood"],
};
*/
///////////////////////////////////////
// Dot vs. Bracket Notation //
/*
// order doesn't matter here we access the property value using the property [key] name itself
const myObj = {
  firstName: "Mohammed",
  lastName: "Yazji",
  age: 2025 - 2003,
  job: "Engineer",
  friends: ["Ali", "Ahmad", "Abood"],
};
console.log(myObj);

// 1. Dot Notation
console.log(myObj.lastName); // return the value of lastName Property: Yazji

// 2. Bracket Notation
// we use it usually if we need to pass the property name as expression after some operations [Dynamically]
console.log(myObj["lastName"]);
// like this
const nameKey = "Name";
console.log(myObj["first" + nameKey]);
console.log(myObj["last" + nameKey]);

// We can't do this with Dot Notation ❌
// console.log(myObj.'last' + nameKey)

///////
// Another example of Bracket Notation Usage
const interestedIn = prompt(
  "What do you want to know about Mohammed? Choose between firstName, lastName, age, job, and friends"
);

// if the property name exist in my Obj 👍
if (myObj[interestedIn]) {
  console.log(myObj[interestedIn]);
} else {
  // else if the property name doesn't exist in myObj as a key
  console.log(
    "Wrong request! Choose between firstName, lastName, age, job, and friends"
  );
}

// Also we can use These Notations to add a new property to my Object, either using Dot, or Bracket Notation
myObj.location = "Palestine";
myObj["linkedIn"] = "@mohammedyazji";
console.log(myObj);

// Challenge
// "Mohammed has 3 friends, and his best friend is called Ali"
console.log(
  `${myObj.firstName} has ${myObj.friends.length} friends, and his best friend is called ${myObj.friends[0]}`
);
*/
///////////////////////////////////////
// Object Methods //
/*
// because the functions is expressions, so we can create functions inside the object and assign them to the property, and these functions called 'methods'
const myObj = {
  firstName: "Mohammed",
  lastName: "Yazji",
  birthYear: 2003,
  job: "Student",
  friends: ["Ali", "Ahmad", "Abood"],
  hasDriversLicense: false,

  // object method [We can't use Function Declaration]
  // 1. Accept an argument When call it
  // calcAge: function (birthYear) {
  //   return 2025 - birthYear;
  // },

  // 2. Or just use the object properties, such as birthYear [DRY]
  // and we access the object property inside it's method using this keyword
  // this point into the object itself so => [this is myObj]
  // calcAge: function () {
  //   return 2025 - this.birthYear;
  // },

  // 3. Also we can save the result as a new object property
  calcAge: function () {
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  // Challenge
  // Mohammed is a 22-year old Student.
  getSummary: function () {
    return `${this.firstName} is a ${this.age}-year old ${this.job} and he has${
      this.hasDriversLicense ? "" : "n't"
    } a driver's license.`;
  },
};

// Access the Object Method using Dot, Bracket Notation
console.log(myObj.calcAge());
console.log(myObj["calcAge"]());

// to use the new property without recalculate the age each time
console.log(myObj.age);

console.log(myObj.getSummary());
*/
///////////////////////////////////////
// OChallenge #3 //
/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/
/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.bmi > john.bmi)
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}).`
  );
else if (john.bmi > mark.bmi)
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi}).`
  );
*/
///////////////////////////////////////
// Iteration: The for Loop //
/*
// instead of log this message 10 times
console.log("Lifting weights repetition 1 🏋️");
console.log("Lifting weights repetition 2 🏋️");
console.log("Lifting weights repetition 3.. 🏋️");

// we just use for loop to do it
// The loop will keep running until rep reach the 10
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️`);
  }
*/
///////////////////////////////////////
// Looping Arrays, Breaking and Continuing //

const myArray = [
  "Mohammed",
  "Yazji",
  2025 - 2003,
  "Student",
  ["Ali", "Ahmad", "Abood"],
];

const types = [];

for (let i = 0; i < myArray.length; i++) {
  // Read values from my Array
  console.log(myArray[i], typeof myArray[i]);

  // Then create a new array with these values types
  types.push(typeof myArray[i]);
}
console.log(types);

//////////
// make a new array based on another one
const years = [1991, 2006, 2003, 2010];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}
console.log(ages);

///////////
// continue and break

// 1. Continue [Jump / Ignore]
console.log("==== ONLY STRINGS ====");
for (let i = 0; i < myArray.length; i++) {
  // if the item type isn't string so ignore it and don't print it
  if (typeof myArray[i] !== "string") continue;

  // else print it
  console.log(myArray[i], typeof myArray[i]);
}

// 2. Break [Stop the loop]
console.log("==== BREAK WITH NUMBER ====");
for (let i = 0; i < myArray.length; i++) {
  // if we reach a number then break the loop and exit it
  if (typeof myArray[i] === "number") break;

  // else if we don't reach a number keep printing the items
  console.log(myArray[i], typeof myArray[i]);
}
