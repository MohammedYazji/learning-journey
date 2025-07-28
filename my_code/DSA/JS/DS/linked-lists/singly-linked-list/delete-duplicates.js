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

  display() {
    let current = this.head;
    while (current) {
      process.stdout.write(current.val + " -> ");
      current = current.next;
    }
    console.log("null");
  }

  static deleteDuplicates(head) {
    // make a new pointer
    let current = head;

    // while the pointer in the list
    while (current && current.next) {
      // if the current node value equal the next one
      if (current.val === current.next.val) {
        // make it point into the next next [jump over the similar second node]
        current.next = current.next.next;
      } else {
        // else move one step normally
        current = current.next;
      }
    }
    // finally return the head of the list
    return head;
  }
}

const myList = new LinkedList();
[1, 1, 2, 3, 3].forEach((n) => myList.push(n));

console.log("Before removing duplicates:");
myList.display();

console.log("====");

myList.head = LinkedList.deleteDuplicates(myList.head);

console.log("After removing duplicates:");
myList.display();

// one pointers
// T => O(1), M => O(1)
