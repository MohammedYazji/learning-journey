class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // add a new node at the end of the dll
  push(val) {
    // make the new node
    let newNode = new Node(val);

    if (!this.head) {
      // if empty => make the head and the tail to be the newNode
      this.head = newNode;
      this.tail = newNode;
    } else {
      // make the tail poin into the new node
      this.tail.next = newNode;
      //   set the new node to point back to the tail
      newNode.prev = this.tail;
      // update the tail to be the new node
      this.tail = newNode;
    }
    // always increment the length
    this.length++;
    // return the new list
    return this;
  }

  //remove the last node
  pop() {
    // if empty
    if (!this.head) {
      return undefined;
    }

    // store it to return it after removing
    let poppedNode = this.tail;
    // if just one node => return to the initial point
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    //
    else {
      // set the tail to be the previous node
      this.tail = poppedNode.prev;
      // set the new tail next to point into null
      this.tail.next = null;
      // set the old tail next to point to null
      // (UNLINK)
      poppedNode.prev = null;
    }
    // decrement the length
    this.length--;
    // return the popped node
    return poppedNode;
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

list = new DoublyLinkedList();
list.push(10).push(20).push(30);
list.print();
console.log(list.pop().val);
list.print();
