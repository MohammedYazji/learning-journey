class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// like linked list but with first, last, size
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  peek() {
    return this.first;
  }

  // add to the first of the list
  // its unshift but I called it push
  // to be O(1), while real push take O(n)
  push(val) {
    // create a new node to add it
    const newNode = new Node(val);

    // if empty list set first, last to be the new node
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // set the newNode next to point to the previous start
      newNode.next = this.first;
      //   set the start to be the new node
      this.first = newNode;
    }
    // increment the size of the stack, and return it
    return ++this.size;
  }

  // remove the first node of the list
  // its shift but I called it push
  // to be O(1), while real pop take O(n)
  pop() {
    if (!this.first) {
      return null;
    }
    // store the last in (first node) to return after removing
    const poppedNode = this.first;
    // if the size is one just one node
    if (this.first === this.last) {
      // reset the initial values
      this.first = null;
      this.last = null;
    } else {
      // set the first to be the new first
      this.first = this.first.next;
    }
    this.size--;
    return poppedNode.val;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(32);
stack.push(1);
stack.push(88);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
