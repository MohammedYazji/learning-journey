// 🔹 This problem requires deleting a node from a singly linked list,
// but you're NOT given the head pointer — only the node to delete.
//
// 🔸 Therefore:
// - We cannot traverse the list or find the previous node.
// - So, we can't use a full LinkedList class with head reference.
//
// ✅ The trick:
// - Copy the value from the next node into the current one.
// - Then skip the next node (node.next = node.next.next)
//
// ⚠️ This works only if the node is NOT the tail.

// ListNode class definition
class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Solution class
class Solution {
  deleteNode(node) {
    /**
     * Deletes the given non-tail node from a singly linked list.
     *
     * In a real interview (e.g. LeetCode), you're only given `node`,
     * and NOT the head of the list. So, we can't access the previous node.
     * Instead, we copy the value from the next node and bypass it.
     *
     * Time: O(1) | Space: O(1)
     */
    node.val = node.next.val;
    node.next = node.next.next;
  }
}

// Function to create a linked list from an array
function createLinkedList(values) {
  const dummy = new ListNode(0);
  let current = dummy;
  for (const val of values) {
    current.next = new ListNode(val);
    current = current.next;
  }
  return dummy.next;
}

// Function to print the linked list
function printLinkedList(head) {
  let current = head;
  let output = "";
  while (current) {
    output += current.val + " -> ";
    current = current.next;
  }
  console.log(output + "null");
}

// Function to find a node with a specific value (for testing only)
function findNode(head, target) {
  let current = head;
  while (current) {
    if (current.val === target) return current;
    current = current.next;
  }
  return null;
}

// #########################################

// Test the functionality

// Create list: 1 -> 2 -> 3 -> 4 -> 5
const head = createLinkedList([1, 2, 3, 4, 5]);

console.log("Before Deleting:");
printLinkedList(head);

// NOTE:
// In the real problem, you're given only the node to delete, not the head.
// Here, we use `findNode()` to simulate that just for testing. [in interview you don't need this]
const nodeToDelete = findNode(head, 3);

// Delete the node
new Solution().deleteNode(nodeToDelete);

// 1 -> 2 -> 4 -> 5
console.log("After Deleting:");
printLinkedList(head);
