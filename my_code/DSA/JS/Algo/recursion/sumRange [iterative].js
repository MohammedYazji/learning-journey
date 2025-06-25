function sumRange(num) {
  result = 0;
  for (let i = num; i > 0; i--) {
    result += i;
  }
  return result;
}

console.log(sumRange(3));
