// linked list implementation [top]

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  peek() {
    if (!this.top) {
      return null;
    } else {
      return this.top.val;
    }
  }

  isEmpty() {
    if (!this.top) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    // remove the access (pointer which catch the list)
    this.top = null;
  }

  // add to the top of the list
  // its unshift but I called it push
  // to be O(1), while real push take O(n)
  push(val) {
    // create a new node to add it
    const newNode = new Node(val);
    // set the newNode next to point to the previous start
    newNode.next = this.top;
    // set the start to be the new node
    this.top = newNode;

    // and return it
    return this;
  }

  // remove the first node of the list
  // its shift but I called it pop
  // to be O(1), while real pop take O(n)
  pop() {
    if (!this.top) {
      return null;
    }

    // store the last in (first node) to return after removing
    const poppedNode = this.top;
    // make the first node be the next node
    this.top = this.top.next;

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
