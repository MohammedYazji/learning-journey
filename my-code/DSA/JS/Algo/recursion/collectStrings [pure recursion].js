function collectStrings(obj) {
  myStrings = [];

  for (let key in obj) {
    value = obj[key];
    if (typeof value === "object") {
      myStrings = myStrings.concat(collectStrings(value));
    } else if (typeof value === "string") {
      myStrings.push(value);
    }
  }
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
