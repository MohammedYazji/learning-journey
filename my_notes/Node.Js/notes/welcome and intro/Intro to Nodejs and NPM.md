# 📘 Node.js & NPM Simplified Notes

---

## 📑 Table of Contents

1. [🚀 What Is Node.js?](#-what-is-nodejs)
2. [🧪 Running JS Outside the Browser](#-running-js-outside-the-browser)
3. [🔄 Blocking vs Non-Blocking](#-blocking-vs-non-blocking)
4. [📦 Node.js Modules](#-nodejs-modules)

   - [Core Modules](#1-core-modules)
     - [File System (`fs`)](#file-system-fs)
     - [HTTP Module](#http-module)
     - [Routing Example](#url-module-routing)
   - [🧱 Own Modules (Custom)](#2-own-modules)

   - [🌐 3rd Party Modules](#3-3rd-party-modules)

5. [📄 Simple Web API Example](#-simple-web-api-example)
6. [🔍 Dynamic Routing (Query Params)](#-dynamic-routing-query-params)
7. [📦 NPM (Node Package Manager)](#-npm-node-package-manager)

   - [What is NPM?](#what-is-npm)
   - [When to use NPM](#why-use-npm)
   - [Init Project & Install](#init-a-project)
   - [Install Packages](#install-third-party-packages)
   - [`package.json` Overview](#packagejson-example)

8. [Types of Packages & Installation in NPM](#-types-of-packages--installation-in-npm)
   - Types of Dependencies
   - Types of Installation
9. [🚀 Using `nodemon`](#-using-nodemon)
10. [📦 Versioning in NPM](#-versioning-in-npm)
11. [✨ Prettier Setup in VS Code](#-prettier-setup-in-vs-code)

---

## 🚀 What Is Node.js?

- JavaScript runtime built on Chrome's **V8 engine**
- Runs JS **outside the browser**
- Lets you build **server-side apps** using JavaScript

### ✅ Why Use Node.js?

- Single-threaded, non-blocking I/O
- Ideal for real-time, data-intensive apps (e.g., chat, streaming)
- Used by Netflix, Uber, PayPal
- NPM ecosystem + strong community

### ⛔ When Not to Use:

- Heavy CPU tasks (e.g., video processing)

---

## 🧪 Running JS Outside the Browser

- Using REPL **Read-Eval-Print Loop**
  - Simply run `node` in your terminal to enter **interactive mode** (REPL).
  - This allows you to run **JavaScript directly from your terminal** — no browser needed.

```bash
node
> 10 + 5
15
> _ * 2
30
```

- `_` holds the last result
- REPL lets you test code quickly in terminal
- Pressing Tab shows a list of all available global variables and functions.

---

## 🔄 Blocking vs Non-Blocking

### ⚙️ Node.js is Asynchronous & Non-Blocking

- Node.js handles operations (like file reading or network requests) in a **non-blocking** way using **callbacks**, **promises**, and **async/await**.
- This allows the program to continue executing without **waiting** for slow tasks to finish.

📌 **Blocking =**

> Code execution is paused until the operation completes (e.g., readFileSync).

📌 **Non-Blocking =**

> Code continues running while the operation is handled in the background

### ❓ Why Use Callbacks, Promises, and Async/Await in JavaScript?

- JavaScript (especially in Node.js) is **single-threaded**.
- Using async patterns helps us:
  - Avoid blocking the **main thread**.
  - Write efficient, responsive code.
  - Handle tasks like **file I/O**, **API calls**, and **database queries**

### 🔻 Callback Hell

- Happens when many nested callbacks make the code:
  - Hard to **read**
  - Hard to **debug**
  - Hard to **maintain**

🛠️ **Solution:**

- Use **Promises** or **async/await** to flatten and clean up async logic

---

## 📦 Node.js Modules

### 1. Core Modules

- Node.js provides built-in (core) modules that give access to low-level system tasks that **can’t be done in the browser** (like working with files).
- You can explore them here:
  🔗 [Node.js Documentation (API)](https://nodejs.org/docs/latest/api/)

#### File System (`fs`)

- The fs module allows you to read and write files on your computer.

```js
const fs = require("fs");

// Synchronous
const text = fs.readFileSync("./input.txt", "utf-8");
fs.writeFileSync("./output.txt", `Text: ${text}`);

// Asynchronous
fs.readFile("./start.txt", "utf-8", (err, data) => {
  if (err) return;
  fs.writeFile("./output.txt", data, () => {});
});
```

##### 🧠 Notes

- `fs.readFile()` and `fs.writeFile()` are **asynchronous** and use **callback functions**.
- This prevents **blocking** the event loop while waiting for file operations.
- Preferred in **production apps** to ensure better performance and scalability.
- Always handle errors inside the callback (e.g., `if (err)`).

---

#### HTTP Module

- A built-in Node.js module that allows you to **create a web server**.
- You can handle **HTTP requests and responses** without needing any external libraries.
- Useful for building **APIs**, **backend servers**, and learning how servers work under the hood.

##### 🛠️ Creating a Simple Web Server

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hello from server");
});

server.listen(8000, "127.0.0.1");
```

##### Notes:

- `http.createServer()` takes a **callback function** that gets executed every time a **new request** hits the server.
- This callback receives two objects:
  - `req`: the **incoming request** object (contains info like URL, method, headers).
  - `res`: the **response** object (used to send back data).
- `server.listen()` starts the server and waits for client requests.
  - `8000` is the port number.
  - `127.0.0.1` is the local loopback IP address (localhost).
  - The callback runs once the server starts successfully.
- `res.end()` is used to **end the response and send data back to the client**.
- Every request triggers the callback inside `http.createServer`.

---

#### URL Module (Routing)

- **Routing** is the process of defining different responses for different **URL paths**.
- It allows your server to handle **multiple endpoints** (like `/`, `/product`, etc.).

```js
if (req.url === "/") res.end("Overview");
else if (req.url === "/product") res.end("Product");
else {
  res.writeHead(404, { "content-type": "text/html" });
  res.end("<h1>Page not found!</h1>");
}
```

##### Notes:

- In the `http.createServer()` callback, the incoming `req` (request) object has a `.url` property.
- ✅ `req.url`: Gets the current route/path (e.g. `/`, `/product`, etc.).
- ✅ `res.end()`: Sends a plain text or HTML response to the client.
- ✅ `res.writeHead(statusCode, headers)`:
  - Sends a **status code** (e.g., 404).
  - Sets **response headers** (e.g., `content-type`).
- ✅ You can serve different content types like:
  - `text/html` → to send HTML
  - `application/json` → to send JSON
  - `text/plain` → to send plain text
- - You can also handle query parameters like `/product?id=123`, by parsing the URL using the built-in `url` or `querystring` module

---

### 2. Own Modules

#### Export/Import

```js
// replaceTemplate.js
module.exports = (template, product) => {
  return template.replace(/{%PRODUCTNAME%}/g, product.productName);
};

// index.js
const replaceTemplate = require("./modules/replaceTemplate");
```

##### Why Use Own Modules?

- Helps **organize code** by separating logic into reusable files.
- Makes code **cleaner**, **modular**, and **easier to maintain**.
- In this case, we extracted the `replaceTemplate()` function into its **own module**.

##### Notes:

- ✅ Splitting code into modules increases maintainability.
- ✅ Use `module.exports` to **export** functionality from a file.
- ✅ Use `require()` to **import** it wherever needed.

---

### 3. 3rd Party Modules

- You can use third-party modules like `slugify` to add more functionality to your app.

```bash
npm install slugify
```

```js
const slugify = require("slugify");
const slugs = products.map((p) => slugify(p.name, { lower: true }));
```

##### ❓ What is a slug?

- A **slug** is the **last part of a URL**, usually a readable, hyphenated version of a name or title.
- Instead of showing an `id` in the URL, you can use a **unique string** like: `/product/fresh-avocado`

- Go to [npmjs.com](https://www.npmjs.com/) and search for `slugify` to know more about what this package can do.

### Pro Tips:

**Import Order Best Practice:**

1. **Core modules:** Built-in Node.js modules (e.g., `fs`, `http`, `url`)
2. **Third-party modules:** Installed via npm (e.g., `slugify`)
3. **Local modules:** Your own files (e.g., `./modules/replaceTemplate`)

**Why?**

This order improves code readability and helps quickly identify where each module comes from.

---

## 📄 Simple Web API Example

### 🔹 What Is a Web API?

- A **Web API** is a service that provides data to clients, typically in **JSON format**.
- Clients can fetch data by making **HTTP requests** to specific endpoints like `/api`.

### Example

When a user visits `/api`, the server should:

1. **Read data** from a local JSON file.
2. **Parse it** into a usable JavaScript object (if needed).
3. **Send the data** back to the client as a JSON response.

```js
const data = fs.readFileSync("./data.json", "utf-8");

if (req.url === "/api") {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(data);
}
```

### Key Takeaways

- ✅ Use `fs.readFileSync()` at the top to read data **once** at startup.
- ✅ Return JSON with proper headers:

```js
res.writeHead(200, { "content-type": "application/json" });
```

- ✅ You **don’t need to parse** the JSON before sending it if you’re just returning it as a string.
- ✅ Use `__dirname` to safely reference files relative to the current file.

---

## 🔍 Dynamic Routing (Query Params)

```js
const { query, pathname } = url.parse(req.url, true);

if (pathname === "/product") {
  const product = data[query.id];
  const output = replaceTemplate(template, product);
  res.end(output);
}
```

- ✅ `url.parse(req.url, true)` is used to extract both the `pathname` and `query` from the URL.
- ✅ Query params like `?id=0` let us serve **dynamic product pages**.
- ✅ The `replaceTemplate()` function fills the product template with real data from the JSON file.
- ✅ Routing is handled manually using conditionals and path checks.

---

## 📦 NPM (Node Package Manager)

### What is NPM?

- **NPM** is the **Node Package Manager** — a command-line tool used to:
  - Install and manage **third-party packages (modules)**.
  - Share and reuse **open-source JavaScript code**.
- It is the **default package manager** for Node.js.
- Official website: 🔗 [https://www.npmjs.com/](https://www.npmjs.com/)

### Why Use NPM?

- Helps developers **reuse code** written by others (e.g. Express, Lodash, dotenv, etc.).
- Avoids **reinventing the wheel**.
- Makes project setup and dependency management fast and reliable.

### Init a Project

- This command sets up a new Node.js project by creating a `package.json` file.
- The `package.json` file contains:
  - Project metadata (name, version, description, etc.).
  - Scripts (like `start` or `dev`).
  - List of **dependencies** (third-party packages you install).
- You’ll run this at the **beginning of almost every Node.js project**.

```bash
npm init
```

### Install Third-Party Packages

When you install packages (e.g. using `npm install express`), they will:

- Be added to the `node_modules/` folder.
- Be listed under `dependencies` in `package.json`.

```bash
npm install slugify
npm install nodemon --save-dev
```

### `package.json` Example

```json
"dependencies": { "slugify": "^1.6.6" },
"devDependencies": { "nodemon": "^3.1.10" }
```

### Key Concepts Recap

- ✅ NPM is a CLI for installing, updating, and managing packages.
- ✅ `npm init` initializes a Node.js project with a `package.json`.
- ✅ `node_modules` is the folder where packages get installed.
- ✅ `npm install <package>` adds a package to your project.

---

## 📦 Types of Packages & Installation in NPM

### 🔹 1. Types of Dependencies

There are two main categories of packages you install using NPM:

---

- ✅ **1. Regular Dependencies**

  - These are packages your **application (Code) depends on to run**.
  - Example: `express`, `slugify`
  - Installed with:

    ```bash
    npm install slugify

    ```

    > 📝 In the past, you’d use --save, but now it’s added to dependencies by default.

- 🧪 **2. Development Dependencies**

  - These are **tools** used during development only, not required when your app runs in production.
  - Example: `nodemon`, testing libraries
  - Installed with:

    ```bash
    npm install nodemon --save-dev

    ```

  - The application (Code) **doesn't need them to run**, but **you** need them during development.

- 📁 **Example `package.json`**

  ```json
  {
    "name": "node-farm",
    "version": "1.0.0",
    "description": "learning nodejs",
    "license": "ISC",
    "author": "yazji",
    "type": "commonjs",
    "main": "index.js",
    "scripts": {
      "test": "echo \\"Error: no test specified\\" && exit 1"
    },
    "dependencies": {
      "slugify": "^1.6.6"
    },
    "devDependencies": {
      "nodemon": "^3.1.10"
    }
  }

  ```

---

### 🔹 2. Types of Installation

- 📍 **1. Local Installation**
  - Default installation mode, just work on this project
  - Installs packages to your project’s `node_modules/` folder, so node makes `node_modules` folder inside our project include all packages we want in this project
  - **Only available to that specific project.**
  - so why the `node_modules` so large and I just install two packages? because these packages **depend on another dependencies to run** 👍😁
  - so this **will not work anywhere else**
- 🌐 **2. Global Installation**

  - Installs the package **globally** on your computer.
  - can use it in any project you want instead install it each time
  - Example:

    ```bash
    npm install nodemon --global

    ```

### Pro Tips

- ✅ Use `npm i` as a shortcut for `npm install`.
- ✅ Use `-save-dev` for development tools.
- ✅ Global installs are good for tools (like `nodemon`, `eslint`, etc.).

---

## 🚀 Using `nodemon`

- Auto-restarts server on file changes

```bash
nodemon index.js
```

Or via script:

```json
"start": "nodemon index.js"
```

Run it:

```bash
npm start
```

---

## 📦 Versioning in NPM

- Versions are found in **package.json** (e.g., `1.18.1`).
- Version format: **major.minor.patch**
  - **Patch:** Bug fixes and small changes (e.g., 1, 2, 3...).
  - **Minor:** Adds features without breaking compatibility.
  - **Major:** Big releases that may include breaking changes (e.g., function signature changes).
- Version prefixes:
  - `^` Accepts all minor and patch updates (less strict).
  - `~` Accepts only patch updates (more strict and safer).

```bash
npm outdated // Check outdated packages
npm install slugify@1.0.0 // Install a specific version
npm update slugify // Update a package to the latest allowed version
npm uninstall slugify // Uninstall a package
```

- **node_modules Folder**
  - **Do NOT share** or upload `node_modules` folder to GitHub or others.
  - To share your project, delete `node_modules`.
  - When running `npm install`, it:
    - Reads the list of packages and versions from **package.json**
    - Downloads and installs those exact packages into `node_modules`.

---

## ✨ Prettier Setup in VS Code

1. **Enable Format on Save**  
   `Editor: Format On Save`
2. **Create `.prettierrc`**
   - You can create a .prettierrc file inside each project to define custom formatting rules.

```json
{
  "singleQuote": true
}
```

- This setting enforces the use of single quotes in your code.

3. **More Options**

   - To explore all available formatting options, visit:

   🔗 [https://prettier.io/docs/options](https://prettier.io/docs/options)
