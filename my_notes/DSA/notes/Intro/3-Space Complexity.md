# 🧠 Space Complexity

## 📑 Table of Contents

- [1. Space vs Time Complexity](#1-space-vs-time-complexity)
- [2. What About the Inputs?](#2-what-about-the-inputs)
- [3. Space Complexity Rules of Thumb (Python)](#3-space-complexity-rules-of-thumb-python)
- [4. Example: Analyzing Space Complexity in Python](#4-example-analyzing-space-complexity-in-python)
- [5. Summary](#-summary)

---

## 1. 🕒 Space vs Time Complexity

So far, we’ve mostly focused on **time complexity**:

- How do we analyze the runtime of an algorithm as the size of the input increases?

But we can also use **Big O notation** to analyze **space complexity**:

- How much _additional memory_ does our algorithm need to run?

---

## 2. ❓ What About the Inputs?

Sometimes you’ll hear the term **auxiliary space complexity**:

- This refers to the **extra space** required by the algorithm **excluding** the input size itself.

📌 That means:

- We **don't count** the space taken up by the inputs.
- We **only care** about the space that the algorithm **allocates** to do its work.

When calculating **time complexity**, the input size (e.g. `n`) matters.

But in **space complexity**, we ignore the space required to hold the input itself.

---

## 3. 📏 Space Complexity Rules of Thumb (Python)

| Type                              | Space Complexity |
| --------------------------------- | ---------------- |
| `int`, `float`, `bool`, `None`    | O(1)             |
| `str` (length n)                  | O(n)             |
| `list`, `tuple`, `set` (length n) | O(n)             |
| `dict` (n keys)                   | O(n)             |

💡 These are general estimates for space usage based on data type size.

---

## 4. 🧪 Example: Analyzing Space Complexity

Let’s look at a basic example and analyze the **space complexity**.

```python
def double(arr):
    new_arr = []
    for num in arr:
        new_arr.append(num * 2)
    return new_arr
```

### 📊 Analysis

- Input arr is not counted in space complexity (we exclude inputs).

- We created:

  - new_arr → one new list ⇒ O(n)

  - loop variable num ⇒ O(1)

- The final result holds n elements ⇒ O(n)

✅ Final space complexity:
**O(n) + O(1) → O(n)** (we drop the constants)

---

## 🧠 Summary

- Time complexity = how long it takes to run

- Space complexity = how much extra memory it takes

- In space complexity:

  - Ignore inputs.

  - Focus on variables, lists, or data structures your algorithm creates.

---
