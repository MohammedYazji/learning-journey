function capitalizeFirst(arr) {
  newArr = [];

  if (arr.length === 1) {
    return [arr[0][0].toUpperCase() + arr[0].slice(1)];
  }

  newArr = arr[0][0].toUpperCase() + arr[0].slice(1);

  return [newArr].concat(capitalizeFirst(arr.slice(1)));
}

console.log(capitalizeFirst(["mohammed", "wael", "yazji"]));
