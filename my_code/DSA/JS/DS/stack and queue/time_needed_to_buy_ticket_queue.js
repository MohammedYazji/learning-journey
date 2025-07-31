// ==============================
// Problem Description (Simplified):

// There are people standing in a line to buy tickets.
// Each person can only buy 1 ticket per turn.
// If someone needs more tickets, they go to the end of the line after buying one.
// Once they buy all their tickets, they leave the line.
// You're given an array tickets[] — where tickets[i] is how many tickets person i wants.
// Return the total time it takes for the person at position k to finish buying all their tickets.
// NOTE: Each ticket takes 1 second to buy.
// ==============================

// Node class for linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Queue class using linked list
class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  // Add element to the end of the queue
  enqueue(val) {
    const newNode = new Node(val);
    if (!this.front) {
      this.front = this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.size++;
  }

  // Remove and return element from the front
  dequeue() {
    if (!this.front) return null;
    const poppedNode = this.front;
    this.front = this.front.next;
    if (!this.front) {
      this.rear = null;
    }
    this.size--;
    return poppedNode.val;
  }

  isEmpty() {
    return this.front === null;
  }
}

// Main function to calculate time
function timeRequiredToBuy(tickets, k) {
  const q = new Queue();

  // Add each person to the queue as (index, number of tickets)
  for (let i = 0; i < tickets.length; i++) {
    q.enqueue([i, tickets[i]]);
  }

  let time = 0;

  while (true) {
    let [personIndex, ticketCount] = q.dequeue();

    // Person buys one ticket
    ticketCount -= 1;
    time += 1;

    // If it's person k and they finished [has no tickets], return the time
    if (personIndex === k && ticketCount === 0) {
      return time;
    }

    // If they still need more tickets, go to the end of the line
    if (ticketCount > 0) {
      q.enqueue([personIndex, ticketCount]);
    }
  }
}

// Example
const personList = [2, 3, 2, 4, 1];
const k = 3;
console.log(
  `The Person Number ${k + 1} will take ${timeRequiredToBuy(
    personList,
    k
  )} seconds to buy ${personList[k]} tickets..`
);
