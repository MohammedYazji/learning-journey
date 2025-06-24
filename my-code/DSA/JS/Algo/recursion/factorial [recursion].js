function factorial(num) {
  // To handle 0, 1 cases
  //  Base Case
  if (num <= 1) return 1;

  return num * factorial(num - 1);
}

console.log(factorial(4));
