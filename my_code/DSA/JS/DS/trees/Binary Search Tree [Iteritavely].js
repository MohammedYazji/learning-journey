// Define the Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Define the BinarySearchTree class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    // if the tree is empty yet => make the root to be this new node
    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    // else if the root is already existing
    else {
      // start from the root then keep looping until we reach null to insert as a leaf child
      let current = this.root;

      while (true) {
        // if the current node has the same value as the new node, so don't add it and return null
        // other solutions: make a counter for each node, for example if we want to allow two 10s
        if (current.value === value) return null;

        // the first case: if the value I want to insert is less than the current node value
        if (value < current.value) {
          // so move to the left, then check if the left child is null → insert it and return [break the loop]
          if (current.left === null) {
            // insert it when the left pointer is empty
            current.left = newNode;
            return this;
          }

          // else if the left pointer of the current node is not empty (has a child), move another step
          // to check the next node value
          else {
            current = current.left;
          }
        }

        // the second case: if the value I want to insert is greater than the current node value
        else if (value > current.value) {
          // so move to the right, then check if the right child is null → insert it and return [break the loop]
          if (current.right === null) {
            // insert it when the right pointer is empty
            current.right = newNode;
            return this;
          }

          // else if the right pointer of the current node is not empty (has a child), move another step
          // to check the next node value
          else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    // if the tree is empty => return false
    if (this.root === null) return false;

    let current = this.root;
    let found = false;

    // loop as long as current is not null and we haven't found the value
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }

    return found;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
tree.insert(7);

console.log(tree.find(7));
