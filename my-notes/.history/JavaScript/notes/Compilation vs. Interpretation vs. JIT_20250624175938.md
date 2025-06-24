# Compilation vs. Interpretation vs. JIT

---

[1- We must translate the code into machine code before executing it](#1--we-must-translate-the-code-into-machine-code-before-executing-it)

- [Compilation](#compilation)
- [Interpretation](#interpretation)
- [Just-In-Time (JIT) Compilation - like V8](#just-in-time-jit-compilation---like-v8)
  [2- Parsing and Code Optimization - In JIT](#2--parsing-and-code-optimization---in-jit)
  [3-🧑‍🍳 Kitchen Analogy Example](#3--kitchen-analogy-example)
  [🔚 Quick Summary](#-quick-summary)
  [RAM and CPU and Call Stack Analogy](#ram-and-cpu-and-call-stack-analogy)

---

## 1- We must translate the code into machine code before executing it

### Compilation

- **Process:**

  - Converts all code at once to machine code, resulting in a portable file (.exe) that we can execute.

- **Characteristics:**
  - When we want to execute it, it’s ready so it’s very fast.
  - Any error in compilation stops the entire process 👿

---

### Interpretation

- **Process:**

  - Executes line by line without creating a separate file.

- **Characteristics:**
  - It’s slow because it translates line by line.
  - Easier to test and debug but stops at the first error.

---

### Just-In-Time (JIT) Compilation - like V8

- Modern JavaScript engines use JIT, which combines compilation and interpretation.
- Starts as an interpreter by compiling code to machine code on the fly line by line, then at runtime keeps optimizing to increase speed and performance by saving repeated code as ready-to-execute machine code for next time.

---

## 2- Parsing and Code Optimization - In JIT

- **Parsing:**  
  JavaScript code is first parsed into an **Abstract Syntax Tree (AST)**, a structure representing code elements (e.g., variables, functions), allowing syntax checks before machine code generation.

- **Code Optimization:**  
  JIT engines optimize code continually by creating an unoptimized machine code version for immediate execution, followed by gradual optimization during runtime.

![Screenshot 2024-11-09 131321.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/5cefd5f8-1137-4451-8689-bc393362ca2c/2540ff77-2879-4fe4-be33-a6c65feaa7d2/Screenshot_2024-11-09_131321.png)

---

## 3-🧑‍🍳 Kitchen Analogy Example

### 🎭 Characters (الشخصيات):

| Item                     | In Programming             | Analogy (in a kitchen)                                        |
| ------------------------ | -------------------------- | ------------------------------------------------------------- |
| **You (Programmer)**     | The developer              | The person who writes the recipe (JS Code)                    |
| **Recipe (Code)**        | Program code               | The instructions for cooking                                  |
| **Chef (CPU)**           | The computer's processor   | The cook who follows the recipe                               |
| **Language of Recipe**   | Programming language (JS)  | The code as written by you                                    |
| **Language of the Chef** | Machine code (0 & 1)       | The language the chef understands                             |
| **Translation**          | Compilation/Interpretation | Turning the recipe into instructions for cooking              |
| **Execution (Cooking)**  | Code execution             | The chef prepares the dish according to the translated recipe |
| **Memory for Objects**   | Heap                       | The storage for ingredients                                   |
| **Call Stack**           | Execution context order    | The ordered list of tasks the chef follows                    |

---

### 🍽️ 1. **Compiler = طابعة وصفات**

- Compiler
  - You wrote the full recipe.
  - You took it to the printing press.
  - The press translated it _completely_ into the chef’s language (compiling the code into an exe).
  - Then the chef saw the recipe in his language and cooked quickly (so execution is very fast).

🧠 In programming:

- Write code
- Compile fully
- Run program fast because it’s ready.

✅ Very fast  
❌ Does not work if there is one error.

🧪 Examples: C, C++

---

### 🔁 2. **Interpreter = ترجمان واقف جمبك**

- Interpreter
  - You stand next to the chef.
  - You tell the interpreter step by step what to say to the chef, and he translates directly:
    - “Get the pot” → executes
    - “Chop onions” → executes
    - “Fry onions” → executes
  - If you make a mistake in one step, the chef stops and says: “I don’t understand, repeat!” (Stops on first error).

🧠 In programming:

- Each line executes on its own immediately.

✅ Easy to test and fix  
❌ Slow because it starts over every time  
❌ Stops on the first mistake.

🧪 Example: Python

---

### ⚡ 3. **JIT = مترجم ذكي بيحفظ**

- JIT
  - Like the interpreter, but smart: V8 engine.
  - If it sees you say “Chop onions” a lot,
  - It says: “Ah! This repeats often,”
  - So it prepares it quickly (translates it to the chef’s language and saves it).
  - Then when you say “Chop onions” again → it does it very fast.

🧠 In programming:

- Starts as an Interpreter
- Over time converts important parts to Machine Code
- Makes execution faster and smarter

✅ Combines speed and flexibility  
❌ Slightly complex, but very useful

🧪 Examples: Java, C#, V8 engine (Chrome’s JavaScript engine)

---

### 🧠 Machine Code = لغة الطباخ

- Machine Code
  - The computer understands only 0s and 1s (machine language).
  - Whether you write code in Python, Java, or C, it must eventually be converted into machine code.
  - The translator (Compiler, Interpreter, or JIT) performs this **translation**.

---

## 🔚 Quick Summary

| Method          | How it Works                       | Speed  | Flexibility |
| --------------- | ---------------------------------- | ------ | ----------- |
| **Compiler**    | Translates whole code upfront      | 🔥🔥🔥 | ❌          |
| **Interpreter** | Executes code line by line         | 🐢     | ✅          |
| **JIT**         | Starts interpreter, then speeds up | ⚡🔥   | ✅          |

---

## RAM and CPU and Call Stack Analogy

- **RAM** = The worktable where all tools and code you will use are placed.
- **CPU** = The worker who operates on the table and follows instructions.
- **Call Stack** = The to-do list on the table that the worker follows.
- The worker (CPU) reads from the list (Stack), grabs tools from the table (RAM), and works.

---
