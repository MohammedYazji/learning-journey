## 🧵 **String Manipulation in JavaScript – Summary Guide**

---

## Table of Contents

1. [Case Conversion](#1--case-conversion)
2. [Normalize Email Input (`trim()`)](#2--normalize-email-input-trim-)
3. [Replace in Strings](#3--replace-in-strings)
4. [String Booleans](#4--string-booleans)
5. [Check Baggage Function](#5--check-baggage-function)
6. [Powerful String Methods in JavaScript](#-powerful-string-methods-in-javascript)
   - [split()](#1-split)
   - [join()](#2-join)
   - [Capitalizing Names Function](#3-capitalizing-names-function)
   - [padStart() and padEnd()](#4-padstart-and-padend)
   - [Mask Credit Card Function](#5-mask-credit-card-function)
   - [repeat()](#6-repeat)
7. [Summary of Methods Used](#-summary-of-methods-used)

---

### 1. ✅ **Case Conversion**

```jsx
str.toLowerCase();
str.toUpperCase();
```

- No arguments needed.
- Used to **standardize user input** (e.g., names, emails).

**Example (fix passenger name):**

```jsx
const passenger = "jOnAs";
const passengerLower = passenger.toLowerCase(); // 'jonas'
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1); // 'Jonas'
```

---

### 2. 📧 **Normalize Email Input trim( )**

```jsx
const loginEmail = "   Hello@Jonas.Io \n";
const normalizedEmail = loginEmail.toLowerCase().trim();
```

- `.trim()` removes **leading/trailing whitespace** (including `\n`, `\t`, etc).
- Chain with `.toLowerCase()` to normalize email before comparing.
- Also there are `trimEnd()` & `trimStart()`.

---

### 3. 💲 **Replace in Strings**

```jsx
str.replace("old", "new");
str.replaceAll("old", "new"); // ES2021+
str.replace(/old/g, "new"); // Use regex for multiple matches
```

**Example (currency format):**

```jsx
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", "."); // '288.97$'
```

**Example (airport announcement):**

```jsx
const announcement = "Boarding door 23. Please go to door 23.";
const fixed = announcement.replace(/door/g, "gate");
```

---

### 4. 🔎 **String Booleans**

- `.includes('text')`
- `.startsWith('text')`
- `.endsWith('text')`

**Example:**

```jsx
const plane = "Airbus A320neo";

plane.includes("A320"); // true
plane.startsWith("Airbus"); // true
plane.endsWith("neo"); // true
```

---

### 5. 🧳 **Check Baggage Function**

```jsx
function checkBaggage(items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("❌ Not allowed on board");
  } else {
    console.log("✅ Welcome aboard!");
  }
}

checkBaggage("I have a laptop, some food, and a POCKET Knife");
checkBaggage("I have snacks and a gun");
checkBaggage("Camera and socks");
```

> ✅ Lowercasing simplifies matching and avoids checking for every variation ("Knife", "KNIFE", etc).

---

### 🔹 Powerful String Methods in JavaScript

#### 1. `split()`

```jsx
"A+very+nice+string".split("+"); // ['A', 'very', 'nice', 'string']
```

Split full name:

```jsx
const [firstName, lastName] = "Jonas Schetmann".split(" ");
```

#### 2. `join()`

```jsx
["Mr.", "Jonas", "SCHETMANN"].join(" "); // 'Mr. Jonas SCHETMANN'
```

#### 3. Capitalizing Names Function

```jsx
const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  return namesUpper.join(" ");
};
capitalizeName("jessica ann smith davis");
// 'Jessica Ann Smith Davis'
```

#### 4. `padStart()` and `padEnd()`

```jsx
"Go to gate 23".padStart(20, "+").padEnd(30, "+"); // '+++++Go to gate 23+++++'
```

#### 5. Mask Credit Card Function

```jsx
const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
maskCreditCard(1234567891234567); // '************4567'
```

#### 6. `repeat()`

```jsx
"Bad weather... All Departures Delayed. ".repeat(3);
```

Visual example:

```jsx
const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛫".repeat(n)}`);
};
planesInLine(5); // There are 5 planes in line 🛫🛫🛫🛫🛫
```

---

### 🔍 Summary of Methods Used

| Method       | Description                    |
| ------------ | ------------------------------ |
| `split()`    | Converts string → array        |
| `join()`     | Converts array → string        |
| `slice()`    | Cuts out a portion of a string |
| `padStart()` | Adds padding at the start      |
| `padEnd()`   | Adds padding at the end        |
| `replace()`  | Replaces part of a string      |
| `repeat()`   | Repeats a string               |

📖 [MDN Docs – String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
