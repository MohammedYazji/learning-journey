# 🔁 Why Use Recursion

## 📑 Table of Contents

1. [What is Recursion?](#what-is-recursion)
2. [The Stack ⇒ LIFO](#the-stack-⇒-lifo)
3. [Two Essential Parts of Recursion](#two-essential-parts-of-recursion)
4. [Common Recursion Pitfalls](#common-recursion-pitfalls)
5. [Helper Method Recursion](#helper-method-recursion)
6. [Pure Recursion (Without Helper Method)](#pure-recursion-without-helper-method)
7. [Helper Method Vs Pure Recursion](#helper-method-vs-pure-recursion)
8. [Summary & Rules](#summary)
9. [IMPORTANT INTERVIEW QUESTIONS](#-important-interview-questions)
   - [Intro](#intro)
   - [Enhancing Fibonacci](#1-enhancing-fibonacci)

---

## What is Recursion?

A process (a function in our case) that **calls itself**.

---

## The Stack ⇒ LIFO 📚

- In almost all programming languages, there is a built-in data structure that manages what happens when functions are called — called the stack.

- The stack follows LIFO (Last In, First Out) order: the last function called is the first one to finish.

- Every time a function calls another function (including itself in recursion), a stack frame is added ("pushed") to the stack, storing information like local variables and where to return after finishing.

- When a function finishes, its stack frame is removed ("popped") from the stack.

- This structure keeps track of active function calls and their execution order.

- In recursion, the stack grows with each recursive call until the base case is reached, then unwinds as calls complete.

---

## Two Essential Parts of Recursion

1. **Base Case — The Stop Point**

   - The base case is the condition that stops the recursion.

   - Without a base case, the function would call itself forever and cause a stack overflow.

   - This is the most important concept in recursion because it prevents infinite loops.

2. **Different Input in Each Call**

   - Each recursive call must work with a different input, moving closer to the base case.

   - This ensures that after some number of calls, the base case is met, and recursion ends.

- **Example: countDown function:**

```py
def countDown(num):
    # Base Case: stop when num is 0 or less
    if num <= 0:
        print("Done!!")
        return

    # Print the current number
    print(num)
    # Prepare for next recursive call with a smaller number
    countDown(num - 1) # different input each call
```

**How this works:**

- The function countDown prints numbers starting from num down to 1.

- Each call decreases num by 1 (num - 1), moving towards the base case.

- When num reaches 0 or less, the base case triggers, printing "Done!!" and stopping recursion.

**Key points:**

- The base case (if num <= 0) prevents infinite recursion.

- The input (num) changes with each call (num - 1), progressing towards the base case.

---

## Common Recursion Pitfalls

- Stack overflow ⇒ happens when recursion never ends (infinite calls)
- Forgetting to return in base case or returning the same input, so base case never reached

---

## Helper Method Recursion

🔸 **When do we use it?**

- When we want to use recursion and return a list or build up a result, not just a single value.

- It helps organize the recursive logic by:

  - Creating an outer function that holds the result list.

  - Using an inner helper function to do the recursion.

- This approach avoids using global variables and keeps everything clean and contained.

🔸 **Example: Return Only Odd Numbers from a List**

```py
def collect_odds(input_list):
    # This list will store our final output
    my_list = []

    # helper recursion method to not mutate the list above
    def helper(helper_input):
        # Base case: if the list is empty, stop recursion
        if len(helper_input) == 0:
            return

        # If the first element is odd, add it to the my_list list
        if helper_input[0] % 2 != 0:
            my_list.append(helper_input[0])

        # Recursive call with the rest of the list
        helper(helper_input[1:])

    # Start the recursion
    helper(input_list)

    return my_list
```

🔸 **Explanation of the Example:**

1. We define an outer function collect_odds(input_list) that:

   - Creates an empty list result to store odd numbers.

   - Defines a helper function helper() inside it.

2. The helper:

   - Checks if the input is empty (base case).

   - If the first element is odd, it's added to result.

   - Then it recursively processes the rest of the list using helper_input[1:].

3. Finally, the result list is returned from the outer function after recursion finishes.

---

## Pure Recursion (Without Helper Method)

🔸 **What is it?**
I- t’s just regular recursion.

- We don’t use an outer helper function — instead, the recursive logic and result-building all happen in one function.

🔸 **Example: Return Only Odd Numbers from a List (Pure Recursion)**

```py
def collect_odds(arr):
    # Base case: if the list is empty, return an empty list
    if len(arr) == 0:
        return []

    # Recursive logic
    if arr[0] % 2 != 0:
        # Include the current odd number and recurse on the rest
        return [arr[0]] + collect_odds(arr[1:])
    else:
        # Skip the even number and recurse on the rest
        return collect_odds(arr[1:])
```

🔸 **Explanation: **

1. Base case:

- If the list is empty, we return an empty list to stop recursion.

2. Recursive case:

- If the first element is odd:
  ➤ We return a new list containing it, plus the result of the recursive call on the rest of the list.

- If the first element is even:
  ➤ We just skip it and recurse on the rest of the list.

---

## Helper Method Vs Pure Recursion

| Feature                | Helper Method Recursion   | Pure Recursion            |
| ---------------------- | ------------------------- | ------------------------- |
| Uses external variable | ✅ Yes                    | ❌ No                     |
| Returns result         | Return at end manually    | Returns result every call |
| State mutation         | May mutate external state | Avoid mutating data       |
| Easier to understand   | ✅ Easier for beginners   | ⚠️ Needs careful thinking |

- **Pure Recursion Tips (JS & Python):**

  - For arrays/lists, use **copies** so original doesn't change:

    - JS: `slice()`, spread `[...arr]`, `concat()`
    - Python: slicing `list[1:]`, `list.copy()`, `+`

  - For strings (immutable):

    - JS: `slice()`, `substring()`
    - Python: slicing `string[1:]`

  - For objects/dictionaries:
    - JS: `Object.assign({}, obj)`, `{...obj}`
    - Python: `dict.copy()`, `{**dict}`

---

## Summary & Rules

- Recursion is a function calling itself with smaller input each time.
- Must have a **base case** to stop.
- The call stack tracks each call (LIFO).
- Helper method recursion helps when building lists.
- Pure recursion returns results directly and avoids external mutations.
- Avoid recursion unless necessary — it wastes memory space.
- Recursion increases both **time and space complexity**.
- Time complexity is crucial — poor performance is unacceptable today.
- Ask yourself: “What’s the stopping condition?” before using recursion.
- Prefer **loops** if the problem can be solved without recursion.

## 📌 Important Interview Questions

### Intro

- In interviews, when you solve a recursion question, the interviewer often asks:

  > _"Can you optimize it?"_

- So always think:

  - Can I avoid **recomputing the same values**?
  - Can I use **memoization** or **iteration**?
  - Is there a **more space-efficient** solution?

- A very common example is the **Fibonacci sequence** — be ready to explain and optimize all versions!

---

### 1. Enhancing Fibonacci

> **Fibonacci problem:**
> Given `n`, return the `n-th` number in the Fibonacci sequence:
> `0, 1, 1, 2, 3, 5, 8, 13, ...`

---

#### ❌ 1. Naive Recursive Solution

```python
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)
```

- **Time:** `O(2^n)`
- **Space:** `O(n)`
- 🔴 Very inefficient — it recomputes the same values again and again.

---

#### ✅ 2. Memoization (Top-Down Dynamic Programming)

> Store already-computed values in a dictionary to avoid repeated work.

```python
def fib(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
    return memo[n]
```

- **Time:** `O(n)`
- **Space:** `O(n)` (due to the memo dictionary and call stack)
- ✅ Much faster — avoids redundant calls

---

#### ✅ 3. Iterative (Bottom-Up Dynamic Programming)

> Start from the bottom (`0 → n`) and build up using variables.

```python
def fib(n):
    if n <= 1:
        return n

    prev, curr = 0, 1
    for _ in range(2, n + 1):
        prev, curr = curr, prev + curr
    return curr
```

- **Time:** `O(n)`
- **Space:** `O(1)` ✅
- 🟢 Best performance — no recursion, no dictionary

---

#### ✅ Summary

| Version         | Time Complexity | Space Complexity | Notes                            |
| --------------- | --------------- | ---------------- | -------------------------------- |
| Naive Recursive | O(2^n)          | O(n)             | ❌ Bad performance               |
| Memoized        | O(n)            | O(n)             | ✅ Efficient with recursion      |
| Iterative       | O(n)            | O(1)             | ✅ Best — fast & memory friendly |
