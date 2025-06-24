function stringifyNumbers(obj) {
  let newObj = {};

  for (let key in obj) {
    value = obj[key];
    if (typeof value === "object" && !Array.isArray(value)) {
      newObj[key] = stringifyNumbers(value);
    } else if (typeof value === "number") {
      newObj[key] = `${value}`;
    } else {
      newObj[key] = value;
    }
  }
  return newObj;
}

console.log(
  stringifyNumbers({
    num: 1,
    test: [],
    data: {
      val: 4,
      info: {
        isRight: true,
        random: 66,
      },
    },
  })
);
