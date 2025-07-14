
# 📘 JavaScript `this` Keyword – Summary

---
### 📑 **Table of Contents – `this` Keyword**

1. [📘 What is `this`?](#-what-is-this)
2. [🔹 General Rules](#-general-rules)
3. [🔹 4 Main Ways `this` is Determined](#-4-main-ways-this-is-determined)
    - [0. In Global Scope](#0--in-global-scope)
    - [1. 🧩 Method Call](#1-%F0%9F%A7%A9-method-call)
    - [2. 🔧 Regular Function Call](#2-%F0%9F%94%A7-regular-function-call)
    - [3. 🎯 Arrow Functions](#3-%F0%9F%8E%AF-arrow-functions)
    - [4. ⚡ Event Listeners](#4-%E2%9A%A1-event-listeners)
4. [🔸 What `this` is NOT](#-what-this-is-not)
5. [🔹 Advanced Function Calls (Coming Later)](#-advanced-function-calls-coming-later)

---

### 🔹 What is `this`?

- `this` is a **special variable** created for every **execution context** (each time a function is called).
    
- It is one of the **three parts of the execution context**:
    
    1. Variable Environment
        
    2. Scope Chain
        
    3. `this` Keyword
        

---

### 🔹 General Rules

- The value of `this` is **not fixed** — it depends on **how the function is called**.
    
- `this` is assigned **at runtime**, not at function declaration.
    
- `this` is **dynamic**, unlike variables which are statically scoped.
    

---

### 🔹 4 Main Ways `this` is Determined

#### 0. 🌐 In Global Scope

```js
console.log(this); // In browsers: window
```

- `this` points to the **global object** (`window` in browsers).
    
- In Node.js, it points to an empty object `{}` in modules.
    

---

#### 1. 🧩 Method Call

> When a function is **called as a method** (i.e., attached to an object):

```js
const jonas = {
  year: 1989,
  calcAge: function () {
    console.log(this.year); // this → jonas
  }
};
jonas.calcAge();
```

- `this` refers to the **object that calls the method**.
    
- Method must be called using the dot notation.
    

---

#### 2. 🔧 Regular Function Call

> When a function is **not attached to any object**:

```js
function calcAge() {
  console.log(this);
}
calcAge();
```

- In **strict mode**: `this` is `undefined`.
    
- In **non-strict mode**: `this` refers to the **global object** (`window` in browsers).
    

---

#### 3. 🎯 Arrow Functions

> Arrow functions **do not have their own `this`**.

```js
const jonas = {
  year: 1989,
  greet: () => {
    console.log(this); // ❌ this ≠ jonas
  }
};
jonas.greet();
```

- They inherit `this` from the **parent scope** (lexical `this`).
    
- Best used for **short callbacks** or when you want to avoid rebinding `this`.
    

---

#### 4. ⚡ Event Listeners

> When used in **DOM event listeners**:

```js
const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
  console.log(this); // ✅ this → button element
});
```

- `this` refers to the **DOM element** the listener is attached to.
    
- If using an arrow function, `this` will not refer to the DOM element:
    

```js
btn.addEventListener('click', () => {
  console.log(this); // ❌ lexical this → parent scope
});
```

---

### 🔸 What `this` is NOT

- ❌ `this` does NOT refer to the function itself.
    
- ❌ `this` does NOT refer to the variable environment.
    

---

### 🔹 Advanced Function Calls (Coming Later)

- Some function call techniques change the value of `this`:
    
    - `new` keyword (for constructor functions)
        
    - `call()`, `apply()`, `bind()` methods
        
- These are **not covered here**, but in Closer Look At Functions section.
    
