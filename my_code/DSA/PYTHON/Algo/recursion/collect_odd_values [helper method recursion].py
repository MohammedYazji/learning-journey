def collect_odd_values(arr):
    result = []

    # The Helper Recursive Method
    def helper(helper_input):
        # Base Case
        if len(helper_input) == 0:
            return
        
        if helper_input[0] % 2 != 0:
            result.append(helper_input[0])

        # call itself without the first element
        print(helper_input[1:])
        helper(helper_input[1:])
    
    helper(arr)

    return result

print(collect_odd_values([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))