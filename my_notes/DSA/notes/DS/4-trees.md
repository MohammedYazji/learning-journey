# 🌳 Tree Data Structure Notes

## 📑 Table of Contents

1. [What is a Tree?](#-what-is-a-tree)
2. [Tree Terminology](#-tree-terminology)
3. [Height Vs. Depth](#-height-vs-depth-of-a-tree-node)
4. [Tree Implementation](#-tree-implementation)
5. [Lists vs. Trees](#-lists-vs-trees)
6. [Invalid Tree Structures](#-cant-be-a-tree)
7. [Uses for Trees](#-uses-for-trees)
8. [Types of Trees](#-types-of-trees)
9. [Tree Traversals](#-tree-traversals)
10. [Interview Questions](#-interview-questions)

---

## 🌳 What is a Tree?

- A **hierarchical** data structure composed of **nodes** connected by edges.
- Each node can have child nodes, creating a parent-child relationship.
- The top node is called the **Root**.

### ASCII Example (Simple Tree)

```text
         A (Root)
       /   \
     B       C
    / \     /
   D   E   F
```

---

## 🧩 Tree Terminology

- **Node:** Data element in the tree.
- **Root:** Topmost node (starting point).
- **Parent:** Node with child nodes.
- **Child:** Node connected below a parent.
- **Siblings:** Nodes sharing the same parent.
- **Leaf:** Node with no children (External Node).
- **Edge:** Connection between two nodes.
- **Internal Node:** Node with at least one child.
- **Subtree:** A node and all its descendants.
- **Depth:** Number of edges from root to the node.
- **Height:** Number of edges in the longest path from a node down to a leaf.

---

## 📏 Height vs Depth of a Tree Node

Understanding **height** and **depth** is key to mastering tree structures.

---

### 🌿 Depth of a Node

- **Depth** is the number of edges **from the root node down to the node**.
- The root node has depth **0**.
- Each level down increases the depth by 1.

**ASCII Example:**

```text
        A (depth 0)
       / \
     B(1) C(1)
    /      \
  D(2)     E(2)
```

- Depth of `A` = 0
- Depth of `B` and `C` = 1
- Depth of `D` and `E` = 2

---

### 🌳 Height of a Node

- **Height** is the number of edges **on the longest path from the node down to a leaf**.
- A leaf node has height **0**.
- Height is calculated bottom-up.

**ASCII Example:**

```text
        A (height 2)
       /  \
    B(1)  C(1)
    /       \
  D(0)      E(0)
```

- Height of `D` and `E` = 0 (leaves)
- Height of `B` and `C` = 1
- Height of `A` = 2 (longest path: A → B → D or A → C → E)

---

## 🔧 Tree Implementation

### 1. Using Linked List (Nodes with Left & Right pointers)

```python
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
```

#### ASCII Representation:

```text
         A (Root)
       /   \
     B       C
    / \     /
   D   E   F
```

---

### 2. Using Array Representation

**Array Representation (Level Order)**

- Represent the above tree as an array:

| Index | 0   | 1   | 2   | 3   | 4   | 5   |
| ----- | --- | --- | --- | --- | --- | --- |
| Value | A   | B   | C   | D   | E   | F   |

- Index rules:

  - Root at index 0
  - Left child of node at index `i`: `2i + 1`
  - Right child of node at index `i`: `2i + 2`
  - Parent of node at index `c`: `(c - 1) // 2`

---

## 🔄 Lists vs. Trees

- Linked Lists are linear — each node points to one next node.
- Trees are hierarchical — nodes can have multiple children.

### ASCII example — Linked List vs Tree:

**Linked List**

```text
1 -> 2 -> 3 -> 4
```

**Tree**

```text
    1
   / \
  2   3
       \
        4
```

---

## ❌ Can’t Be a Tree

- Nodes that reference siblings directly (only parent → child links allowed)
- Multiple roots — a valid tree has only **one root**

### Diagram placeholders for invalid trees:

`[Insert image showing sibling references and multiple roots]`

---

## 💡 Uses for Trees

- File systems
- Web DOM
- Expression parsing
- Routing
- Decision making

---

## 🌲 Types of Trees

### 1. General Tree

- No limit on number of children.

```text
        A
      / | \
     B  C  D
    /
   E
```

### 2. Binary Tree

- Each node has up to two children.

```text
        A
       / \
      B   C
     / \
    D   E
```

🗂️ See my code: [Binary Tree](../../../../my_code/DSA/PYTHON/DS/linked%20lists/singly-linked-list/)

### 3. Full Binary Tree

- Every internal node has exactly two children.

```text
        A
       / \
      B   C
     / \ / \
    D  E F  G
```

### 4. Complete Binary Tree

- All levels filled except possibly last; last level filled left to right.

```text
        A
       / \
      B   C
     / \  /
    D  E F
```

### 5. [Balanced Tree (AVL)](./5-avl_tree.md)

- For every node, height difference between left & right subtrees ≤ 1.

```text
        30
       /  \
     20    40
    /
   10
```

### 6. Binary Search Tree (BST)

- Binary tree with rule: left subtree < node < right subtree

```text
        15
       /  \
      10   20
     /    /  \
    8    17   25
```

- 🗂️ See my code: [BST Iteratively](../../../../my_code/DSA/PYTHON/DS/trees/Binary%20Search%20Tree%20[Iteritavely].py)
- 🗂️ See my code: [BST Recursion](../../../../my_code/DSA/PYTHON/DS/trees/BST_recursion.py)

#### Big O Complexity (BST)

| Operation | Average  | Worst Case |
| --------- | -------- | ---------- |
| Insert    | O(log n) | O(n)       |
| Search    | O(log n) | O(n)       |
| Delete    | O(log n) | O(n)       |

---

## 🔁 Tree Traversals

- **Preorder** (Root → Left → Right)

```text
        A
       / \
      B   C
     / \
    D   E

Preorder: A B D E C
```

- **Inorder** (Left → Root → Right)

```text
Inorder: D B E A C
```

- **Postorder** (Left → Right → Root)

```text
Postorder: D E B C A
```

---

## ❓ Interview Questions

- Implement tree traversals
- Validate if a binary tree is BST
- Compute the Height of a Binary Tree

> 🔗 [Tree Traversal in BT Code](../../../../my_code/DSA/PYTHON/DS/trees/Binary%20Tree.py)
> 🔗 [Validate BST Code](../../../../my_code/DSA/PYTHON/DS/trees/BST_recursion.py)
> 🔗 [Compute the Height of a Binary Tree Code](../../../../my_code/DSA/PYTHON/DS/trees/Binary%20Tree.py)
