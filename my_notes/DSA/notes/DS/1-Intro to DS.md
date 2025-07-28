# Intro to Data Structures

## Table of Contents

- [What is a Data Structure?](#what-is-a-data-structure)
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

```

> Think of a data structure as a custom tool with specific rules for how data is handled.

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
```
