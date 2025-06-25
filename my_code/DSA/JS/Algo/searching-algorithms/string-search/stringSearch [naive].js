function stringSearch(string, sub) {
  let count = 0;

  for (let i = 0; i <= string.length - sub.length; i++) {
    let match = true;
    for (let j = 0; j < sub.length; j++) {
      if (string[i + j] !== sub[j]) {
        match = false;
        break;
      }
    }
    if (match) count++;
  }
  return count;
}

console.log(stringSearch("mohammed moyazji", "mo"));
