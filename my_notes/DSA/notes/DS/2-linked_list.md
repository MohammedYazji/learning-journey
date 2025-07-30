# 📒 Linked List Notes — Data Structures

## 📚 Table of Contents

1. [Overview](#-overview)
2. [Linked List Vs. Array](#-linked-list-vs--array--elevator-vs-stairs-analogy)
3. [Types of Linked Lists](#-types-of-linked-lists)

   - [Singly Linked List (SLL)](#1--singly-linked-list-sll)
   - [Doubly Linked List (DLL)](#2--doubly-linked-list-dll)
   - [Circular Linked List (CLL)](#3--circular-linked-list-cll)

4. [Tips & Best Practices](#-tips-and-best-practices)
5. [Common Interview Questions](#-interview-questions)

---

## 📌 Overview

A **Linked List** is a linear data structure where elements (nodes) are connected using pointers. Unlike arrays, the memory is not continuous — elements are scattered in memory.

---

## 🪜 Linked List vs. 🛗 Array — Elevator vs. Stairs Analogy

### 🔍 Real-World Analogy

> Imagine you're in a building and want to reach the 5th floor. You have two options:

### 🪜 Stairs = Linked List

- You must go **step by step**:

  - 1 → 2 → 3 → 4 → 5

- You **can’t skip floors**.
- If someone asks you to go to floor 5, you have to **start from floor 1** and walk up.
- But if you want to **insert a new floor between 2 and 3**, it’s easy — just add a step in between.

> That’s how a **linked list** works:

- ❌ No direct access — to get to a node, you must follow the chain (O(n))
- ✅ Easy insertion/deletion anywhere by changing pointers
- 🧠 Flexible but slower for access

---

### 🛗 Elevator = Array

- You just press the button for **floor 5**, and boom — you're there.
- ✅ Direct access — you can jump to any element instantly (O(1))
- ❌ But if you want to add a new floor between 2 and 3, it’s a **problem**:

  - You need to shift all the floors up or rebuild the whole elevator system.

> That’s how an **array** works:

- ✅ Fast access to elements
- ❌ Hard to insert/delete in the middle — involves shifting

---

### ⚖️ Summary Table

| Concept       | Linked List (🪜 Stairs)                 | Array (🛗 Elevator)                      |
| ------------- | --------------------------------------- | ---------------------------------------- |
| Access        | One-by-one (step-by-step) — slow (O(n)) | Jump directly to any floor — fast (O(1)) |
| Insert/Delete | Easy to add/remove nodes anywhere       | Hard — must shift elements               |
| Structure     | Flexible, dynamic                       | Fixed or resizable                       |
| Memory Layout | Scattered (non-contiguous)              | Continuous (contiguous)                  |

---

## 🧱 Types of Linked Lists

---

### 1. 🔹 Singly Linked List (SLL)

- Each node has:

  - `value`
  - `next` pointer to the next node

- Can have:

  - `head`, `tail`, and `length`
  - But **not always** all three are implemented

#### ✅ Common Operations:

- `push` — Add to end
- `pop` — Remove from end
- `shift` — Remove from start
- `unshift` — Add to start
- `get` — Get node at index
- `set` — Update value at index
- `insert` — Insert node at index
- `remove` — Remove node at index
- `reverse` — Reverse the list

🗂️ See my code in: [Singly Linked List](../../../../my_code/DSA/PYTHON/DS/linked%20lists/singly-linked-list/)
↪ Includes:

- SLL with only head
- SLL with head and tail
- Other Methods And Problems implementations

#### 📊 Time Complexity (SLL)

| Operation         | Time                         |
| ----------------- | ---------------------------- |
| Insertion (start) | O(1)                         |
| Insertion (end)   | O(1) with tail, O(n) without |
| Deletion (start)  | O(1)                         |
| Deletion (end)    | O(n)                         |
| Search / Access   | O(n)                         |

---

### 2. 🔁🔁 Doubly Linked List (DLL)

- Each node has:

  - `value`
  - `next` pointer to the next node
  - `prev` pointer to the previous node

#### ✅ Benefits:

- Can **traverse forward and backward**
- Easier insertion/deletion at both ends and in the middle
- Takes more memory than SLL due to `prev` pointer

🗂️ See my code in: [Doubly Linked List](../../../../my_code/DSA/PYTHON/DS/linked%20lists/doubly-linked-list/)

---

### 3. 🔁 Circular Linked List (CLL)

#### 🔍 Description:

- The **last node points back to the first node**, forming a **loop**.
- Can be **singly** or **doubly circular**.

#### ✅ Benefits:

- You can **start from any node**
- Avoids null checks at the end — good for cyclic operations
- Useful for:

  - Round-robin tasks
  - Playlists
  - Game loops

#### 🔁 Traversal Example:

```python
def traverse_circular_list(head):
    if head is None:
        return
    temp = head
    while True:
        print(temp.data, end=' -> ')
        temp = temp.next
        if temp is head:
            break
```

#### 🔎 Detect if a List is Circular:

```python
def is_circular(head):
    if head is None:
        return False
    temp = head.next
    while temp is not None and temp is not head:
        temp = temp.next
    return temp is head
```

🗂️ See my code in:

- [Circular Singly](../../../../my_code/DSA/PYTHON/DS/linked%20lists/singly-linked-list/circular-singly-linked-list.py)
- [Circular Doubly](../../../../my_code/DSA/PYTHON/DS/linked%20lists/doubly-linked-list/circular-dobuly-linked-list.py)

↪ Includes: All methods implemented

---

## ⚠️ Tips and Best Practices

- Always use **temp variables** like `current` — avoid directly mutating `head` or `tail`
- Implementations can vary, but method logic remains similar
- Pay attention to **null checks** when implementing custom logic

---

## 🎯 Interview Questions

Link each one to your implementation folder as a learning reference.

| Question                           | Description                                                       | Link                                                                                                                                                                                                                                             |
| ---------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 🔥 Delete a node without head      | You’re given a node, but **not the head** — how do you delete it? | [`delete-node-without-head`](../../../../my_code/DSA/PYTHON/DS/linked%20lists/singly-linked-list/delete-node-without-head-pointer.py)                                                                                                            |
| 🔁 Circular linked list operations | Traversal, insert, delete, detect cycle                           | [`Circular Singly`](../../../../my_code/DSA/PYTHON/DS/linked%20lists/singly-linked-list/circular-singly-linked-list.py), [`Circular Doubly`](../../../../my_code/DSA/PYTHON/DS/linked%20lists/doubly-linked-list/circular-dobuly-linked-list.py) |
