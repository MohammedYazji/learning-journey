function validParentheses(string) {
  const stack = [];
  const map = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  // Loop over each character in the string
  for (const char of string) {
    // If the character is a closing bracket
    if (char in map) {
      // Check if the stack is not empty
      // and the top of the stack is the corresponding opening bracket
      if (stack.length > 0 && stack[stack.length - 1] === map[char]) {
        // Pop the matching opening bracket from the stack
        stack.pop();
      } else {
        // Mismatch or stack is empty, so invalid
        return false;
      }
    } else {
      // If it's an opening bracket, push it onto the stack
      stack.push(char);
    }
  }

  // If the stack is empty at the end, all brackets matched correctly
  return stack.length === 0;
}

console.log(validParentheses("{[()]}"));
