def flatten(oldArr):
    newArr = []

    for item in oldArr:
        if isinstance(item, list):
            newArr = [*newArr, *flatten(item)]
        else:
            newArr.append(item)
    return newArr

print(flatten([1,[2,3,4, [5, 6]], [7, 8], 9, 10]))
