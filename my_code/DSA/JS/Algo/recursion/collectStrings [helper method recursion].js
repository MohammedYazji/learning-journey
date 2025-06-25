function collectStrings(obj) {
  myStrings = [];

  function helper(helperInput) {
    for (let key in helperInput) {
      value = helperInput[key];
      if (typeof value === "object") {
        helper(value);
      } else if (typeof value === "string") {
        myStrings.push(value);
      }
    }
  }
  helper(obj);
  return myStrings;
}

console.log(
  collectStrings({
    stuff: "hello",
    data: {
      value: 42,
      info: {
        isRight: true,
        message: "world",
      },
      moreData: {
        text: "foo",
        deep: {
          deeper: "bar",
        },
      },
    },
  })
);
