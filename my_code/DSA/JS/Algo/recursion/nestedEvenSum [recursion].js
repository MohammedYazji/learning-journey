// function nestedEvenSum(obj) {
//   let total = 0;

//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       total += nestedEvenSum(obj[key]);
//     } else if (typeof obj[key] === "number") {
//       total += obj[key];
//     }
//   }
//   return total;
// }

function nestedEvenSum(obj, total = 0) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      total += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      total += obj[key];
    }
  }
  return sum;
}

console.log(
  nestedEvenSum({
    a: 2,
    b: {
      b1: 3,
      b2: {
        b3: 4,
        b4: {
          b5: 6,
        },
      },
      b6: 7,
    },
    c: {
      c1: 8,
      c2: "hello",
      c3: {
        c4: 10,
      },
    },
    d: 1,
  })
);
