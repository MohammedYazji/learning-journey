# 🗺️ JavaScript Maps

## 📂 Table of Contents

1. [📌 What is a Map?](#-what-is-a-map)
2. [🔑 Key Differences from Objects](#-key-differences-from-objects)
3. [🛠 Creating a Map](#-creating-a-map)
4. [➕ Adding Entries (`.set()`)](#-adding-entries-set)
5. [📥 Retrieving Values (`.get()`)](#-retrieving-values-get)
6. [🎯 Clever Use with Booleans](#-clever-use-with-booleans)
7. [🧪 Map Methods](#-map-methods)
8. [🧠 Using Objects/Arrays as Keys](#-advanced-using-objectsarrays-as-keys)
9. [💡 DOM Elements as Keys](#-dom-elements-as-keys)
10. [📌 Summary Points](#-summary-points)
11. [📘 Deep Dive: Map Iteration](#-javascript-maps-deep-dive-maps-iteration)
12. [📝 When to Use Map vs Object](#-when-to-use-map-vs-object)

---

## 📌 What is a Map?

A **Map** is a data structure that stores values as **key-value pairs**, just like an object — but **more powerful** and flexible.

---

## 🔑 Key Differences from Objects

| Feature     | Object                      | Map                                                  |
| ----------- | --------------------------- | ---------------------------------------------------- |
| Key Types   | Strings or Symbols only     | ✅ Any type (string, number, boolean, object, array) |
| Order       | Unordered                   | ✅ Ordered (insertion order preserved)               |
| Iteration   | Manual via `Object.entries` | ✅ Directly iterable                                 |
| Performance | Slower on large datasets    | ✅ Faster in many cases                              |
| Use Cases   | Basic/default structure     | ✅ Dynamic key-value mappings                        |

---

## 🛠 Creating a Map

```js
const rest = new Map(); // Map constructor
```

---

## ➕ Adding Entries `.set()`

```js
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");
```

✅ `.set()` returns the updated Map, allowing **chaining**:

```js
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open")
  .set(false, "We are closed");
```

---

## 📥 Retrieving Values `.get()`

```js
rest.get("name"); // "Classico Italiano"
rest.get(true); // "We are open"
```

⚠️ Key types must **match exactly**:

```js
rest.get("1"); // undefined — different type than number 1
```

---

## 🎯 Clever Use with Booleans

```js
const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// "We are open" or "We are closed"
```

✅ Smart trick: using boolean keys to conditionally get messages.

---

## 🧪 Map Methods

| Method          | Description                           |
| --------------- | ------------------------------------- |
| `set(key, val)` | Adds or updates a key-value pair      |
| `get(key)`      | Gets value associated with a key      |
| `has(key)`      | Returns true if the key exists        |
| `delete(key)`   | Deletes a specific key-value pair     |
| `clear()`       | Removes all entries                   |
| `size`          | Returns the number of key-value pairs |

---

## 🧠 Advanced: Using Objects/Arrays as Keys

```js
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest.get(arr)); // ✅ Works

rest.get([1, 2]); // ❌ Doesn't work — different reference
```

✅ Keys must be the **exact same reference**.

---

## 💡 DOM Elements as Keys

```js
rest.set(document.querySelector("h1"), "Heading");
```

✅ DOM elements are objects and can be used as Map keys — useful for UIs.

---

## 📌 Summary Points

- ✅ Maps allow **any key type**
- ✅ Keys retain **insertion order**
- ✅ Great for **dynamic** and **flexible key-value mapping**
- ✅ More performant for frequent additions/deletions
- ✅ Easily **iterable**, and `.set()` is **chainable**

---

## 📘 JavaScript Maps Deep Dive: Maps Iteration

### 🧩 Creating Map with Predefined Data

```js
const question = new Map([
  ["question", "What is the best programming language?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again 😢"],
]);
```

✅ Each sub-array is a key-value pair.

---

### 🔁 Convert Object to Map

```js
const hoursMap = new Map(Object.entries(openingHours));
```

✅ `Object.entries()` returns `[key, value]` pairs — perfect for Maps.

---

### 🔄 Looping Through a Map

```js
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
```

✅ Maps are iterable with `for...of`.

---

### 🧪 Mini Quiz App

```js
console.log(question.get("question"));
const answer = Number(prompt("Your answer"));
console.log(question.get(answer === question.get("correct")));
```

✅ Uses `true`/`false` keys for automatic message selection.

---

### 🔄 Convert Map to Array

```js
const mapArr = [...question];
console.log(mapArr);
console.log([...question.keys()]);
console.log([...question.values()]);
```

✅ Use spread syntax to convert to an array of entries, keys, or values.

---

## 📝 When to Use Map vs Object?

| Use Case                             | Use       |
| ------------------------------------ | --------- |
| Need keys of any type                | ✅ Map    |
| Preserve order of insertion          | ✅ Map    |
| Work with dynamic data / UI bindings | ✅ Map    |
| Static data or config                | ✅ Object |
