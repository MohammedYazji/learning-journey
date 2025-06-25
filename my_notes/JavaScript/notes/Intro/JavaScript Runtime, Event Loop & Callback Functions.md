# ⚙️ JavaScript Runtime, Event Loop & Callback Functions

---

Quick Links:

- [JavaScript Runtime Environment](#javascript-runtime-environment)
  - [Runtime Environment (Browser)](#runtime-environment-browser)
  - [Node.js Runtime Environment](#nodejs-runtime-environment)
- [Event Loop](#event-loop)
  - [Role](#role)
  - [Process](#process)
- [Callback Functions (with a Pizza Example) & Event Loop](#callback-functions-with-a-pizza-example--event-loop)

---

## JavaScript Runtime Environment

### Runtime Environment (Browser)

A runtime environment includes the JavaScript engine, Web APIs (for DOM, timers, etc.), and a callback queue, essential for executing JavaScript in the browser.

![Screenshot 2024-11-09 131906.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5cefd5f8-1137-4451-8689-bc393362ca2c/175213f7-6236-4e72-b374-aa52ad32cb13/Screenshot_2024-11-09_131906.png)

---

### Node.js Runtime Environment

Outside of browsers, Node.js runs JavaScript using a different runtime with components like C++ bindings and a thread pool instead of Web APIs.

![image.png](attachment:335612b3-0272-44fb-9397-07cd353499c8:image.png)

---

## Event Loop

### Role

Manages asynchronous tasks by continuously checking the call stack and callback queue.

### Process

- The engine places callback functions in a **callback queue** once an asynchronous task (e.g., a timer or network request) completes.
- When the call stack becomes empty, the event loop pushes these functions from the callback queue onto the call stack for execution.
- This implements JavaScript’s non-blocking concurrency model.

[✨♻️ Visualizing JavaScript: Event Loop](https://medium.com/@masterrajpatel/%EF%B8%8F-visualizing-javascript-event-loop-5d5e00ddbde0)

---

## Callback Functions (with a Pizza Example) & Event Loop

### 🧠 What Happens in Order:

1. 📞 **You ordered a pizza ()**, and they said: callback function

   > "Okay, it will be ready in 20 minutes."

2. 🍳 They started making the pizza **in the kitchen (Web APIs)**,

   but you went on with your work, you didn’t wait around.

3. 🕒 After 20 minutes, **the pizza was ready**.

   Now, the restaurant says:

   > "Alright, let’s call you."

4. 📥 But if your phone line is busy (Call Stack is full),

   the restaurant waits a bit **(Callback Queue)**.

5. 📞 As soon as the line is free (Call Stack becomes empty),

   they call you back → **execute the Callback**.
