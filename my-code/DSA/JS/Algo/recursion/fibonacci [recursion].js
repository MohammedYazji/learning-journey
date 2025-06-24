function fibonacci(num) {
  if (num === 0) return 0;
  if (num === 1 || num === 2) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

startTime = performance.now();
console.log(fibonacci(45));
endTime = performance.now();
console.log(`Running Time is ${(endTime - startTime) / 1000}`);
