# 🧠 Statements and Expressions

Understanding the distinction between statements and expressions is key to writing clean and effective JavaScript code.

---

### 🔗 Table of Contents

- [Expressions](#-expressions)
- [Statements](#-statements)
- [Relationship Between Statements and Expressions](#-relationship-between-statements-and-expressions)
- [Expressions in Template Literals](#-expressions-in-template-literals)
- [Conclusion](#-conclusion)

---

### ✨ Expressions

- **Definition**: A piece of code that **produces a value**.

#### ✅ Examples:

- `3 + 4`
- `"Hello"`
- `5`
- `true && false`

All of the above **produce values**, so they are expressions.

---

### 🧱 Statements

- **Definition**: A block of code that performs an **action**, but does **not produce a value** directly.

#### ✅ Examples:

- `if` statement
- `switch` statement
- `let str = "Hello"`

These are used to **control flow** or declare logic rather than return a value directly.

---

### 🔄 Relationship Between Statements and Expressions

- **Expressions**: Like words that make up a sentence.
- **Statements**: Like full sentences that perform complete actions.

#### 🧠 Key Difference:

- **Expressions** → return values
- **Statements** → perform actions

#### 🧪 Example:

```js
if (23 > 10) {
  const str = `23 is bigger`;
}
// - 'if' is a statement
// - '23 > 10' is an expression
// - 'const str = ...' is a statement
// - '`23 is bigger`' is an expression
```

---

### 🎯 Expressions in Template Literals

- You can only place **expressions** inside template literals.

✅ Example:

```js
I am ${2037 - 1991} years old.  // Valid
```

❌ Example:

```js
I am ${if (age > 18) "Adult" else "Minor"}  // Invalid — can't use statements
```

---

### 🧩 Conclusion

- **Focus on the distinction**:
  - **Expressions** → output values.
  - **Statements** → define logic and control flow.

Understanding this helps with debugging and mastering JavaScript's core syntax and advanced behaviors.
