class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// best to add to the last and remove from first
// we don't need pop its O(n)
// so will use push, and shift => but call it pop
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // push add to end O(1)
  // called enqueue
  enqueue(val) {
    // make a new node to push
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // set the last node next to point into the new node
      this.last.next = newNode;
      //  and set the last node to be the new node itself
      this.last = newNode;
    }
    return ++this.size;
  }

  // shift remove from first O(1)
  // called dequeue
  dequeue() {
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
