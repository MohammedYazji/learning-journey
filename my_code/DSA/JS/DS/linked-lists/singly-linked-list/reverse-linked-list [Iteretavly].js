class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
    return this;
  }

  display() {
    let current = this.head;
    let output = "";
    while (current) {
      output += current.val + " -> ";
      current = current.next;
    }
    output += "null";
    console.log(output);
  }

  reverse() {
    // start the current from head
    // and the prev initial as null
    let current = this.head;
    let prev = null;

    // if the pointer still in the list
    while (current) {
      // temporarily store next node
      const nextNode = current.next;
      // reverse current node's pointer [make it point to the previous one]
      current.next = prev;

      // move prev and current one step
      prev = current;
      current = nextNode;
    }

    // when we finish the looping, make the new head to be the previous => [last node in the original list]
    this.head = prev;
  }
}

const myList = new LinkedList();
[1, 2, 3, 4, 5].forEach((n) => myList.push(n));

console.log("Original List:");
myList.display();

myList.reverse();

console.log("Reversed List:");
myList.display();

// Iteratively with pointers
// T => O(n), M => O(1)
