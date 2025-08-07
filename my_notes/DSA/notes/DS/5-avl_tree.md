# 🌳 AVL Trees — Self-Balancing Binary Search Tree (BST)

---

## ✅ What is an AVL Tree?

An **AVL tree** (named after Adelson-Velsky and Landis) is a **self-balancing BST**.

- For every node, the **balance factor** = `height(left subtree) - height(right subtree)`
- The balance factor is always in the range **\[-1, 0, +1]**

### Why AVL?

In normal BSTs, sorted insertions can make the tree degenerate into a **linked list** → O(n) time
AVL Trees maintain **log(n)** height → O(log n) time for search, insert, and delete

---

## 🔁 AVL Tree Rotations

To restore balance after insertions/deletions:

---

### 🔹 Case 1: Single Right Rotation (Left-Left)

**Example 1:**
Insert: `60 → 50 → 20`

```
      60          ➜         50
     /                      / \
   50         ⟶→→→→      20   60
  /
20
```

**Example 2:**
Insert: `70 → 60 → 80 → 50 → 40`
Unbalanced at node 70 → Right rotate at 70

```
      70           ➜         60
     /  \                   /  \
   60   80       ⟶→→→→    50    70
  /                            /
50                          40  80
/
40
```

---

### 🔹 Case 2: Single Left Rotation (Right-Right)

**Example 1:**
Insert: `80 → 90 → 100`

```
     80              ➜         90
       \                      /  \
       90        ⟶→→→→     80  100
         \
        100
```

**Example 2:**
Insert: `50 → 60 → 40 → 70 → 80`

```
Unbalanced at node 50 → Left rotate at 50
            50              ➜             60
           /  \                           /  \
         40   60     ⟶→→→→→→→→→→     50   70
                 \                      /    \
                 70                   40    80
                   \
                   80
```

---

### 🔸 Case 3: Double Rotation (Right-Left)

**Example 1:**
Insert: `60 → 80 → 70`

```
Initial:
    60
      \
      80
     /
    70

Step 1: Rotate right at 80
Step 2: Rotate left at 60

Final:
    70
   /  \
  60   80
```

**Example 2:**
Insert: `30 → 10 → 60 → 40 → 70 → 35`

Final AVL Tree:

```
     40
    /   \
  30     60
 /  \      \
10  35     70
```

---

### 🔸 Case 4: Double Rotation (Left-Right)

**Example 1:**
Insert: `60 → 20 → 40`

```
Initial:
      60
     /
   20
     \
     40

Step 1: Left rotate at 20
Step 2: Right rotate at 60

Final:
     40
    /  \
  20   60
```

**Example 2:**
Insert: `50 → 70 → 30 → 20 → 40 → 45`

```
Final Balanced Tree:
       40
      /   \
    30     50
   /  \      \
  20  45     70
```

---

## 🗑 AVL Tree Deletion Scenarios

### 1. Deleting a Leaf Node

Example: delete 50 from:

```
   40
  /  \
30   50
```

Becomes:

```
   40
  /
30
```

---

### 2. Deleting Node with One Child

Example: delete 60:

```
     40
    /  \
  30   60
       /
     50

→ After deletion:
     40
    /  \
  30   50
```

---

### 3. Deleting Node with Two Children

Example: delete 30 from:

```
      50
     /  \
   30    70
  / \    / \
20 40  60 80

→ Replace 30 with 40 (or 20)
Final:
      50
     /  \
   40    70
  /     / \
20    60 80
```

---

### 4. Deletion Causes Imbalance (Requires Rotation)

Delete: 80 → 60 → unbalanced at 50 → Rotate right

Final balanced:

```
     30
    /  \
  20    50
 /     /  \
10   40   70
```

---

## 🧠 AVL Tree Python Code

[🗂 Full Python AVL Tree Code](../../../../my_code/DSA/PYTHON/DS/trees/avl_tree.py)

---

## 📝 AVL Tree Exercises

### Exercise 1: Validate AVL Tree

✅ Ensure each node's balance factor is in \[-1, 0, 1]
[Implementation](../../../../my_code/DSA/PYTHON/DS/trees/avl_tree.py)

---

### Exercise 2: Range Search in AVL Tree

🔍 Return all values between `[low, high]` using BST properties
**Test Case:** `40, 20, 60, 10, 30, 50, 70`
→ `range_search(root, 25, 65)` → `[30, 40, 50, 60]`
[Implementation](../../../../my_code/DSA/PYTHON/DS/trees/avl_tree.py)

---

### Exercise 3: Find k-th Smallest Element

🔢 Return the **k-th smallest** element in AVL
**Test Case:** `[50, 30, 70, 20, 40, 60, 80]`
→ `k=4` → Output: `50`
[Implementation](../../../../my_code/DSA/PYTHON/DS/trees/avl_tree.py)
