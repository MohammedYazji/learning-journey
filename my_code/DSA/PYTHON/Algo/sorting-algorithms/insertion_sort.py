# think in it like a card game and you pick card by card, then sort them
def insertion_sort(arr):
    # so here start from index 1, assume that the first element in the right place because just I have this card yet
    for i in range(1, len(arr)):
        # pick the new card
        # store it in temp variable
        current = arr[i]
        # and get the elements before it
        j = i - 1
        # then loop over all elements before this new current element
        # until reach the zero
        # if the current is <= the arr[j], so we reach the correct position, so add current after it
        while j >= 0 and arr[j] > current:
            # shift all the greater items to the right
            arr[j + 1] = arr[j]
            # then move to the element before it
            j -= 1
        # Insert current into its correct position
        arr[j + 1] = current

    return arr

print(insertion_sort([8, 2, 4, 1, 3]))