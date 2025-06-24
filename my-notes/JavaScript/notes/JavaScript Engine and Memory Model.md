# ⚙️ JavaScript Engine and Memory Model

This page is divided into two major sections:

- [1. 🧠 JavaScript Engine](#1--javascript-engine)
- [2. 🗃️ Memory Model in the JS Engine](#2-️-memory-model-in-the-js-engine)
- [#3.📍 Where Are the Call Stack and Heap Actually Located?](#3-where-are-the-call-stack-and-heap-actually-located)

---

## 1. 🧠 JavaScript Engine

### 🔹 Definition

A **JavaScript engine** is a computer program that translates JavaScript code using a **Just-In-Time (JIT) compiler** into machine code and then executes it.  
Each browser has its own engine (e.g., **V8** for Chrome and Node.js).

### 🔹 Responsibilities

The engine is responsible for:

- Parsing and compiling your JavaScript code
- Executing it line-by-line
- Managing memory and handling tasks such as **garbage collection**

---

## 2. 🗃️ Memory Model in the JS Engine

The engine divides its memory into two primary regions:

### 📚 Call Stack (Execution Stack)

#### 🔹 Purpose

- Keeps track of **function calls** — what’s currently being executed and what to return to next.

#### 🔹 Characteristics

- **LIFO (Last In, First Out)** structure
- Every time a function is called, a new **execution context** (or frame) is **pushed** onto the stack
- When a function returns, it’s **popped** off the stack

#### 🔹 Stores

- **Primitives** (numbers, strings, booleans, `null`, `undefined`, `symbol`, `bigint`)
- Global and function **execution contexts**

---

### 🧺 Heap

#### 🔹 Purpose

Used for **dynamic memory allocation** — where objects and reference types live.

#### 🔹 Characteristics

- Unstructured memory space
- Stores:
  - **Objects `{}`**
  - **Arrays `[]`**
  - **Functions** (as values)
  - **Dates**, etc.
- Variables in the **stack** can hold **references** to values stored in the **heap**

---

### 🔗 Relation Between Call Stack, Heap, and JS Engine

- The **JavaScript engine** manages both the **Call Stack** and the **Heap**
- When you declare an object or array:
  - A **reference** is stored in the **stack**
  - The actual value lives in the **heap**
- The engine uses **garbage collection** to remove heap data that is no longer accessible

#### 📝 Example

```js
function greet() {
  const name = "John"; // 'name' is a primitive → stored in stack
  const user = { age: 30 }; // 'user' is an object → reference in stack, value in heap
}
greet();
```

---

## 3.📍 Where Are the Call Stack and Heap Actually Located?

Physically, the **Call Stack** and **Heap** are areas of **RAM (Random Access Memory)**, managed by the **JavaScript engine**. Let’s break it down step-by-step:

---

### 🧠 1. Your Device (Computer / Phone)

- Has **RAM** (physical memory)
- The **operating system** allocates this memory to running programs

---

### 🧱 2. Runtime Environment (Browser or Node.js)

- When you run JavaScript code, your environment (e.g., browser) starts a **JavaScript engine** (e.g., V8)
- The engine reserves memory in RAM for:
  - The **Call Stack**
  - The **Heap**
  - Other parts like the **event loop**, **callback queue**, etc.

---

### ⚙️ 3. Inside the JavaScript Engine

The engine handles memory like this:

- 🧮 **Call Stack** → Reserved memory block for keeping track of what function is currently running
  - Tightly managed
  - Usually small in size (risk of stack overflow if overloaded)
- 🗃️ **Heap** → Large, unstructured memory block for storing dynamic data
  - Stores **objects, arrays, functions**, etc.
  - Automatically managed through **garbage collection**

➡️ Both memory regions **live in RAM**, but they are **fully controlled by the JavaScript engine**, not by you as the developer.
