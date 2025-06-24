function capitalizeWord(arr) {
  let newArr = [];

  function helper(helperInput) {
    if (helperInput.length === 1) {
      newArr.push(helperInput[0].toUpperCase());
      return;
    }

    newArr.push(helperInput[0].toUpperCase());
    helper(helperInput.slice(1));
  }

  helper(arr);
  return newArr;
}

console.log(capitalizeWord(["Mohammed", "yazji"]));
