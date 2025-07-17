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

  // push add to end O(1)
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

  // shift remove from front O(1)
  // called dequeue
  dequeue() {
    if (!this.front) return null;

    // store the front node to return after removing
    let poppedNode = this.front;

    // SOLUTION 1...
    // // if the size is just one node
    // if (this.size === 1) {
    //   // reset the initial values
    //   this.front = null;
    //   this.rear = null;
    // } else {
    //   // set the front to be the new front
    //   this.front = this.front.next;
    // }

    // SOLUTION 2...
    // OR WE DON'T NEED TO CHECK IF THE LENGTH IS 1
    // BECAUSE WHEN I MAKE the front null SO MAKE THE REAR null
    this.front = this.front.next;
    // now if the front becomes null so make the rear null (the list is empty now)
    if (!this.front) this.rear = null;

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
  }
}

my_queue = new Queue();
my_queue.enqueue(1);
my_queue.enqueue(2);
my_queue.enqueue(3);

console.log(my_queue.dequeue());
console.log(my_queue.dequeue());
console.log(my_queue.dequeue());
