# Intro to Data Structures

## Table of Contents

- [What is a Data Structure?](#what-is-a-data-structure)
- [How is Data Stored in Memory?](#how-is-data-stored-in-memory)
- [Why So Many Data Structures?](#why-so-many-data-structures)
- [Which One is the Best?](#which-one-is-the-best)
- [Example Use Cases](#example-use-cases)

---

## What is a Data Structure?

> A data structure is a particular way of organizing and storing data so that it can be accessed and modified efficiently.

When we create a specific data structure, we usually define it as a **class** in Python. That class includes methods (functions) for:

- inserting,
- deleting,
- searching,
- and managing data.

Example placeholder:

```python
class Stack:
    def __init__(self):
        self.items = []

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()
```

> Think of a data structure as a custom tool with specific rules for how data is handled.

---

## How is Data Stored in Memory?

- Computers store data in **RAM (Random Access Memory)** in **binary format (0s and 1s)**.
- Memory is divided into **addresses** (like apartment numbers).
- Each variable or data item occupies one or more addresses based on its type and size.

### 🔹 Primitive Types

- Stored in **contiguous memory blocks**.
- For example, integers and floats are stored directly in memory slots.

### 🔹 Arrays / Lists

- Stored in **sequential memory locations**.
- Index-based access is fast because the address of any element can be calculated:

  ```
  address = base_address + (index * size_of_element)
  ```

### 🔹 Linked Lists

- Each node contains:

  - The **data**.
  - A **reference (pointer)** to the next node.

- Nodes can be scattered in memory. they’re **connected via pointers**.

### 🔹 Trees and Graphs

- Like linked lists, they rely on **references/pointers** to link nodes.
- Layout in memory depends on how the structure is implemented (e.g. object references in Python).

### 🔹 Hash Tables (Dictionaries)

- Use a **hash function** to convert a key into a memory index.
- Data is stored in a **bucket** or slot based on that hash.

📌 Efficient memory layout = faster access + less overhead.

---

## Why So Many Data Structures?

All data structures **store data**, but each one is **optimized for a specific kind of task**.

Examples:

- Arrays are flexible and used for many general tasks.
- Trees are useful for hierarchical data.
- Graphs are great for relational connections.
- Hash tables allow fast access using keys.

📌 Choosing the right DS can **greatly improve performance and efficiency**.

---

## Which One is the Best?

There is no one-size-fits-all.

| Task                         | Best Data Structure     |
| ---------------------------- | ----------------------- |
| Accessing by index           | Array / List            |
| Inserting/removing at ends   | Linked List             |
| Hierarchical relationships   | Tree                    |
| Fast lookup by key           | Dictionary / Hash Table |
| Path finding or web crawling | Graph                   |

Each DS shines in a different scenario.

---

## Example Use Cases

- **Map / Location Data** → Use a **Graph**
- **Ordered list with fast inserts/removals at beginning/end** → Use a **Linked List**
- **Web scraping nested HTML structure** → Use a **Tree**
- **Task scheduling system** → Use a **Binary Heap**
