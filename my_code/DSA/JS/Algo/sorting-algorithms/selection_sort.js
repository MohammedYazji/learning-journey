function selectionSort(arr) {
  if (arr.length <= 1) return arr;

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    // here i + 1 to compare just with the next values not the previous
    // which already sorted
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
}

console.log(selectionSort([24, 22, 10, 19, 17]));
