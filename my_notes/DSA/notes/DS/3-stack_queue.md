# 📚 Stack and Queue Notes

## 📑 Table of Contents

1. [Stack](#stack)
   - [What is a Stack?](#what-is-a-stack)
   - [Where is it used?](#where-is-it-used)
   - [When to use Stack](#when-to-use-stack)
   - [Implementing Stack](#implementing-stack)
   - [Push & Pop Behind the Scenes](#push--pop-behind-the-scenes)
   - [Stack Big O](#stack-big-o)
2. [Queue](#queue)
   - [What is a Queue?](#what-is-a-queue)
   - [Where is it used?](#where-is-it-used-1)
   - [Implementing Queue](#implementing-queue)
   - [Queue Big O](#queue-big-o)
3. [Interview Questions](#interview-questions)

---

## 🥞 Stack

### What is a Stack?

- A **data structure** that follows the **LIFO** principle — Last In, First Out.
- Like a **stack of plates**: the last one placed is the first to be removed.

### Where is it used?

- 📌 **Call Stack** in recursion
- **Function invocations**
- **Undo/Redo functionality**
- **Browser history**

### When to use Stack

- Managing recursive calls
- Undo/Redo systems
- Navigating browser or app history

### Implementing Stack

- You can implement it using:
  - Arrays → ✅ Simple but not always efficient
  - Linked Lists → ✅ More optimal for frequent insert/remove at the start

> 🔗 [Stack Using Linked List Code](../../../../my_code/DSA/PYTHON/DS/stack%20and%20queue/stack_list_implementation_top.py)  
> 🔗 [Stack Using Array Code](../../../../my_code/DSA/PYTHON/DS/stack%20and%20queue/stack_Array_implemetation.py)

> 🧠 JavaScript and Python do **not** have a native Stack data structure. Arrays are used instead, but may not always be ideal for performance.

---

### Push & Pop Behind the Scenes

#### ✅ In a Stack (LIFO):

- `push(item)` → adds to the **top**
- `pop()` → removes from the **top**

#### 🧠 Stack Using Linked List:

You have two implementation choices:

- ✅ **Option 1: Add/remove at the head** (Best):

  - `push(item)` → `unshift(item)` -> add to first
  - `pop()` → `shift()` -> remove from first
  - Time Complexity: **O(1)**

- 🚫 **Option 2: Add/remove at the tail**:
  - `push(item)` → insert at tail
  - `pop()` → remove from tail (inefficient in singly linked list)
  - Time Complexity: **O(n)**

> ✅ Most Stack implementations use **head operations** for O(1) performance.

---

### Stack Big O

| Operation | Time Complexity |
| --------- | --------------- |
| Insertion | O(1)            |
| Deletion  | O(1)            |
| Search    | O(n)            |
| Access    | O(n)            |

---

## 🚶 Queue

### What is a Queue?

- A **FIFO** data structure — First In, First Out.
- Like a **queue of students**: the first one in is the first one served.

### Where is it used?

- **Print queue**
- **Task scheduling**
- **Upload/download resource management**

---

### Implementing Queue

- Using **Array**:

  - `push()` with `shift()` ⇒ ❌ `shift()` = O(n)
  - `unshift()` with `pop()` ⇒ ❌ `unshift()` = O(n)

- Using **Linked List** (✅ Preferred):
  - `enqueue(item)` → add at **tail**
  - `dequeue()` → remove from **head**
  - Both operations: **O(1)**

> 🔗 [Queue Using Array Code](../../../../my_code/DSA/PYTHON/DS/stack%20and%20queue/queue_Array_implementation.py)  
> 🔗 [Queue Using Linked List Code](../../../../my_code/DSA/PYTHON/DS/stack%20and%20queue/queue_list_implementation.py)

---

### Queue Big O

| Operation | Time Complexity |
| --------- | --------------- |
| Insertion | O(1)            |
| Deletion  | O(1)            |
| Search    | O(n)            |
| Access    | O(n)            |

---

## ❓ Interview Questions

- Implement Stack using Queue
- Implement Queue using Stack
- Resize an Array-based Stack (Dynamic Capacity)

All implemented in code:

> 🔗 [Stack from Queues Code](../../../../my_code/DSA/PYTHON/DS/stack%20and%20queue/stack_using_queue.py)  
> 🔗 [Queue from Stacks Code](../../../../my_code/DSA/PYTHON/DS/stack%20and%20queue/queue_using_stack.py)
> 🔗 [Array Stack with Resizing Strategy](../../../../my_code/DSA/PYTHON/DS/stack%20and%20queue/stack_Array_implemetation_with_resizing_strategy.py)
