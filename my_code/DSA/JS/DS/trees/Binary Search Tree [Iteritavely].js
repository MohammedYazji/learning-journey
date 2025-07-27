// define the Node class
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// define the BinarySearchTree class
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

    // else if the root is exist already
    else {
      // start from the root then keep looping until reach null to insert as leaf child
      let current = this.root;

      while (true) {
        // if the current node has the same value as the new node so don't add it and return null
        // other solutions: make a counter for each node (for example if we want to allow duplicates like two 10s)
        if (current.value === value) return null;

        // the first case: if the node I want to insert is less than the current node
        if (value < current.value) {
          // so move to the left then check the left child, if null insert it and return (break the loop), if not keep looping
          if (current.left === null) {
            // insert it when the left pointer is empty
            current.left = newNode;
            return this;
          }

          // else if the left pointer of the current node is not empty [have a child], move another step to check the next node value
          else {
            current = current.left;
          }
        }

        // the second case: if the node I want to insert is greater than the current node
        else if (value > current.value) {
          // so move to the right then check the right child, if null insert it and return (break the loop), if not keep looping
          if (current.right === null) {
            // insert it when the right pointer is empty
            current.right = newNode;
            return this;
          }

          // else if the right pointer of the current node is not empty [have a child], move another step to check the next node value
          else {
            current = current.right;
          }
        }
      }
    }
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
