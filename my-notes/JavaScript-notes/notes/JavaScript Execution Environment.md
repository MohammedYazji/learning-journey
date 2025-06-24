
---

Quick Links:

- [[#Where Execution Happens]]
- [[#What is an Execution Context?]]
- [[#Types of Execution Contexts]]
- [[#Phases of an Execution Context]]
- [[#Call Stack]]
- [[#Heap]]
- [[#Visualization & Summary]]
---

## Where Execution Happens

- The CPU executes each function call from an execution context pushed onto the call stack. When execution completes, the context is popped off the stack.

---

## What is an Execution Context?

- **Definition**  
  A kind of environment or "box" that holds necessary data, like variables and arguments, for code execution.

- **What is Inside Execution Context (Components)**  
  - **1- Variable Environment**  
    Stores local variables, function declarations, and arguments objects.  
  - **2- Scope Chain**  
    Provides the chain of scopes for variable lookup.  
  - **3- `this`**  
    Represents the context-specific object for the current execution.

---

## Types of Execution Contexts

- **Global Execution Context**  
  - At the start, only top-level code (not inside functions) is executed within a global execution context. Functions are prepared but only run when called.  
  - There is just one global execution context created at the beginning of execution.  
  - Remains until the program (or browser tab) is closed.

- **Function Execution Contexts**  
  - Each function call creates its own execution context. These function-specific contexts hold their local variables, arguments, `this`, and parameters.  
  - Arrow functions don’t have `arguments` nor `this`.

---

## Phases of an Execution Context

- **Creation Phase:**  
  Execution contexts are prepared in a "creation phase," setting up necessary information like variables and the `this` keyword, before the code actually runs in the "execution phase."  
  Arrow functions don’t have the `this` keyword or an `arguments` object.

  ![image.png](attachment:54dc3561-6742-48bb-af6b-52c86878f1d6:image.png)

- **Execution Phase:**  
  The code is actually run.

- **End of Execution:**  
  - When all functions finish, all Execution Contexts are removed from the Call Stack.  
  - Only the **Global Execution Context** remains until the program completely ends (for example, when the browser tab is closed).  
  - At that point, everything ends and the memory is cleared.

---

## Call Stack

- The call stack organizes and tracks the execution order. Each execution context is added to the stack when a function is called and removed when it completes after execution in CPU, helping JavaScript handle the one-task-at-a-time (single-threaded) nature of its runtime.

---

## Heap

- Unstructured memory to store objects and arrays.  
- Primitive values are stored immediately in execution context in the stack.  
- Objects are stored in the heap, and the execution context in the stack has pointers to these objects.

---

## Visualization & Summary

- **Analogy:**  
  Think of execution contexts as “pizza boxes” (each containing the recipe, ingredients, and necessary tools) and the call stack as stacking these boxes. The top box is in use, and when finished, it’s removed, revealing the one below.

- **Diagram:**  

![Screenshot 2024-11-09 133635.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5cefd5f8-1137-4451-8689-bc393362ca2c/1c387643-d7e3-4d39-a857-21614e4f2cb6/Screenshot_2024-11-09_133635.png)

---
