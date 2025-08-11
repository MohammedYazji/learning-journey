// Stack Using Queue:
// This solution uses two queues: pop-heavy approach

// The problem:
// Queue removes first element => FIFO
// Stack removes last element => LIFO

// To implement this, we use two queues:
// 1) One queue to enqueue new elements normally
// 2) On pop, move all elements except the last from first queue to second,
//    then dequeue the last element from the first queue
class ArrayQueue {
  constructor(capacity) {
    this.queue = [];
    this.capacity = capacity;
  }

  enqueue(value) {
    if (this.queue.length === this.capacity) {
      throw new Error("Queue is full");
    }
    this.queue.push(value);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  size() {
    return this.queue.length;
  }
}

class StackUsingArrayQueues {
  constructor(capacity) {
    // Create two queues
    this.q1 = new ArrayQueue(capacity);
    this.q2 = new ArrayQueue(capacity);
  }

  isEmpty() {
    return this.q1.isEmpty();
  }

  // Time complexity: O(1)
  push(x) {
    // Push is normal enqueue into q1
    this.q1.enqueue(x);
  }

  // Time complexity: O(n) [pop-heavy solution]
  pop() {
    if (this.q1.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }

    // Move all elements except the last from q1 to q2
    while (this.q1.size() > 1) {
      this.q2.enqueue(this.q1.dequeue());
    }

    // Dequeue and save the last element (top of the stack)
    const top = this.q1.dequeue();

    // Swap q1 and q2
    [this.q1, this.q2] = [this.q2, this.q1];

    return top;
  }

  // Get the last element in the stack without removing it
  peek() {
    if (this.q1.isEmpty()) {
      return null;
    }

    let top = null;
    const originalSize = this.q1.size();

    // pop all elements except the last and push them to the second queue
    for (let i = 0; i < originalSize; i++) {
      const val = this.q1.dequeue();
      this.q2.enqueue(val);
      // if we reach the last element after popping and pushing the last element set the top to be this element
      if (i === originalSize - 1) {
        top = val;
      }
    }

    // finally return all the elements from the second queue to the first queue
    [this.q1, this.q2] = [this.q2, this.q1];

    return top;
  }
}
