class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SortedCircularLinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    const newNode = new Node(data);

    // 1: if the list is empty yet
    if (!this.head) {
      // set the head to be the new node
      this.head = newNode;
      // and make it to point to itself
      this.head.next = newNode;
    }

    // 2: if the list has just a node
    else if (this.head.next === this.head) {
      // 2.1: if the data want to insert is larger than the head or equal it so add this new node after the head
      if (data >= this.head.data) {
        // first set the head to point into the new node
        this.head.next = newNode;
        // and set the new node to point back to the head [To Make It Circular]
        newNode.next = this.head;
      }
      // 2.2: else if the data want to insert is smaller than the head, so add this new node before the head
      else {
        // first set the new node to point to the head
        newNode.next = this.head;
        // and update the new head to be the new node
        this.head = newNode;
        // then make the old head [Which is the last node now] to point back to the new head
        this.head.next.next = this.head;
      }
    }

    // 3: if the list has more than one node
    else {
      // declare a temp variable to track traversing without changing the original head
      let current = this.head;
      // flag to stop the process if the new node inserted
      let inserted = false;

      // 3.1: if the data want to insert is smaller than the head, so add this new node before the head
      if (data < this.head.data) {
        // traversing over the list to reach the last node [when reach before the head]
        while (current.next !== this.head) {
          // each loop move one step
          current = current.next;
        }
        // after we exit the loop and reach the last node, make it to point to the new head which is the new node now
        current.next = newNode;
        // then set the new node [new head] to point into the old one
        newNode.next = this.head;
        // then update the head to be the new node
        this.head = newNode;
      }

      // 3.2: else if the data want to insert is larger than the head, so add this new node after the head
      else {
        // traverse through the list until reach before the head
        while (current.next !== this.head) {
          // if the data in the correct position add it, so if it's larger than the current node and smaller than the next node
          if (data > current.data && data < current.next.data) {
            // first make the new node point to the next node
            newNode.next = current.next;
            // and make the current node point to the new node
            current.next = newNode;
            // finally set the flag to be true [inserted successfully] need it later
            inserted = true;
            break;
          }
          // move one step each loop
          current = current.next;
        }

        // if we couldn't add the node in the last while loop, [inserted FALSE] so its position between the last node and the head, so insert it at last
        if (!inserted) {
          // set the new node next to point the head [make it circular]
          newNode.next = this.head;
          // then link it with the rest of list as the last node
          current.next = newNode;
        }
      }
    }
  }

  print() {
    if (!this.head) return "";

    let output = this.head.data + " ";
    let current = this.head.next;

    while (current !== this.head) {
      output += current.data + " ";
      current = current.next;
    }

    return output.trim();
  }
}

// Test
const myLinkedList = new SortedCircularLinkedList();
myLinkedList.insert(7);
myLinkedList.insert(3);
myLinkedList.insert(9);
myLinkedList.insert(1);
myLinkedList.insert(4);

console.log(myLinkedList.print()); // Output: 1 3 4 7 9
