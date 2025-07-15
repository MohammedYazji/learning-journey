class Node {
  constructor(val) {
    this.val = val;
    this.next = null; // always start with null
  }
}

// beginning => head
// no tail and no length
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

  // remove from the end of the list O(n)
  pop() {
    if (!this.head) return null;

    // if only one node
    if (!this.head.next) {
      const val = this.head.val;
      this.head = null;
      return val;
    }

    // use two pointers to reach the last and second last nodes
    let current = this.head;
    while (current.next && current.next.next) {
      current = current.next;
    }

    // store the last node's value
    const val = current.next.val;
    // and make the node before last point to null
    current.next = null;
    return val;
  }

  // remove the first element (head) O(1)
  shift() {
    if (!this.head) return null;

    // store the head to return it later
    const val = this.head.val;
    // then make the head to be the second node
    this.head = this.head.next;
    return val;
  }

  // add to the beginning (head) O(1)
  unshift(val) {
    // make the node
    const newNode = new Node(val);
    // make the new node point to the original head
    newNode.next = this.head;
    // and set the head to be the new node
    this.head = newNode;
    return this;
  }

  // get node at a specific index O(n)
  get(index) {
    let current = this.head;
    let counter = 0;

    // if there's head so we still in the list so keep going
    while (current) {
      // if we reach the index we want, return it
      if (counter === index) return current;
      current = current.next;
      counter++;
    }

    // if we didn't return any value, index is out of bounds
    return null;
  }

  // update the value of a node at given index
  set(index, val) {
    // use the get method 🩷
    const foundNode = this.get(index);
    // change its value, if it exists (not null)
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // insert at specific index O(n)
  insert(index, val) {
    // if the index is zero, so add at first (unshift)
    if (index === 0) {
      this.unshift(val);
      return true;
    }

    // use the get method to get the previous node
    const prev = this.get(index - 1);
    // to ensure the index is valid
    if (!prev) return false;

    // make a new node
    const newNode = new Node(val);
    // make it point to the next of the previous
    newNode.next = prev.next;
    // and set the previous to point to the new node
    prev.next = newNode;
    return true;
  }

  // remove at specific index O(n)
  remove(index) {
    // if the first one, shift it
    if (index === 0) return this.shift();

    const prev = this.get(index - 1);
    // ensure the index is valid
    if (!prev || !prev.next) return null;

    // remove the node
    const removed = prev.next;
    prev.next = removed.next;
    return removed.val;
  }

  // reverse the list O(n)
  reverse() {
    // previous as null to make the first node point to null
    // make it the last node
    let prev = null;
    // set the current (as temp variable) to be the head
    let current = this.head;

    while (current) {
      // store the next node to not lose the rest of the list
      const nextNode = current.next;
      // set the current to point to the previous node
      current.next = prev;
      // move the previous to the current
      prev = current;
      // move the current to the next node
      current = nextNode;
    }

    // finally set new head
    this.head = prev;
    return this;
  }

  // method to return the length of the list
  length() {
    let counter = 0;
    let current = this.head;

    while (current) {
      counter += 1;
      current = current.next;
    }
    return counter;
  }

  // print
  print() {
    let res = "";
    let current = this.head;
    while (current) {
      res += current.val + " ";
      current = current.next;
    }
    console.log(res);
  }
}

// ======= Testing the list =======
let list = new SinglyLinkedList();
list.push(10).push(20).push(30).push(40).push(50);
console.log(list.remove(1));
console.log(list.length());
list.print();
