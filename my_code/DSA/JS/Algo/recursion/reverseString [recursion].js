function reverseString(str) {
  if (str.length === 0) return "";

  return str.slice(-1) + reverseString(str.slice(0, -1));
}

console.log(reverseString("Mohammed Yazji"));
