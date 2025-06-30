// Piece of data => val
// Reference to next Node => next
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// beginning => head
// length
// the tail of the list => null
class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // pushing to the end of the list
  push(val) {
    // Receive a value and make a new node
    const newNode = new Node(val);
    // if there's no head => empty list, length = 0
    // so set the head and tail to be the new Node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      // circular link: tail.next points to head
      this.tail.next = this.head;
    }
    // else if not empty
    // make the tail point on the new node {the previous tail}
    // then set the tail to be the new node
    else {
      this.tail.next = newNode;
      this.tail = newNode;
      // maintain circularity
      this.tail.next = this.head;
    }
    // then always increment the length by one
    this.length++;
    return this;
  }

  // remove from the end of the list
  pop() {
    // if the list is empty => return undefined
    if (!this.head) {
      return undefined;
    }
    // if only one node
    if (this.length === 1) {
      let poppedNode = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return poppedNode;
    }

    let current = this.head;
    let newTail = current;

    // else loop until reach the tail (node before head)
    while (current.next !== this.head) {
      newTail = current;
      current = current.next;
    }

    // and set the tail to be the second last node
    this.tail = newTail;
    // then set the next of the second last node => head (circular)
    this.tail.next = this.head;
    this.length--;

    return current;
  }

  // shifting => removing the head
  shift() {
    // if empty return undefined
    if (!this.head) return undefined;

    // if only one node
    if (this.length === 1) {
      let oldHead = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return oldHead;
    }

    // else store the current head in a variable to return it
    let currentHead = this.head;
    // set the head to be the current head's next property
    this.head = this.head.next;
    // decrement the length
    this.length--;
    // maintain circularity: tail.next points to new head
    this.tail.next = this.head;

    // return the head after remove it
    return currentHead;
  }

  // Unshifting => add a new head
  unshift(val) {
    // make a new node
    const newNode = new Node(val);

    // if it's empty create a node and set the head, tail to be this new node
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.tail.next = this.head; // circular link
    }
    // just run it if it's not empty so put it in else to not run it always
    else {
      // else set this new node next point to the old head
      newNode.next = this.head;
      // then set the head to be this new node
      this.head = newNode;
      // maintain circularity: tail.next points to new head
      this.tail.next = this.head;
    }
    // Always Do THis
    // increment the length
    this.length++;
    // return the linked list
    return this;
  }

  // get a node
  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    } else {
      let counter = 0;
      let current = this.head;
      while (counter < index) {
        current = current.next;
        counter++;
      }
      return current;
    }
  }

  // set a new value to node
  set(index, val) {
    //  use the get method🩷
    let foundNode = this.get(index);

    // if exist change the value
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  // Insert at specific position
  insert(index, val) {
    // if invalid index return null
    // if equal the length allow => so push a new node
    if (index < 0 || index > this.length) {
      return false;
    }
    // if the index equal the length so add new node at end
    // push
    else if (index === this.length) {
      return !!this.push(val);
    }
    // if the index is zero so add at first
    // unshift
    else if (index === 0) {
      return !!this.unshift(val);
    }
    // else implement our insert method
    // we will use the get method, but don't need the index itself
    // I want the previous one
    else {
      let prev = this.get(index - 1);
      // make a new node
      let newNode = new Node(val);
      //  make it point the next of the previous
      newNode.next = prev.next;
      // and set the previous to point on the new node
      prev.next = newNode;
      this.length++;
      return true;
    }
  }

  // Remove from a specific position
  remove(index) {
    // if invalid index return false
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    // if index is the last one pop it
    else if (index == this.length - 1) {
      return this.pop();
    }
    // if the first one shift it
    else if (index === 0) {
      return this.shift();
    } else {
      // else get the previous node
      let prev = this.get(index - 1);
      //  and set the prev next
      // to be the next of the next node
      let removed = prev.next;
      prev.next = removed.next;
      this.length--;
      return removed;
    }
  }

  // reverse the list
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node; // fixed from this.node to node
    let next;
    let prev = null;
    // at first tail and node at the begining
    for (let i = 0; i < this.length; i++) {
      // then store the next node to not lost the rest of the list
      next = node.next;
      // set the node to point to the previous one
      node.next = prev;
      // set the previous node to be our node
      prev = node;
      // and set our node to be the next node
      // which we stored it before
      node = next;
    }
    // after reversal tail.next should point to head to keep circularity
    this.tail.next = this.head;
    return this;
  }

  // to check if the linked list tail refer to the head
  // without using tail (harder)
  isPerfectlyCircular(self) {
    if (!this.head) {
      return false;
    }

    let current = this.head.next;
    while (current && current != this.head) {
      current = current.next;
    }

    return current == this.head;
  }

  // print
  print() {
    let res = "";
    if (!this.head) {
      console.log(res);
      return;
    }
    let current = this.head;
    do {
      res += current.val + " ";
      current = current.next;
    } while (current !== this.head);
    console.log(res);
  }
}

// Usage example
let list = new SinglyLinkedList();
list.push(10).push(20).push(30).push(40).push(50);
console.log("Before removal:");
list.print();

console.log("Removed:", list.remove(1).val);
console.log("After removal:");
list.print();

console.log("After reversal:");
list.reverse().print();
