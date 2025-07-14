# ✈️ Strings

---

## 📚 Table of Contents

1. [🔤 Accessing Characters in Strings](#accessing-characters-in-strings)
2. [📏 String Length](#-string-length)
3. [🔍 Finding Indexes](#-finding-indexes)
4. [✂️ Extracting Parts of Strings (slice())](#️-extracting-parts-of-strings-slice)
5. [📦 Practical Slicing Examples](#-practical-slicing-examples)
   - [1️⃣ Extract First Word](#1⃣-extract-first-word)
   - [2️⃣ Extract Last Word](#2⃣-extract-last-word)
   - [3️⃣ Negative Indexing](#3⃣-negative-indexing)
6. [✈️ Practice: Check Middle Seat](#️-practice-check-middle-seat)
7. [📦 How Strings Have Methods (Boxing)](#-how-strings-have-methods-boxing)
8. [✅ Summary](#-summary)

---

## Accessing Characters in Strings

- Strings are **zero-based**, like arrays.

```jsx
console.log(plane[0]); // 'A'
console.log(plane[1]); // '3'
console.log(plane[2]); // '2'
```

---

## 📏 String Length

```jsx
console.log(airline.length); // 16
console.log("B737".length); // 4
```

---

## 🔍 Finding Indexes

- `indexOf()` → first occurrence
- `lastIndexOf()` → last occurrence

```jsx
console.log(airline.indexOf("r")); // 6
console.log(airline.lastIndexOf("r")); // 10
console.log(airline.indexOf("Portugal")); // 8
console.log(airline.indexOf("portugal")); // -1 (case sensitive)
```

---

## ✂️ Extracting Parts of Strings (`slice()`)

```jsx
console.log(airline.slice(4)); // 'Air Portugal'
console.log(airline.slice(4, 7)); // 'Air'
```

- Start index is **inclusive**
- End index is **exclusive**
- Length of substring = `end - start`

✅ Slice does **not** mutate the original string — it returns a **new string**. (primitive value)

---

## 📦 Practical Slicing Examples

### 1⃣ Extract First Word

```jsx
console.log(airline.slice(0, airline.indexOf(" "))); // 'TAP'
```

### 2⃣ Extract Last Word

```jsx
console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // 'Portugal'
```

### 3⃣ Negative Indexing

```jsx
console.log(airline.slice(-2)); // 'al' (last 2 characters)
console.log(airline.slice(1, -1)); // 'AP Air Portuga' (from index 1 to one before last)
```

---

## ✈️ Practice: Check Middle Seat

Seats `B` and `E` are middle seats.

```jsx
function checkMiddleSeat(seat) {
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("You got the middle seat 😬");
  } else {
    console.log("You got lucky 😎");
  }
}

checkMiddleSeat("23B"); // You got the middle seat 😬
checkMiddleSeat("3E"); // You got the middle seat 😬
checkMiddleSeat("15A"); // You got lucky 😎
```

---

## 📦 How Strings Have Methods (Boxing)

- Strings are **primitives**, but JavaScript "boxes" them into objects temporarily to allow method usage.

```jsx
console.log(typeof new String("Jonas")); // object (behind the scene)
console.log(typeof new String("Jonas").slice(1)); // string
```

So:

- JavaScript wraps the string primitive in a temporary object (boxing),
- Executes the method,
- Converts the result back to a primitive.

---

## ✅ Summary

- Strings behave similarly to arrays in many ways.
- Methods like `slice`, `indexOf`, and `length` are powerful tools.
- Always remember: strings are immutable (non-mutable), so methods return new strings. we need to save the result in a new variable or print it directly
- JavaScript handles method access on primitives via **boxing**.
