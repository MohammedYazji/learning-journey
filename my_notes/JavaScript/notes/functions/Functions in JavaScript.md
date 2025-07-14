# 🧠 Functions in JavaScript

## 📚 Table of Contents

- [Introduction to Functions](#-introduction-to-functions)
- [Functions with Parameters](#️-functions-with-parameters)
- [Simple Example](#-simple-example)
- [Reusability and Flexibility of Functions](#️-reusability-and-flexibility-of-functions)
- [Conclusion and Best Practices](#-conclusion-and-best-practices)
- [Function Declarations vs Expressions](#-function-declarations-vs-expressions)
  - [Function Declarations](#-function-declarations)
  - [Function Expressions](#-function-expressions-anonymous)
  - [Key Differences](#-key-differences)
- [Arrow Functions](#-arrow-functions)
  - [Complex Arrow Functions](#-complex-arrow-functions)
  - [Handling Multiple Parameters](#-handling-multiple-parameters)
- [Functions Calling Other Functions](#-functions-calling-other-functions)
- [Regular Functions vs. Arrow Functions](#-regular-functions-vs-arrow-functions)
- [Revision Function](#-revision-function)

---

## 🧩 Introduction to Functions

- Functions are fundamental building blocks in JavaScript.
- They allow for code reuse and help make the code more maintainable.
- **Syntax:**
  - Use the `function` keyword, a name, and a code block (function body) inside curly braces.

```js
function greet() {
  console.log("Hello!");
}
```

- **Invocation**: The process of using a function is called invoking, running, or calling the function.

```js
	greet(); /Hello!
```

---

## 🛠️ Functions with Parameters

- Functions can **receive inputs** via _parameters_ and **return data**.
- **Parameters**: Placeholders for input values.
- **Arguments**: The actual values passed when the function is called.
- **Return Value**: The function can return a value, which can be stored in a variable for further use.

```js
function add(a, b) {
  return a + b;
}

const result = add(3, 5); // 8
console.log(result);
```

---

## ✨ Simple Example

```js
function describeCountry(country, population, capital) {
  return `${country} has ${population} million people and its capital is ${capital}.`;
}

console.log(describeCountry("Norway", 5.3, "Oslo"));
// Norway has 5.3 million people and its capital is Oslo.
```

---

## ♻️ Reusability and Flexibility of Functions

- **Reusability**: The function can be reused with different arguments (e.g., 2 apples, 4 oranges).
- **Different types of functions**:
  - Some functions don’t return values or accept parameters.
  - Logging functions, for example, simply output data to the console but don’t return a result.

```js
function logMessage() {
  console.log("This is a message.");
}

logMessage(); // This is a message.
```

---

## ✅ Conclusion and Best Practices

- Functions make code **more maintainable** and follow the **DRY** (Don't Repeat Yourself) principle.
- Functions are reusable code blocks crucial for building JavaScript applications.
- **Built-in Functions** like `console.log()` and `Number()` follow the same principles as user-defined functions (accept arguments, return values).

---

## 🔀 Function Declarations vs Expressions

### 📌 Function Declarations

- **Definition**: Use the `function` keyword followed by a name.
- **Hoisting**: Can be called before they are defined due to hoisting.
- **Example**:

```js
console.log(getFullName("Mohammed", "Yazji")); // Mohammed Yazji

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
```

### 🧾 Function Expressions (anonymous)

- **Definition**: Use the `function` keyword without a name (anonymous function).
- **Usage**: Assigned to variables and can only be called after their definition.
- **Example**:

```js
const sayHello = function (name) {
return 'Hello' + name;
};

console.log(sayHello('mohammed))
```

### 🔍 Key Differences

- **Declarations**: Can be invoked before definition due to hoisting.
- **Expressions**: Must be defined before they can be used.

---

## ⚡ Arrow Functions

- **Overview**: Arrow functions, introduced in ES6, provide a shorter and faster way to write function expressions. They streamline the syntax by removing the need for curly braces and the `return` keyword for simple one-liner functions.

```js
const getRandomNumber = () => Math.floor(Math.random() * 100);
console.log(getRandomNumber());
```

### 🧠 Complex Arrow Functions

- For functions with multiple lines of code, such as calculating years until retirement, curly braces are necessary, and the `return` keyword must be explicitly used.

```js
const calculateTotal = (price, taxRate) => {
  const tax = price * taxRate;
  const total = price + tax;
  return total;
};

console.log(calculateTotal(100, 0.2)); // 120
```

### 👫 Handling Multiple Parameters

- When a function requires multiple parameters, they should be enclosed in parentheses.

```js
const formatUser = (username, role) => `User ${username} is a ${role}`;
console.log(formatUser("mohammed", "software engineer")); // User mohammed is a softwaer engineer
```

---

## 🔁 Functions Calling Other Functions

### 🔹 Introduction to Function Nesting

You can call one function **inside** another to **reuse logic**, reduce repetition, and keep your code clean and modular.

### 📦 Example: Prepare a Meal with Helper Function

```js
function prepareIngredient(ingredient, quantity) {
  return `${quantity} slices of ${ingredient}`;
}

function makeSandwich(breadType, filling) {
  const bread = prepareIngredient(breadType, 2);
  const stuffing = prepareIngredient(filling, 4);

  return `Sandwich with ${bread} and ${stuffing}.`;
}

console.log(makeSandwich("whole grain bread", "cheese"));
// Sandwich with 2 slices of whole grain bread and 4 slices of cheese.
```

### 🔁 Data Flow Between Functions

- `makeSandwich()` calls `prepareIngredient()` twice with different arguments.
- Each helper function performs a smaller task and returns a result to be used in the main function.
- Functions remain **independent**, even if parameters have the same name.

### 🧼 Applying the DRY Principle

Breaking your code into smaller functions helps:

- Avoid code repetition
- Improve readability and debugging
- Allow reusability in other parts

---

## 🔥 **Regular Functions vs. Arrow Functions**

### ✅ `this` Keyword Behavior

| Feature             | Regular Function                    | Arrow Function                                          |
| ------------------- | ----------------------------------- | ------------------------------------------------------- |
| Has its own `this`  | ✅ Yes – depends on how it's called | ❌ No – inherits from parent (lexical `this`)           |
| Common use case     | Object methods, complex behaviors   | Callbacks, preserving `this` in nested functions        |
| Behavior in objects | `this` refers to the object         | `this` refers to the surrounding scope (not the object) |

- **Arrow functions** do **not** have their own `this`.  
   → They **inherit `this`** from their **lexical (parent) scope**.
- **Regular functions** get their **own `this`**, determined by how they're **invoked**.

---

### 💥 Common Pitfall: `this` in Nested Functions

#### ❌ Problem: Regular Inner Function

- `this` inside a **regular nested function** is `undefined` (in strict mode):

```js
const person = {
  year: 1991,
  checkAge: function () {
    const isMillennial = function () {
      console.log(this.year >= 1981 && this.year <= 1996); // ❌ Error: this is undefined
    };
    isMillennial();
  },
};

person.checkAge();
```

---

### ✅ Solution 1: Use `self = this` (Pre-ES6)

```js
const mohammed = {
  firstName: "Mohammed",
  year: 1991,
  calcAge: function () {
    console.log(2025 - this.year);

    const self = this; // store this context
    const isMillennial = function () {
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillennial();
  },
};
```

> ✅ `self` captures the correct `this` from the parent scope.

---

### ✅ Solution 2: Use Arrow Function (Modern)

```js
const mohammed = {
  firstName: "Mohammed",
  year: 1991,
  calcAge: function () {
    console.log(2025 - this.year);

    const isMillennial = () => {
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillennial();
  },
};
```

> ✅ Arrow function inherits `this` from its parent (`calcAge`), so it works correctly.

---

### 📦 `arguments` Keyword

| Feature         | Regular Function     | Arrow Function   |
| --------------- | -------------------- | ---------------- |
| `arguments`     | ✅ Available         | ❌ Not available |
| Modern solution | Use `...args` (Rest) | Use `...args`    |

```js
const addExpr = function (a, b) {
  console.log(arguments); // ✅ works: [Arguments] { '0': 2, '1': 5 }
  return a + b;
};

const addArrow = (a, b) => {
  console.log(arguments); // ❌ ReferenceError: arguments is not defined
  return a + b;
};
```

---

### 🧭 Final Recommendations

| Use Case                            | Recommended Function Type |
| ----------------------------------- | ------------------------- |
| Object methods                      | ✅ Regular function       |
| When you need `this` or `arguments` | ✅ Regular function       |
| Callbacks (e.g., `map`, `filter`)   | ✅ Arrow function         |
| Preserving `this` in nested scope   | ✅ Arrow function         |

---

## 🧾 Revision Function

### 🧠 Notes

- Parameters with the same name in different functions are **independent**.
- `return` exits a function immediately.
  - Code after `return` will **not run**.

### 🔢 Types of Functions

1. **Function Declarations**
2. **Function Expressions**
3. **Arrow Functions**

All receive, process, and return data.

### 📤 Understanding `console.log` vs. `return`

- `console.log()` → outputs to developer console (for testing).
- `return` → gives back a value and **exits** the function.
- `console.log()` is just another built-in function — **not** related to returning values.

```js
function getName() {
  return "Yazji";
  console.log("This won't run");
}

console.log(getName()); // Yazji
```
