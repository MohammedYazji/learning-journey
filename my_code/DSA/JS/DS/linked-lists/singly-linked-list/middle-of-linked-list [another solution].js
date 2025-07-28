class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // pushing to the end of the list O(n)
  push(val) {
    // Receive a value and make a new node
    const newNode = new Node(val);

    // if there's no head => empty list
    // so set the head to be the new Node
    if (!this.head) {
      this.head = newNode;
      return this;
    }

    // if not empty, loop until the end
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    // then make the last node point into the new node
    current.next = newNode;
    return this;
  }

  middleNodeByLength() {
    // make new pointer to not mutate the original head
    let current = this.head;

    let length = 0;
    let counter = 0;

    // First: calculate length
    while (current) {
      current = current.next;
      length++;
    }

    // Second: go to the middle
    // Reset the pointer to loop again
    current = this.head;
    while (counter < Math.floor(length / 2)) {
      current = current.next;
      counter++;
    }

    return current;
  }

  display() {
    // print the linked list
    let current = this.head;
    while (current) {
      process.stdout.write(current.value + " ");
      current = current.next;
    }
    console.log("None");
  }
}

// Example usage
const myList = new LinkedList();
for (let i = 1; i <= 5; i++) {
  myList.push(i);
}

myList.display();
const mid = myList.middleNodeByLength();
console.log("Middle node value is:", mid.value);

// Calc the length first, then loop until the mid  => length // 2
// THIS SOLUTION TAKE Time => O(n), and Space O(1)
// same as the first solution
// but in interviews prefer the first one
