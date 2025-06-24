# What is The Console

---

- The console is a crucial tool for debugging web applications.
- We can also add JS code and run it inside the console.
- The console is one of the Web API properties, and JavaScript can access and interact with these Web API properties.
  - The console is an object that has many methods, such as:
    - `log`  
      - Displays output in the console.
      ```js
      console.log("This is a log message");
      ```
    - `error`  
      - Displays output in the console as an error.
      ```js
      console.error("This is an error message");
      ```
    - `table`  
      - Displays an array or object in the console as a table.
      ```js
      const users = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
      ];
      console.table(users);
      ```
    - `warn`  
      - Displays a warning message in the console.
      ```js
      console.warn("This is a warning message");
      ```

---

## Styling Console Output

- We can style console output with CSS by using the `%c` directive.

- For example:

```js
console.log("Hello From %cJS %cFile", "color: red; font-size: 40px", "color: blue; font-size: 40px");
```
