class Node {
  constructor(val = 0) {
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

  // I make it static because it does not depend on any instance,
  // it's related to the class but doesn’t use or modify the class’s own data
  static mergeTwoLists(list1, list2) {
    // make a new node (list) to store the two lists
    const newNode = new Node();

    // make a pointer to loop over the new list
    let current = newNode;

    // The loop continues as long as neither list is empty.
    // If one of them becomes null, we exit the loop — because there's nothing more to compare in that list.
    while (list1 && list2) {
      // If list1 has the smaller value, it should come next in the merged list
      if (list1.val < list2.val) {
        // Connect the current node to the node from list1, because it’s the smaller one
        current.next = list1;
        // Move the pointer in list1 one step
        list1 = list1.next;
      } else {
        // If list2.val is smaller or equal, do the same logic with list2
        current.next = list2;
        list2 = list2.next;
      }

      // after each process move the current one step
      current = current.next;
    }

    // push the remaining non-empty list to my new node list
    if (list1) {
      current.next = list1;
    } else {
      current.next = list2;
    }

    // return the new node next pointer from where we start building our new list
    return newNode.next;
  }
}

// First list: 1 -> 3 -> 5
const list1 = new LinkedList();
[1, 3, 5].forEach((val) => list1.push(val));

// Second list: 2 -> 4 -> 6
const list2 = new LinkedList();
[2, 4, 6].forEach((val) => list2.push(val));

// Merge them
const mergedLists = LinkedList.mergeTwoLists(list1.head, list2.head);

// Print merged list
let current = mergedLists;
while (current) {
  process.stdout.write(current.val + " -> ");
  current = current.next;
}
console.log("null");

// Iterative with new_node (list) to store the new list
// In each loop, compare the lesser value and push it
// When one of the lists becomes empty, just push the other one
// T => O(n), M => O(1)
