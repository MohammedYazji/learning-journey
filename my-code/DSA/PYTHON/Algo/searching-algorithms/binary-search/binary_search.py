def binary_search(sort_arr, val):
    left, right = 0, len(sort_arr) - 1

    while left <= right:
        mid = (left + right) // 2
        if sort_arr[mid] == val:
            return mid
        elif val < sort_arr[mid]:
            right = mid - 1
        else:
            left = mid + 1
    return -1


print(binary_search([1, 3, 5, 7, 9, 11], 7)) 