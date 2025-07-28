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

  middleNode() {
    // pointer move one step each time
    let step = this.head;
    // pointer move two steps each time
    let twoSteps = this.head;

    // while the second pointer not null, and has another node after it
    while (twoSteps && twoSteps.next) {
      // move one step
      step = step.next;
      // move two steps
      twoSteps = twoSteps.next.next;
    }

    // so when the second pointer reaches the end, the first pointer will reach the middle
    // after stop the loop will return the middle node
    return step;
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
const mid = myList.middleNode();
console.log("Middle node value is:", mid.value);

// Using Two Pointers pattern
// Slow, fast pointers
// THIS SOLUTION TAKE Time => O(n), and Space O(1)
// BEST PRACTICE
