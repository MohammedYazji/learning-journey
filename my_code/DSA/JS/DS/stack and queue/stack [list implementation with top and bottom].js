// linked list implementation [top, bottom]

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// like linked list but with top, bottom, size
class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.size = 0;
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
    this.bottom = null;
  }

  // add to the top of the list
  // its unshift but I called it push
  // to be O(1), while real push take O(n)
  push(val) {
    // create a new node to add it
    const newNode = new Node(val);

    // if empty list set top, bottom to be the new node
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // set the newNode next to point to the previous start
      newNode.next = this.top;
      //   set the start to be the new node
      this.top = newNode;
    }
    // increment the size of the stack, and return it
    return ++this.size;
  }

  // remove the top node of the list
  // its shift but I called it push
  // to be O(1), while real pop take O(n)
  pop() {
    if (!this.top) {
      return null;
    }
    // store the bottom in (top node) to return after removing
    const poppedNode = this.top;
    // if the size is one just one node
    if (this.top === this.bottom) {
      // reset the initial values
      this.top = null;
      this.bottom = null;
    } else {
      // set the top to be the new top
      this.top = this.top.next;
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
