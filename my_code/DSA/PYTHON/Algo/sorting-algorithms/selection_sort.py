def selection_sort(arr):
    if len(arr) <= 1:
        return arr

    for i in range(len(arr)):
        lowest = i
        # Start from i + 1 to skip already sorted part
        # and find the smallest element in the remaining array
        for j in range(i + 1, len(arr)):
            if arr[lowest] > arr[j]:
                lowest = j
        # if there's small then the i
        if i != lowest:
            arr[i], arr[lowest] = arr[lowest], arr[i]
    
    return arr

print(selection_sort([24, 22, 10, 19, 17]))