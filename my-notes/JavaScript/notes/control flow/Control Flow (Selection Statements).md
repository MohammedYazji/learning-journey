# 🎮 Control Flow (Selection Statements)

Control flow allows your program to make decisions and execute specific blocks of code depending on conditions.

---

### 🔗 Table of Contents

- [if Statement](#-if-statement)
- [else if Statement](#-else-if-statement)
- [Ternary Operator](#️-ternary-operator)
- [Switch Statement](#-switch-statement)

---

### ✅ if Statement

If the condition evaluates to `true`, execute the code block. If not, skip it.

```js
if (conditionIsTrue) {
  // Do Something
}
```

📷  
![If Statement](https://prod-files-secure.s3.us-west-2.amazonaws.com/5cefd5f8-1137-4451-8689-bc393362ca2c/524f9b62-7cce-4e2c-98c8-cabfdb95c21d/Screenshot_2024-02-12_173354.png)

---

### ➕ else if Statement

Use `else if` for multiple condition checks. If no condition is true, the `else` block is executed.

js

Copy code

`if (condition1) {   // Do something } else if (condition2) {   // Do something else } else {   // Default action }`

📷  
![Else If Statement](https://prod-files-secure.s3.us-west-2.amazonaws.com/5cefd5f8-1137-4451-8689-bc393362ca2c/c1649236-350f-495a-b05a-80af583644a6/Screenshot_2024-02-12_173405.png)

---

### ⚖️ Ternary Operator

A short way to write an if/else statement. It returns one of two values based on a condition.

js

Copy code

`condition ? valueIfTrue : valueIfFalse;`

✅ Example:

js

Copy code

`const age = 20; const message = age >= 18 ? "Adult" : "Minor";`

---

### 🧩 Switch Statement

A switch statement is used to perform different actions based on different conditions.

#### 🔹 Syntax:

```js
switch (day) {
  case "monday":
    console.log("Go to work");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy weekend");
    break;
  default:
    console.log("Invalid day");
}
```

#### 🔍 Key Notes:

- Acts like `if...else if...else`, but checks one value against many cases.
- Uses `break` to stop execution once a case matches.
- Uses strict comparison (`===`) for matching.
- Best used when checking **many states of the same variable** (e.g., days, statuses).
- Use mostly with **integers or strings**.

---

### 🆚 Switch vs If/Else

| Feature         | If/Else                         | Switch                              |
| --------------- | ------------------------------- | ----------------------------------- |
| Flexibility     | More flexible with expressions  | Limited to one variable comparisons |
| Readability     | Gets messy with many conditions | Cleaner for multiple known values   |
| Comparison Type | Can use any comparison          | Only uses strict comparison (===)   |
