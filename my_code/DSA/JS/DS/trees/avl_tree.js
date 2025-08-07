// Node class for AVL Tree
class AVLNode {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
    this.height = 1;
  }
}

class AVLTree {
  // Get height of node (null node = height 0)
  getHeight(node) {
    return node ? node.height : 0;
  }

  // Get balance factor (left height - right height)
  getBalance(node) {
    if (!node) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  // Right rotate the tree
  rotateRight(y) {
    const x = y.left;
    const T2 = x.right;

    // Perform rotation
    x.right = y;
    y.left = T2;

    // Update heights
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;

    // Return new root
    return x;
  }

  // Left rotate the tree
  rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;

    // Perform rotation
    y.left = x;
    x.right = T2;

    // Update heights
    x.height = Math.max(this.getHeight(x.left), this.getHeight(x.right)) + 1;
    y.height = Math.max(this.getHeight(y.left), this.getHeight(y.right)) + 1;

    // Return new root
    return y;
  }

  // Rebalance the node if needed
  rebalance(node) {
    const balance = this.getBalance(node);

    // Left heavy
    if (balance > 1) {
      if (this.getBalance(node.left) < 0) {
        node.left = this.rotateLeft(node.left); // LR case
      }
      return this.rotateRight(node); // LL case
    }

    // Right heavy
    if (balance < -1) {
      if (this.getBalance(node.right) > 0) {
        node.right = this.rotateRight(node.right); // RL case
      }
      return this.rotateLeft(node); // RR case
    }

    return node;
  }

  // Insert a node into the AVL tree
  insert(root, key) {
    if (!root) return new AVLNode(key);

    if (key < root.key) {
      root.left = this.insert(root.left, key);
    } else {
      root.right = this.insert(root.right, key);
    }

    // Update height
    root.height =
      Math.max(this.getHeight(root.left), this.getHeight(root.right)) + 1;

    // Rebalance the tree
    return this.rebalance(root);
  }

  // Delete a node from the AVL tree
  delete(root, key) {
    if (!root) return root;

    if (key < root.key) {
      root.left = this.delete(root.left, key);
    } else if (key > root.key) {
      root.right = this.delete(root.right, key);
    } else {
      // Node with one or no child
      if (!root.left) return root.right;
      else if (!root.right) return root.left;

      // Node with two children: Get inorder successor
      const temp = this.findMin(root.right);
      root.key = temp.key;
      root.right = this.delete(root.right, temp.key);
    }

    // Rebalance
    return this.rebalance(root);
  }

  // Find node with minimum key (leftmost)
  findMin(node) {
    let current = node;
    while (current.left) {
      current = current.left;
    }
    return current;
  }

  // Find node with maximum key (rightmost)
  findMax(node) {
    let current = node;
    while (current.right) {
      current = current.right;
    }
    return current;
  }

  // Check if the tree is a valid AVL tree
  isValidAVL(root) {
    if (!root) return true;

    const balance = this.getBalance(root);

    // Balance factor must be -1, 0, or 1
    if (balance < -1 || balance > 1) return false;

    const leftValid = this.isValidAVL(root.left);
    const rightValid = this.isValidAVL(root.right);

    return leftValid && rightValid;
  }

  // Range search: find all keys within [low, high]
  rangeSearch(root, low, high) {
    const result = [];

    function helper(node) {
      if (!node) return;

      // Go left if current node is larger than low
      if (node.key > low) {
        helper(node.left);
      }

      // Include key if in range
      if (node.key >= low && node.key <= high) {
        result.push(node.key);
      }

      // Go right if current node is smaller than high
      if (node.key < high) {
        helper(node.right);
      }
    }

    helper(root);
    return result;
  }

  // Get the k-th smallest element (1-based index)
  kthSmallest(root, k) {
    const output = [];

    function inorder(node) {
      if (!node) return;
      inorder(node.left);
      output.push(node.key);
      inorder(node.right);
    }

    inorder(root);

    return k > 0 && k <= output.length ? output[k - 1] : null;
  }
}

module.exports = { AVLTree };
