class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // push adds to the end O(1)
  // called enqueue
  enqueue(val) {
    // make a new node to push
    const newNode = new Node(val);

    if (!this.front) {
      this.front = this.rear = newNode;
    } else {
      // set the rear node next to point into the new node
      this.rear.next = newNode;
      // and set the rear node to be the new node itself
      this.rear = newNode;
    }

    this.size += 1;
    return this.size;
  }

  // shift removes from the front O(1)
  // called dequeue
  dequeue() {
    if (!this.front) return null;

    // store the front node to return its value after removing
    const poppedNode = this.front;

    // move front to the next node
    this.front = this.front.next;

    // now if the front becomes null, the list is empty, so set rear to null
    if (!this.front) {
      this.rear = null;
    }

    this.size -= 1;
    return poppedNode.val;
  }

  peek() {
    if (!this.front) return null;
    return this.front.val;
  }

  isEmpty() {
    return this.front === null;
  }

  clear() {
    this.front = this.rear = null;
    this.size = 0;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);

console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
