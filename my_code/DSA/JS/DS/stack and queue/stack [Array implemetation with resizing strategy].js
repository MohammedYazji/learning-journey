class ArrayStack {
  constructor(capacity) {
    // for each instance make a new array with capacity and initial values of undefined for each index
    this.stack = new Array(capacity).fill(undefined);
    this.capacity = capacity;
    // the length of items in the stack [-1 => empty yet]
    this.n = -1;
  }

  isEmpty() {
    // if the length still -1 so its empty yet
    return this.n === -1;
  }

  size() {
    return this.n + 1;
  }

  isFull() {
    // if the length reach the capacity
    return this.size() === this.capacity;
  }

  // I make it protected to not using it out of the class
  // O(n)
  _resize(newCapacity) {
    // make a new stack
    const newStack = new Array(newCapacity).fill(undefined);

    // then loop over the original stack and push its value here
    for (let i = 0; i < this.size(); i++) {
      newStack[i] = this.stack[i];
    }

    // then make my stack to be the new stack
    this.stack = newStack;
    // and the capacity to be the new one
    this.capacity = newCapacity;
  }

  push(val) {
    if (this.isFull()) {
      // double the capacity
      this._resize(this.capacity * 2);
    }

    // else increment the length by one, and push the value with this length as index
    // we increment the length first because we starts from -1
    this.n += 1;
    this.stack[this.n] = val;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("No items to POP!");
      return null;
    }

    // else store the value of the top to return it later, then decrement the length by
    const value = this.stack[this.n];
    // optional step but to help garbage collection👍
    this.stack[this.n] = undefined; // to remove the value from memory too
    this.n -= 1;

    // shrinks the capacity if 1/4 full
    // the capacity must be greater than 4 because
    // for example if capacity is 4 and size is 1,
    // so 1 <= 4 // 4 => true so the capacity will be 2 next time
    if (
      this.size() > 0 &&
      this.size() <= this.capacity / 4 &&
      this.capacity > 4
    ) {
      this._resize(Math.floor(this.capacity / 2));
    }

    return value;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("The Stack is Empty!");
      return null;
    }
    // else
    return this.stack[this.n];
  }

  printStack() {
    console.log(this.stack.slice(0, this.n + 1));
  }
}

const myStack = new ArrayStack(50);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
myStack.push(6);
myStack.printStack();
