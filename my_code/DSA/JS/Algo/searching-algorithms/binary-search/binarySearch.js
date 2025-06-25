function binarySearch(arr, val) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (val === arr[middle]) return middle;
    else if (val < arr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 3, 5, 7, 9, 11], 7));
