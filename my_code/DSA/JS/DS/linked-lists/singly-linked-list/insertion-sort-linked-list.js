class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
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

  insertionSort() {
    // make a new list to be the new sorted list [init empty]
    let sortedHead = null;

    // Start from the head in the original list
    let current = this.head;

    // now traverse the original list node by node
    while (current) {
      // Save the next node before changing current.next
      const nextNode = current.next;

      // If sorted list is empty OR current node less than the head of the sorted list [should be placed at the start]
      if (!sortedHead || current.data < sortedHead.data) {
        // make the current node in the original list to point into the head of the new sorted list
        current.next = sortedHead;
        // then set the sorted head to be the current node as the new head
        sortedHead = current;
      } else {
        // make a temp pointer start from the head of the new sorted list
        let where = sortedHead;

        // Move forward in sorted list while current.data is greater
        // if still nodes in the list and the current node in the original list is greater, so keep looping
        while (where.next && where.next.data < current.data) {
          // move one step in the sorted list
          where = where.next;
        }

        // So if the loop stop => the current node now is less than where we are in the new list next pointer
        // So Insert current node in its correct position after the where we are in the new one

        // make the current node point into the next where we reach in the new one, because its the current <= where.next
        current.next = where.next;
        // and make the where to point into the new node after it which is the current
        where.next = current;
      }

      // Move to the next node in the original list
      current = nextNode;
    }

    // Set the new head of the sorted list
    this.head = sortedHead;
    return this;
  }

  printList() {
    let current = this.head;
    const result = [];
    while (current) {
      result.push(current.data);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
}

// Test
const myList = new SinglyLinkedList();
myList.push(7).push(3).push(9).push(1).push(4);

console.log("Before Insertion Sort:");
myList.printList();

myList.insertionSort();

console.log("After Insertion Sort:");
myList.printList();
