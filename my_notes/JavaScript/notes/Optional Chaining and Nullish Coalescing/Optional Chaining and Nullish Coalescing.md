# 🌟 Optional Chaining `?.` & Nullish Coalescing in JavaScript (ES2020)

## 📂 Table of Contents

1. [🧩 The Problem](#-1-the-problem)
2. [✅ Optional Chaining `?.`](#-2-optional-chaining-)
3. [🔐 Using with Nullish Coalescing `??`](#-3-using-optional-chaining-with-nullish-coalescing-)
4. [🔄 Looping with Optional Chaining](#-4-looping-with-optional-chaining)
5. [🧪 Optional Chaining with Methods](#-5-optional-chaining-with-methods)
6. [📦 Optional Chaining with Arrays](#-6-optional-chaining-with-arrays)
7. [🔄 Why Use Them Together?](#-7-why-use-optional-chaining--nullish-coalescing-together)
8. [✅ Summary Table](#-summary)

---

## 🧩 1. The Problem

Accessing **deeply nested object properties** can cause errors if intermediate properties don’t exist.

### ❌ Example:

```js
console.log(restaurant.openingHours.mon.open);
// ❗ Error if `mon` is undefined
```

In real-world apps, like working with API data, you can't always guarantee property existence.

---

## ✅ 2. Optional Chaining `?.`

### 🧠 Definition

Safely access nested object properties.
If the property doesn’t exist, it returns `undefined` instead of throwing an error.

### ✅ Basic Syntax

```js
restaurant.openingHours.mon?.open;
```

> Returns `undefined` if `mon` does not exist.

### 🧪 Example

```js
const openTime = restaurant.openingHours?.mon?.open;
console.log(openTime); // undefined
```

### 🔁 Works With:

- Objects → `obj?.prop`
- Methods → `obj.method?.()`
- Arrays → `arr?.[index]`

---

## 🔐 3. Using Optional Chaining with Nullish Coalescing `??`

### 🧠 Definition

Provides a default **only if** the left-hand side is `null` or `undefined`.

### ✅ Syntax

```js
const open = restaurant.openingHours?.mon?.open ?? "closed";
```

### 🔁 Comparison

```js
0 || "default"; // ❌ returns 'default' (0 is falsy)
0 ?? "default"; // ✅ returns 0 (only null/undefined trigger fallback)
```

> Keeps `0`, `false`, and `''` as valid values — unlike `||`.

---

## 🔄 4. Looping with Optional Chaining

### ✅ Example

```js
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const day of days) {
  const open = restaurant.openingHours?.[day]?.open ?? "closed";
  console.log(`On ${day}, we open at ${open}`);
}
```

- Bracket notation for dynamic keys
- Optional chaining avoids errors
- Nullish coalescing provides fallback

---

## 🧪 5. Optional Chaining with Methods

### ✅ Call only if method exists

```js
restaurant.order?.(0, 1) ?? "Method doesn't exist";
restaurant.orderRamen?.() ?? "Method doesn't exist";
```

> Prevents calling a method that might not exist and avoids runtime errors.

---

## 📦 6. Optional Chaining with Arrays

### ✅ Access array elements safely

```js
const users = [{ name: "Jonas", email: "hello@jonas.com" }];
console.log(users[0]?.name ?? "User array empty");
```

If array is empty:

```js
const users = [];
console.log(users[0]?.name ?? "User array empty"); // ✅ No error
```

> Cleaner than checking `if (users.length > 0)`

---

## 🔄 7. Why Use Optional Chaining + Nullish Coalescing Together?

They were introduced **together in ES2020** and work great combined:

- ✅ Optional chaining prevents errors
- ✅ Nullish coalescing provides **smart defaults**
- ✅ Especially useful in real-world data (e.g., API responses)

---

## ✅ Summary

| Feature                    | Syntax             | Use Case                                        |
| -------------------------- | ------------------ | ----------------------------------------------- |
| Optional Chaining          | `obj?.prop`        | Avoid errors on undefined properties            |
| Optional Chaining (array)  | `arr?.[index]`     | Access array items only if they exist           |
| Optional Chaining (method) | `obj.method?.()`   | Call method only if it exists                   |
| Nullish Coalescing         | `value ?? default` | Fallback only if value is `null` or `undefined` |
