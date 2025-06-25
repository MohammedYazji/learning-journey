def product_of_array(arr):
    '''Multiply all numbers in an array'''
    # Base Case
    if len(arr) == 0:
        return 1
    
    return arr[0] * product_of_array(arr[1:])


print(product_of_array([5, 2, 2,5]))