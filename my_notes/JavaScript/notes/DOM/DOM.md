# **DOM and DOM Manipulation**

## 📑 Table of Contents

1. [Introduction to DOM Manipulation](#introduction-to-dom-manipulation)
2. [What is the DOM](#what-is-the-dom)
3. [DOM Tree Structure](#dom-tree-structure)
4. [DOM Methods Aren’t Part of JavaScript](#dom-methods-arent-part-of-javascript)
5. [How to Deal with DOM and `document` Object](#how-to-deal-with-dom-and-document-object)
6. [Introduction to Event Listeners](#introduction-to-event-listeners)
7. [Some Advice](#some-advice)

---

## **Introduction to DOM Manipulation**

- DOM manipulation allows JavaScript to interact with and modify elements on a webpage.
- Example: Changing text, HTML attributes, or CSS styles directly from JavaScript.

---

## **What is the DOM**

- DOM stands for Document Object Model, a structured representation of HTML documents.
- It is automatically created by the browser as an HTML page loads, organized as a tree structure where each HTML element is an object.
- DOM is basically a connection point between HTML documents and JS Code.

---

## **DOM Tree Structure**

- The DOM has a hierarchical structure similar to a family tree, with "parent," "child," and "sibling" elements.
- Example: `<html>`, `<head>`, and `<body>` tags are connected in the DOM tree; `<body>` might have nested tags like `<section>` and `<p>` as children.
- **Document Object as the Entry Point**
  - The `document` object in JavaScript is the entry point to the DOM, allowing access to methods like `querySelector`.
  - Example: `document.querySelector('p')` selects the first paragraph on the page.
- **Hierarchical Relationships in the DOM**
  - Elements in the DOM tree have relationships:
  - Nested elements create a deeper hierarchy, e.g., paragraphs inside `<section>` tags.
- **Complete HTML Representation**
  - The DOM includes not only element nodes but also text nodes, comments, and other content.
  - Example: A `<p>` tag’s text would be a text node, accessible and modifiable in the DOM.

---

## **DOM Methods Aren’t Part of JavaScript**

- DOM-related methods (like `querySelector`) are not part of JavaScript itself; they come from Web APIs provided by the browser.
- JavaScript alone is based on the ECMAScript standard, which does not define these DOM methods.
- So we can access the DOM only when JS is run **through the browser** using HTML.
- In Node.js, we **cannot** access the `document` object because it exists only in the browser environment.

### Web APIs

- Web APIs are libraries provided by browsers that allow JavaScript to interact with the webpage.
- Other APIs include:
  - `setTimeout` (timers)
  - `fetch` (network requests)

---

## **How to Deal with DOM and `document` Object**

- First thing: **select the elements** you want to deal with and store them in **variables** for reuse.
- Example: We selected an element like `message` using `querySelector` and retrieved its text.

### `value` vs `textContent`

- Use `.textContent` to access text inside normal elements like `<p>`.
- Use `.value` to get or set input field values.

---

## **Introduction to Event Listeners**

- Event listeners let your code respond to user actions (e.g., clicks, typing).

### Selecting the Element

- Example: `document.querySelector('.check')` selects the "Check" button.
- Use specific classes or IDs to avoid selecting unwanted elements.
- If no specific element is targeted, you can apply the event to `document` to listen _globally_.

### Adding the Event Listener

- Use `addEventListener("click", function() { ... })`.
- The second parameter is a **callback function** (event handler).

### Event Handler Function

- The function you pass will run whenever the event is triggered.
- When the event occurs, JS gives you an **event object** with details (target, type, etc.).

---

## **Some Advice**

1. Always store DOM elements in variables at the start for cleaner and more efficient code.
2. You can change CSS styles using `.style`, but best practice is to toggle CSS classes (e.g., `modal`, `hidden`) instead.
3. Avoid repeating code inside event listeners — move repeated logic into reusable functions (DRY principle).
4. Never store data in the DOM (like text fields or spans). Instead, store it in variables and only update the DOM as needed (important in games like Pig Game).
