function flatten(oldArr) {
  let newArr = [];

  function helper(helperInput) {
    for (let i = 0; i < helperInput.length; i++) {
      if (Array.isArray(helperInput[i])) {
        helper(helperInput[i]);
      } else {
        newArr.push(helperInput[i]);
      }
    }
  }

  helper(oldArr);
  return newArr;
}

console.log(flatten([1, [2, 3, 4, [5, 6]], [7, 8], 9, 10]));
