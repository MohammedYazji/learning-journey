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
    output += "None";
    console.log(output);
  }

  reverseList(head) {
    // Base Case
    if (!head) {
      return null;
    }

    let current = head;
    // each time consider the current as a head
    if (current.next) {
      // call the recursive function
      current = this.reverseList(head.next);
      // set the head.next point to the head itself
      // node1 => node2
      // node2 => node1
      head.next.next = head;
    }
    // Break the original link
    head.next = null;

    return current;
  }

  reverse() {
    this.head = this.reverseList(this.head);
  }
}

const myList = new LinkedList();
[1, 2, 3, 4, 5].forEach((n) => myList.push(n));

console.log("Original List:");
myList.display();

myList.reverse();

console.log("Reversed List:");
myList.display();

// Recursive
// T => O(n), M => O(n)
