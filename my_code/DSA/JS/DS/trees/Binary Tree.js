// Node class to represent each node of the binary tree
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    // make the new node to push it
    const newNode = new Node(data);

    // if the tree is empty yet => make the root the new node
    if (!this.root) {
      this.root = newNode;
    }
    // else we will pass the root with the data to add
    else {
      this._insert(this.root, data);
    }
  }

  _insert(node, data) {
    const newNode = new Node(data);

    // if the left pointer of the node is empty add it there
    if (!node.left) {
      node.left = newNode;
    }
    // if the right pointer of the node is empty add it there
    else if (!node.right) {
      node.right = newNode;
    }
    // else so the node is full has two children so call the function again with the left child
    else {
      this._insert(node.left, data);
    }
  }

  search(node, target) {
    if (node === null) return false;
    if (node.value === target) return true;
    return this.search(node.left, target) || this.search(node.right, target);
  }

  delete(root, key) {
    if (root === null) return null;

    if (root.value === key) {
      // Case 1: No child
      if (!root.left && !root.right) {
        return null;
      }

      // Case 2: One child
      if (!root.left) return root.right;
      if (!root.right) return root.left;

      // Case 3: Two children
      let succParent = root;
      let succ = root.right;
      while (succ.left !== null) {
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

  // Inorder traversal: left -> root -> right
  inorder(node) {
    if (node) {
      this.inorder(node.left);
      console.log(node.value);
      this.inorder(node.right);
    }
  }

  // Preorder traversal: root -> left -> right
  preorder(node) {
    if (node) {
      console.log(node.value);
      this.preorder(node.left);
      this.preorder(node.right);
    }
  }

  // Postorder traversal: left -> right -> root
  postorder(node) {
    if (node) {
      this.postorder(node.left);
      this.postorder(node.right);
      console.log(node.value);
    }
  }

  getHeight(node) {
    // Base Case: stop when reach leaf
    if (node === null) return 0;

    // loop over all nodes using recursion
    // and get the max between height of children + 1
    // why +1 because we start 0 height on leaf, then we increment one each level toward the root
    return 1 + Math.max(this.getHeight(node.left), this.getHeight(node.right));
  }
}
