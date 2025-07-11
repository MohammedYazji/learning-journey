# 🔁 Iteration in JavaScript (for, While Loops)

## 📑 Table of Contents

- [The `for` Loop Explained](#the-for-loop-explained)
- [Reading Array Elements by Looping](#reading-array-elements-by-looping)
- [Creating a New Array Based on an Existing Array](#creating-a-new-array-based-on-an-existing-array)
- [Continue and Break in Loops](#continue-and-break-in-loops)
- [Looping Backward (Reverse Looping)](#looping-backward-reverse-looping)
- [Nested Loops](#nested-loops)
- [The `while` Loop in JavaScript](#the-while-loop-in-javascript)
- [The `do-while` Loop](#the-do-while-loop)
- [Types of While Loops](#types-of-while-loops)
  - [Counter-Controlled](#1-counter-controlled-while-loop)
  - [Sentinel-Controlled](#2-sentinel-controlled-while-loop)
  - [Flag-Controlled](#3-flag-controlled-while-loop)
- [Conclusion and Usage Tips](#conclusion-and-usage-tips)

---

## The `for` Loop Explained

### Overview

The `for` loop helps avoid repeating code manually by following the **Don't Repeat Yourself (DRY)** principle.

### Structure

```js
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting repetition ${rep}`);
}
```

- **Initialization:** `let rep = 1`
- **Condition:** `rep <= 10`
- **Update:** `rep++`

---

## Reading Array Elements by Looping

```js
const mohammedArray = [
  "Mohammed",
  "Yazji",
  2025 - 2003,
  "Student",
  ["Ali", "Ahmad", "Mohammed", "Alaa"],
];

for (let i = 0; i < mohammedArray.length; i++) {
  console.log(mohammedArray[i]);
}
```

---

## Creating a New Array Based on an Existing Array

```js
const types = [];

for (let i = 0; i < mohammedArray.length; i++) {
  console.log(mohammedArray[i], typeof mohammedArray[i]);
  types.push(typeof mohammedArray[i]);
}
```

### Calculating Ages from Birth Years

```js
const years = [1991, 2002, 2007, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}
console.log(ages);
```

---

## Continue and Break in Loops

```js
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < mohammedArray.length; i++) {
  if (typeof mohammedArray[i] !== "string") continue;
  console.log(mohammedArray[i], typeof mohammedArray[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < mohammedArray.length; i++) {
  if (typeof mohammedArray[i] === "number") break;
  console.log(mohammedArray[i], typeof mohammedArray[i]);
}
```

---

## Looping Backward (Reverse Looping)

```js
for (let i = mohammedArray.length - 1; i >= 0; i--) {
  console.log(mohammedArray[i]);
}
```

---

## Nested Loops

```js
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-------- Starting exercise ${exercise}`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
  }
}
```

---

## The `while` Loop in JavaScript

```js
let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}
```

### Example: Dice Simulation

```js
let dice;
while (dice !== 6) {
  dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`You rolled a ${dice}`);
}
```

---

## The `do-while` Loop

```js
let i = 0;
do {
  console.log("This runs at least once!");
  i++;
} while (i < 5);
```

### When to Use It

Great for displaying menus or options before checking a condition.

---

## Types of While Loops

### 1. Counter-Controlled While Loop

```js
let counter = 0;
while (counter < 5) {
  console.log("Counter:", counter);
  counter++;
}
```

---

### 2. Sentinel-Controlled While Loop

```js
let userInput;
while (userInput !== "stop") {
  userInput = prompt("Enter something (type 'stop' to quit): ");
  console.log("You entered:", userInput);
}
```

---

### 3. Flag-Controlled While Loop

```js
let isRunning = true;
while (isRunning) {
  let userInput = prompt("Enter something ('exit' to stop): ");
  if (userInput === "exit") {
    isRunning = false;
  }
}
```

---

## Conclusion and Usage Tips

- ✅ Use `for` loops when the number of iterations is known.
- 🔁 Use `while` loops when you don’t know how many times to loop.
- 🧠 Use `continue` to skip iterations, and `break` to stop loops early.
