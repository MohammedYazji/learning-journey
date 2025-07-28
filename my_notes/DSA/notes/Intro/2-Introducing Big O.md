# 📈 Introducing Big O (Upper Bound)

## 📚 Table of Contents

- [What is Big O Notation?](#-what-is-big-o-notation)
- [Formal Definition](#-formal-definition)
- [Quick Visualization](#-quick-visualization)
- [Examples](#-examples)
  - [Add Up To – O(1) and O(n)](#1-add-up-to--o1-and-on)
  - [Count Up and Down – O(n)](#2-count-up-and-down--on)
  - [Print All Pairs – O(n²)](#3-print-all-pairs--on)
- [Simplifying Big O](#-simplifying-big-o-expressions)
- [Common Complexities](#common-complexities)
- [Real Examples](#-real-examples)
  - [`logAtLeast5(n)`](#logatleast5n)
  - [`logAtMost5(n)`](#logatmost5n)
- [Summary](#-summary)

---

## 📌 What is Big O Notation?

- A tool in **asymptotic analysis**:
  - It is **one of the notations** used within asymptotic analysis.
  - It shows the **upper bound on the growth rate**:
    - Describes the **worst-case** scenario.
    - So maybe it will take **less** than this, but this is the **maximum**.

#### 🧠 Example:

If an algorithm is **O(n)**, it means:

- In the **worst case**, it will make up to **n operations**.
- But in other cases, it might:
  - Perform only **n/2** operations,
  - Or even **1** operation.

⚠️ However, in Big O notation, we **ignore constants** like `1` or `n/2` and only care about the **upper bound growth** as `n` increases.

---

## 📚 Formal Definition

> An algorithm is **O(f(n))** if the number of simple operations it performs is eventually less than a constant times `f(n)` as `n` increases.

- `f(n)` could be:
  - Linear → `f(n) = n`
  - Quadratic → `f(n) = n²`
  - Constant → `f(n) = 1`
  - Or something else...

---

### ⚡ Quick Visualization:

| **Input size (n)** | **Constant O(1)** | **Linear O(n)** | **Quadratic O(n²)** |
| ------------------ | ----------------- | --------------- | ------------------- |
| 1                  | 1 step            | 1 step          | 1 step              |
| 10                 | 1 step            | 10 steps        | 100 steps           |
| 100                | 1 step            | 100 steps       | 10,000 steps        |

👉 See how fast quadratic (n²) blows up compared to linear (n)? That's why Big-O matters for large inputs.

---

## 🧪 Examples

### 1. Add Up To – O(1) and O(n)

- **O(1)** – Using a formula:

```python
def add_up_to(n):
    return (n * (n + 1)) // 2
```

- **O(n)** – Using a loop:

```python
def add_up_to_loop(n):
    total = 0
    for i in range(1, n + 1):
        total += i
    return total
```

---

### 2. Count Up and Down – O(n)

```python
def count_up_and_down(n):
    print("Going up!")
    for i in range(n):
        print(i)

    print("At the top! Going down...")
    for j in range(n - 1, -1, -1):
        print(j)

    print("Back down. Bye!")
```

#### Big O Breakdown:

- First loop → O(n)

- Second loop → O(n)

- Logs → O(1)

➡️ Total: **O(n + n + 1)** → Drop constants → **O(n)**

**✅ Final Big O:** O(n)

---

### 3. Print All Pairs – O(n²)

```python
def print_all_pairs(n):
    for i in range(n):
        for j in range(n):
            print(i, j)
```

- Outer loop → O(n)

- Inner loop → O(n) for each outer loop

- Total: **O(n × n) = O(n²)**

| n   | Operations |
| --- | ---------- |
| 1   | 1          |
| 2   | 4          |
| 3   | 9          |
| 4   | 16         |
| 5   | 25         |

---

## 🧹 Simplifying Big O Expressions

### 1. Constants Don’t Matter

- O(2n) → O(n)
- O(500) → O(1)

### 2. Smaller Terms Don’t Matter

- O(n + 10) → O(n)
- O(n + n²) → O(n²)

### 3. Big O Shorthand Rules

| Operation                      | Complexity |
| ------------------------------ | ---------- |
| Arithmetic ops, assignments    | O(1)       |
| Access by index (array/object) | O(1)       |
| Loop of n iterations           | O(n)       |
| Nested loops                   | O(n²)      |

---

### Common Complexities

| Complexity | Description                           | Example                  |
| ---------- | ------------------------------------- | ------------------------ |
| O(1)       | Constant — fixed number of operations | Accessing array by index |
| O(log n)   | Halving input each time               | Binary search            |
| O(n)       | Looping through full input            | Finding max in an array  |
| O(n log n) | Divide + merge or partition           | Merge sort, Quick sort   |
| O(n²)      | Double loop over input                | Comparing all pairs      |
| O(2ⁿ)      | Doubles each time                     | Recursive Fibonacci      |

---

## 🧪 Real Examples

### `logAtLeast5(n)`

```python
def log_at_least_5(n):
    for i in range(1, max(5, n) + 1):
        print(i)
```

- Always prints **at least 5** numbers.
- If `n` > 5, runs up to `n` times.
- ⏱️ **Time Complexity:** **O(n)**

---

### `logAtMost5(n)`

```python
def log_at_most_5(n):
    for i in range(1, min(5, n) + 1):
        print(i)
```

- Never prints **more than 5** numbers.
- Regardless of `n`, it **caps at 5** iterations.
- ⏱️ **Time Complexity:** **O(1)**

---

## ✅ Summary

- **Big O** helps formalize how code grows with input.
- We focus on the **worst-case** behavior.
- **Ignore constants**, **ignore smaller terms**.
- Learn to recognize common patterns like **O(1)**, **O(n)**, **O(n²)**, **O(log n)**, and so on.

---
