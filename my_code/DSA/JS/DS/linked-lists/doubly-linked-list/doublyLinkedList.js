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
    const newNode = new Node(val);

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
    const poppedNode = this.tail;
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

  // remove the head
  shift() {
    if (!this.head) {
      return undefined;
    }

    // store the head to return it later
    const oldHead = this.head;

    // if just one node => return to the initial point
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // set the head to be the new one (second node)
      this.head = oldHead.next;
      // set the new head prev to point to None
      this.head.prev = null;
      // set the old head next to point to None
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  // add a new node as head
  unshift(val) {
    // first create a new node to add it
    const newNode = new Node(val);

    // if empty make the head and tail to be the new node
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      // set the new node next to point into the old head
      newNode.next = this.head;
      // then set the old head prev to point back into the new node
      this.head.prev = newNode;
      // then update the head to be the new node
      this.head = newNode;
    }
    // increment the length
    this.length++;
    // then return the list
    return this;
  }

  // get a node based on specific index
  get(index) {
    // invalid index
    if (index < 0 || index >= this.length) {
      return null;
    }

    let current, counter;
    // if closer to the head
    // start from the head
    if (index <= this.length / 2) {
      current = this.head;
      counter = 0;
      while (counter < index) {
        current = current.next;
        counter++;
      }
      return current;
    }
    // if closer to the tail
    // start from the tail
    else {
      current = this.tail;
      counter = this.length - 1;
      while (current > index) {
        current = current.prev;
        counter--;
      }
      return current;
    }
  }

  // set a node value with a new one
  set(index, val) {
    // use the get method to get the node
    const foundNode = this.get(index);

    // if the node exist
    if (foundNode) {
      // set its value to be the new one
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  // insert a new node based on index
  insert(index, val) {
    // invalid index
    if (index < 0 || index > this.length) {
      return false;
    }
    // if the first node => unshift
    else if (index === 0) {
      this.unshift(val);
      return true;
    }
    // if the last node length => push
    else if (index === this.length) {
      this.push(val);
      return true;
    } else {
      // create a new node
      const newNode = new Node(val);

      // get the node before index we want add
      const beforeNode = this.get(index - 1);
      // get the node after (more readable)
      const afterNode = beforeNode.next;

      //  set the new node next to point into the after node
      newNode.next = afterNode;
      //  and the after node prev to point back to the new node
      afterNode.prev = newNode;
      //  set the before node next to point into new node
      beforeNode.next = newNode;
      // and the new node prev to point back into the before node
      newNode.prev = beforeNode;

      this.length++;
      return true;
    }
  }

  // remove a node based on specific index
  remove(index) {
    // invalid index here also the length not valid
    if (index < 0 || index >= this.length) {
      return undefined;
    }
    // remove from first
    else if (index === 0) {
      return this.shift();
    }
    // remove from last
    else if (index === this.length - 1) {
      return this.pop();
    }
    // remove from inside the list
    else {
      // get the node will remove
      let foundNode = this.get(index);
      // the one before it
      let beforeNode = foundNode.prev;
      // the one after it
      let afterNode = foundNode.next;

      // then make the before node jump and point on after node
      beforeNode.next = afterNode;
      // then make the after node jump and point back to before node
      afterNode.prev = beforeNode;

      // unlink the removed node
      foundNode.next = null;
      foundNode.prev = null;

      this.length--;
      return foundNode;
    }
  }

  // reverse a doubly linked list
  reverse() {
    let current = this.head;
    while (current) {
      // Swap next and prev for current node
      [current.prev, current.next] = [current.next, current.prev];
      // Move to the next node in original order (which is prev now)
      current = current.prev;
    }
    // Swap head and tail pointers
    [this.head, this.tail] = [this.tail, this.head];
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
console.log("After Reverse:");
list.print();
list.reverse();
console.log("After Reverse:");
list.print();
