# JavaScript Data Types, Memory, and comments

---

## 🧭 Table of Contents

- [📚 Types of Data](#-types-of-data)
- [🔢 Primitive vs Reference Types](#-primitive-vs-reference-types)
- [🧠 How JavaScript Stores Data in Memory](#-how-javascript-stores-data-in-memory)
- [📦 The 7 Primitive Data Types](#-the-7-primitive-data-types)
- [📌 Primitive Type Example](#-primitive-type-example)
- [🧪 Reference Type Example](#-reference-type-example)
- [🧠 Key Concepts to Remember](#-key-concepts-to-remember)
- [🔠 JavaScript is a Dynamic-Typed Language](#-javascript-is-a-dynamic-typed-language)
- [🔑 let, const, and var](#-let-const-and-var)
- [💬 Comments and Type Checking](#-comments-and-type-checking)

---

## 📚 Types of Data

In JavaScript, every value is either a **primitive** or a **reference (object)** type.

---

## 🔢 Primitive vs Reference Types

### 🧱 Primitive Types

- **Types**: `Number`, `String`, `Boolean`, `Undefined`, `Null`, `Symbol`, `BigInt`
- **Stored in**: Call Stack
- **Behavior**:
  - Stored **directly** in the execution context.
  - When assigned to another variable, the **value is copied**.
  - Changing one does **not** affect the other.

### 🧳 Reference Types

- **Types**: Objects, Arrays, Functions (everything else)
- **Stored in**: Heap
- **Behavior**:
  - Variables **store a reference** (memory address) to the actual object in the heap.
  - When assigned to another variable, **both point to the same object**.
  - Modifying one affects the other.

---

## 🧠 How JavaScript Stores Data in Memory

### JavaScript Engine Components

- **Call Stack**: Where functions run and primitives are stored.
- **Heap**: Where objects (reference types) are stored.

---

## 📦 The 7 Primitive Data Types

1. **Number**  
   Floating point numbers 👉 Used for decimals and integers

```js
let age = 23;
```

2. **String**  
   Sequence of characters 👉 Used for text

```js
let firstName = "Mohammed";
```

3. **Boolean**  
   Logical type that can only be `true` or `false` 👉 Used for decisions

```js
let fullAge = true;
```

4. **Undefined**  
   Value of a declared but uninitialized variable

```js
let children;
```

5. **Null**  
   Also means ‘empty value’
6. **Symbol** (ES2015)  
   Unique and immutable value — _not commonly used_
7. **BigInt** (ES2020)  
   For very large integers beyond `Number` limits

> ⚠️ JavaScript has **dynamic typing**:  
> You don’t assign types to variables manually — the type is inferred from the value.

✅ **Values have types**, not variables.

## 📌 Primitive Type Example (Behind the Scenes)

```js
let age = 30;
let oldAge = age;
age = 31;
```

### 🔍 Behind the Scenes:

1. `age = 30`:
   - Memory is allocated at address `0001`.
   - `age` points to `0001` adress which contains the value `30`.
2. `oldAge = age`:
   - `oldAge` also points to address `0001`.
3. `age = 31`:
   - New memory is allocated at `0002`.
   - `age` now points to `0002` which contains `31`.
   - `oldAge` still points to `0001`, which still contains `30`.

✅ Final output:

- `age = 31`
- `oldAge = 30`

---

## 🧪 Reference Type Example

```js
const me = { age: 30 };
const friend = me;
friend.age = 27;
```

### 🔍 Behind the Scenes:

1. `me = { age: 30 }`:
   - The object is stored in the **Heap**, say at address `d3f`.
   - `me` holds a reference to that address via the **Call Stack**.
2. `const friend = me`:
   - `friend` also holds the **same reference** to the Heap object (`d3f`).
3. `friend.age = 27`:
   - The change is made **directly in the Heap**.
   - So `me.age` is also `27` because both `me` and `friend` point to the **same object**.

✅ Final output:

- `friend.age = 27`
- `me.age = 27`

⚠️ Note: const does not make objects immutable. It only means the variable cannot be reassigned. Object properties can still be changed.

---

## 🧠 Key Concepts to Remember

- **Primitive** = copied by **value**
- **Reference** = copied by **reference**
- Copying an object usually **does not** create a new object
- Use spread or libraries for true copy

---

## 🔠 JavaScript is a Dynamic-Typed Language

- JavaScript automatically assigns types to variables based on their assigned values at runtime.
- So the type is defined from the value, not the variable
  - Variables can be reassigned to hold values of different data types (e.g., a variable can switch from having a number to a string).
    - in let case ⇒ can change later
    - in const case ⇒ can not change later

---

## 🔑 let, const, and var

### ✅ `let`

- Introduced in ES6
- Allows **reassignment**
- Block-scoped
- Good for variables that will change

### 🔐 `const`

- Cannot be **reassigned**
- Must be **initialized**
- Ideal for constants

### ⚠️ `var`

- Function-scoped, not block-scoped
- Can be **redeclared**
- Hoisted — accessible before declaration
- Adds to `window` object
- Best Practices
  - **Use `const` by default** for variables that do not change.
  - **Use `let` only** when you are sure the variable will change.
    - Minimizing variable mutations reduces the risk of bugs.

❌ Avoid using `var` in modern code.

---

## 💬 Comments and Type Checking

- **Comments**: Used to document or disable code without deletion. Use `//` for single-line comments and `/* */` for multi-line comments.
- **Typeof Operator**: Helps check the type of a value. However, note that `typeof null` incorrectly returns "object", a known bug in JavaScript.
