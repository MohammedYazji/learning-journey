function same(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0 || arr1.length !== arr2.length) {
    return false;
  }

  for (let item of arr1) {
    let correctIndex = arr2.indexOf(item ** 2);
    if (correctIndex === -1) {
      return false;
    } else {
      // remove it after check to not calculate it twice
      arr2.splice(correctIndex, 1);
    }
  }
  return true;
}

console.log(same([1, 2, 2, 3], [9, 4, 1, 4]));
