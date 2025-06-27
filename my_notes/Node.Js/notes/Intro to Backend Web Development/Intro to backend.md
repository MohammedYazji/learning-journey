# Introduction to Back-End Web Development

---

## 📑 Table of Contents

1. [How the Web Works](#how-web-works)
   - [📥 What Happens When You Type a URL?](#-what-happens-when-you-type-a-url)
   - [🌍 How Domain Names Are Resolved](#-how-domain-names-are-resolved)
   - [🔌 Establishing Connection](#-establishing-connection)
   - [📨 Making an HTTP Request](#-making-an-http-request)
   - [📤 Receiving the HTTP Response](#-receiving-the-http-response)
   - [📁 Multiple Requests per Website](#-multiple-requests-per-website)
   - [🔄 How Data Is Transmitted](#-how-data-is-transmitted)
   - [✅ Key Takeaways](#-key-takeaways)
2. [Front-end vs Back-end Development](#front-end-vs-back-end)
   - [🧠 Overview](#overview)
   - [🎨 What Is Front-End Development](#-what-is-front-end-development)
   - [🖥️ What Is Back-End Development](#️-what-is-back-end-development)
   - [🖧 What Is a Server](#-what-is-a-server)
   - [📂 Static vs Dynamic Servers](#-static-vs-dynamic-servers)
   - [🗃️ Role of Databases](#️-role-of-databases)
   - [🛠️ What the Back-End Typically Handles](#️-what-the-back-end-typically-handles)
   - [🧰 Technologies Used in This Course](#-technologies-used-in-this-course)
   - [🧑‍💻 Full Stack Development](#-full-stack-development)
   - [🤖 Other Uses of Node.js](#-other-uses-of-nodejs)
3. [🌐 Static vs Dynamic Websites & APIs](#-static-vs-dynamic-websites--apis)
   - [What Is a Static Website?](#-what-is-a-static-website)
   - [What Is a Dynamic Website?](#️-what-is-a-dynamic-website)
   - [Web Application vs Dynamic Website](#-web-application-vs-dynamic-website)
   - [Rise of API-Powered Websites](#-rise-of-api-powered-websites)
   - [SSR vs CSR](#-ssr-vs-csr)
   - [Node.js as an API Builder](#-nodejs-as-an-api-builder)
   - [APIs Aren’t Just for Browsers](#-apis-arent-just-for-browsers)
   - [Real-World API Use Cases](#-real-world-api-use-cases)
   - [Key Takeaways](#-key-takeaways-1)

---

# How Web Works

## 📥 What Happens When You Type a URL?

1. **Client-Server Architecture**

   - You (client/browser) send a **request** to a **server**.
   - The server sends back a **response** with the requested webpage.
   - This is the **Request-Response Model**.

2. **Example: `google.com/maps`**

   - `https://` → **Protocol**
   - `google.com` → **Domain Name**
   - `/maps` → **Resource**

---

## 🌍 How Domain Names Are Resolved

- **Domain name** is not the real address.
- **DNS (Domain Name Server)** translates domain to actual **IP address**.
- Your browser sends request to a **DNS**, which returns the IP address of the server.

---

## 🔌 Establishing Connection

- Once the IP is known, a **TCP socket connection** is opened.
- Connection remains **open** while data transfers.
- Uses **TCP/IP Protocols**:
  - **TCP**: Breaks data into small **packets**, reassembles on arrival.
  - **IP**: Routes packets to the correct address using IPs.

---

## 📨 Making an HTTP Request

- Uses **HTTP Protocol** (or **HTTPS** for secure).
- **HTTP Request** parts:
  1. **Start Line**: HTTP method (GET, POST, PUT, PATCH), target (`/maps`), HTTP version.
  2. **Headers**: Metadata (browser, language, etc.).
  3. **Body** _(optional)_: Data (e.g., form inputs, JSON).
- You usually don’t write raw HTTP requests, but understanding structure is essential.

---

## 📤 Receiving the HTTP Response

- **HTTP Response** has:
  1. **Start Line**: Status code (e.g., `200 OK`, `404 Not Found`).
  2. **Headers**: Metadata (controlled by backend dev).
  3. **Body**: Actual data (HTML, JSON, etc.).

---

## 📁 Multiple Requests per Website

- First response = **initial HTML file**.
- Browser then requests **all linked files** (CSS, JS, images, etc.).
- Multiple HTTP requests/responses happen in parallel (to a limit).

---

## 🔄 How Data Is Transmitted

- **TCP**:
  - Splits data into **packets**, sends them independently.
  - Reassembles them on arrival for faster transmission.
- **IP**:
  - Ensures packets go to the correct **destination** using IP addresses.

---

## ✅ Key Takeaways

- Web communication uses the **Client-Server Model** with **HTTP over TCP/IP**.
- Domain names are resolved via **DNS**.
- **HTTP requests/responses** are central to all web communication.
- Multiple files = multiple requests.
- **TCP/IP** efficiently transports data using packets.

---

# Front-End Vs. Back-End

## Overview

- Importance of understanding back-end vs front-end
- Based on client-server architecture

---

## 🎨 What Is Front-End Development?

- Happens in the browser
- Focused on building the visible part of a website
- Technologies: HTML, CSS, JavaScript
- Modern tools/libraries: React, Angular, Redux, GraphQL, etc.
- Defined as the **front-end stack**

---

## 🖥️ What Is Back-End Development?

- Happens on the server
- Invisible to the user
- Handles server-side logic and communication

---

## 🖧 What Is a Server?

- A computer connected to the internet
- Stores files (HTML, CSS, images)
- Runs HTTP server software to handle requests and responses

---

## 📂 Static vs Dynamic Servers

- **Static Server**:
  - Serves only static files
  - Ideal for simple websites
- **Dynamic Server**:
  - Runs applications and logic (e.g., Node.js code)
  - Can interact with databases

---

## 🗃️ Role of Databases

- Stores users, app data, text for templates
- Accessed directly from the back-end
- Essential for serious applications

---

## 🛠️ What the Back-End Typically Handles

- Creating user profiles
- Logins/authentication
- Sending emails
- Handling payments
- Communicating with databases
- Serving and processing request data
- Filling templates with dynamic data

---

## 🧰 Technologies Used in This Course

- **Node.js** as the dynamic server
- **MongoDB** as the database
- Together form the back-end stack

---

## 🧑‍💻 Full Stack Development

- Combination of front-end + back-end stacks
- A full stack developer does both
- Becoming rare due to complexity in front-end

---

## 🤖 Other Uses of Node.js

- Not limited to web development
- Can be used for:
  - Drones
  - Robots
  - IoT devices
- But this course focuses only on back-end web development

---

# 🌐 Static vs Dynamic Websites & APIs

## 📄 What Is a Static Website?

- A static website contains **finished files** (HTML, CSS, JS, images) that a developer **uploads to a web server**.
- These files are delivered **as-is** to the browser.
- The server does **not run any logic** or connect to a database.
- The browser simply renders what it receives.
- **Note**: Even if the site has dynamic **client-side JavaScript effects**, it’s still static as long as there’s no backend logic.

🧠 **Example**:  
A portfolio site (like `jonas.io`) where every visitor sees the same content every time.

---

## ⚙️ What Is a Dynamic Website?

- A dynamic website uses a **server-side application** (like a Node.js app) and a **database**.
- Each page is **generated per request**:
  - The server combines **HTML templates** with **database data**.
  - This page is then sent to the client.
- This is known as **server-side rendering (SSR)**.
- It allows for **personalized** and **data-driven** content.

🧠 **Example**:  
When you log into Twitter, the content changes based on your account — that’s dynamic behavior.

---

## 🧠 Web Application vs Dynamic Website

- A **web application** is often a **dynamic website with additional functionality** like:
  - Authentication
  - Searching
  - Filtering
  - Uploading files

✅ The terms are often used **interchangeably** in modern web dev.

---

## ⚡ Rise of API-Powered Websites

- Modern websites increasingly use **JavaScript frameworks (React, Vue, etc.)** to build the UI on the **client side**.
- Instead of HTML, the backend sends only **data** — usually in **JSON** format.
- The browser **fetches this data via APIs** and renders the interface dynamically.

🧠 This is called **Client-Side Rendering (CSR)** and is used by most modern apps (e.g., Facebook, Gmail).

---

## 🔁 SSR vs CSR

| Rendering Type | Who Builds the Page  | Sent to Browser | Example                                   |
| -------------- | -------------------- | --------------- | ----------------------------------------- |
| SSR            | The server           | Finished HTML   | Dynamic sites (Node.js + template engine) |
| CSR            | The browser (client) | JSON data only  | React apps calling APIs                   |

---

## 🧱 Node.js as an API Builder

- Node.js is perfect for creating:
  - **Traditional dynamic websites** (SSR)
  - **Modern APIs** that serve JSON to various clients
- This course will cover **both approaches** so you’re well-prepared.

---

## 🧲 APIs Aren’t Just for Browsers

APIs can be used by **any client**:

- Web browsers (e.g., React apps)
- Mobile apps (iOS, Android)
- Desktop applications (Electron, etc.)

✅ One backend can serve **all types of clients** — making APIs extremely powerful and scalable.

---

## 💼 Real-World API Use Cases

- APIs are sometimes built **without any frontend at all**.
- Example: `api.jonas.io/data/learning`
  - Returns data to be used by websites or apps.
- Companies like Stripe or Twilio **only build APIs** that are consumed by other developers.

---

## ✅ Key Takeaways

- **Static website**: no backend logic, same content for all.
- **Dynamic website**: server builds content on-the-fly using templates and databases.
- **Web application**: dynamic website with interactive features.
- **API-powered app**: server sends **only data**; browser builds the interface.
- **Node.js** can be used for both **SSR** and building **powerful APIs**.
- **APIs are flexible** and can serve browsers, mobile apps, and more.
