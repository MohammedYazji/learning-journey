# 📦 Variables in JavaScript
---

### 🔹 Variables Function Like Labeled Boxes

- A variable is a **named container** for storing data in memory.
- You can think of variables as **labeled boxes** where you store a value and then refer to it later by name.

---

### ✨ Declaring vs Initializing a Variable

- **Declaring a variable:**  
  You create a variable using `var`, `let`, or `const`.

```js
  let x; // x is declared but not initialized — it's undefined

```

- **Initializing a variable:**  
    You assign a value to the variable.
    
```js
	x = 5;         // initialization 
	let y = 10;    // declaration and initialization together
```

#### ✅ Summary:

- **Declaration** → Making the variable exist.
    
- **Initialization** → Giving the variable a value.
    

---

### 📝 Variable Naming Conventions

- Use **camelCase** for variable names (e.g., `firstName`, `myAge`).
    
- Valid characters: **letters**, **numbers**, **underscores (_)**, and **dollar signs ($)**.
    
- ❌ Don't start a variable name with a number.
    
- ❌ Don't use reserved keywords (like `function`, `new`, `class`, etc.).
    
- ❌ Avoid symbols like `&`, `%`, `#` in names.
    
- ✅ Always choose **descriptive names**:
    
```js
	// Bad:
     let a = 'Mohammed';  
     // Good:
      let userName = 'Mohammed';`
```

- Constants (unchanging values) should be in **UPPERCASE**:

```js
const PI = 3.14159;
```
