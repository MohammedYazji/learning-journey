function collectOddValues(arr) {
  // we need to prevent the reset each call
  // so each time return [] or [oneOddValue]
  let newArr = [];

  if (arr.length === 0) return newArr;

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  //   here more complex need to prevent resiting the newArr
  //  each time make a new array and push the odd if exist, then concat all these arrays together
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
