// This program reduces a singly linked list to a non-decreasing (increasing or equal) sequence
// by repeatedly merging the adjacent pair of nodes with the smallest sum.
// Each merge operation replaces two nodes with a single node whose value is their sum.
// The process continues until the entire list is non-decreasing.
// The method returns the total number of merge operations performed.

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

  toList() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  }

  isNonDecreasing() {
    // this method to check if the list we have is non decreasing order
    // so if non-decreasing [increasing order] return True to stop and return the operations count
    let curr = this.head;
    while (curr && curr.next) {
      // if the node is greater than the one after it
      // so it has decreasing
      if (curr.val > curr.next.val) {
        return false;
      }
      curr = curr.next;
    }

    // if the looping over and there's no False
    // so all nodes in increasing order ✅
    return true;
  }

  // we just need the whole list to be in increasing
  reduceToNonDecreasing() {
    let operations = 0;
    // while the list still in decreasing order
    while (!this.isNonDecreasing()) {
      // Find all adjacent pairs and their sums

      // first but the min as infinite as a high value
      let minSum = Infinity;

      // previous node to the pair [to not lose the link]
      // so when we replace the two nodes with their sum, then we need to set the minPrev next pointer to refer into the new sum node
      // by making it to be the current prev value in looping
      let minPrev = null;

      // start looping from the head
      let curr = this.head;
      // in the first loop the previous of head node => None
      let prev = null;

      // loop over the list, while in the list yet
      while (curr && curr.next) {
        // sum the current node value with the next one
        let pairSum = curr.val + curr.next.val;
        // if this sum is less than the min so set it to be the new min
        if (pairSum < minSum) {
          // update the min with the new value
          minSum = pairSum;
          // set the node before the best min-sum pair to be the
          minPrev = prev;
        }
        // move the previous current node, current node one step
        prev = curr;
        curr = curr.next;
      }

      // if the minPrev = prev = null in first loop, when the current is the head
      if (minPrev === null) {
        // The smallest pair is at the head
        // so make a new node and replace it with the head

        // make two pointers of the head and the next node
        let first = this.head;
        let second = first.next;
        // make a new node with these two values
        let newNode = new Node(first.val + second.val);
        // make the new node point the next of the second node
        newNode.next = second.next;
        // then update the head to be the new node
        this.head = newNode;
      } else {
        // else if the best min-sum is not at the beginning

        // make two pointers of the prev minimum pair next node and the next node
        // so the I catch the two nodes with the minimum sum
        let first = minPrev.next;
        let second = first.next;

        // make a new node with these two values
        let newNode = new Node(first.val + second.val);
        // then make the new node to point into the next of the old second node
        newNode.next = second.next;
        // finally make the previous of min pair to refer into the new node
        minPrev.next = newNode;
      }

      // in each loop if the list still in decreasing order, increment the counter by one
      operations++;
    }

    return operations;
  }
}

// Example usage:
const myList = new LinkedList();
myList.push(5).push(2).push(3).push(1);
console.log("Before:", myList.toList());
const operationsCount = myList.reduceToNonDecreasing();
console.log("After:", myList.toList());
console.log("Operations:", operationsCount);

// [5, 2, 3, 1] # min_sum = 4 => [3, 1]
// [5, 2, 4] # min_sum = 6 => [5, 6]
// [5, 6] # increasing order ✅💪
