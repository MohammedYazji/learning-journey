# 💡 Real-World Example: Web API Data (like a recipe app)

Imagine you fetch a list of recipes from an API:

- Each recipe is an **object** with keys like `title`, `publisher`, etc.
- All the recipes are stored in an **array** → because it’s a simple list.

```js
const recipes = [
  { title: "Pizza", publisher: "Jonas" },
  { title: "Pasta", publisher: "Gordon" },
  // ...
];
```

- So you use an **array of objects**.
    
- This structure is **very common** in JavaScript development.