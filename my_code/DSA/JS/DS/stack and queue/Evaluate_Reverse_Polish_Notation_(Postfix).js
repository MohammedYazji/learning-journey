function evaluate_postfix(arr) {
  const stack = [];

  for (const item of arr) {
    // If the item is an operator, pop two numbers from the stack,
    // perform the operation, then push the result back to the stack
    if (item === "+") {
      stack.push(stack.pop() + stack.pop());
    } else if (item === "-") {
      const last = stack.pop();
      const first = stack.pop();
      stack.push(first - last);
    } else if (item === "*") {
      stack.push(stack.pop() * stack.pop());
    } else if (item === "/") {
      const last = stack.pop();
      const first = stack.pop();
      // Use Math.floor to mimic integer division like Python's //
      stack.push(Math.floor(first / last));
    } else {
      // If it's a number, push it to the stack
      stack.push(parseInt(item));
    }
  }

  // After processing all items, the stack has one value — the result
  return stack[0];
}

console.log(evaluate_postfix(["2", "1", "+", "3", "*"])); // Output: 9
