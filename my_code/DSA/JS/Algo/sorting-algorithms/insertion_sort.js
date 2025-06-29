// think in it like a card game and you pick card by card, then sort them
function insertionSort(arr) {
  // so here start from index 1, assume that the first element in the right place because just I have this card yet
  for (let i = 1; i < arr.length; i++) {
    //pick the new card
    //store it in temp variable
    const current = arr[i];
    //and get the elements before it
    let j = i - 1;
    //then loop over all elements before this new current element
    //until reach the zero
    //if the current is <= the arr[j], so we reach the correct position, so add current after it
    while (j >= 0 && arr[j] > current) {
      // shift all the greater items to the right
      arr[j + 1] = arr[j];
      //then move to the element before it
      j--;
    }
    // Insert current into its correct position
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort([8, 2, 4, 1, 3]));
