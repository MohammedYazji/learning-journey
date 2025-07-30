// Problem: Given a string, determine if it is a palindrome. A palindrome reads the same forward and backward (e.g., "radar", "level").

function palindrome(string) {
  const stack = [];
  const length = string.length;

  // Push the first half of the string onto the stack
  for (let i = 0; i < Math.floor(length / 2); i++) {
    stack.push(string[i]);
  }

  // Determine where to start checking the second half
  let start;
  if (length % 2 === 0) {
    // Even length: start exactly at the middle
    start = length / 2;
  } else {
    // Odd length: skip the middle character
    start = Math.floor(length / 2) + 1;
  }

  // Compare the second half with the stack
  // now start from the middle until the length - 1
  // and if the stack is empty => so the number of characters in the second half is not the same
  // or the char I popped not the same in the second half in the string FALSE
  for (let i = start; i < length; i++) {
    if (stack.length === 0 || stack.pop() !== string[i]) {
      return false; // Not a palindrome
    }
  }

  // If all characters matched
  return true;
}

console.log(palindrome("radar"));
console.log(palindrome("level"));
console.log(palindrome("hello"));
