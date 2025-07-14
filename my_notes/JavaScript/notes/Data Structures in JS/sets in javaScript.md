# 🌟 Sets in JavaScript (ES6)

## 📂 Table of Contents

1. [✅ What is a Set?](#-what-is-a-set)
2. [🎯 Key Properties](#-key-properties)
3. [🧪 Useful Set Methods](#-useful-set-methods)
4. [🔄 Convert Set ↔ Array](#-convert-set--array)
5. [🔥 Real-Life Use Case: Remove Duplicates](#-real-life-use-case-remove-duplicates-from-array)
6. [📝 When to Use Sets vs Arrays](#-when-to-use-sets-vs-arrays)

---

## ✅ What is a Set?

- A **Set** is a **collection of unique values** — no duplicates allowed.
- Create a Set using:

```js
const mySet = new Set(iterable);
// Accepts any iterable: array, string, etc.
```

- Most commonly used with arrays, but also works with strings and other iterables.

---

## 🎯 Key Properties

- ✅ **Uniqueness**: Duplicates are automatically removed.
- ✅ **No Indexing**: Cannot access elements via index like `set[0]`.
- ✅ **Unordered**: The order of elements is not guaranteed.
- ✅ **Iterable**: Can be looped over using `for...of` or spread syntax.

---

## 🧪 Useful Set Methods

| Method              | Description                                |
| ------------------- | ------------------------------------------ |
| `set.size`          | Returns the number of unique elements      |
| `set.has(value)`    | Checks if the value exists (`true/false`)  |
| `set.add(value)`    | Adds a value (ignored if it’s a duplicate) |
| `set.delete(value)` | Removes a specific value from the set      |
| `set.clear()`       | Removes **all** elements from the set      |

---

## 🔄 Convert Set ↔ Array

- **To Array** (using spread syntax):

```js
const arr = [...mySet];
```

- **To Set** (from array):

```js
const uniqueSet = new Set(myArray);
```

---

## 🔥 Real-Life Use Case: Remove Duplicates from Array

```js
const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
const uniqueStaff = [...new Set(staff)];
console.log(uniqueStaff);
// ['waiter', 'chef', 'manager']
```

- **Count unique elements**:

```js
const uniqueCount = new Set(staff).size;
```

- **With strings** (count unique letters):

```js
const uniqueLetters = new Set("MohammedYazji").size;
```

---

## 📝 When to Use Sets vs Arrays

| Use Case                            | Preferred Structure |
| ----------------------------------- | ------------------- |
| Store duplicates & maintain order   | ✅ Array            |
| Need index-based access             | ✅ Array            |
| Ensure all values are unique        | ✅ Set              |
| Remove duplicates from a collection | ✅ Set              |
| Quickly check if value exists       | ✅ Set (`.has()`)   |
