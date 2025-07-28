# Logarithms

## Table of Contents

- [What is a Logarithm?](#what-is-a-logarithm)
- [Understanding Logarithms](#understanding-logarithms)
- [Mathematical Interpretation](#mathematical-interpretation)
- [Logarithmic Complexity](#logarithmic-complexity)
- [Why Does It Matter?](#why-does-it-matter)

---

## What is a Logarithm?

- In algorithm analysis, you may encounter:
  - `O(1)`, `O(n)`, `O(n^2)`
  - But sometimes you'll see logarithmic expressions too — like `O(log n)`

## Understanding Logarithms

- A logarithm is the **inverse of exponentiation**:

```

log₂(8) = 3 ⇒ 2³ = 8
log₂(value) = exponent ⇒ 2^exponent = value

```

- Rule of thumb:
- The logarithm of a number roughly measures **how many times you can divide it by 2 before getting ≤ 1**

### Example

If `n = 8`, we divide by 2 until we reach 1:

```

8 → 4 → 2 → 1

```

This takes 3 steps ⇒ `log₂(8) = 3`

## Mathematical Interpretation

- In each step `k`:

```

When k = 0 ⇒ n / 2⁰ = n
When k = 1 ⇒ n / 2¹ = n/2
...

```

- Eventually:

```

n / 2^k = 1
⇒ 2^k = n
⇒ k = log₂(n)

```

## Logarithmic Complexity

- Logarithmic time complexity is **very efficient**.

```

O(log n) < O(n) < O(n log n) < O(n²)

```

## Why Does It Matter?

- **Searching algorithms** like **binary search** run in `O(log n)` time.
- Some **efficient sorting algorithms** use `O(n log n)` time.
- **Recursion** can have logarithmic **space complexity** in divide-and-conquer algorithms.

---

> 🔍 Understanding logarithms is essential when analyzing advanced algorithms — especially recursive or divide-and-conquer strategies.
