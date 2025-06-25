def fibonacci_enhanced_all(num):
    if num == 0:
        return 0
    if num == 1 or num == 2:
        return 1
    
    prev, curr = 1, 1

    for _ in range(3, num + 1):
        prev, curr = curr, prev + curr
    
    return curr


print(fibonacci_enhanced_all(5))
