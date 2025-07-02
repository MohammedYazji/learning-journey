class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  create(n) {
    // to save the last node each loop to point to the next one
    let prev = null;
    for (let i = 1; i <= n; i++) {
      const new_node = new Node(i);
      if (!this.head) {
        this.head = new_node;
        prev = new_node;
      } else {
        prev.next = new_node;
        prev = new_node;
      }
    }
    // to make it circular
    prev.next = this.head;
  }

  eliminate(k) {
    let current = this.head;
    let prev = null;

    // while there are more than one node
    while (current !== current.next) {
      // to loop twice
      for (let i = 0; i < k - 1; i++) {
        // store the previous one to can remove the current safely
        prev = current;
        current = current.next;
      }
      // remove the current node
      prev.next = current.next;
      // start the next loop
      // start from the next node
      current = current.next;
    }

    // when finish and still just one node return it
    return current.data;
  }

  print() {
    let current = this.head.next;
    let my_string = this.head.data + " ";
    while (current !== this.head) {
      my_string += current.data + " ";
      current = current.next;
    }
    console.log(my_string);
  }
}

const my_list = new CircularLinkedList();
my_list.create(5);
my_list.print();
console.log(my_list.eliminate(3));

// Problem Description: You are given a group of n people, each assigned a unique identifier from 1 to n, standing in a sequence. Starting from the first person, a counting process is carried out repeatedly: every time, the k-th person in the sequence is removed. After each removal, counting resumes from the next person in line. This elimination process continues until only one person remains. Your task is to determine the identifier of that last remaining person.
