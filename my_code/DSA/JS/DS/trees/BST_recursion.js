class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(data) {
    // Start insertion from the root node
    this.root = this._insert(this.root, data);
  }

  _insert(node, data) {
    // If current node is null, make it the new node of this data
    if (node === null) return new Node(data);

    // If data is smaller, insert into left
    if (data < node.data) {
      node.left = this._insert(node.left, data);
    }
    // else, insert into right subtree
    else {
      node.right = this._insert(node.right, data);
    }

    // Return the node to link it with its parent
    // if the subtree updated we link it again with the root
    return node;
  }

  // Complexity => O(log n)
  search(node, target) {
    // Base Case: When reach null [leaf no child]
    if (node === null) return false;

    // When the data I search for is equal this node data => I found it
    if (node.data === target) return true;

    // If it's smaller, recall the function with the left subtree
    if (target < node.data) return this.search(node.left, target);

    // Else if it's greater, recall the function with the right subtree
    return this.search(node.right, target);
  }

  delete(node, key) {
    // We use the searching algorithm again to find the node first
    if (node === null) return node;

    if (key < node.data) {
      // If the key is less than the current node, go left
      node.left = this.delete(node.left, key);
    } else if (key > node.data) {
      // If the key is greater than the current node, go right
      node.right = this.delete(node.right, key);
    } else {
      // So here we found the node => let's delete it

      // If the left subtree is empty => return right subtree
      if (node.left === null) return node.right;

      // If the right subtree is empty => return left subtree
      if (node.right === null) return node.left;

      // Else the node has two children

      // Get the minimum value in the right subtree
      const temp = this.findMin(node.right);

      // Replace node data with the minimum data
      node.data = temp.data;

      // Delete the duplicate node from the right subtree
      node.right = this.delete(node.right, temp.data);
    }

    return node;
  }

  findMin(node) {
    // Start from the root of the right subtree
    let current = node;

    // Get the leftmost node [the smallest one]
    while (current.left !== null) {
      current = current.left;
    }

    return current;
  }

  // Left -> Node -> Right
  inorder(node) {
    const result = [];

    // I made the helper method to not mutate the result list
    function helper(n) {
      // if not null, so keep going
      if (n !== null) {
        helper(n.left);
        result.push(String(n.data));
        helper(n.right);
      }
    }

    // First call with the passed node
    helper(node);
    return result.join(" "); // Convert array to string
  }

  // Node -> Left -> Right
  preorder(node) {
    const result = [];

    function helper(n) {
      if (n !== null) {
        result.push(String(n.data));
        helper(n.left);
        helper(n.right);
      }
    }

    helper(node);
    return result.join(" ");
  }

  // Left -> Right -> Node
  postorder(node) {
    const result = [];

    function helper(n) {
      if (n !== null) {
        helper(n.left);
        helper(n.right);
        result.push(String(n.data)); // Visit root last
      }
    }

    helper(node);
    return result.join(" ");
  }

  // Complexity => O(n)
  isValidBST(node) {
    // We don’t need just to check if the direct children are left < node < right
    // Instead we need to check the whole left subtree and the whole right subtree

    function valid(node, left, right) {
      if (node === null) return true; // because empty tree is BST

      if (!(node.data > left && node.data < right)) {
        // Must be left < node < right
        return false;
      }

      // go to the left subtree and check if all less than the node
      return (
        valid(node.left, left, node.data) && valid(node.right, node.data, right)
      );
      // and all the right is greater than the node
    }

    return valid(node, -Infinity, Infinity);
  }

  buildTree(array) {
    for (let i = 0; i < array.length; i++) {
      this.insert(array[i]);
    }
  }
}

// Example usage:
// const tree = new BST();
// const numbers = [17, 4, 1, 20, 9, 18, 34];
// tree.buildTree(numbers);
// console.log("Inorder:", tree.inorder(tree.root));
// console.log("Preorder:", tree.preorder(tree.root));
// console.log("Postorder:", tree.postorder(tree.root));
// console.log(tree.search(tree.root, 20));
// console.log(tree.isValidBST(tree.root));
