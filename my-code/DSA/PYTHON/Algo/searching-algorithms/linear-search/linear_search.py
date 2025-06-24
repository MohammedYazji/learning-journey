def linear_search(arr, val):
    for i in range(len(arr)):
        if arr[i] == val:
            return i
    return -1


print(linear_search([7, 5, 1, 3, 2, 8, 9, 10], 11))