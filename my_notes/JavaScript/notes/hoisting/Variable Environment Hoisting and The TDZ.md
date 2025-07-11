# Variable Environment Hoisting and The TDZ

## 📑 **Table of Contents**

1. [🔹 What is Hoisting?](#-what-is-hoisting)
2. [🔹 Key Notes](#-key-notes)

   - [Execution Context](#execution-context)
   - [Types of Declarations and Hoisting Behavior](#types-of-declarations-and-hoisting-behavior)

3. [🔹 Additional Details](#-additional-details)

   - [1. Strict Mode](#1-strict-mode)
   - [2. Temporal Dead Zone (TDZ)](#2-temporal-dead-zone-tdz)
   - [3. Function Expressions and Arrow Functions](#3-function-expressions-and-arrow-functions)

4. [🔹 Summary of Hoisting Rules](#-summary-of-hoisting-rules)
5. [🔹 What is the Temporal Dead Zone (TDZ)](#-what-is-the-temporal-dead-zone-tdz)
6. [🔹 Details of Errors in Code](#-details-of-errors-in-code)
7. [🔹 Why TDZ Exists](#-why-tdz-exists)
8. [🔹 TDZ vs Hoisting](#-tdz-vs-hoisting)
9. [🔹 Why Hoisting?](#-why-hoisting)
10. [🔹 Why TDZ?](#-why-tdz)
11. [🔹 Best Practices](#-best-practices)

---

## 🔹 What is Hoisting?

- **Hoisting** is JavaScript's behavior of moving (or "lifting") variable and function declarations to the top of their scope during the execution phase.
- This means that some variables and functions can be accessed before their actual declaration in the code.

## 🔹 Key Notes

### Execution Context

- **Execution context** includes:
  - The **variable environment** (where variables and functions are stored).
  - The **scope chain** (links to outer scopes).
  - The **`this` keyword** (context of execution).
- Before executing the code, the JavaScript engine scans for declarations and assigns them to the **variable environment object**.

### Types of Declarations and Hoisting Behavior

| Declaration Type                  | Hoisted?   | Initial Value                   | Scope                  | Extra Notes                                            |
| --------------------------------- | ---------- | ------------------------------- | ---------------------- | ------------------------------------------------------ |
| **Function Declarations**         | ✅ YES     | The actual function             | Block (in strict mode) | Can be used before their declaration                   |
| **`var` Variables**               | ✅ YES     | `undefined`                     | Function               | Can lead to bugs if misused                            |
| **`let` and `const` Variables**   | ❌ NO      | `<uninitialized>` (TDZ)         | Block                  | Accessing before declaration causes a `ReferenceError` |
| **Function Expressions / Arrows** | ✅ Depends | Depends on `var` or `let/const` | Depends                | Follows behavior of the keyword used                   |

## 🔹 Additional Details

### 1. Strict Mode

- In **strict mode**, function declarations inside blocks are block-scoped.
- Without strict mode, they may be hoisted to the enclosing function scope.

### 2. Temporal Dead Zone (TDZ)

- `let` and `const` declarations exist in a **TDZ** from the start of the block until their declaration.
- Accessing them before declaration = `ReferenceError`.

### 3. Function Expressions and Arrow Functions

- If assigned to a `var`, they're hoisted as `undefined`.
- If assigned to `let` or `const`, they're in the TDZ.

## 🔹 Summary of Hoisting Rules

- **Functions**: Fully hoisted.
- **`var` Variables**: Hoisted but `undefined`.
- **`let` and `const`**: Hoisted but uninitialized (TDZ).
- **Function Expressions/Arrows**: Behave like their declaration type.

## 🔹 What is the Temporal Dead Zone (TDZ)

- The **TDZ** is the period between the start of a block's scope and the point where the variable is declared in the code.
- During this time, the variable exists in memory but is **uninitialized**, meaning you **cannot access it** before the declaration line is executed.

### **Code Example Breakdown:**

```js
const myName = "mohammed";

if (myName === "mohammed") {
  console.log(`mohammed is a ${job}`); // ❌ ReferenceError (TDZ)
  const age = 2037 - 1989;
  console.log(age); // ✅ 48
  const job = "stiudent";
  console.log(x); // ❌ ReferenceError (not declared at all)
}
```

## 🔹 Details of Errors in Code

1. **`Cannot access 'job' before initialization`:**
   - This error occurs because the variable `job` is declared using **`const`**, which is subject to the TDZ.
   - The code tries to access `job` before the line where it is declared, causing a **`ReferenceError`**.
2. **`ReferenceError: x is not defined`:**
   - This error is different from the first one.
   - In this case, `x` has **not been declared at all**, so JavaScript cannot find it in memory.

## 🔹 Why TDZ Exists

1. **To Prevent Bad Practices:**
   - Accessing variables before their declaration is poor coding practice. The TDZ helps developers catch such errors early.
2. **To Ensure Proper Functioning of `const`:**
   - Variables declared with `const` cannot be reassigned. The TDZ ensures they are only accessed after their declaration.

## 🔹 TDZ vs Hoisting

- Unlike `var`, they are not initialized during hoisting.
- This leaves them **uninitialized** in the TDZ until their declaration is encountered.
- Attempting to access them before declaration results in a **`ReferenceError`**.

## 🔹 Why Hoisting?

1. **To Enable Using Functions Before Declaration:**
   - Hoisting of functions makes code more flexible.
2. **Hoisting of `var` is a Side Effect:**
   - While functional, it can lead to bugs due to initialization with `undefined`.

## 🔹 Why TDZ?

- Makes it easier to **avoid and catch errors** related to accessing undeclared variables.
- Ensures `const` variables work as intended (no access before declaration).

## 🔹 Best Practices

- Always initialize variables before use.
- Avoid mixing variable declaration types (`var`, `let`, `const`) in the same block to maintain consistency.
- Developers should adhere to modern best practices (`let` and `const` over `var`) to write safer and more predictable JavaScript code.
