def collect_odd_values(arr):
    # empty new array each call🥱
    newArr = []

    if len(arr) == 0:
        return []
    
    if arr[0] % 2 != 0:
        newArr.append(arr[0])

    # here more complex need to prevent resiting the newArr
    # each time make a new array and push the odd if exist, then concat all these arrays together

    # newArr = newArr + collect_odd_values(arr[1:])
    # or use *args
    newArr = [*newArr, *collect_odd_values(arr[1:])]
    return newArr

print(collect_odd_values([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
