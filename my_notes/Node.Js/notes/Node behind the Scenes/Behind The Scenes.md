# Node.JS Behind The Scenes

## 📑 Table of Contents

1. [🧱 Node.js Architecture Overview](#-nodejs-architecture-overview)

   - [🔧 Core Dependencies](#-core-dependencies)

     - [1. V8 Engine](#1-v8-engine)
     - [2. libuv](#2-libuv)

   - . [🧵 Other Native Dependencies](#-other-native-dependencies)
   - . [💡 Node.js = C++ + JavaScript](#-nodejs--c--javascript)
   - . [✅ Summary](#-summary)

2. [Processes, Threads and the Thread Pool](#processes-threads-and-the-thread-pool)
   - [🧵 What Are Threads and the Thread Pool?](#-what-are-threads-and-the-thread-pool)
   - [🧠 Node.js and the Single Thread](#-nodejs-and-the-single-thread)
   - [⚙️ What Happens When Node Starts?](#️-what-happens-when-node-starts)
   - [🪵 Thread Pool Explained](#-thread-pool-explained)
   - [📌 Tasks Offloaded to the Thread Pool](#-tasks-offloaded-to-the-thread-pool)
   - [✅ Key Takeaways](#-key-takeaways)
3. [The Node.JS Event Loop](#the-nodejs-event-loop)
   - [❤️ The Event Loop: Core of Node.js](#️-the-event-loop-core-of-nodejs)
   - [🔄 What the Event Loop Does](#-what-the-event-loop-does)
   - [🎯 How the Event Loop Works](#-how-the-event-loop-works)
   - [🧭 Event Loop Phases](#-event-loop-phases)
   - [🪝 Microtasks: `nextTick()` & Promises](#-microtasks-nexttick--promises)
   - [🔁 One Tick of the Event Loop](#-one-tick-of-the-event-loop)
   - [⚠️ Why the Event Loop Must Stay Unblocked](#️-why-the-event-loop-must-stay-unblocked)
   - [✅ Best Practices to Avoid Blocking](#-best-practices-to-avoid-blocking)
   - [💡 Final Thoughts](#-final-thoughts)

---

## 🧱 Node.js Architecture Overview

- Node.js is a JavaScript runtime environment that depends on several powerful libraries to function effectively. The most critical components are:

### 🔧 Core Dependencies

#### **1. V8 Engine**

- **What it is**: Google’s high-performance JavaScript engine.
- **Role in Node.js**:
  - Converts JavaScript code into machine code.
  - Enables Node to **understand and execute** JavaScript outside the browser.
- **Language**: Written in C++ (also uses some JS).

#### **2. libuv**

- **What it is**: An open-source C++ library.
- **Focus**: Asynchronous I/O (input/output).
- **Main responsibilities**:
  - Accessing **OS resources**, **file system**, and **networking**.
  - Implements:
    - **Event Loop** – handles light tasks like callbacks and network I/O.
    - **Thread Pool** – handles heavy tasks like file access and compression.

---

### 🧵 Other Native Dependencies

While V8 and libuv are the most crucial, Node also uses:

| Library       | Purpose      |
| ------------- | ------------ |
| `http-parser` | Parsing HTTP |
| `c-ares`      | DNS requests |
| `OpenSSL`     | Cryptography |
| `zlib`        | Compression  |

These libraries are written in **C++**, not JavaScript.

---

### 💡 Node.js = C++ + JavaScript

- **Node.js itself** is built using **C++ and JavaScript**, **not** just JavaScript.
- Node wraps low-level C++ functionalities and **exposes them as JavaScript APIs**, making it easier for developers to build server-side applications without needing to write C++.

---

### ✅ Summary

- Node.js runs JavaScript using the **V8 engine**.
- It accesses system resources via **libuv** (event loop + thread pool).
- It uses multiple C++ libraries for low-level tasks.
- Node provides a **JavaScript abstraction layer** over these native components.
- This architecture allows us to write **pure JavaScript**, while under the hood, it connects deeply with the system.

---

## Processes, Threads and the Thread Pool

### 🧵 What Are Threads and the Thread Pool?

- **Thread**: A sequence of instructions executed by the CPU.
  - **Process**: A program in execution (Node creates a process when it runs).
  - **Node runs in a single thread** by default — very important to remember.
    - Even if 10 or 10 million users access the app, it’s still one thread.
  - Blocking this single thread = blocking the whole app.

---

### 🧠 Node.js and the Single Thread

- Node is **single-threaded**, which makes it efficient but also fragile.
- Heavy operations (e.g., large file reading) can block the single thread.
- Developers must be careful not to block the main thread.

---

### ⚙️ What Happens When Node Starts?

1. All **top-level code** is executed (not inside callbacks).
2. All **required modules** are loaded.
3. All **callbacks** are registered (e.g., from an HTTP server).
4. Then, the **event loop starts**, which handles most app logic.

---

### 🪵 Thread Pool Explained

- Provided by **libuv**.
- Comes with **4 additional threads by default** (can be configured up to 128).
- These threads are **separate from the main thread**.
- Node **automatically offloads** heavy/expensive tasks to the thread pool.
  - Developers don’t control what goes there — handled behind the scenes.

---

### 📌 Tasks Offloaded to the Thread Pool

Tasks that are **too expensive for the event loop** and get moved to the thread pool:

- **File system operations**
- **Cryptography** (e.g., password hashing)
- **Compression tasks**
- **DNS lookups**

---

### ✅ Key Takeaways

- Node.js runs in a **single main thread**, which is easy to block.
- Heavy operations are automatically moved to the **thread pool** (from libuv).
- The **event loop** starts once all top-level code and callbacks are set.
- The **thread pool keeps the event loop free** from expensive tasks.
- Understanding this architecture is key to writing performant Node.js apps.

---

## The Node.JS Event Loop

### ❤️ The Event Loop: Core of Node.js

- The **event loop** is the **heart of Node.js** architecture.
- Executes **all callback-based code** (not top-level code).
- Handles:
  - I/O callbacks
  - Timer callbacks
  - Event-based operations (like HTTP requests, file reads, etc.)
- Drives **asynchronous programming**, which makes Node scalable and efficient.

---

### 🔄 What the Event Loop Does

- Listens for **events** (e.g., HTTP request, timer expiration).
- Executes the **callback** associated with each event.
- Offloads **heavy tasks** to the **thread pool** (via libuv).
- Provides **orchestration** of your app’s logic.

---

### 🎯 How the Event Loop Works

- Starts running **as soon as your Node app is initialized**.
- Handles:
  - Executing top-level code first
  - Loading modules
  - Registering callbacks
  - Then it starts processing events in a loop

---

### 🧭 Event Loop Phases

The event loop has **multiple phases**, each with its own **callback queue**.

#### 🔢 Four Main Phases:

| Phase                          | Description                                                      |
| ------------------------------ | ---------------------------------------------------------------- |
| **1. Timers**                  | Executes callbacks from expired `setTimeout()` / `setInterval()` |
| **2. I/O Polling & Callbacks** | Handles most app logic (networking, file access)                 |
| **3. `setImmediate()`**        | Executes callbacks scheduled with `setImmediate()`               |
| **4. Close Callbacks**         | Handles things like closing a server or WebSocket                |

- In each phase:
  - All callbacks in that phase’s queue are executed.
  - Then moves to the **next phase**.

---

### 🪝 Microtasks: `nextTick()` & Promises

- Two special **queues** that run after each phase:
  - `process.nextTick()`
  - **Microtasks queue** (mainly for resolved **Promises**)
- These run **after the current phase** ends, but **before** the event loop moves to the next phase.
- Use `process.nextTick()` only when you **really need to execute something immediately** after the current phase (advanced use).

---

### 🔁 One Tick of the Event Loop

- One **tick** = one **cycle through all phases**.
- After each tick, Node:
  - Checks for pending timers or I/O.
  - If none → exits the app.
  - If pending tasks exist → continues to next tick.

✅ Example:

- Your app keeps listening to HTTP requests → Node stays alive.
- Reading a file in background → keeps Node running.

---

### ⚠️ Why the Event Loop Must Stay Unblocked

- Node.js runs in a **single thread**.
- Blocking the event loop = blocks **all users**.
- Unlike languages like PHP (which creates new threads for each user), Node handles **all users in one thread** — efficient, but fragile.

---

### ✅ Best Practices to Avoid Blocking

To keep your app performant and avoid blocking:

#### ❌ Avoid:

- Synchronous functions from:
  - `fs` (File System)
  - `crypto`
  - `zlib`
- Heavy CPU tasks:
  - Complex loops
  - Number crunching
- Parsing/stringifying **huge JSON objects**
- Complex **RegEx** (e.g., deeply nested quantifiers, back-references)

#### ✅ Prefer:

- Asynchronous (non-blocking) functions
- Using worker threads or child processes for CPU-heavy tasks

---

### 💡 Final Thoughts

- The **event loop** is what makes Node asynchronous, non-blocking, and scalable.
- Your job: **never block the event loop**.
- If the event loop is stuck → your whole app is stuck for everyone.
- If needed, you can explore:
  - **Manual offloading** to the thread pool
  - **Child processes**
  - **Worker threads**

---
