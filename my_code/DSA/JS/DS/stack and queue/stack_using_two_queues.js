// Queue needs to remove first element => FIFO
// but Stack only allows removing the last element => LIFO

// To implement this, we need two queues...
// one to enqueue new elements normally
// then reverse the queue and pass it to the second queue to dequeue from the first

class ArrayQueue {
  constructor(capacity) {
    this.queue = [];
    this.capacity = capacity;
  }

  enqueue(value) {
    if (this.queue.length >= this.capacity) {
      console.log("Queue is full");
      return;
    }
    this.queue.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.queue.shift(); // remove first (FIFO)
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  get size() {
    return this.queue.length;
  }
}

class StackUsingArrayQueues {
  constructor(capacity) {
    this.q1 = new ArrayQueue(capacity);
    this.q2 = new ArrayQueue(capacity);
    this.capacity = capacity;
  }

  isEmpty() {
    return this.q1.isEmpty();
  }

  // Push is normal enqueue to q1
  push(x) {
    this.q1.enqueue(x);
  }

  // To pop:
  // - Move all elements except the last from q1 to q2
  // - Dequeue the last from q1 (which is the top of the stack)
  // - Swap q1 and q2
  pop() {
    if (this.q1.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }

    while (this.q1.size > 1) {
      this.q2.enqueue(this.q1.dequeue());
    }

    const top = this.q1.dequeue();
    [this.q1, this.q2] = [this.q2, this.q1];
    return top;
  }

  // To peek:
  // - Move all elements from q1 to q2 while keeping track of the last one
  // - That last one is the top
  // - Swap back q1 and q2 to maintain original order
  peek() {
    if (this.q1.isEmpty()) return null;

    let top = null;
    const originalSize = this.q1.size;

    for (let i = 0; i < originalSize; i++) {
      const val = this.q1.dequeue();
      this.q2.enqueue(val);
      if (i === originalSize - 1) {
        top = val;
      }
    }

    [this.q1, this.q2] = [this.q2, this.q1];
    return top;
  }
}

// Test the stack
const myStack = new StackUsingArrayQueues(10);
myStack.push(100);
myStack.push(200);
myStack.push(300); // last in

console.log(myStack.pop()); // 300
console.log(myStack.pop()); // 200
console.log(myStack.pop()); // 100
