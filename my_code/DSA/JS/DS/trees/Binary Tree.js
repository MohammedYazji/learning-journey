// Define the Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Define the BinaryTree class
class BinaryTree {
  constructor() {
    this.root = null;
  }

  // Insert a new node into the tree
  insert(value) {
    const newNode = new Node(value);

    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insert(this.root, value);
    }
  }

  _insert(node, value) {
    if (node.left === null) {
      node.left = new Node(value);
    } else if (node.right === null) {
      node.right = new Node(value);
    } else {
      this._insert(node.left, value);
    }
  }

  // Search for a value
  search(node, target) {
    if (node === null) return false;
    if (node.value === target) return true;
    return this.search(node.left, target) || this.search(node.right, target);
  }

  // Delete a node with 3 cases
  delete(root, key) {
    if (root === null) return null;

    if (root.value === key) {
      if (!root.left && !root.right) return null;
      if (!root.left) return root.right;
      if (!root.right) return root.left;

      let succParent = root;
      let succ = root.right;
      while (succ.left) {
        succParent = succ;
        succ = succ.left;
      }

      if (succParent !== root) {
        succParent.left = succ.right;
      } else {
        succParent.right = succ.right;
      }

      root.value = succ.value;
      return root;
    }

    root.left = this.delete(root.left, key);
    root.right = this.delete(root.right, key);
    return root;
  }

  // Inorder traversal: left, root, right
  inorder(node) {
    if (node !== null) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }

  // Preorder traversal: root, left, right
  preorder(node) {
    if (node !== null) {
      console.log(node.value);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // Postorder traversal: left, right, root
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.value);
    }
  }
}
