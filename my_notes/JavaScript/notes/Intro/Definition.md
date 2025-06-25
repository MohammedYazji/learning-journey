# ⁉️ Definition

> **JavaScript is a high-level, prototype-based, object-oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single-threaded, garbage-collected programming language with first-class functions and a non-blocking event loop concurrency model.**

---

## 🔹 High-Level

- You don’t have to worry about complex stuff like memory management — it’s close to human language.
- Unlike low-level languages (e.g., C), JavaScript manages resources like memory automatically, making it easier to use but potentially slower.

---

## ♻️ Garbage Collection

- JavaScript’s engine uses **garbage collection** to free up memory by removing unused objects.
- This ensures efficient memory management without manual effort.

---

## ⚙️ Interpreted or JIT-Compiled

- JavaScript code is human-readable but must be converted to machine code by the JavaScript engine.
- JavaScript is both:
  - **Interpreted:** Executed line-by-line.
  - **JIT-Compiled (Just-In-Time):** Optimizes frequently used code into machine code during runtime for better performance.
- This mix provides flexibility **and** speed.

---

## 🧠 Multi-Paradigm

JavaScript supports different programming styles:
- **Procedural**
- **Object-Oriented**
- **Functional**

This makes it a **flexible** and **powerful** tool for different kinds of projects.

---

## 🧬 Prototypal Inheritance (OOP)

- JavaScript's object-oriented nature is **prototype-based**.
- Objects inherit methods from prototypes, such as array methods from the `Array.prototype`.
- ✅ Example: When creating a new array, it inherits all the methods from the Array prototype.

---

## 🔧 First-Class Functions

- Functions are treated as **values**:
  - Can be stored in variables
  - Passed to other functions
  - Returned from functions
- This enables powerful **functional programming** patterns.

---

## 🔄 Dynamic Typing

- Variables do **not** have fixed types.
- They can change types at runtime.
- For strongly-typed behavior, developers use **TypeScript** as a superset of JavaScript.

---

## 🧵 Single-Threaded, Non-Blocking, Concurrency Model

- JavaScript is **single-threaded**, meaning it can only do one thing at a time.
- However, it uses a **non-blocking event loop** to handle tasks efficiently:

### 🔁 How it works:

- If a long-running task (e.g., fetching data) starts:
  - JavaScript **doesn’t block** other code while waiting.
  - It **offloads** the task (e.g., to a browser API or Node.js background thread).
  - When the task finishes, the result is added to the **task queue**.
  - The **event loop** then pushes it into the **call stack** when it's ready.

### 🧪 Example:

> When making an API request, JavaScript **does not wait** for the response.  
> Instead, it continues executing other code.  
> Once the data is returned, JavaScript handles the response using the **event loop** mechanism.

This makes JavaScript **highly efficient** for **web applications** and **asynchronous workflows**.

---
