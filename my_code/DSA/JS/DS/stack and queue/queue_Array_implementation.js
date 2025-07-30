class ArrayQueue {
  constructor(capacity) {
    // for each instance make a new array with capacity and initial values of null for each index
    this.queue = new Array(capacity).fill(null);
    // the pointer will catch the index of the front of the queue
    this.front = 0;
    // the pointer will catch the index of the last item in the queue
    this.rear = 0;
    // the capacity of the queue
    this.capacity = capacity;
    // the length of the queue
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  isFull() {
    return this.size === this.capacity;
  }

  peek() {
    if (this.isEmpty()) {
      console.log("The Queue is Empty!");
      return;
    }

    return this.queue[this.front];
  }

  enqueue(val) {
    if (this.isFull()) {
      console.log("The Queue is Full!");
      return;
    }

    // else must push the new item into the list using the rear index
    this.queue[this.rear] = val;

    // we move the rear by the mod because we need when reach the last element to return and fill the items we popped from the front
    this.rear = (this.rear + 1) % this.capacity;

    // increment the size
    this.size += 1;
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("The Queue is Empty!");
      return;
    }

    // store the value of the front to return it later
    const value = this.queue[this.front];

    // then move the front by one
    this.front = (this.front + 1) % this.capacity;

    // decrement the length of the queue
    this.size -= 1;

    return value;
  }
}

// Comment For Testing
// const myQueue = new ArrayQueue(5);
// myQueue.enqueue(1);
// myQueue.enqueue(2);
// myQueue.enqueue(3);

// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());
// console.log(myQueue.dequeue());

Module.exports = ArrayQueue;
