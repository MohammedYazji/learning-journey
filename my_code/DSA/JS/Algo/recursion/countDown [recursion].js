function countDown(num) {
  // Base Case
  if (num <= 0) {
    console.log("All Done! ");
    return;
  }
  console.log(num);
  countDown(--num);
}

countDown(10);
