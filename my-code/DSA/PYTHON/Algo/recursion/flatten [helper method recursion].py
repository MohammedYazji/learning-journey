def flatten(oldArr):
    newArr = []

    def helper(helper_input):
        for item in helper_input:
            if isinstance(item, list):
                helper(item)
            else:
                newArr.append(item)
    helper(oldArr)
    return newArr

print(flatten([1,[2,3,4, [5, 6]], [7, 8], 9, 10]))