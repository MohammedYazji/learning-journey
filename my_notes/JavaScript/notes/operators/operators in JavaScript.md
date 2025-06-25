# 🧮 Operators

- [Basic Operators](#basic-operators)
  - [Arithmetic Operators](#arithmetic-operators)
  - [Assignment Operators](#assignment-operators)
  - [Comparison Operators](#comparison-operators)
- [Operator Precedence](#operator-precedence)
- [Advanced Operators](#advanced-operators)
  - [Truthy & Falsy Values](#-truthy--falsy-values)
  - [Equality Operators: `===` vs `==`](#equality-operators--vs-)
  - [Boolean Logical Operators: AND, OR, NOT](#boolean-logical-operators-and-or-not)
  - [The Conditional Ternary Operator](#the-conditional-ternary-operator)
  - [Short Circuiting (&& and ||)](#short-circuiting--and-)
  - [Nullish Coalescing Operator (`??`)](#nullish-coalescing-operator-)
  - [Logical Assignment Operators](#logical-assignment-operators)
    - [OR Assignment (`||=`)](#1-or-assignment-)
    - [Nullish Assignment (`??=`)](#2-nullish-assignment-)
    - [AND Assignment (`&&=`)](#3-and-assignment-)

---

## Basic Operators

### Arithmetic Operators

- **Addition:** `+`
- **Subtraction:** `-`
- **Multiplication:** `*`
- **Division:** `/`
- **Exponentiation:** `**`
- **Modulus:** `%`
- **Decrement (—):**
  - **Post-decrement:** _perform operation then decrement_ (e.g., `num--`)
  - **Pre-decrement:** _decrement then perform operation_ (e.g., `--num`)
- **Increment (++):**
  - **Post-increment:** _perform operation then increment_ (e.g., `num++`)
  - **Pre-increment:** _increment then perform operation_ (e.g., `++num`)

### Assignment Operators

- `=`
- `+=`
- `-=`
- `*=`
- `/=`

### Comparison Operators

- **Equality:** `==`  
  Checks equality after type conversion.
- **Not Equal:** `!=`
- **Strict Equality:** `===` _(use it 👍)_  
  Compares both value _and_ data type.
- **Strict Not Equal:** `!==`
- **Greater Than:** `>`
- **Greater Than or Equal:** `>=`
- **Less Than:** `<`
- **Less Than or Equal:** `<=`

## Operator Precedence

- Reference: [MDN Operator Precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence)

### Example

```jsx
const now = 2025;
const ageMohammed = now - 2003;
const ageYosif = now - 2010;

console.log(now - 2003 > now - 2010);

// left to right =>
console.log(25 - 10 - 5);

// right to left assignment operators <=
let x, y;
x = y = 25 - 10 - 5; // x = y = 10 => x = y = 10, x = 10
console.log(x, y);

// here () first, it's stronger than the rest
const averageAge = (ageMohammed + ageYosif) / 2;
console.log(ageMohammed, ageYosif, averageAge);
```

## Advanced Operators

### ✅❎ Truthy & Falsy Values

- **List of Falsy Values**  
   The 5 falsy values in JavaScript:
  - `0`
  - Empty string (`""`)
  - `undefined`
  - `null`
  - `NaN`
- Anything else is truthy.
- **Implicit Boolean Coercion**  
   JavaScript automatically converts values during logical operations and conditionals:
  - Logical operations
  - Conditional statements (e.g., `if-else` )  
     Example:  
     If `money = 0`, JavaScript converts it to `false` (falsy), triggering the else block to display `"You should get a job."`

---

### Equality Operators: `===` vs `==`

- **Strict Equality (`===`) vs. Loose Equality (`==`)**
  - **Strict Equality (`===`)**: Compares both value and type without type coercion.
  - **Loose Equality (`==`)**: Allows type coercion, comparing only values and not types.
  - Example:  
     `"18" === 18` returns `false` (different types), but  
     `"18" == 18` returns `true` (due to type coercion).
- **Type Coercion with Loose Equality (`==`)**  
   Loose equality can cause unexpected results because of type coercion.  
   Example: `"18" == 18` converts the string `"18"` to number `18` before comparison.  
   This can introduce **bugs** that are hard to detect.
- **Avoiding Loose Equality (`==`)**
  - **Best Practice:** Use **strict equality (`===`)** for reliable code.
  - **Manual Conversion:** Convert types manually when necessary instead of relying on loose equality.  
     Example:  
     `Number("23") === 23` ensures both values are of the same type.
- **Prompt Example**
  - Use the `prompt()` function to get user input (input is stored as a string).
  - **Issue:** When comparing input with numbers, the result may be incorrect.
  - **Solution:** Convert the string to a number using `Number()` before comparison.
- **Comparison Operators**
  - **Equality Operator:** (`===` for strict, `==` for loose) compares if values are the same.
  - **Different Operator:** (`!==` for strict, `!=` for loose) compares if values are different.
  - **Recommendation:** Always use the **strict version** (`!==`) to avoid issues with type coercion.

---

### Boolean Logical Operators: AND, OR, NOT

- **AND Operator `&&`**
  - Combines two Boolean values, returning **true** only if _both_ conditions are **true**.
  - Truth table: result is **false** if either condition is false.
  - Can extend to multiple conditions (A AND B AND C), all must be true for true result.
  - Examples:
    - `hasDriverLicense && hasGoodVision`
      - **True && True = True**
      - **True && False = False**
    - Explanation: Both conditions must be true.
- **OR Operator `||`**
  - Returns **true** if at least one condition is **true**.
  - Truth table: result is **false** only if _both_ conditions are false.
  - Opposite of AND operator.
  - Examples:
    - `hasDriverLicense || hasGoodVision`
      - **True || False = True**
    - Explanation: Only one condition needs to be true.
- **NOT Operator `!`**
  - Operates on a single Boolean value and **inverts** it.
  - If condition is **true**, NOT makes it **false**, and vice versa.
  - Examples:
    - `!hasDriverLicense` → changes `true` to `false`
    - Explanation: Inverts Boolean value.
- Example Image
  ![image.png](attachment:8a5465b0-2ce3-4570-a1be-e1bf8877a299:image.png)

---

### The Conditional Ternary Operator

- **Ternary Operator Structure**
  - Example: Checking if age ≥ 18 to print `"I like to drink kola"` or `"I like to drink water."`
  - Structure has three parts:
    1. **Condition**: The test (e.g., `age >= 18`)
    2. **If (True) Part**: Code executed when true
    3. **Else (False) Part**: Code executed when false
- **Ternary Operator as an Expression**
  - Produces a value, so it can be assigned to a variable  
     e.g.,
    ```js
    let drink = age >= 18 ? "wine" : "water";
    ```
- **Comparison to Traditional If/Else Statements**
  - Ternary simplifies code for simple conditions.
  - Use if/else for complex logic.
- **Usage in Template Literals and Conclusion**
  - Can be embedded in template literals:
    ```jsx
    console.log(`I like to drink
     ${age >= 18 ? "wine" : "water"}`); // { } allows expression inside
    ```
  - Useful for quick decisions and when JS expects an expression.
  - Conclusion: Not a replacement for if/else but great for concise code.

---

### _**Short Circuiting (&& and ||)**_

- **Key Properties**

  1. **Operands:** Can be _any data type_ (not just Booleans).
  2. **Return Values:** Can return _any data type_.
  3. **Short-Circuiting:** Evaluation stops early if result is determined.

     - In OR, if first operand is true, stops and returns it.

- **OR Operator (`||`)**
  - Returns the **first truthy operand** encountered.
  - If all operands falsy, returns the **last operand**.
  - Short-circuits if first operand truthy.
  - Examples:
    ```jsx
    3 || "Jonas"; // 3 (truthy)
    "" || "Jonas"; // 'Jonas' (first falsy, second truthy)
    true || 0; // true (truthy)
    undefined || null; // null (both falsy, returns last)
    ```
  - Practical Use: Default Values
    ```jsx
    // Set default if property is missing/falsy
    const guests1 = restaurant.numGuests || 10;
    // Problem: Fails if numGuests is 0 (falsy)
    ```
- **AND Operator (`&&`)** _(Opposite behavior)_
  - Returns the **first falsy operand** encountered.
  - If all operands truthy, returns the **last operand**.
  - Short-circuits if first operand falsy.
  - Examples:
    ```jsx
    0 && "Jonas"; // 0 (falsy)
    23 && "Jonas"; // 'Jonas' (both truthy, returns last)
    true && 0 && ""; // 0 (first falsy)
    ```
  - Practical Use: Conditional Execution
    ```jsx
    // Execute function only if property exists
    restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");
    // Replaces: if (restaurant.orderPizza) { ... }
    ```

---

### Nullish Coalescing Operator (`??`)

- **Purpose**  
   Fixes the `||` operator’s flaw with falsy-but-valid values like `0` or `""`.  
   Only treats `null` or `undefined` as fallback triggers.
- **Syntax**
  ```jsx
  const result = value1 ?? value2;
  // Returns value1 unless it’s null/undefined → then returns value2.
  ```
- **Default Guests Example**

  ```jsx
  // Problem with OR:
  const guestsBug = restaurant.numGuests || 10; // 10 if numGuests=0 → wrong!

  // Fixed with Nullish:
  const guestsCorrect = restaurant.numGuests ?? 10; // 0 if numGuests=0 ✅
  ```

---

### Logical Assignment Operators

#### 1. OR Assignment (`||=`)

- **Purpose**  
   Assigns a value only if the variable is falsy (`0`, `""`, `null`, `undefined`, etc.).
- **Syntax**
  ```jsx
  x ||= y;
  // Equivalent to: x = x || y;
  ```
- **Example**
  ```jsx
  // Problem: Overwrites 0 (falsy) with 10
  restaurant1.numGuests ||= 10;
  // If numGuests=0 → becomes 10 (❌ Bad for valid 0)
  ```

---

#### 2. Nullish Assignment (`??=`)

- **Purpose**  
   Assigns a value only if the variable is `null` or `undefined` (ignores other falsy like `0` or `""`).
- **Syntax**
  ```jsx
  x ??= y;
  // Equivalent to: x = x ?? y;
  ```
- **Example**
  ```jsx
  // Correctly keeps 0 (not nullish)
  restaurant1.numGuests ??= 10;
  // If numGuests=0 → stays 0 (✅)
  ```

---

#### 3. AND Assignment (`&&=`)

- **Purpose**  
   Assigns a value only if the variable is truthy.
- **Syntax**
  ```jsx
  x &&= y;
  // Equivalent to: x = x && y;
  ```
- **Example**
  ```jsx
  // Anonymize owner if it exists
  restaurant2.owner &&= "Anonymous";
  // If owner="Giovanni" → becomes "Anonymous"
  // If owner=undefined → remains undefined
  ```
