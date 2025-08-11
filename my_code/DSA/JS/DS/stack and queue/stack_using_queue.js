// Stack Using Queue:
// This Solution using One Queue

// The problem is as follows:
// Queue needs to remove first element => FIFO
// but Stack only allows removing the last element => LIFO

// To implement this, we need one queue...
// 1) when push push normally to the queue
// 2) but when pop, we need to dequeue all elements except the last one, after dequeue each element, push it to the last,

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

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.queue[0];
  }
}

class StackUsingOneQueue {
  constructor(capacity) {
    // make one queue
    this.q = new ArrayQueue(capacity);
  }

  isEmpty() {
    return this.q.isEmpty();
  }

  // time complexity O(1)
  push(data) {
    // push is normal enqueue
    this.q.enqueue(data);
  }

  // time complexity O(n)
  pop() {
    if (this.q.isEmpty()) {
      console.log("Stack is empty");
      return null;
    }
    // we need to pop all elements except the last one
    // then push each element to the last
    // I loop until size - 1 to not dequeue the last element and push it
    for (let i = 0; i < this.q.size() - 1; i++) {
      this.q.enqueue(this.q.dequeue());
    }
    // when we make space and the last element, become the first so dequeue it
    return this.q.dequeue();
  }

  peek() {
    // peek in queue just returns the first element
    // so lets make the same thing as pop but without pop
    if (this.q.isEmpty()) {
      return null;
    }

    for (let i = 0; i < this.q.size() - 1; i++) {
      this.q.enqueue(this.q.dequeue());
    }

    // pop the last element then push it again
    const top = this.q.dequeue();
    this.q.enqueue(top);
    return top;
  }
}
