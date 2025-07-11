# 📚 Introduction to Objects in JavaScript

## 📑 Table of Contents

- [Introduction to Objects](#introduction-to-objects)
- [Defining Objects](#defining-objects)
- [Key-Value Pairs Example](#key-value-pairs-example)
- [Importance of Objects](#importance-of-objects)
- [Objects vs Arrays](#objects-vs-arrays)
- [Dot vs Bracket Notation](#dot-vs-bracket-notation)
- [Adding New Properties to Objects](#adding-new-properties-to-objects)
- [Challenge: Dynamic Sentence](#challenge-dynamic-sentence)
- [Object Methods](#object-methods)
- [Enhanced Object Literals in ES6](#-enhanced-object-literals-in-es6)

---

## Introduction to Objects

- Objects: A new data structure in JavaScript, used to store multiple related values.
- Unlike arrays (where elements are accessed by their index), objects allow values to be accessed by their names, called **keys** or **properties**.

---

## Defining Objects

- Objects are created using curly braces `{}` (also called object literal syntax).
- Each element in an object consists of a **key** (name) and a **value**.

```jsx
let objectName = {
  key1: value1,
  key2: value2,
  // ...
};
```

---

## Key-Value Pairs Example

- Example object `mohammed` with five key-value pairs:

```js
const mohammed = {
  firstName: "Mohammed",
  lastName: "Yazji",
  age: 2025 - 2003,
  job: "Student",
  friends: ["Ali", "Ahmad", "Mohammed", "Alaa"],
};
```

- Each **key** is also called a **property**.
- Because the object is an object, it has properties. 😂👍🏻

---

## Importance of Objects

- Objects are a core concept in JavaScript.
- There are many ways to create objects, but the **object literal syntax** `{}` is the simplest and most common.
- Objects group related data that belong together.

---

## Objects vs Arrays

- In **arrays**, the order of elements is important, and elements are accessed by their index number.
- In **objects**, the order doesn’t matter. Data is accessed by its key name (property).
- Arrays = ordered data.
- Objects = unstructured data with named keys.

---

## Dot vs Bracket Notation

### Dot Notation

- **Syntax:** `object.propertyName`
- **Usage Example:**

```js
const mohammed = {
  firstName: "Mohammed",
  lastName: "Yazji",
  age: 2025 - 2003,
  job: "Student",
  friends: ["Ali", "Ahmad", "Mohammed", "Alaa"],
};

console.log(mohammed.lastName); // Yazji
```

- **Explanation:**
  - The dot notation is straightforward and easy to read.
  - Use dot notation when the property name is known and directly accessible.

### Bracket Notation

- **Syntax:** `object["propertyName"]`
- **Usage Example:**

```js
const person = { firstName: "Jonas", lastName: "Schmedtmann" };
const key = "lastName";
console.log(person[key]); // Output: Schmedtmann
```

- **Explanation:**
  - With bracket notation, property names are specified as strings.
  - You can use **dynamic expressions** or variables as keys.
- **When to Use:**
  - Use bracket notation when the property name is computed or stored in a variable.

### Practical Examples and User Interaction with Prompts

- **Scenario Example:** Getting user input for dynamic property access.

```js
const mohammed = {
  firstName: "Mohammed",
  lastName: "Yazji",
  age: 2025 - 2003,
  job: "Student",
  friends: ["Ali", "Ahmad", "Mohammed", "Alaa"],
};

const interestedIn = prompt(
  `What do you want to know about Mohammed? Choose between firstName, lastName, age, job, and friends`
);

// use brackets notation to write expression as a key
if (mohammed[interestedIn]) {
  console.log(mohammed[interestedIn]);
} else {
  // if empty or wrong property => undefined => else
  console.log(
    `Wrong request!! Choose between firstName, lastName, age, job, and friends`
  );
}
```

- **Key Note:**

  - **Dot notation fails** in dynamic scenarios like this because `person.userInput` is undefined. Bracket notation allows variables within brackets to access specific properties.

---

## Adding New Properties to Objects

- Both dot and bracket notation can be used to add new properties to an object.
- **Syntax to Add Properties:**
  - Dot notation: `object.newProperty = value;`
  - Bracket notation: `object["newProperty"] = value;`
- **Example Code:**

```js
// Using dot notation
mohammed.location = "palestine";

// Using bracket notation
mohammed["facebook"] = "Mohammed Yazji";

console.log(mohammed);
```

- **Result:**

  - The `mohammed` object now has new properties: `location` and `facebook`.

---

## Challenge: Dynamic Sentence

- **Task:** Write a sentence dynamically using object properties.
- **Goal:** Generate _**"Mohammed has 4 friends, and his best friend is called Ali"**_ without hardcoding values.
- **Hint:** Use multiple dot notations and array access to retrieve values like the first friend's name.

```js
console.log(
  `${mohammed.firstName} has ${mohammed.friends.length} friends, and his best friend is called ${mohammed.friends[0]}`
);
```

---

## Object Methods

### Object Methods Overview

- In JavaScript, objects can hold various data types, including arrays, booleans, objects, and even functions.
- When a function is stored as a property in an object, it’s called a **method**. 😲😲

### Adding Methods to Objects

- A function can be added to an object as a key-value pair.
- Only function expressions and arrow functions work as methods because they’re values, whereas function declarations don’t.
- **Syntax:**

```js
const mohammed = {
  name: "Mohammed",
  birthYear: 2003,
  calcAge: function (birthYear) {
    return 2025 - birthYear;
  },
};

// Only function expressions work as methods because they produce values, whereas declarations don’t.
```

- Here, `calcAge` is a method attached to the `mohammed` object.

### Using `this` Keyword

- **Purpose:** Allows a method to access other properties within the same object.
- **Why Use `this`:**
  - Helps avoid hardcoding object properties or passing redundant arguments, adhering to the **DRY (Don’t Repeat Yourself)** principle.
- **Example:**

```js
const mohammed = {
  name: "Mohammed",
  birthYear: 2003,
  calcAge: function () {
    return 2025 - this.birthYear; // Uses `this` to access birthYear
  },
};
```

- Here, `this.birthYear` refers to `mohammed.birthYear`, making the method self-contained.
- So, `this` equals the object itself.

### Efficient Property Storage Using `this`

- **Problem:** Recalculating a method’s result every time it’s called can be inefficient.
- **Solution:** Store the result as a property within the object for quick access.
- **Example:**

```js
const mohammed = {
  name: "Mohammed",
  birthYear: 2003,
  calcAge: function () {
    this.age = 2025 - this.birthYear; // Stores age as a new property
    return this.age;
  },
};
```

- After the first calculation, `mohammed.age` holds the value, saving resources.

### Ternary Operators in Methods (**Challenge**)

- Ternary operators can be used within methods to add conditional logic.
- **Example:**

```js
const mohammed = {
  name: "Mohammed",
  birthYear: 2003,
  hasDriverLicense: true,
  getSummary: function () {
    return `${this.name} is ${this.calcAge()} years old and has ${
      this.hasDriverLicense ? "a" : "no"
    } driver's license.`;
  },
};
```

- This method uses the ternary operator (`? :`) to display whether `mohammed` has a driver’s license based on `hasDriverLicense`.

### Arrays as Objects: Built-in Methods

- Arrays are technically objects in JavaScript, so they have built-in methods (e.g., `push`, `pop`).
- This similarity allows us to understand array methods as functions attached to an object.
- So we can access the push method like this:

```js
arr["push"](4); // 😅😅😅😅😅😅😁😁😁😁😁😁
```

**Additional Notes**

- Methods help keep related functionality within the object itself, making code more organized and easier to manage.
- Using `this` is generally preferable to hardcoding object names as it allows for more dynamic code, especially if objects change names or are reused.

---

## ✨ Enhanced Object Literals in ES6

### 1. Property Shorthand

#### Before ES6:

When a variable and a property have the same name, you had to write both:

```js
const openingHours = {
  thursday: { open: 12, close: 22 },
  friday: { open: 11, close: 23 },
};

const restaurant = {
  name: "Food Palace",
  openingHours: openingHours, // Repetition here
};
```

#### With ES6 (Property Shorthand):

You can just write the variable name once:

```js
const restaurant = {
  name: "Food Palace",
  openingHours, // Automatically sets the property name to "openingHours"
};
```

🟢 This only works **if the variable name and property name are the same**.

---

### 2. Method Shorthand

#### Before ES6:

Methods inside objects were written like this:

```js
const restaurant = {
  order: function (starter, main) {
    return `You ordered ${starter} and ${main}`;
  },
};
// as a function expression then passed to order property
```

#### With ES6 (Method Shorthand):

You can write:

```js
const restaurant = {
  order(starter, main) {
    return `You ordered ${starter} and ${main}`;
  },
};
```

- 🟢 Cleaner syntax
- 🟢 No need for `function` keyword
- 🟢 Still works exactly the same

> 💡 Visual Studio Code helps identify methods by coloring them differently (usually green), which makes it easier to read.

---

### 3. Computed Property Names

You can now **dynamically compute property names** using expressions inside square brackets `[]`.

#### Example:

```js
const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: { open: 12, close: 22 },
  [weekdays[4]]: { open: 11, close: 23 },
  [weekdays[`day-${2 + 5}`]]: {
    // day number 6 for example
    open: 0, // Open 24 hours
    close: 24,
  },
};
```

- 🟢 Any valid JavaScript expression can be used inside `[]`
- 🟢 Super useful when building dynamic or data-driven properties

---

### Summary Table

| Feature                 | Description                                | Benefit                            |
| ----------------------- | ------------------------------------------ | ---------------------------------- |
| **Property Shorthand**  | Use variable name as property key          | Less repetition                    |
| **Method Shorthand**    | Declare methods without `function` keyword | Cleaner and modern syntax          |
| **Computed Properties** | Create dynamic property names with `[]`    | Makes objects flexible and dynamic |
