# 🧩 Destructuring, Spread & Rest in JavaScript

## 📚 Table of Contents

1. [Destructuring Arrays](#destructuring-arrays)
2. [Destructuring Objects](#destructuring-objects)
3. [Spread Operator `...`](#-spread-operator-)
4. [Rest Pattern & Parameters](#rest-pattern-and-parameters)

---

## Destructuring Arrays

- **Introduction to Array Destructuring**
  - Destructuring is a modern JavaScript feature for extracting values from arrays or objects and storing them in variables. It simplifies handling complex data structures without creating many individual assignments.
- **Basic Array Destructuring Syntax**
  - Declare multiple variables in a single line using square brackets.
    Example:
  ```js
  const [x, y, z] = [2, 3, 4];
  ```
  - This assigns `x=2`, `y=3`, `z=4`.
- **Selecting Specific Elements**
  - To extract non-sequential items, leave gaps in the brackets.
    Example:
  ```js
  const [first, , second] = ["Italian", "Pizzeria", "Vegetarian"];
  ```
  - Skips the second item.
- **Switching Variables**
  - Destructuring can simplify swapping variables without using temporary storage:
  ```js
  [main, secondary] = [secondary, main];
  ```
- **Destructuring Function Return Values**
  - Functions can return multiple values as arrays, which can be unpacked immediately.
    Example:
  ```js
  const [starter, main] = restaurant.order(2, 0);
  ```
- **Nested Array Destructuring**
  - Destructure nested arrays by using multiple bracket pairs.
    Example:
  ```js
  const [i, , [j, k]] = [2, 4, [5, 6]];
  ```
  - This extracts `i = 2`, `j = 5`, and `k = 6`
- **Setting Default Values**
  - Use default values for destructuring when the array length is uncertain.
    Example:
  ```js
  const [p = 1, q = 1, r = 1] = [8, 9];
  ```

---

## Destructuring Objects

- **Basics of Object Destructuring**
- Uses `{}` to extract properties from an object, where variable names match `property name`

  ```js
  const { name, categories, openingHours } = restaurant;
  ```

- **Renaming Variables**
  - Use `:` to rename destructured variables.
  ```js
  const {
    name: restaurantName,
    openingHours: hours,
    categories: tags,
  } = restaurant;
  ```
- **Default Values**

  - Default values are helpful for properties that might not exist.

  ```js
  const { menu = [], starterMenu: starters = [] } = restaurant;
  ```

- **Mutating Variables While Destructuring**

  - Wrap the assignment in parentheses `()` when updating existing variables.

    ```js
    let a = 1;
    let b = 2;
    const obj = { a: 23, b: 7, c: 14 };
    ({ a, b } = obj);
    ```

  ```

  ```

- **Nested Objects**

  - Destructure nested objects by specifying the inner structure.

  ```js
  const {
    fri: { open: o, close: c },
  } = openingHours;
  ```

- **Using Destructuring in Functions**

  - Destructure parameters in functions for better readability, especially when dealing with many parameters.

  ```js
  function orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(`Order received! Delivery to ${address} at ${time}`);
  }
  ```

---

## 🧩 Spread Operator `...`

### 🔹 What is the Spread Operator?

- The **spread operator (`...`)** allows you to **expand** elements of an **iterable** (like arrays or strings) into individual elements.

- It is used:

  - Inside **array literals**

  - When **passing function arguments**

  - In **object literals** (ES2018+)

---

### 🔹 Use Cases & Examples

#### 1. ✅ Creating New Arrays

```js
const arr = [7, 8, 9];
const newArr = [1, 2, ...arr]; // [1, 2, 7, 8, 9]
```

- Expands the `arr` values into individual elements inside the new array.

---

#### 2. ✅ Passing Arguments to Functions

```js
const numbers = [1, 2, 3];
console.log(...numbers); // 1 2 3
```

- The spread operator breaks the array into separate function arguments.

---

#### 3. ✅ Extending Arrays with New Elements

```js
const mainMenu = ["Pizza", "Pasta", "Risotto"];
const newMenu = [...mainMenu, "Gnocchi"];
```

- Creates a **new array** with additional items.
- The original array is not affected (immutability).

---

#### 4. ✅ Copying Arrays (Shallow Copy)

```js
const copyMenu = [...mainMenu];
```

- Useful for copying arrays without affecting the original.

---

#### 5. ✅ Merging Arrays

```js
const starterMenu = ["Focaccia", "Bruschetta"];
const fullMenu = [...starterMenu, ...mainMenu];
```

- Combines multiple arrays into one.

---

#### 6. ✅ Working with Strings

```js
const name = "Jonas";
const letters = [...name, "", "S"];
console.log(letters); // ['J', 'o', 'n', 'a', 's', '', 'S']
```

- Strings are iterable, so they can be spread into individual characters.

---

#### 7. ✅ Function Example: Pasta Order

```js
const ingredients = ["Mushrooms", "Asparagus", "Cheese"];
restaurant.orderPasta(...ingredients);
```

- Instead of writing: `restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])`

---

#### 8. ✅ Using Spread with Objects (ES2018+)

```js
const newRestaurant = {
  ...restaurant,
  founder: "Giuseppe",
  foundedIn: 1998,
};
```

- Copies all existing properties and adds/overrides others.
- **Note**: Spread in objects only works with object literals, not class instances.

---

#### 9. ✅ Copying Objects (Shallow Copy)

```js
const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
```

- Creates a new object copy.
- Changes in the copy do **not affect** the original.

---

### 📝 Important Notes

- Works only on **iterables**: arrays, strings, maps, sets (not objects before ES2018).
- The spread operator:
  - Does **not create variables** (unlike destructuring).
  - Can be used in **array/object literals** and **function calls**.
  - Performs a **shallow copy** (not deep).

---

## Rest Pattern and Parameters

- **Spread vs Rest Syntax**

| Feature  | Spread                           | Rest                             |     |
| -------- | -------------------------------- | -------------------------------- | --- |
| Purpose  | Unpacks values                   | Collects values                  |     |
| Position | Right of `=` or in function call | Left of `=` or in parameter list |     |
| Use with | Arrays, Objects, Function calls  | Destructuring, Function params   |     |
| Example  | `add(...[1,2,3])`                | `function add(...nums)`          |     |

- **Rest in Array Destructuring**

  ```js
  const [a, b, ...others] = [1, 2, 3, 4, 5];
  ```

  - **Used on the left** of the assignment.
  - Collects the remaining array elements into a new array.
  - **It must be the last element** in destructuring.
  - Skipped elements are not included.

- **Rest in Object Destructuring**.

  - Collects remaining properties into a **new object**.
  - Useful for separating specific keys.

  ```js
  const { sat, ...weekdays } = openingHours;
  ```

- **Rest Parameters in Functions**

  - Allows functions to accept **any number of arguments**.
  - `...numbers` collect all arguments into an array

  ```js
  function add(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    console.log(sum);
  }
  ```

- **Spread + Rest Together**

  - **Spread**: unpack x values into individual arguments.
  - **Rest**: collects them into a single parameter inside the function.

  ```js
  const x = [23, 5, 7];
  add(...x); // Spread when calling, rest inside the function
  ```

- **Real-World Example: Pizza Order**

  - Great for optional arguments.
  - The first argument is required, and the rest are optional

  ```js
  orderPizza = function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  };
  orderPizza("Mushrooms", "Onion", "Olives", "Spinach");
  // "Mushrooms", ["Onion", "Olives", "Spinach"]
  ```
