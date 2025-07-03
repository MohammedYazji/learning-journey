# Express.js

## Table of Contents

- [Introduction to Express.js](#introduction-to-expressjs)
- [Postman for API Testing](#postman-for-api-testing)
- [Setting Up Express & Basic Routing](#setting-up-express--basic-routing)
- [Node.js vs. Express.js: A Comparison](#nodejs-vs-expressjs-a-comparison)
- [APIs and RESTful API Design](#apis-and-restful-api-design)
- [Handling GET Requests](#handling-get-requests)
- [Handling POST Requests](#handling-post-requests)
- [Dealing with JSON](#dealing-with-json)
- [Responding to URL Parameters](#responding-to-url-parameters)
- [Handling PATCH Requests](#handling-patch-requests)
- [Handling DELETE Requests](#handling-delete-requests)
- [Refactoring Express Route Handlers](#refactoring-express-route-handlers)
- [Middleware and the Request-Response Cycle](#middleware-and-the-request-response-cycle)
- [Creating Custom Middleware](#creating-custom-middleware)
- [Using Third-Party Middleware (Morgan)](#using-third-party-middleware-morgan)
- [Implementing User Routes](#implementing-user-routes)
- [Creating and Mounting Multiple Routers](#creating-and-mounting-multiple-routers)
- [A Better File Structure: Modular Approach](#a-better-file-structure-modular-approach)
- [Param Middleware](#param-middleware)
- [Chaining Multiple Middleware Functions](#chaining-multiple-middleware-functions)
- [Environment Variables in Node.js & Express](#environment-variables-in-nodejs--express)

---

## Introduction to Express.js

Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. It simplifies the process of building robust APIs and web applications.

**What is Express?**

Express is a powerful Node.js framework built entirely with Node.js. It offers a higher-level abstraction over Node.js's core features, making web development faster and more efficient.

**Why use Express?**

Express comes with built-in features that streamline development:

- **Complex Routing**: Easily define how your application responds to client requests to specific endpoints.
- **Simplified Request/Response Handling**: Provides an intuitive way to handle incoming requests and send back responses.
- **Middleware Support**: Allows you to execute functions at various stages of the request-response cycle.
- **Server-side Rendering**: Supports rendering dynamic content on the server before sending it to the client.

**Benefits of using Express:**

- **Faster Development**: Reduces the need to write repetitive code, accelerating the development process.
- **Cleaner Architecture**: Supports architectural patterns like MVC (Model-View-Controller), leading to more organized and maintainable applications.
- **Simplifies Routing and Templating**: Offers a more straightforward approach to routing and working with templates compared to raw Node.js.

**Conclusion:**

Express significantly enhances the Node.js development experience, making it easier, faster, and more enjoyable to build scalable web applications.

---

## Postman for API Testing

Postman is an essential tool for API development and testing, allowing developers to send various HTTP requests and inspect responses.

**What is Postman?**

Postman is a robust tool used for API development and testing. It functions similarly to a web browser but is designed to send raw HTTP requests and receive responses, making it ideal for interacting with APIs. It allows you to:

- Send various HTTP methods like `GET`, `POST`, `PUT`, `PATCH`, `DELETE`.
- View and work with `JSON` responses.

**Why Use Postman?**

Postman is an industry standard for API testing due to its comprehensive features:

- **Collections/Folders**: Organize and save requests into collections for easy access and sharing.
- **Request Bodies**: Easily send data in request bodies for `POST`, `PUT`, and `PATCH` requests.
- **Headers**: Set custom HTTP headers.
- **Environment Variables**: Manage different environments (e.g., development, production) with distinct variable sets.
- **Automated Tests**: Run automated tests to ensure API functionality and performance.

**Quick Setup & Demo:**

1.  **Download**: Get Postman from [getpostman.com](https://getpostman.com/).
2.  **Optional**: Change to dark mode in settings > themes for a more comfortable viewing experience.
3.  **Example Test**: To test a `GET` request, use a public API like `https://dog.ceo/api/breeds/image/random`.
    - Select the `GET` method.
    - Click **Send**.
    - Observe the `JSON` response in the output area, which typically contains a random dog image URL.

**Going Forward:**

Postman will be extensively used to test all Express APIs developed throughout this learning journey, ensuring proper functionality and integration.

**Summary of Tools:**

| Tool    | Purpose                          | Key Features                                         |
| ------- | -------------------------------- | ---------------------------------------------------- |
| Express | Build backend apps using Node.js | Routing, middleware, MVC, server-side rendering      |
| Postman | Test APIs and send HTTP requests | Supports GET/POST/etc., JSON responses, environments |

---

## Setting Up Express & Basic Routing

This section guides you through setting up a basic Express.js project and defining your first routes.

**Project Setup: Natours Starter**

1.  **Prepare the starter project**: Download and open the Natours starter project. It typically includes configuration files (`.prettierrc`, `eslint`) and static assets (`css`, `img`, `dev-data`).

2.  **Initialize `package.json`**: Open your terminal in the project directory and run:

    ```bash
    npm init
    ```

    Follow the prompts, setting the `name` to `natours` (lowercase), `description` to `Learning Node, Express, and MongoDB`, and `entry point` to `app.js`. This creates the `package.json` file, which manages your project's metadata and dependencies.

3.  **Install Express (v4)**: Install Express as a project dependency:

    ```bash
    npm i express@4
    ```

    _Note_: It's recommended to use version 4 (`@4`) as version 5 is still in beta and may contain breaking changes. This command installs the latest stable v4 release (e.g., `4.18.x`). This action creates the `node_modules/` directory and adds `express` to the `dependencies` in your `package.json`.

4.  **Create `app.js`**: This file will serve as the main configuration file for your Express application. Create `app.js` and add the following basic server setup:

    ```javascript
    const express = require("express");
    const app = express();

    const port = 3000;

    app.listen(port, () => {
      console.log(`App running on port ${port}`);
    });
    ```

    This code initializes an Express application and starts a server listening on port 3000.

5.  **Define Your First Route**: Add a route to handle `GET` requests to the root URL (`/`):

    ```javascript
    app.get("/", (req, res) => {
      res.status(200).send("Hello from the server side!");
    });
    ```

    This route handler sends a plain text response with an HTTP status of `200 OK` when a `GET` request is made to the root path.

    To test this, run your application using `nodemon app.js` (assuming you have `nodemon` installed) and then navigate to `http://localhost:3000` in your browser or use Postman.

6.  **Use Postman to Test Routes**: Postman is invaluable for testing different HTTP methods.

    - **GET Request to `/`**: Sending a `GET` request to `http://localhost:3000` should return: `Hello from the server side!`

    - **JSON Response**: To send a JSON response, modify your route as follows:

      ```javascript
      app.get("/", (req, res) => {
        res.status(200).json({
          message: "Hello from the server side!",
          app: "natours",
        });
      });
      ```

      The `res.json()` method automatically sets the `Content-Type` header to `application/json`, eliminating the need for manual header configuration.

7.  **Add a POST Route**: Implement a `POST` route to handle incoming data:

    ```javascript
    app.post("/", (req, res) => {
      res.send("You can post to this endpoint.");
    });
    ```

    This handles `POST` requests to the root path and returns a plain text response with a default `200 OK` status.

    _Note_: If a route is undefined (e.g., `POST` to a path without a `POST` handler), Express will return a `404 Not Found` status with a message like `Cannot POST /`.

**Quick Notes: Express vs. Raw Node.js**

| Feature      | Express                    | Raw Node.js                 |
| ------------ | -------------------------- | --------------------------- |
| Server setup | `app.listen()`             | `http.createServer()`       |
| Routing      | `app.get()`, `app.post()`  | Manual parsing              |
| Response     | `res.send()`, `res.json()` | Manual header + `res.end()` |
| Headers      | Auto-managed               | Manual setup                |
| Middleware   | Built-in support           | Manual logic                |

**Key Takeaways:**

- Express significantly simplifies server setup and route handling compared to raw Node.js.
- `app.js` is typically your main configuration file.
- Postman is crucial for quickly testing different request types.
- `res.send()` is used for plain text responses, while `res.json()` is for JSON responses.
- HTTP methods (GET, POST, etc.) must be explicitly defined for each route.
- Express automatically sets `Content-Type` and other headers when using `res.json()` or `res.send()`.

---

## Node.js vs. Express.js: A Comparison

Understanding the differences and relationship between Node.js and Express.js is crucial for effective web development. Express.js is a framework built on top of Node.js, providing a more streamlined approach to building web applications.

**1. Server Setup**

- **Raw Node.js (`http` module):**

  ```javascript
  const http = require("http");

  const server = http.createServer((req, res) => {
    res.end("Hello from the server!");
  });

  server.listen(3000, () => {
    console.log("Server listening on port 3000");
  });
  ```

- **Express.js:**

  ```javascript
  const express = require("express");
  const app = express();

  app.listen(3000, () => {
    console.log("App running on port 3000");
  });
  ```

  **Express Advantage**: Offers a simpler API, cleaner syntax, and less boilerplate code for setting up a server.

**2. Basic Routing**

- **Raw Node.js:**

  ```javascript
  const server = http.createServer((req, res) => {
    if (req.url === "/" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Hello from the server!");
    }
  });
  ```

- **Express.js:**

  ```javascript
  app.get("/", (req, res) => {
    res.status(200).send("Hello from the server side!");
  });
  ```

  **Express Advantage**: Eliminates the need to manually check URL paths or HTTP methods, and automatically handles setting response headers.

**3. JSON Response**

- **Raw Node.js:**

  ```javascript
  const data = { message: "Hello", app: "node-farm" };

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
  ```

- **Express.js:**

  ```javascript
  res.status(200).json({
    message: "Hello",
    app: "natours",
  });
  ```

  **Express Advantage**: Provides automatic header handling and a cleaner way to send JSON responses.

**4. Handling Different HTTP Methods**

- **Raw Node.js:**

  ```javascript
  if (req.url === "/" && req.method === "POST") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("You posted to the server!");
  }
  ```

- **Express.js:**

  ```javascript
  app.post("/", (req, res) => {
    res.send("You can post to this endpoint.");
  });
  ```

  **Express Advantage**: Offers straightforward methods like `.get()`, `.post()`, and `.put()` for handling different HTTP methods per route.

**Summary Table:**

| Feature            | Raw Node.js                      | Express.js                       |
| ------------------ | -------------------------------- | -------------------------------- |
| Server setup       | `http.createServer()`            | `app.listen()`                   |
| Routing            | Manual URL/method checks         | `.get()`, `.post()` methods      |
| Response (text)    | `res.writeHead() + res.end()`    | `res.send()`                     |
| Response (JSON)    | `JSON.stringify() + set headers` | `res.json()`                     |
| HTTP headers       | Must set manually                | Auto-managed by Express          |
| Middleware support | Manual, complex                  | Built-in support                 |
| Readability        | Verbose, error-prone             | Clean, easy to read and maintain |
| Learning curve     | Good for fundamentals            | Great for real-world apps        |

**Final Thought:**

Express is built on top of Node.js, meaning that everything you learn in raw Node.js is still valuable and provides a deeper understanding of underlying mechanisms. However, Express empowers you to build applications faster, cleaner, and more efficiently.

---

## APIs and RESTful API Design

Understanding APIs and RESTful design principles is fundamental to building modern web services with Express.js.

**What is an API?**

An **API (Application Programming Interface)** is a set of rules and definitions that allows two different software applications to communicate with each other. APIs are not limited to the web; examples include Node.js's `fs` module, the browser DOM, and class methods in object-oriented programming.

**Types of APIs:**

- **Web APIs**: Focus on sending and receiving data via HTTP, which is the primary focus when building web services with Express.
- **Node APIs**: Built-in modules like `fs` (File System) and `http`.
- **Browser APIs**: Interfaces like the DOM (Document Object Model) and Fetch API.
- **Class-based APIs**: Objects that expose methods in object-oriented programming.

**What is REST?**

**REST (Representational State Transfer)** is an architectural style for designing networked applications. It defines a set of constraints for how web services should be structured, promoting scalability, maintainability, and reliability.

**Key REST Principles:**

1.  **Divide data into logical resources**: Represent data as resources, such as `/tours`, `/users`, or `/reviews`.
2.  **Use proper HTTP methods to operate on resources (Verbs)**: Each HTTP method corresponds to a specific action on a resource:
    - `GET` → Read/Retrieve data
    - `POST` → Create new data
    - `PATCH` / `PUT` → Update existing data (PATCH for partial, PUT for full replacement)
    - `DELETE` → Remove data
3.  **Resource-based URLs, not action-based**: URLs should describe the resource, not the action. For example, use `/tours` (with `GET` method) instead of `/getTour`.
4.  **Use plural nouns for resources**: Always use plural nouns for consistency, e.g., `/tours` instead of `/tour`.
5.  **Use path parameters for unique identifiers**: Include unique identifiers in the URL path to specify a particular resource, e.g., `/tours/5` to get the tour with ID 5.

**HTTP Methods → CRUD Mapping:**

| HTTP Method | Operation | Description                             |
| ----------- | --------- | --------------------------------------- |
| GET         | Read      | Fetch a resource or a list of resources |
| POST        | Create    | Add a new resource                      |
| PUT/PATCH   | Update    | Modify an entire or partial object      |
| DELETE      | Delete    | Remove a resource                       |

**Examples:**

- **Simple GET:**
  - `GET /tours` → Returns all tours.
  - `GET /tours/5` → Returns the specific tour with ID 5.
- **POST:**
  - `POST /tours` with a request body containing tour data → Creates a new tour.
- **PATCH:**
  - `PATCH /tours/5` with a request body containing updated fields → Partially updates tour 5.
- **DELETE:**
  - `DELETE /tours/5` → Deletes tour 5.
- **Nested Resources:**
  - `GET /users/3/tours` → Get all tours associated with user 3.
  - `DELETE /users/3/tours/9` → Delete tour 9 for user 3.

**Data Format: JSON**

JSON (JavaScript Object Notation) is the preferred data format for RESTful APIs due to its readability and ease of parsing. It's used for both sending and receiving data, and all keys must be strings.

**Example Response (JSend format):**

```json
{
  "status": "success",
  "data": {
    "tour": {
      "id": 5,
      "name": "The Forest Hiker"
      // ... other tour properties
    }
  }
}
```

This is an example of the **JSend format**, a basic enveloping technique that provides a consistent structure for API responses, indicating `status`, `results` (optional), and the actual `data`.

**Statelessness:**

REST APIs must be stateless, meaning the server should not remember previous requests. Each client request must contain all the necessary information for the server to process it independently.

- **Bad Example**: `/tours/nextPage` (server needs to track the current page).
- **Good Example**: `/tours/page/6` (client calculates and requests a specific page).

**Summary of REST Principles:**

- REST provides conventions for building predictable APIs.
- URLs should describe **resources**, not actions.
- HTTP methods define the **action** to be performed.
- JSON is the standard for **data exchange**.
- Statelessness ensures **every request stands on its own**.

---

## Handling GET Requests

This section focuses on building your first API route in Express.js to handle `GET` requests and retrieve data.

**Project Overview: Natours API**

We are building the **Natours API**, which will power a tour-booking web application. The final application will include features like tour listings, user accounts, login, maps, reviews, and bookings. Initially, we will focus solely on building the **API layer** (data, logic, endpoints) without the visual frontend.

**Why Build the API First?**

- **Separation of Concerns**: Clearly separates backend logic from frontend visuals.
- **Learning Focus**: Allows you to concentrate on core technologies like Express, MongoDB, and Mongoose.
- **Data and Server Architecture**: Emphasizes building a robust data and server architecture.

**API Preview Using Postman:**

- **Example Endpoint**: `GET /api/v1/tours`
  - This endpoint will return all tour data from the server, which will later be displayed on the frontend UI.
- **Example Single Tour Request**: `GET /api/v1/tours/:id`

  - This endpoint will return more detailed information about a specific tour, including start locations, tour guides, and reviews.

  _Note_: Some routes (e.g., `/users`) may be protected and require authentication.

**Step-by-Step: Create Your First Route**

1.  **Define the Route**:

    ```javascript
    app.get("/api/v1/tours", (req, res) => {
      // Handler logic here
    });
    ```

    - `app.get()`: Sets up the handler for `GET` requests.
    - `/api/v1/tours`: This is our RESTful endpoint. We use **versioning** (`v1`) in the route to allow for future upgrades and API evolution.

2.  **Load Tour Data from File**:

    For simplicity, we will use a **local JSON file** (`tours-simple.json`) as our data source instead of a database for now.

    ```javascript
    const fs = require("fs");

    const tours = JSON.parse(
      fs.readFileSync(`${__dirname}/dev-data/data/tours-simple.json`)
    );
    ```

    _Note_: This synchronous `readFileSync` operation is acceptable here because it happens only once when the server starts, not on every request.

3.  **Send Response to Client**:

    We will use **JSend formatting** to structure our API responses, making them clean and consistent.

    ```javascript
    res.status(200).json({
      status: "success",
      results: tours.length,
      data: {
        tours: tours,
      },
    });
    ```

    - `status`: Indicates the success or failure of the request (e.g., `"success"`, `"fail"`, or `"error"`).
    - `results`: (Optional) Provides the total number of items returned, useful for quick metadata.
    - `data`: Contains the actual data, usually nested within an object.

**Test in Postman:**

Send a `GET` request to `/api/v1/tours`.

- You should receive a `200 OK` status.
- The response body will contain a list of tour objects, wrapped in the JSend format (`{ status, results, data: { tours } }`).

**Summary:**

- You have successfully built your **first real Express route**: `GET /api/v1/tours`.
- You learned to load and return data from a local JSON file.
- You applied REST conventions and JSend formatting for structured responses.
- You implemented API versioning for future-proofing.

---

## Handling POST Requests

This section explains how to create a `POST` route handler in Express.js to allow clients to add new data to your application.

**Goal:**

To create a `POST` route handler that enables clients to add a new **tour** to our `tours-simple.json` "database."

**Route Setup:**

```javascript
app.post("/api/v1/tours", (req, res) => {
  // Logic here
});
```

- `app.post(...)`: Registers a handler specifically for HTTP `POST` requests.
- URL `/api/v1/tours`: Notice that the URL is **identical** to the `GET` request for tours. This adheres to REST principles where the same URL represents a resource, and the HTTP **method** (`GET` for read, `POST` for create) defines the action.

**Middleware – `express.json()`:**

```javascript
app.use(express.json());
```

- This middleware is crucial for **parsing incoming JSON** data from the request body.
- It adds a `req.body` property to the request object, allowing you to access the client-sent data as a JavaScript object.
- Without `express.json()`, `req.body` would be `undefined`.

**Creating a New Tour – Step by Step (Simulated Database Operations):**

1.  **Get New ID**: To simulate a database auto-increment, we generate a new ID based on the last existing tour.

    ```javascript
    const newId = tours[tours.length - 1].id + 1;
    ```

    _Note_: In a real database, the database system would handle ID generation automatically.

2.  **Merge ID + Body (Make the New Tour)**: Combine the newly generated `id` with the data submitted in `req.body`.

    - **Option 1: `Object.assign`**

      ```javascript
      const newTour = Object.assign({ id: newId }, req.body);
      ```

    - **Option 2: Spread Operator (More Modern and Recommended)**

      ```javascript
      const newTour = { id: newId, ...req.body };
      ```

    Both methods effectively merge the `id` with the user-submitted data. The spread operator is generally preferred for its cleaner syntax.

3.  **Add to Array**: Add the `newTour` object to your in-memory `tours` array.

    ```javascript
    tours.push(newTour);
    ```

4.  **Save to "Database" (JSON File)**: Write the updated `tours` array back to the `tours-simple.json` file.

    ```javascript
    fs.writeFile(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(tours),
      (err) => {
        if (err) {
          return res
            .status(500)
            .json({ status: "fail", message: "Could not save data" });
        }
        res.status(201).json({
          status: "success",
          data: {
            tour: newTour,
          },
        });
      }
    );
    ```

    - `fs.writeFile`: Use the asynchronous version to avoid blocking the Node.js event loop.
    - **Important**: The response (`res.status(...)`) must be sent _inside_ the `fs.writeFile` callback. This ensures that the response is sent only after the data has been successfully saved to the file. Sending the response outside the callback would result in the response being sent before the data is persisted.

**Common Mistakes:**

- **Forgetting `express.json()`**: This will cause `req.body` to be `undefined`.
- **Sending more than one response**: Attempting to send multiple responses for a single request will lead to an `Error: Can't set headers after they are sent to the client`.
- **Using `writeFileSync`**: The synchronous `writeFileSync` blocks the event loop, which is bad practice in asynchronous Node.js environments.

**Testing with Postman:**

1.  Create a `POST` request to `/api/v1/tours`.
2.  In the **Body** tab, select `raw` and `JSON`.
3.  Provide a JSON payload, for example:

    ```json
    {
      "name": "Test Tour",
      "duration": 10,
      "difficulty": "easy"
    }
    ```

4.  Send the request. Verify that:
    - The new object is logged in the console.
    - The response returns the new tour with a generated ID.
    - The `tours-simple.json` file is updated with the new entry.

**Bonus: Live Data Reload:**

When working with local JSON files, the file is typically read only once on application start. If you save changes to the file (e.g., via `fs.writeFile`), a development server like **nodemon** will usually detect the file change and auto-restart the server, making the newly added tours visible on the next `GET` request.

**Key Takeaways:**

- `POST` requests are used to **create** new resources.
- They use the **same URL** as `GET` requests for the same resource, but a **different HTTP method**.
- You **must use `express.json()`** middleware to parse the request body.
- Always send the response **after** asynchronous operations (like file writes) have completed.
- Prefer `fs.writeFile` (asynchronous) over `fs.writeFileSync` (synchronous) in callbacks.
- Use the spread syntax (`{ id, ...data }`) to merge objects cleanly.
- Always test your API endpoints thoroughly with Postman.

---

## Dealing with JSON

Working with JSON is a core part of building web APIs. Express.js provides convenient ways to handle JSON data, both for incoming requests and outgoing responses.

**1. `express.json()` (Middleware in Express)**

- **Purpose**: Automatically parses incoming JSON requests, making the data available as a JavaScript object on `req.body`.

- **When to use**:

  - In Express applications.
  - Apply it **once globally** at the top of your `app.js` file:

    ```javascript
    app.use(express.json());
    ```

  - It is needed **only on the server side** to read the `req.body` from client requests.

- **What it does internally**:

  - It reads raw incoming request data, such as:

    ```json
    {
      "name": "Test Tour",
      "duration": 5
    }
    ```

  - Then, it converts (parses) that into a JavaScript object, which is then attached to `req.body`:

    ```javascript
    req.body = { name: "Test Tour", duration: 5 };
    ```

**2. `JSON.stringify(obj)`**

- **Purpose**: Converts a JavaScript object into a **JSON string**.

- **When to use**:

  - When you need to **save an object to a file**, **send it over HTTP** (e.g., as a response body), or **log it in a readable JSON format**.

- **Example**:

  ```javascript
  const obj = { name: "Ali", age: 20 };
  const str = JSON.stringify(obj);
  console.log(str); // '{"name":"Ali","age":20"}'
  ```

- **Common use in Express**:

  ```javascript
  fs.writeFile('data.json', JSON.stringify(tours), ...);
  ```

**3. `JSON.parse(string)`**

- **Purpose**: Converts a **JSON string** into a **JavaScript object**.

- **When to use**:

  - When you **read JSON data from a file**, a database, or an external API, and you want to convert it into a usable JavaScript object.

- **Example**:

  ```javascript
  const str = '{"name":"Ali","age":20}';
  const obj = JSON.parse(str);
  console.log(obj.name); // Ali
  ```

- **Common use**:

  ```javascript
  const tours = JSON.parse(fs.readFileSync("data.json", "utf-8"));
  ```

**TL;DR Summary:**

| Method           | Use When?                                    | Converts         | Side                |
| ---------------- | -------------------------------------------- | ---------------- | ------------------- |
| `express.json()` | Parsing **incoming request** body in Express | JSON → JS Object | Server (middleware) |
| `JSON.stringify` | Saving/sending data                          | JS Object → JSON | Client or Server    |
| `JSON.parse`     | Reading JSON string                          | JSON → JS Object | Client or Server    |

**Real Example Flow in an Express App:**

```javascript
app.use(express.json()); // 1. Middleware parses incoming JSON

app.post("/api/v1/tours", (req, res) => {
  console.log(req.body); // 2. Now we get parsed JS object thanks to express.json()

  const newTour = { id: 123, ...req.body };

  // 3. Save to file
  fs.writeFile(
    "tours.json",
    JSON.stringify(tours), // 4. Turn object to string before writing
    (err) => {
      res.status(201).json({
        status: "success",
        data: { tour: newTour },
      });
    }
  );
});
```

---

## Responding to URL Parameters

This section explains how to use route parameters in Express.js to retrieve specific resources based on their IDs or other identifiers in the URL.

**Goal:**

To create a new route that fetches **one specific tour** based on its **ID**, using parameters embedded in the URL.

**Step-by-Step Breakdown:**

1.  **Existing Route for All Tours**:

    ```javascript
    GET / api / v1 / tours;
    ```

    This route returns **all** tours.

2.  **New Route for a Specific Tour**:

    ```javascript
    GET /api/v1/tours/:id
    ```

    - `/:id`: This is a **route parameter**, acting as a placeholder for any ID. The colon (`:`) signifies that `id` is a dynamic segment.
    - The value of this parameter is accessible via `req.params.id`.

**Example Usage:**

If a request is made to `GET /api/v1/tours/5`:

- `console.log(req.params);` will output: `{ id: '5' }`

**JavaScript Logic:**

To find the matching tour, you can use the `.find()` method on your `tours` array:

```javascript
const id = req.params.id * 1; // Convert to number
const tour = tours.find((el) => el.id === id);
```

- `req.params.id * 1`: This is a common JavaScript trick to convert the string `id` (e.g., `'5'`) received from `req.params` into a number (e.g., `5`).
- `tours.find(el => el.id === id)`: This method iterates through the `tours` array and returns the first element whose `id` matches the extracted `id`.

**Error Handling: Invalid ID**

It's crucial to handle cases where the provided ID does not correspond to an existing resource. Two basic ways to check:

1.  **Check if `id > tours.length` (Less robust)**:

    ```javascript
    if (id > tours.length) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid ID",
      });
    }
    ```

    This method is less reliable because IDs might not be sequential or might have gaps after deletions.

2.  **Better: Check if `tour` is `undefined` (Recommended)**:

    ```javascript
    if (!tour) {
      return res.status(404).json({
        status: "fail",
        message: "Invalid ID",
      });
    }
    ```

    This approach is more robust as it directly checks if a tour was found, regardless of the ID's numerical value or sequence.

**Notes on Route Parameters:**

- **Multiple Parameters**: You can define multiple parameters in a single route:

  ```javascript
  /api/v1/tours/:id/:x/:y
  ```

  You would access them as `req.params.x`, `req.params.y`, etc.

- **Optional Parameters**: Make parameters optional by appending a question mark (`?`):

  ```javascript
  /api/v1/tours/:id/:y?`
  ```

**Final Route Example:**

```javascript
app.get("/api/v1/tours/:id", (req, res) => {
  const id = req.params.id * 1;
  const tour = tours.find((el) => el.id === id);

  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(200).json({
    status: "success",
    data: { tour },
  });
});
```

**Key Concepts Recap:**

| Concept        | Meaning                                                                                                |
| -------------- | ------------------------------------------------------------------------------------------------------ |
| `:id`          | Defines a dynamic parameter in the route.                                                              |
| `req.params`   | An object that stores URL parameters, e.g., `{ id: '5' }`.                                             |
| `find()`       | A JavaScript array method used to locate an element matching a condition.                              |
| Error handling | Important to return a `404` status if no matching resource is found.                                   |
| `* 1` trick    | A quick way to convert a string ID (e.g., `'5'`) to a number (e.g., `5`) using implicit type coercion. |

---

## Handling PATCH Requests

This section explains how to implement `PATCH` requests in Express.js for partially updating resources in a RESTful API.

**What is PATCH?**

`PATCH` is an HTTP method used to **update part** of a resource. Unlike `PUT`, which requires the entire updated object to be sent, `PATCH` only requires the specific fields you want to modify.

**Why Use PATCH (Not PUT)?**

- **Easier for the client**: The client only needs to send the fields that are being updated, reducing payload size and complexity.
- **Easier to manage**: Especially beneficial when working with databases like MongoDB/Mongoose, as it allows for partial updates without fetching and resending the entire document.
- **More practical**: `PATCH` is generally more practical and commonly used in most real-world APIs for partial updates.

**Route Definition:**

```javascript
app.patch("/api/v1/tours/:id", (req, res) => {
  // validation check
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  // placeholder response (we don’t really update JSON file)
  res.status(200).json({
    status: "success",
    data: {
      tour: "<Updated tour here...>",
    },
  });
});
```

**Comments in Code Explained:**

- `req.params.id * 1`: Converts the string `id` from the URL parameter to a number.
- `res.status(404).json(...)`: Handles cases where an invalid ID is provided, returning a `404 Not Found` status.
- `res.status(200).json(...)`: Sends a success response. In a real application, this would typically include the actually updated tour object.
- _Note_: In this example, no actual update logic is implemented for the JSON file; it simulates the API behavior.

**Testing PATCH (e.g., with Postman):**

- Send a `PATCH` request to `/api/v1/tours/3`.
- In the **Body** tab, select `raw` and `JSON`.
- Provide a JSON payload with the fields you want to update, for example:

  ```json
  {
    "duration": 15
  }
  ```

  This request will mimic the API behavior, even though the underlying JSON file won't be permanently changed in this simulated environment.

**Comparison: Before vs. Express (for PATCH-like operations):**

| Feature                | Vanilla Node.js                               | Express.js                         |
| ---------------------- | --------------------------------------------- | ---------------------------------- |
| Routing                | Manual `req.url` and `req.method` checks      | Clean `app.patch("/url", handler)` |
| Body Parsing           | Need to manually collect and parse `req` body | Use `express.json()` middleware    |
| Status Code + Response | `res.writeHead()` + `res.end()`               | Simple `res.status().json()`       |

**Why Use `express.json()`?**

`express.json()` is essential for `PATCH` (and `POST`, `PUT`) requests because it:

- Parses incoming **JSON** data from the request body.
- Populates `req.body` with a parsed JavaScript object, making the client-sent data easily accessible.

This middleware replaces the need for manual body parsing logic like:

```javascript
let body = "";
req.on("data", (chunk) => {
  body += chunk;
});
req.on("end", () => {
  JSON.parse(body);
});
```

**Related Concepts:**

- `JSON.stringify(obj)`: Converts a JavaScript object to a JSON string (used for sending data).
- `JSON.parse(json)`: Converts a JSON string to a JavaScript object (used for reading data).
- `express.json()`: Automatically parses incoming JSON into `req.body`.

**Pro Tip: Merge Objects with `...` (Spread Syntax):**

To simulate merging new values (as in a `PATCH` operation), you can use the spread operator:

```javascript
const updatedTour = { ...existingTour, ...req.body };
```

This syntax efficiently overwrites only the fields provided in `req.body` while keeping the rest of the `existingTour` properties intact.

---

## Handling DELETE Requests

This section covers the implementation of `DELETE` requests in Express.js to remove resources, even when working with simulated data.

**Goal:**

To implement a `DELETE` request route that removes a resource (e.g., a tour), acknowledging that in this simulated environment (using static JSON files), the actual deletion from the file is not performed.

**Key Concepts:**

| Concept                    | Meaning                                                                                                                                                                                  |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `DELETE`                   | The HTTP method used to **remove** a resource.                                                                                                                                           |
| `204 No Content`           | The standard HTTP status code for a successful `DELETE` operation. It signifies that the request has been successfully processed, but no content is being returned in the response body. |
| `data: null` in response   | A semantic way to indicate that the resource no longer exists, often used in conjunction with a `204 No Content` status.                                                                 |
| Not actually deleting file | In this learning context, we simulate deletion since we are working with static JSON files and not a persistent database.                                                                |

**DELETE Route Example (Express):**

```javascript
app.delete("/api/v1/tours/:id", (req, res) => {
  if (req.params.id * 1 > tours.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid ID",
    });
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
```

**Explanation of Code:**

- `app.delete(...)`: Defines a `DELETE` route using Express, specifically for paths matching `/api/v1/tours/:id`.
- `req.params.id * 1`: Converts the `id` from the URL parameter (which is a string) into a number for comparison.
- `204` status code:
  - Means: **No Content**.
  - When a `204` status is sent, the response body is typically empty. By sending `data: null` in the JSON, we provide a clear semantic indication that the resource is gone, even if the body itself is empty.
  - Postman or other API clients may show an empty response body, which is the expected behavior for a `204` status.

**Testing DELETE with Postman:**

- **Method**: Set the HTTP method to `DELETE`.
- **URL**: Use an endpoint like `/api/v1/tours/7`.
- **Response**: You should receive a `204 No Content` status. The response body might appear empty or show:

  ```json
  {
    "status": "success",
    "data": null
  }
  ```

  _Note_: As mentioned, nothing is actually deleted from the `tours-simple.json` file in this simulation.

**Comparison with PATCH:**

| Feature        | PATCH                             | DELETE            |
| -------------- | --------------------------------- | ----------------- |
| Purpose        | Update part of an object          | Remove a resource |
| Method         | `app.patch()`                     | `app.delete()`    |
| Response code  | `200 OK` or `202 Accepted`        | `204 No Content`  |
| Response data  | `{ tour: updatedTour }` (usually) | `null`            |
| Modifies data? | Simulated (no DB)                 | Simulated (no DB) |

---

## Summary of HTTP Methods

This table provides a concise overview of common HTTP methods and their typical uses in RESTful API design.

| Method | Purpose        | Requires Full Object? | Updates Part? | Common Use     |
| ------ | -------------- | --------------------- | ------------- | -------------- |
| POST   | Create         | ✅ Yes                | ❌ No         | Add new item   |
| GET    | Read           | ❌ No                 | ❌ No         | Retrieve data  |
| PATCH  | Partial Update | ❌ No                 | ✅ Yes        | Modify fields  |
| PUT    | Replace        | ✅ Yes                | ❌ No         | Replace object |
| DELETE | Delete         | ❌ No                 | ❌ No         | Remove item    |

---

## Refactoring Express Route Handlers

As Express.js applications grow, it becomes crucial to refactor route definitions and handler logic for better readability, maintainability, and scalability.

**Current Problem:**

In initial setups, route definitions (e.g., `app.get(...)`) and their corresponding handler logic (callback functions) are often mixed together. This approach leads to:

- **Hard to read code**: The `app.js` file can become very long and difficult to navigate.
- **Hard to maintain**: Changes to routes or handlers require modifying a single, large file.
- **Messy when scaling**: As the number of routes and their complexity increases, the codebase becomes unmanageable.
- **Repetitive updates**: If a route path changes, you have to update it in multiple places within the same file.

**Refactoring Goals:**

1.  **Separate handler logic**: Extract callback functions into standalone, named functions.
2.  **Organize all routes together**: Use `app.route()` chaining to group routes that share the same path.
3.  **Prepare for modularization**: Set the stage for moving handler functions into external controller files and routes into separate router files.

**Step 1: Move Callbacks into Named Functions**

Instead of defining anonymous callback functions directly within `app.get()` or `app.post()`, extract them into named functions. This improves readability and reusability.

- **Old approach:**

  ```javascript
  app.get("/api/v1/tours", (req, res) => {
    res.status(200).json({
      /* ... */
    });
  });
  ```

- **Refactored approach:**

  ```javascript
  const getAllTours = (req, res) => {
    res.status(200).json({
      /* ... */
    });
  };

  app.get("/api/v1/tours", getAllTours);
  ```

  Repeat this process for all your route handlers, such as `getTour`, `createTour`, `updateTour`, and `deleteTour`.

**Step 2: Use `app.route()` to Group Routes**

`app.route()` allows you to chain different HTTP method handlers for a single path, making your route definitions cleaner and more organized.

- **Instead of repeating the URL:**

  ```javascript
  app.get("/api/v1/tours", getAllTours);
  app.post("/api/v1/tours", createTour);
  ```

- **Use `app.route()`:**

  ```javascript
  app.route("/api/v1/tours").get(getAllTours).post(createTour);

  app
    .route("/api/v1/tours/:id")
    .get(getTour)
    .patch(updateTour)
    .delete(deleteTour);
  ```

  **Benefits of `app.route()`:**

  - **Cleaner and DRY (Don’t Repeat Yourself)**: Reduces code duplication by defining the path once.
  - **Easier to read and modify**: All operations for a single route are grouped together.
  - **Easier to extract**: Prepares your application for modularization into separate route and controller files.

**Summary of Handlers:**

After refactoring, your handler functions will look like this:

```javascript
const getAllTours = (req, res) => {
  /* ... */
};
const getTour = (req, res) => {
  /* ... */
};
const createTour = (req, res) => {
  /* ... */
};
const updateTour = (req, res) => {
  /* ... */
};
const deleteTour = (req, res) => {
  /* ... */
};
```

**Recap:**

- Routes are now grouped using `.route()` for a better structure.
- Route handlers have been extracted into named functions.
- The application is now prepared for further modularization into separate files for routes and controllers, leading to a cleaner and more scalable codebase.

---

## Middleware and the Request-Response Cycle

Understanding middleware and how it fits into the request-response cycle is fundamental to building robust Express.js applications.

**What You Should Understand by Now:**

By this point, you should have a basic grasp of Express development. Now, it's time to delve deeper into the internal workings of Express.

**The Request-Response Cycle (Overview):**

When a client sends a request to an Express server, the following general steps occur:

1.  **Receives the request**: The Express server receives the incoming HTTP request.
2.  **Creates `request` and `response` objects**: Express creates `req` (request) and `res` (response) objects, which encapsulate all information about the incoming request and provide methods for sending a response.
3.  **Processes the request using _middleware_**: The request passes through a series of middleware functions.
4.  **Sends back a meaningful response**: Finally, a response is sent back to the client.

**What is Middleware?**

Middleware functions are functions that have access to the `request` object (`req`), the `response` object (`res`), and the `next` middleware function in the application’s request-response cycle. They are functions that run _between_ receiving the request and sending the response.

Middleware can:

- Manipulate the `req` or `res` objects (e.g., add properties, modify headers).
- Execute any code (e.g., logging, authentication, data validation).
- End the request-response cycle by sending a response.
- Call the next middleware in the stack.

**You’ve already used middleware:**

```javascript
app.use(express.json());
```

This `express.json()` middleware, for example, parses incoming JSON request bodies, making the data available on `req.body`.

**Middleware Characteristics:**

- **Everything in Express is middleware**: This includes route handlers, built-in middleware like `express.json()`, and any custom functions you define.
- **Execution Order**: Middleware functions are executed **in order** (top-down) as they are defined in your code. The order in which middleware is written directly dictates its execution sequence.

**Middleware Stack:**

All middleware functions in your application form a **middleware stack**. Each middleware function receives three arguments:

```javascript
req, res, next;
```

- `req`: The request object.
- `res`: The response object.
- `next`: A function that, when called, passes control to the next middleware function in the stack. If `next()` is not called, the request-response cycle will be halted.

**Final Middleware = Route Handler:**

Typically, the **last middleware** in the chain is the route handler, which is responsible for sending the final response back to the client.

```javascript
app.get("/", (req, res) => {
  res.send("Hello");
});
```

When a route handler sends a response (e.g., `res.send()`, `res.json()`), it signifies the end of the request-response cycle for that particular request. Therefore, you **do not** call `next()` within a route handler that sends a response.

**Visual Summary (Pipeline):**

Imagine the request-response cycle as a pipeline:

```
Incoming Request
   ↓
[ Middleware 1 ]
   ↓
[ Middleware 2 ]
   ↓
[ Route Handler ] → sends back response
```

**Final Takeaway:**

Middleware is the core mechanism of Express.js. The request-response cycle is linear, easy to follow, and powered by middleware. A solid understanding of this concept is key to building and debugging Express applications effectively.

---

## Creating Our Own Middleware

Beyond built-in middleware, Express.js allows you to create custom middleware functions to perform specific tasks at any point in the request-response cycle.

**Recap: What is Middleware?**

As discussed, middleware is a function that runs **between** receiving a request and sending a response. You've already encountered `app.use(express.json());`, where `express.json()` returns a middleware function that is added to the **middleware stack** via `app.use()`.

**Writing Your Own Middleware:**

**Step 1: Use `app.use()`**

To define your own middleware, use `app.use()` and provide a function with the signature `(req, res, next)`:

```javascript
app.use((req, res, next) => {
  console.log("Hello from the middleware 👋");
  next();
});
```

- **Key points**:
  - Middleware functions always have the signature: `(req, res, next)`.
  - `next()` **must be called** at the end of the middleware function to pass control to the next middleware in the stack or the route handler. If you forget to call `next()`, the request-response cycle will get stuck, and the client will never receive a response.

**Middleware Applies to All Routes (Unless Scoped):**

- If you don’t specify a route path in `app.use()`, the middleware will run on **every request** to your application.
- **Order matters**: If a middleware is defined _after_ a route handler that ends the response (e.g., `res.send`, `res.json`), that middleware will **not** run for requests handled by that route.

  **Example:**

  ```javascript
  // This route ends the cycle early
  app.get("/tours", (req, res) => {
    res.json({ message: "Tours data" });
  });

  // Middleware placed here will NOT run for /tours
  app.use((req, res, next) => {
    console.log("Will not show for /tours");
    next();
  });
  ```

**Second Middleware – Modify `req` Object:**

Middleware can be used to add or modify properties on the `req` (request) object, making that data available to subsequent middleware or route handlers.

```javascript
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
```

Then, you can access this custom property in a route handler:

```javascript
app.get("/tours", (req, res) => {
  console.log(req.requestTime);
  res.json({
    message: "Tours data",
    requestedAt: req.requestTime,
  });
});
```

**Best Practices:**

- Always place **global middleware** (e.g., `express.json()`, logging middleware, custom timestamp middleware) **before** your route handlers.
- Always call `next()` at the end of a middleware function unless you are explicitly sending a response and ending the request-response cycle.
- You can chain as many middleware functions as needed.
- Use middleware to:
  - Modify request/response objects.
  - Execute logic such as authentication, logging, or data validation.
  - Set custom headers.

**Final Thoughts:**

Middleware is at the heart of Express.js. Mastering its concept allows you to control the request-response cycle, providing flexibility and modularity in your applications. With custom middleware, you gain fine-grained control over what happens before a response is sent, making your Express apps more powerful and maintainable.

---

## Using Third-Party Middleware (Morgan)

Third-party middleware extends Express.js functionality, providing solutions for common tasks like logging, authentication, and more. Morgan is a popular example for HTTP request logging.

**What Is Morgan?**

Morgan is a widely used **logging middleware** for Express. It automatically logs details about incoming HTTP requests to the console, including:

- HTTP Method (`GET`, `POST`, etc.)
- URL path
- HTTP Status code (e.g., `200`, `404`, `500`)
- Response time (how long it took to send the response)
- Response size (the size of the response body)

**Installing Morgan:**

To use Morgan, you first need to install it as a dependency in your project:

```bash
npm install morgan
```

_Note_: Install Morgan as a regular dependency (not a dev dependency) because it runs during the application's execution, not just during development.

**Import and Use in Your App:**

After installation, import Morgan and add it to your Express application's middleware stack, typically before your route handlers:

```javascript
const morgan = require("morgan");

// Add to middleware stack (before route handlers):
app.use(morgan("dev"));
```

- `"dev"`: This is one of Morgan’s **predefined formats** for logging. Other common options include `"tiny"`, `"common"`, `"short"`, and `"combined"`. Each format provides a different level of detail in the logs.

**How Morgan Works Under the Hood:**

When you call `morgan("dev")`, it returns a **middleware function**. This function, just like your custom middleware, adheres to the `(req, res, next)` signature:

```javascript
function logger(req, res, next) {
  // logging logic here
  next(); // continue to the next middleware
}
```

This demonstrates that Morgan, despite being a third-party library, integrates seamlessly into the Express middleware system.

**Example Output in Console:**

When you send a request to your Express application, Morgan will output logs similar to these:

- **Successful request:**

  ```
  GET /api/v1/tours 200 12.345 ms - 873
  ```

- **Error (e.g., 404 Not Found):**

  ```
  GET /api/v1/tours/invalid-id 404 5.678 ms - 123
  ```

  Morgan often uses color-coding for status codes (e.g., red for errors) to help quickly identify issues.

**Optional Logging Styles:**

You can experiment with different predefined formats:

```javascript
app.use(morgan("tiny"));
```

Refer to [Morgan's documentation](https://github.com/expressjs/morgan#predefined-formats) for a full list of available formats and their output.

**Middleware Resources in Express:**

The official Express.js website ([https://expressjs.com](https://expressjs.com/)) is an excellent resource:

- **Resources → Middleware**: This section lists recommended third-party middleware packages for various functionalities.
- **API Reference**: Provides detailed documentation on all available properties and methods on the `req` (request) and `res` (response) objects, and other Express components.

Many built-in middlewares from older Express versions (v3) are now available as separate third-party packages (e.g., `body-parser`, though `express.json()` now handles JSON parsing). This modular approach keeps the core Express framework lean.

**Summary:**

| What You Did                  | Why It Matters                                                              |
| ----------------------------- | --------------------------------------------------------------------------- |
| Installed Morgan              | Added request logging for easier debugging and monitoring.                  |
| Used `app.use(morgan("dev"))` | Injected the logger into the Express middleware stack.                      |
| Viewed Morgan’s source code   | Reinforced the understanding that it functions like any other middleware.   |
| Explored expressjs.com        | Discovered official documentation, resources, and other middleware options. |

---

## Implementing the Users Routes

This section outlines the process of implementing routes for the `users` resource, preparing your API for handling multiple types of data.

**Why Add a Users Resource?**

Our API is designed to support **multiple resources**, not just `tours`. The `users` resource is fundamental for features such as:

- User accounts and profiles
- User roles and permissions
- Authentication and access control (to be implemented later)

For now, the `users` resource will be structured similarly to `tours`, laying the groundwork for future enhancements.

**Defining Users Routes (in `app.js` or `index.js`):**

Following RESTful conventions, we define routes for user management:

```javascript
app.route("/api/v1/users").get(getAllUsers).post(createUser);

app
  .route("/api/v1/users/:id")
  .get(getUser)
  .patch(updateUser)
  .delete(deleteUser);
```

- `GET /api/v1/users`: Retrieves all users.
- `POST /api/v1/users`: Creates a new user.
- `GET /api/v1/users/:id`: Retrieves a specific user by ID.
- `PATCH /api/v1/users/:id`: Updates a user (partial update).
- `DELETE /api/v1/users/:id`: Deletes a user.

**Creating Route Handlers (aka Controllers):**

To avoid immediate errors, we define placeholder functions (stubs) for the user controllers. These will later contain the actual logic for handling user-related operations.

```javascript
// USERS CONTROLLERS (temporary stubs)

const getAllUsers = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined.",
  });
};

const getUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined.",
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined.",
  });
};

const updateUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined.",
  });
};

const deleteUser = (req, res) => {
  res.status(500).json({
    status: "error",
    message: "This route is not yet defined.",
  });
};
```

These stubs return a `500 Internal Server Error` with a message indicating that the route is not yet implemented.

**Testing the Route with Postman:**

You can now send a `GET` request to `/api/v1/users` and expect to receive a JSON response similar to this:

```json
{
  "status": "error",
  "message": "This route is not yet defined."
}
```

It's good practice to save this request in a dedicated

Postman **Users** collection folder for better organization.

**Organizing Postman Collections:**

As your application grows, it's beneficial to organize your Postman requests into folders (collections) based on resources. For example:

- **Tours** collection
- **Users** collection

This practice makes it significantly easier to manage, test, and navigate your API endpoints.

**Next Step: Refactor the File Structure:**

Currently, all routes and controller functions reside within a single file, which can lead to clutter and is not scalable for larger applications. In the subsequent sections, we will begin **refactoring** the project structure by:

- Separating routes into their own dedicated modules.
- Organizing controllers into dedicated files.

---

## Creating and Mounting Multiple Routers

To improve the structure and maintainability of your Express.js application, it's best practice to separate route and handler logic into multiple files. This section demonstrates how to create and mount dedicated routers for different resources.

**Goal:**

To separate route and handler logic into distinct files, with one file for tour routes, one for user routes, and corresponding files for their handlers.

**Why Modular Routing?**

Modular routing allows for a cleaner, more organized codebase, making it easier to manage and scale your application. By creating separate routers for each resource, you encapsulate related routes and their logic.

**Step 1: Create a Tour Router**

Instead of defining routes directly on the `app` object, create a dedicated router for tours using `express.Router()`:

```javascript
const tourRouter = express.Router();

// Define routes using tourRouter instead of app
tourRouter.route("/").get(getAllTours).post(createTour);
tourRouter.route("/:id").get(getTour).patch(updateTour).delete(deleteTour);
```

_Note_: Replace `app.get(...)` with `tourRouter.get(...)`, and similarly for other HTTP methods.

**Step 2: Mount the Tour Router**

Once you have defined your `tourRouter`, you need to

mount it to a specific path in your main Express application using `app.use()`:

```javascript
app.use("/api/v1/tours", tourRouter);
```

- `tourRouter` acts as another middleware function.
- This line effectively mounts all routes defined within `tourRouter` under the base path `/api/v1/tours`.

**Important Concept: Relative Paths within Routers**

When defining routes inside `tourRouter`, all paths are **relative** to the base path where the router is mounted (`/api/v1/tours` in this case). Therefore, you should use simplified paths within the router:

- `tourRouter.route("/").get(...);` will match `GET /api/v1/tours`.
- `tourRouter.route("/:id").get(...);` will match `GET /api/v1/tours/:id`.

**Step 3: Create a User Router**

Similarly, create a dedicated router for user-related routes:

```javascript
const userRouter = express.Router();

userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getUser).patch(updateUser).delete(deleteUser);
```

**Step 4: Mount the User Router**

Mount the `userRouter` to its corresponding base path:

```javascript
app.use("/api/v1/users", userRouter);
```

This applies the same logic: `userRouter` serves as middleware for all user-related endpoints.

**Order Matters:**

It is crucial to **declare** your routers (e.g., `const tourRouter = express.Router();`) before you use them with `app.use()`.

```javascript
const tourRouter = express.Router();
app.use("/api/v1/tours", tourRouter);
```

**Final Testing:**

After modularizing your routes, verify that all your endpoints still function correctly:

- `GET /api/v1/tours` → Should work as expected.
- `GET /api/v1/users` → Should work as expected.

All routes should continue to work seamlessly after modularization, demonstrating the benefits of this approach.

**Next Steps:**

In the upcoming sections, we will further refine this structure by:

- Moving each router to its own separate file.
- Moving handler/controller functions into dedicated files as well.

---

## A Better File Structure: Modular Approach

To build scalable and maintainable Express.js applications, it is essential to adopt a modular file structure. This section details how to organize your project by separating routes, controllers, and server logic into distinct files.

**Goal:**

To split the application into smaller, organized files, including separate routes, separate controllers, and a dedicated server file, following a clean architecture pattern (preparing for MVC).

**Final Project Structure:**

A well-organized Express project might look like this:

```
project/
│
├── controllers/
│   ├── tourController.js
│      └── userController.js
│
├── routes/
│   ├── tourRoutes.js
│   └── userRoutes.js
│
├── app.js         ← configures the app (middleware, general settings)
├── server.js      ← starts the app (server listening)
└── dev-data/      ← (JSON data files, etc.)
```

**Step-by-Step Breakdown:**

1.  **Create Routes Folder**:

    - Create a `routes/` directory.
    - Inside, create `tourRoutes.js` and `userRoutes.js`.

    All route definitions are moved from `app.js` into their respective files. Each route file will use `express.Router()` to create modular route handlers:

    ```javascript
    const express = require("express");
    const router = express.Router();

    // Example:
    router.route("/").get(getAllTours);

    module.exports = router;
    ```

2.  **Mount Routes in `app.js`**:

    In your main `app.js` file, import the newly created routers and mount them using `app.use()`:

    ```javascript
    const tourRouter = require("./routes/tourRoutes");
    const userRouter = require("./routes/userRoutes");

    app.use("/api/v1/tours", tourRouter);
    app.use("/api/v1/users", userRouter);
    ```

    This connects the main application to the modular route definitions, making the app easier to scale and read.

3.  **Fix Variables and Paths**:

    Ensure that any variables (e.g., `fs`) or file paths (e.g., `__dirname`) that were previously global in `app.js` are now correctly imported or adjusted within their new modular files.

    ```javascript
    const fs = require("fs");
    const tours = JSON.parse(
      fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
    );
    ```

4.  **Create Controller Files**:

    - Create a `controllers/` directory.
    - Inside, create `tourController.js` and `userController.js`.

    All route handler functions (the actual logic for handling requests) are moved into these controller files. Functions are typically exported using `exports`:

    ```javascript
    exports.getAllTours = (req, res) => {
      /* ... */
    };
    exports.createTour = (req, res) => {
      /* ... */
    };
    ```

    Then, import and use these controller functions in your route files (e.g., `tourRoutes.js`):

    ```javascript
    const tourController = require("../controllers/tourController");

    router.route("/").get(tourController.getAllTours);
    ```

5.  **Create `server.js`**:

    Separate the server-starting logic into a dedicated `server.js` file. This keeps `app.js` focused solely on application configuration and middleware.

    ```javascript
    const app = require("./app");
    const port = 3000;

    app.listen(port, () => {
      console.log(`App running on port ${port}`);
    });
    ```

    Now, `app.js` contains only the Express application configuration and middleware, while `server.js` is responsible for starting the HTTP server.

6.  **Use `module.exports` / `require` Properly**:

    Ensure correct module export and import patterns:

    - In `app.js`: `module.exports = app;`
    - In `server.js`: `const app = require("./app");`

7.  **Nodemon Script Setup**:

    Update your `package.json` scripts to easily start your application with Nodemon:

    ```json
    "scripts": {
      "start": "nodemon server.js"
    }
    ```

    Now you can simply run `npm start` to launch your development server.

**Final Request Flow Summary:**

Understanding the flow of a request through this modular structure is key:

1.  **User visits URL**: The request first hits `server.js`.
2.  **App loaded from `app.js`**: `server.js` imports `app.js`, which configures the Express application with all its middleware and routers.
3.  **Route matches path**: The request is then directed to the correct router (e.g., `tourRouter` or `userRouter`) based on the URL path.
4.  **Router calls controller**: The router, in turn, calls the appropriate handler function from the `controllers/` directory.
5.  **Controller sends response**: The controller function executes its logic and sends the final response back to the client.

**Why This Refactor Matters:**

- **Clean file separation**: Promotes a clear distinction of responsibilities.
- **Easier to maintain and scale**: Changes in one part of the application are less likely to affect others.
- **Prepares for MVC pattern**: Lays the foundation for a Model-View-Controller architecture.
- **Easier testing and debugging**: Isolated components are simpler to test and debug.
- **Real-world architecture**: Teaches you how professional Express applications are structured.

---

## Param Middleware

**Param middleware** in Express.js is a specialized type of middleware that executes only when a specific route parameter (like `:id`) is present in the URL. It's incredibly useful for pre-processing or validating parameters before the main route handler is invoked.

**What is Param Middleware?**

Param middleware is a function that runs specifically when a defined parameter is encountered in a route. Its syntax is:

```javascript
router.param("paramName", (req, res, next, val) => {
  // val is the value of the parameter
});
```

- `paramName`: The name of the route parameter (e.g., `id`).
- `val`: The actual value extracted from the URL for that parameter.

**Why Use Param Middleware?**

Param middleware is highly beneficial for:

- **Conditional Execution**: Running code _only_ when a route like `/api/v1/tours/:id` is accessed.
- **Validation**: Validating the format or existence of IDs.
- **Preloading Data**: Fetching or preloading documents associated with the parameter.
- **Permissions Checks**: Verifying user permissions related to the resource identified by the parameter.
- **Avoiding Repetitive Code**: Centralizing logic that would otherwise be duplicated across multiple controller functions.

**Example: `checkID` Middleware**

Let's create a `checkID` middleware to validate the `id` parameter:

1.  **Create the middleware**:

    Typically placed in your controller file (e.g., `tourController.js`):

    ```javascript
    // In tourController.js
    exports.checkID = (req, res, next, val) => {
      console.log(`Tour id is: ${val}`);

      if (val * 1 > 5) {
        // Example validation: assuming IDs up to 5 are valid
        return res.status(404).json({
          status: "fail",
          message: "Invalid ID",
        });
      }

      next(); // Important: Call next() to proceed to the actual route handler
    };
    ```

2.  **Use with `router.param`**:

    In your route file (e.g., `tourRoutes.js`), associate the `checkID` middleware with the `:id` parameter:

    ```javascript
    // In tourRoutes.js
    const express = require("express");
    const tourController = require("../controllers/tourController");

    const router = express.Router();

    router.param("id", tourController.checkID);
    ```

    This configuration means that whenever a route with `:id` (e.g., `/api/v1/tours/3`) is accessed, `checkID` will execute _before_ the corresponding controller function (like `getTour`).

3.  **Clean up controller code**:

    Now, your controller functions no longer need to perform ID validation, as it's handled by the param middleware.

    - **Before (with inline validation):**

      ```javascript
      exports.getTour = (req, res) => {
        if (req.params.id * 1 > 5) {
          return res.status(404).json({ message: "Invalid ID" });
        }
        // get the tour...
      };
      ```

    - **After (validation handled by param middleware):**

      ```javascript
      exports.getTour = (req, res) => {
        // No need to check ID here anymore!
        // Just get the tour...
      };
      ```

    This significantly cleans up your controller logic, making it focused solely on its primary responsibility.

**Benefits of Param Middleware:**

- **No Duplicate Validation Code**: Centralizes validation logic, reducing redundancy.
- **Clean, Single-Purpose Controller Functions**: Controllers become leaner and more focused.
- **Automatic Coverage**: Works across all routes that utilize the specified parameter (e.g., `:id`).
- **Scalability**: New routes with the same parameter automatically benefit from the existing param middleware.

**Middleware Flow Example: How It Works**

When a request like `GET /api/v1/tours/3` is made:

1.  The `checkID` param middleware runs first, receiving `val = 3`.
2.  If the ID is valid, `checkID` calls `next()`, allowing the request to proceed to the `getTour` controller.
3.  If the ID is invalid, `checkID` sends a `404` response early, preventing the request from reaching the `getTour` controller.

---

## Chaining Multiple Middleware Functions

Express.js allows you to chain multiple middleware functions for a single route, enabling you to separate concerns and execute logic sequentially before the final route handler.

**Concept:**

Instead of providing just one middleware function to a route, you can pass an array of middleware functions or simply list them as arguments. This is particularly useful for separating logic such as validation, authentication, and authorization from the main business logic of the route handler.

**Example Scenario: POST `/api/v1/tours`**

Consider a `POST` request to create a new tour. You might want to validate the request body before attempting to create the tour. This can be achieved by chaining a validation middleware before the `createTour` controller:

```javascript
router.post("/", tourController.checkBody, tourController.createTour);
```

- `checkBody`: A custom middleware function responsible for validating the incoming request body.
- `createTour`: The main controller function that handles the creation of a new tour.

**Why Use Multiple Middleware?**

Chaining middleware allows you to execute specific logic **before** your main handler. This is beneficial for:

- **Data Validation**: Checking if required fields (e.g., `name`, `price`) exist and are in the correct format.
- **Authentication**: Verifying the identity of the user making the request.
- **Authorization**: Ensuring the authenticated user has the necessary permissions to perform the action.

**Custom Middleware: `checkBody`**

Here’s an example of a `checkBody` middleware that validates the presence of `name` and `price` in the request body:

```javascript
exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "Missing name or price",
    });
  }
  next(); // Important: Call next() to continue to createTour
};
```

- This middleware checks if both `name` and `price` properties are present in `req.body`.
- If either is missing, it sends a `400 Bad Request` response, preventing the request from proceeding to `createTour`.
- If both are present, `next()` is called, allowing the request to move to the `createTour` controller.

**Testing:**

- **Send POST without `price`**: The `checkBody` middleware will intercept the request and return an error message: `Missing name or price`.
- **Send POST with both `name` and `price`**: The `checkBody` middleware will pass the request to `createTour`, and the tour will be created successfully.

**Best Practice:**

It is a best practice to separate logic that is not directly part of the main operation (like `createTour`) into its own middleware. This approach keeps your code **clean, modular, and easier to manage**, as each middleware has a single, well-defined responsibility.

---

## Environment Variables in Node.js & Express

Environment variables are crucial for configuring Node.js and Express applications, allowing them to behave differently across various deployment environments (development, production, testing, etc.).

**What Are Environment Variables?**

Environment variables are global configuration values that influence how a Node.js application operates. They are used to:

- **Toggle debugging/logging**: Enable or disable verbose logging based on the environment.
- **Use different databases**: Connect to a development database in a development environment and a production database in a production environment.
- **Store sensitive data**: Securely store API keys, database credentials, and other sensitive information without hardcoding them into your application code.

**Accessing Environment Variables:**

- **Express sets**: You can check the current environment mode set by Express using:

  ```javascript
  app.get("env"); // => "development" by default
  ```

- **Node.js sets many via**: Node.js provides access to all environment variables through the global `process.env` object:

  ```javascript
  console.log(process.env);
  ```

  `process.env` is built-in and always available; you don't need to import any modules to use it.

**Switching Environments Manually:**

You can set environment variables when starting your application from the command line:

- **On Mac/Linux:**

  ```bash
  NODE_ENV=production nodemon server.js
  ```

- **On Windows (PowerShell-friendly way):**

  ```bash
  $env:NODE_ENV="production"; nodemon server.js
  ```

**Test It:**

After setting the environment variable, you can verify its value in your application:

```javascript
console.log(process.env.NODE_ENV); // Will output "production" or "development"
```

You can also add other custom variables:

```bash
NODE_ENV=development X=23 nodemon server.js
```

**Why Use `.env` Files?**

Typing environment variables directly in the terminal for every application start is impractical and error-prone. Instead, you can use `.env` files to store them.

**Create `config.env` (or `.env`):**

Create a file named `config.env` (or simply `.env`) in your project root and list your variables:

```
NODE_ENV=development
PORT=3000
USERNAME=mohammed
PASSWORD=123456
```

_Tip_: It's a convention to use `ALL CAPS` for environment variable names.

**Install `dotenv`:**

To load the variables from your `.env` file into `process.env`, you need the `dotenv` package:

```bash
npm install dotenv
```

**Load it in `server.js`:**

It's crucial to load `dotenv.config()` **before** any other files (like `app.js`) that might rely on these environment variables.

```javascript
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
```

**Using the Variables in Your App:**

Once loaded, you can access these variables via `process.env`:

- **In `app.js` (for conditional middleware):**

  ```javascript
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev")); // enable logger only in dev
  }
  ```

- **In `server.js` (for port configuration):**

  ```javascript
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`App running on port ${port}...`);
  });
  ```

**Check It Works:**

Send a request using Postman or your browser:

- If `NODE_ENV=development`, the Morgan logger should be active.
- If `NODE_ENV=production`, the logger should be off.

**Add Scripts in `package.json`:**

To simplify starting your application in different environments, add scripts to your `package.json`:

```json
"scripts": {
  "start:dev": "nodemon server.js",
  "start:prod": "NODE_ENV=production nodemon server.js"
}
```

Now you can run your application in development or production mode with simple commands:

```bash
npm run start:dev
npm run start:prod
```

**Pro Tips:**

- **Never commit `.env` to GitHub**: Add `.env` (or `config.env`) to your `.gitignore` file to prevent sensitive information from being exposed in your version control.
- **Use `.env` for**: Port numbers, API keys, database credentials, and debugging flags.
