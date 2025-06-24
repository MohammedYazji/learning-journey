# 🔁 Type Conversion vs. Coercion

- [🔧 Type Conversion (Manual)](#-type-conversion-manual)
- [🤖 Type Coercion (Automatic)](#-type-coercion-automatic)

---

### 🔧 Type Conversion (Manual)

Type conversion is a **manual** process where we explicitly convert values from one data type to another.

#### 🧪 Examples:

- **Convert String to Number**

```js
Number("1991"); // 1991
```

- **Convert Number to String**

```js
String(23); // '23'
```

- **Convert Anything to Boolean**

```js
Boolean(0); // false
Boolean("hello"); // true
```

**📒 We will not use it a lot 😁🤝**

- because usually JS implicit Boolean coercion automatically in logical operators and control statements

---

### 🤖 Type Coercion (Automatic)

**Type coercion** is an **automatic** conversion done by JavaScript during operations involving mixed types.

#### 🧠 Operator Behavior:

- `+` (concatenation): Converts numbers to **strings**

```js
1 + "1"; // '11'
```

- `-`, `*`, `/`: Convert strings to **numbers**

```js
1 - "1"; // 0
10 - "4"; // 6
10 - "4" - "3" - 2 + "5"; // '15'
```

- JS starts with math operations, then hits `+` and converts everything to string from that point onward.
