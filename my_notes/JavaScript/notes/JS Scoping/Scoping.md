# **JavaScript Scoping**

## 📑 Table of Contents

1. [🔹 Introduction to Scoping](#-introduction-to-scoping)
2. [🔹 Types of Scope in JavaScript](#-types-of-scope-in-javascript)

   - [Global Scope](#1-global-scope)
   - [Function Scope](#2-function-scope)
   - [Block Scope (ES6+)](#3-block-scope-es6)

3. [🔹 Scope Chain & Variable Lookup](#-scope-chain--variable-lookup)
4. [🔹 Scope Comparison Table: `let`, `const`, `var`](#-scope-comparison-table-let-const-var)
5. [🔹 Shadowing & Reassigning vs Redeclaring](#-shadowing--reassigning-vs-redeclaring)
6. [🔹 Scope Chain vs. Call Stack [IMPORTANT]](#-scope-chain-vs-call-stack-important)
7. [✅ Summary](#-summary)

---

## 🔹 Introduction to Scoping

- Scoping defines **where variables and functions are accessible** within the code.
- JavaScript uses **lexical scoping**: variable access is based on where it's written in the source code.

```js
function outerFunction() {
  const outerVar = "I am outside!";
  function innerFunction() {
    console.log(outerVar); // Accessible due to lexical scoping
  }
  innerFunction();
}
outerFunction();
```

---

## 🔹 Types of Scope in JavaScript

### 1. **Global Scope**

- Declared outside of any function/block.
- Part of top-level code and creates the **global execution context**.
- Accessible from anywhere.

```js
const globalVar = "I am global";
function displayGlobal() {
  console.log(globalVar);
}
displayGlobal();
```

---

### 2. **Function Scope**

- Variables declared inside a function.
- Not accessible from outside.

```js
function myFunction() {
  const localVar = "I am local";
  console.log(localVar);
}
console.log(localVar); // ❌ Error
```

#### Functions in Strict Mode

```js
"use strict";
if (true) {
  function sayHi() {
    console.log("Hi");
  }
}
sayHi(); // ❌ Error in strict mode
```

---

### 3. **Block Scope (ES6+)**

- `let` & `const` → Block Scoped ✅
- `var` → Function Scoped ❌

```js
function functionScope() {
  if (true) {
    let blockVar = "Block scoped";
    var functionScoped = "Not block scoped";
  }
  console.log(blockVar); // ❌ Error
  console.log(functionScoped); // ✅ Accessible
}
```

---

## 🔹 Scope Chain & Variable Lookup

- If a variable is not found in the current scope, JS looks upward through parent scopes.
- Stops at the **global scope**.

```js
const firstName = "Ali";

function calcAge(birthYear) {
  const age = 2025 - birthYear;
  function printAge() {
    console.log(`${firstName}, you are ${age}`);
  }
  printAge();
}
calcAge(2000);
```

### Parent and Child Scopes

- Parent scope variables are accessible in child scopes.
- Siblings cannot access each other’s scope.

📌 **Key Notes:**

- Scope chain is **one-directional (upward)**.
- Variables are **referenced**, not copied.
- If not found, you get a **Reference Error**.

---

## 🔹 Scope Comparison Table: `let`, `const`, `var`

| Feature      | `var`    | `let` / `const`               |
| ------------ | -------- | ----------------------------- |
| Scope        | Function | Block                         |
| Reassignable | ✅ Yes   | `let`: ✅ Yes, `const`: ❌ No |
| Redeclarable | ✅ Yes   | ❌ No                         |

---

## 🔹 Shadowing & Reassigning vs Redeclaring

### Variable Shadowing

Occurs when a new variable in a nested scope has the **same name** as a parent variable.

```js
const firstName = "Ali";

{
  const firstName = "Omar"; // Shadows outer one
  console.log(firstName); // Omar
}
```

---

### Reassigning vs Redeclaring

```js
let output = "Old Output";

{
  output = "Updated Output"; // Reassigns outer variable
  let output = "New Output"; // Declares new (shadows outer)
  console.log(output); // New Output
}
console.log(output); // Updated Output 😲
```

---

## 🔹 Scope Chain vs. Call Stack [IMPORTANT]

| Concept         | Description                                                    |
| --------------- | -------------------------------------------------------------- |
| **Call Stack**  | Tracks the **order of function calls**                         |
| **Scope Chain** | Tracks **variable lookup direction** (lexical structure based) |

---

## ✅ Summary

- JavaScript uses **lexical scoping**.
- Three scopes: **Global**, **Function**, and **Block**.
- Scope chain allows **parent scope variable access**.
- `var`, `let`, and `const` behave differently by scope.
- Avoid unnecessary **redeclaring or shadowing**.
- Understand the **difference** between scope chain vs call stack.
