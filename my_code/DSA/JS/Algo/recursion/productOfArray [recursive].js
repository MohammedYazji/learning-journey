function productOfArray(arr) {
  /*Multiply all numbers in an array */
  // base case when the array become empty
  if (arr.length === 0) {
    return 1;
  }

  return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray([5, 2, 2, 5]));
