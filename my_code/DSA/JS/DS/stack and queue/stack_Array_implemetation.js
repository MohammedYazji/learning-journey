class ArrayStack {
  constructor(capacity) {
    // for each instance make a new array with capacity and initial values of undefined for each index
    this.stack = new Array(capacity).fill(undefined);
    this.capacity = capacity;
    // the length of items in the stack [-1 => empty yet]
    this.n = -1;
  }

  isEmpty() {
    // if the length still -1 so it's empty yet
    return this.n === -1;
  }

  isFull() {
    // if the length reaches the length -1 because length starts from zero
    // for example capacity = 5 so length from 0 - 4
    return this.n === this.capacity - 1;
  }

  push(val) {
    if (this.isFull()) {
      console.log("The Stack is Full");
      return;
    }
    // else increment the length by one, and push the value with this length as index
    // we increment the length first because we start from -1
    this.n += 1;
    this.stack[this.n] = val;
  }

  pop() {
    if (this.isEmpty()) {
      console.log("No items to POP!");
      return null;
    }
    // else store the value of the top to return it later, then decrement the length
    const value = this.stack[this.n];
    // optional step but to help garbage collection👍
    this.stack[this.n] = undefined; // to remove the value from memory too
    this.n -= 1;

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
}

const myStack = new ArrayStack(5);
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);

console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
