// linked list implementation [top]

class Node {
  // each element in the stack must have data and pointer to the nest element
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    // top pointer for each stack instance to track the top element
    this.top = null;
  }

  // time complexity O(1)
  peek() {
    // if the top [last element] is not empty [None] return its data
    if (!this.top) {
      return null;
    } else {
      return this.top.data;
    }
  }

  // time complexity O(1)
  isEmpty() {
    // if the top is empty then return true
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }

  // time complexity O(1)
  clear() {
    // remove the access (pointer which catch the list)
    // so now my pointer not refer anywhere
    this.top = null;
  }

  // push the data to the start of the list [top]
  // because in list the top refer to the first element O(1)
  // but in our stack the top refer to the last in element
  // time complexity O(1)
  push(data) {
    // create a new node to add it
    const newNode = new Node(data);
    // set the newNode next to point to the previous start of the list
    newNode.next = this.top;
    // set the start to be the new node
    this.top = newNode;

    // and return it
    return this;
  }

  // remove the data to the start of the list [top]
  // because in list the top refer to the first element O(1)
  // but in our stack the top refer to the last in element
  // time complexity O(1)
  pop() {
    // if the stack is empty return null
    if (this.isEmpty()) {
      return null;
    }

    // store the last in (first node) to return after removing
    const poppedNode = this.top;
    // make the first node be the next node
    this.top = this.top.next;

    return poppedNode.data;
  }
}

module.exports = Stack;
