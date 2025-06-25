function fibonacciEnhancedAll(num) {
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;

  let [prev, curr] = [1, 1];

  for (let i = 3; i <= num; i++) {
    [prev, curr] = [curr, prev + curr];
  }
  return curr;
}

console.log(fibonacciEnhancedAll(7));
