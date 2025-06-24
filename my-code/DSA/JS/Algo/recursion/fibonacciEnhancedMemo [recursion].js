function fibonacciEnhancedMemo(num, memo = {}) {
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;

  if (memo[num]) {
    return memo[num];
  }

  memo[num] =
    fibonacciEnhancedMemo(num - 1, memo) + fibonacciEnhancedMemo(num - 2, memo);

  return memo[num];
}

startTime = performance.now();
console.log(fibonacciEnhancedMemo(100));
endTime = performance.now();
console.log(`Running Time is ${(endTime - startTime) / 1000}`);
