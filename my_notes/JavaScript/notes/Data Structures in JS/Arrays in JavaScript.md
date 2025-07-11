# 📚 Arrays in JavaScript

## 📑 Table of Contents

- [📌 Introduction to Arrays](#-introduction-to-arrays)
- [🛠️ Creating Arrays](#️-creating-arrays)
- [🔍 Accessing Array Elements](#-accessing-array-elements)
- [🔄 Mutating Arrays](#-mutating-arrays)
- [Basic Array Operations](#basic-array-operations-methods)
  - [➕ Add Elements](#-push-and-unshift-methods-add-elements)
  - [➖ Remove Elements](#-pop-and-shift-methods-remove-elements)
  - [🔍 indexOf and includes](#-indexof-and-includes-methods)
  - [⚠️ Strict Equality in includes](#️-strict-equality-in-includes)
- == in progress ==

---

## 📌 Introduction to Arrays

- **Scenario**: Storing multiple values (like names) without needing separate variables.
- Arrays allow bundling of values together.
- Arrays can hold multiple values of any type (e.g., strings, numbers).
- In JavaScript, arrays **can hold elements of different types**. They are not type-restricted like in some other programming languages.

```js
const array = [42, "hello", true, null, { name: "Ali" }, [1, 2, 3], undefined];
```

---

## 🛠️ Creating Arrays

Arrays are created using:

- **Square brackets `[]`** — array literal syntax  
   You can put any expressions inside the brackets.

```js
const names = ["Ali", "Sara", "John"];
```

- **`new Array()` constructor**  
   Less common, but still valid.

```js
const scores = new Array(100, 90, 80);
```

---

## 🔍 Accessing Array Elements

- Use **zero-based indexing** to access elements:

```js
const fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // 'apple'
```

- Get the length of an array:

```js
console.log(fruits.length); // 3
```

- Retrieve the **last element**:

```js
console.log(fruits[fruits.length - 1]); // 'cherry'
```

---

## 🔄 Mutating Arrays

### `const` arrays:

- Can be **mutated** (you can change elements).
- Cannot be **reassigned** to a new array.
- Because arrays are **objects**, the reference is constant — not the content.

```js
const items = [1, 2, 3];
items[0] = 99; // ✅ allowed
items = [4, 5]; // ❌ not allowed
```

### `let` arrays:

- Can be **mutated**.
- Can also be **reassigned** to a new array.

```js
let numbers = [1, 2, 3];
numbers = [4, 5]; // ✅ allowed
```

---

## Basic Array Operations (Methods)

JavaScript provides built-in functions, called **methods**, for performing operations on arrays.  
This section focuses on essential basic array methods you need to know.

---

### ➕ Push and Unshift Methods (ADD ELEMENTS)

- **`push` Method:** Adds elements to the **end** of an array and returns the new length.  
  Example:

```js
friends.push("Alaa"); // adds 'Alaa' to the end of the array
```

- **`unshift` Method:** Adds elements to the **beginning** of an array and returns the new length.  
  Example:

```js
friends.unshift("Abood"); // adds 'Abood' to the start of the array
```

---

### ➖ Pop and Shift Methods (REMOVE ELEMENTS)

- **`pop` Method:** Removes the **last** element from the array and returns the removed element.  
  Example:

```js
friends.pop(); // removes and returns the last element
```

- **`shift` Method:** Removes the **first** element from the array and returns the removed element.  
  Example:

```js
friends.shift(); // removes and returns the first element
```

---

### 🔍 indexOf and includes Methods

- **`indexOf` Method:** Returns the index of a specified element or `-1` if not found.
  Example:

```js
friends.indexOf("Mohammed"); // returns the index of 'Mohammed'
```

- **`includes` Method:** Returns `true` if the element exists in the array, `false` if not.  
  Example:

```js
friends.includes("Ali"); // returns true if 'Ali' is in the array
```

---

### ⚠️ Strict Equality in includes

- The `includes` method uses **strict equality**, meaning it doesn't perform type coercion.  
  Example:

```js
friends.includes(23); // true
friends.includes("23"); // false
```

---
