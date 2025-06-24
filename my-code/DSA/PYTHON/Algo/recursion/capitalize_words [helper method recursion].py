def capitalize_words(arr):
    new_arr = []

    def helper(helper_input):

        if len(helper_input) == 1:
            new_arr.append(helper_input[0].upper())
            return # must stop recursion here
        
        new_arr.append(helper_input[0].upper())

        helper(helper_input[1:])

    helper(arr)
    return new_arr


print(capitalize_words(['mohammed', 'yazji']))