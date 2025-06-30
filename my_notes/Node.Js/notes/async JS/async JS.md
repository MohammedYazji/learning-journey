# Asynchronous JavaScript: Promises & Async/Await

---

## 📚 Table of Contents

- [🔥 Why Learn Asynchronous JavaScript?](#-why-learn-asynchronous-javascript)
- [💀 Callback Hell](#-callback-hell)
- [🧩 Solving Callback Hell with Promises](#-solving-callback-hell-with-promises)
- [🧠 Promise Basics Refresher](#-promise-basics-refresher)
- [✨ Async/Await: Syntax Sugar for Promises](#-asyncawait-syntax-sugar-for-promises)
- [🧵 Run Multiple Promises in Parallel with Promiseall](#-run-multiple-promises-in-parallel-with-promiseall)
- [✅ Final Takeaways](#-final-takeaways)
- [🧠 Use Cases in Real Projects](#-use-cases-in-real-projects)

---

## 🔥 Why Learn Asynchronous JavaScript?

JavaScript is **single-threaded** and **non-blocking** by design. This makes asynchronous code essential when dealing with:

- API calls

- File operations (e.g., in Node.js)

- Timers & user interactions

Mastering `callbacks`, `promises`, and `async/await` will help you write cleaner, more maintainable code — especially in backend development with Node.js.

---

## 💀 Callback Hell

### Problem:

Nesting multiple callbacks (like reading a file → calling an API → writing a file) quickly leads to unmanageable code:

```js

fs.readFile(..., () => {

  superagent.get(..., () => {

    fs.writeFile(..., () => {

      // etc.

    });

  });

});

```

This is **Callback Hell**:

- Deeply nested pyramid structure

- Hard to debug & read

- Error handling becomes complex

---

## 🧩 Solving Callback Hell with Promises

### ✅ SuperAgent with Promises:

```js
superagent
  .get("https://dog.ceo/api/breed/retriever/images/random")

  .then((res) => console.log(res.body.message))

  .catch((err) => console.error(err));
```

### ✅ Promisifying Node.js Callbacks:

```js
const readFilePro = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) reject("File not found");
      else resolve(data);
    });
  });
```

Chaining becomes clean:

```js
readFilePro("dog.txt")
  .then((data) =>
    superagent.get(`https://dog.ceo/api/breed/${data}/images/random`)
  )

  .then((res) => writeFilePro("dog-img.txt", res.body.message))

  .then(() => console.log("✅ Image saved"))

  .catch((err) => console.error(err));
```

---

## 🧠 Promise Basics Refresher

| State     | Description                           |
| --------- | ------------------------------------- |
| Pending   | Waiting for async operation to finish |
| Fulfilled | Operation completed successfully      |
| Rejected  | Operation failed (error)              |
| Resolved  | Either fulfilled or rejected\|        |

---

## ✨ Async/Await: Syntax Sugar for Promises

### ✅ Example:

```js
async function getDogPic() {
  try {
    const data = await readFilePro("dog.txt");

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    await writeFilePro("dog-img.txt", res.body.message);

    console.log("✅ Dog image saved");
  } catch (err) {
    console.error("💥", err);
  }
}

getDogPic();
```

### 🔄 How `await` Works:

- Pauses execution inside `async` function until promise resolves

- Replaces chaining with synchronous-looking code

### ⚠️ Rules:

- `await` only works inside `async` functions

- Use `try...catch` to handle errors

- Avoid mixing `.then()` with `await`

---

## 🧵 Run Multiple Promises in Parallel with `Promise.all`

### ❌ Slow Way (Sequential):

```js
const res1 = await fetch(url1);

const res2 = await fetch(url2);

const res3 = await fetch(url3);
```

### ✅ Fast Way (Parallel):

```js
const p1 = fetch(url1);

const p2 = fetch(url2);

const p3 = fetch(url3);

const results = await Promise.all([p1, p2, p3]);
```

### ✅ Transforming the Result:

```js
const imageUrls = results.map((res) => res.body.message);

fs.writeFile("dog-images.txt", imageUrls.join("\n"), (err) => {
  if (err) console.error(err);
  else console.log("✅ Images saved");
});
```

---

## ✅ Final Takeaways

| Concept        | Summary                                      |
| -------------- | -------------------------------------------- |
| Callback Hell  | Deep nesting of callbacks → hard to maintain |
| Promises       | Help flatten structure, support chaining     |
| Async/Await    | Cleaner syntax for consuming promises        |
| Promise.all    | Run multiple promises in parallel\|          |
| Error Handling | Use .catch() or try...catch                  |

---

## 🧠 Use Cases in Real Projects

- Handling multiple API requests

- Reading/writing files in Node.js

- Fetching remote data for frontend apps

- Performing database queries concurrently
