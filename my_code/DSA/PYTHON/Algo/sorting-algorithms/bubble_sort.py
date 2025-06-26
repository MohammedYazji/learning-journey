def bubble_sort(arr):
    for i in range(len(arr)):
        for j in range(len(arr) - 1 - i):  # decreasing inner loop
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# reverse
def bubble_sort2(arr):
    # i goes from n to 1
    for i in range(len(arr) - 1, 0, -1):  
        # inner loop still shrinks
        for j in range(i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
    return arr

# optimization bubble sort
# when the list is almost sorted we dont need to keep looping after sorting
# so if not swap stop looping
def bubble_sort_optimized(arr):
    for i in range(len(arr)):
        no_swaps = True
        for j in range(len(arr) - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                no_swaps = False
        if no_swaps:
            break
    return arr


my_list = [8, 6, 9, 1, 2, 12, 10, 11]
print(bubble_sort(my_list))
print(bubble_sort2(my_list))