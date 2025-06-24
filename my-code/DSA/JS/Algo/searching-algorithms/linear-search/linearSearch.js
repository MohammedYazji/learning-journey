function linearSearch(arr, value) {
  for (let i in arr) {
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([10, 9, 2, 4, 7, 1, 3, 3, 8], 2));
