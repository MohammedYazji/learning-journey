function bubbleSort(arr) {
  // Outer loop: i goes from 0 to arr.length - 1
  for (let i = 0; i < arr.length; i++) {
    // Inner loop bounds shrink by i each time (optimized)
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

// Just written in reverse direction — same logic
function bubbleSort2(arr) {
  // Outer loop: i goes from arr.length down to 1
  for (let i = arr.length - 1; i > 0; i--) {
    // Inner loop still shrinks each round
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([8, 6, 9, 1, 2, 12, 10, 11]));
console.log(bubbleSort2([8, 6, 9, 1, 2, 12, 10, 11]));
