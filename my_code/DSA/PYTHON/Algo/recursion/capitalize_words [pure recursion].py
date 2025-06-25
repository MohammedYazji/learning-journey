def capitalize_words(arr):
    new_arr = []

    if len(arr) == 1:
        return [arr[0].upper()]
    
    new_arr = arr[0].upper()

    return [new_arr,  *capitalize_words(arr[1:])]

print(capitalize_words(['Hello', 'world']))