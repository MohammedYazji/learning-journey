# Strict Mode
---

Quick Links:

- [[#How to Activate Strict Mode]]
- [[#Benefits of Strict Mode]]
- [[#Example]]

---

## How to Activate Strict Mode

- To enable Strict Mode, add `"use strict"` as the first line of your script.
- It must be the **first statement** for the mode to activate. Comments before this are allowed, but no code.

---

## Benefits of Strict Mode

- **Forbids certain actions:**  
  It prevents developers from writing unsafe or erroneous code.
- **Visible errors:**  
  Strict Mode shows errors in the console where normal JavaScript would fail silently.

---

## Example

- An example is shown where a typo in a variable name is missed in regular JavaScript.  
- Strict Mode detects the typo and raises an error in the console, helping to prevent silent bugs.

### 🐞 Without Strict Mode (Bug is silent)

```js
function sayHi() {
  let username = "Sara";
  usernme = "Lina"; // typo: 'username' is misspelled
  console.log(username); // still logs "Sara"
}

sayHi(); // No error, bug goes unnoticed
```


### ✅ With Strict Mode (Catches the typo)

```js
"use strict";

function sayHi() {
  let username = "Sara";
  usernme = "Lina"; // ❌ ReferenceError: usernme is not defined
  console.log(username);
}

sayHi(); // Error in console due to typo
```