# Asymptotic Analysis

## 📚 Table of Contents

- [🔍 What is it?](#-what-is-it)
- [🧮 Types of Notations](#-types-of-notations)
  - [Big O (O) – Worst Case](#big-o-o--worst-case--upper-bound)
  - [Big Omega (Ω) – Best Case](#big-omega-ω--best-case--lower-bound)
  - [Big Theta (Θ) – Average Case](#big-theta-θ--averageexact-case--tight-bound)
- [❓ Why Use It?](#-why-use-it)
- [🤔 What Does “Better” Mean?](#-what-does-better-mean)
- [⏱️ Let's Focus on Timing](#️-lets-focus-on-timing)
  - [Why Not Just Use Timers?](#why-not-just-use-timers)
- [🔢 If Not Time, Then What?](#-if-not-time-then-what)
  - [Example 1: Constant Time](#example-1-constant-time)
  - [Example 2: Linear Time](#example-2-linear-time)
- [📌 Summary](#-summary)

---

## 🔍 What is it?

- A method to analyze the performance of an algorithm to measure how the algorithm grows as the input data grows.
- It focuses on the **growth rate** of running time (or space), ignoring constant factors.
- Helps us answer: **how much time and space will the algorithm take?**
- It’s a general technique or approach used to describe algorithm efficiency.

---

## 🧮 Types of Notations

### Upper Bound Notations:

#### **Big O (O)** – Worst Case – Upper Bound

- The **maximum time** the algorithm might take.
- **Example**: In the worst case, it might have to check every element.

#### **Big Omega (Ω)** – Best Case – Lower Bound

- The **minimum time** the algorithm might take.
- **Example**: It finds the answer early, like the first element.

#### **Big Theta (Θ)** – Average/Exact Case – Tight Bound

- How the algorithm **typically performs** or behaves overall.
- **Example**: On average, it checks half the elements.

---

## ❓ Why Use It?

### First:

- When we have multiple implementations of the same function, we need a way to determine which one is better.
- Instead of using vague terms like "great," "good," or "awful," we use a **numeric representation** to describe performance.
- This numeric system is called **Asymptotic Analysis**, using notations like **Big O**, **Theta (Θ)**, and **Omega (Ω)**.

### In Addition:

1. In personal projects, performance might not matter much.
   - But in **coding interviews**, **coding challenges**, and **big companies**, writing efficient code is critical.
2. If your code becomes **slow** or **crashes**, you need to analyze and improve performance.
3. Having a **precise vocabulary** (like Big O) helps in discussing trade-offs between different approaches.
4. Identifying inefficient parts of your code helps fix pain points in applications.

---

## 🤔 What Does “Better” Mean?

- Faster?
- Less memory space?
- More readable code?

---

## ⏱️ Let's Focus on Timing

- Today, we focus more on **execution time** because computers have plenty of storage 😉.

### Why Not Just Use Timers?

You might think of using something like `performance.now()` to measure function time, but:

- **Timing is unreliable**:
  - Different machines yield different results.
  - Even on the same machine, execution times vary.
  - For fast algorithms, timers aren’t precise enough.

Hence, we need a **machine-independent** way to describe performance: **Big O Notation**.

> **Timing**
>
> = machine-dependent ❌
>
> **Big O, Asymptotic Analysis**
>
> = machine-independent ✅

---

## 🔢 If Not Time, Then What?

Instead of counting seconds, let’s **count the number of operations** a computer must perform.

### Example 1: Constant Time

```python
def add(a, b):
  return a + b
```

- Just 3 operations regardless of input size.

- Whether n = 1 or n = 100000, time remains the same → O(1)

---

### Example 2: Linear Time

```python
def sum_array(arr):
    total = 0
    for i in range(len(arr)):
        total += arr[i]
    return total
```

- 5n + 2 operations

- If n = 10, then → 5 \* 10 + 2 = 52 operations

- As n grows, the number of operations grows → O(n)

---

## 📌 Summary

- Asymptotic Analysis is a powerful way to compare and discuss algorithm efficiency.

- It gives us a standard language to express how an algorithm behaves.

- Helps in interviews, real-world optimization, and debugging.
