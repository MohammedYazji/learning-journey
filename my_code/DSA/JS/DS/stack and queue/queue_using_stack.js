// Queue needs to remove the first element => FIFO
// but stack only allows removing the last element => LIFO
// so we need to implement FIFO using LIFO...

// To implement this, we need two stacks: one to push and another to pop [after reversing values]
// The first should receive normal pushes
// Then reverse the stack and pass it to the second stack to pop from the front

const ArrayStack = require("./stack_Array_implemetation");

class QueueUsingStacks {
  constructor(capacity) {
    this.input = new ArrayStack(capacity);
    this.output = new ArrayStack(capacity);
  }

  isEmpty() {
    return this.input.isEmpty() && this.output.isEmpty();
  }

  enqueue(value) {
    // If the input is full, the queue is full
    if (this.input.isFull()) {
      console.log("The Queue is full");
      return;
    }
    this.input.push(value); // Add to first normally
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("The Queue is empty");
      return null;
    }

    // If the output is totally empty, push all inputs into it in reverse order
    if (this.output.isEmpty()) {
      while (!this.input.isEmpty()) {
        this.output.push(this.input.pop());
      }
    }

    // Pop from output stack, so now we remove from the front of queue because we reversed it
    return this.output.pop();
  }

  peek() {
    // If the queue is empty
    if (this.isEmpty()) {
      return null;
    }

    // If the output is totally empty, push all inputs into it in reverse order
    if (this.output.isEmpty()) {
      // loop over the input stack
      while (!this.input.isEmpty()) {
        this.output.push(this.input.pop());
      }
    }

    return this.output.peek();
  }
}

const myQueue = new QueueUsingStacks(5);
myQueue.enqueue(100); // first in
myQueue.enqueue(200);
myQueue.enqueue(300); // last in

console.log("==========");
console.log(myQueue.dequeue()); // 100
console.log(myQueue.dequeue()); // 200
console.log(myQueue.dequeue()); // 300
