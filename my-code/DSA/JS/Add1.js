function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

let startTime = performance.now();
console.log(addUpTo(1000000000));
let endTime = performance.now();
console.log(`The running time is ${(endTime - startTime) / 1000} seconds. `);
