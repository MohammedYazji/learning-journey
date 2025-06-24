function capitalizeWord(arr) {
  let newArr = [];

  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }

  newArr = arr[0].toUpperCase();

  return [newArr].concat(capitalizeWord(arr.slice(1)));
}

console.log(capitalizeWord(["mohammed", "wael", "yazji"]));
