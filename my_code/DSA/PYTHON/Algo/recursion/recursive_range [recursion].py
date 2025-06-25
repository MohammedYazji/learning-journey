def recursive_range(num):
    if num == 0: 
        return 0
    
    return num + recursive_range(num - 1)

print(recursive_range(5))