def capitalize_first(arr):
    new_arr = []

    if len(arr) == 1:
        return [arr[0].title()]
    
    new_arr = arr[0].title()

    return [new_arr] + capitalize_first(arr[1:])

print(capitalize_first(['mohammed', 'wael', 'yazji']))