function addUpTo(n) {
  return (n * (n + 1)) / 2;
}

let startTime = performance.now();
console.log(addUpTo(1000000000));
let endTime = performance.now();
console.log(`The running time is ${(endTime - startTime) / 1000} seconds. `);
