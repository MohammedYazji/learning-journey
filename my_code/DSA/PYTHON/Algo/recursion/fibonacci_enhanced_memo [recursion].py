import time

def fibonacci_enhanced_memo(num, memo={}):
    if num == 0:
        return 0
    if num == 1 or num == 2:
        return 1
    
    if num in memo:
        return memo[num]
    

    memo[num] = fibonacci_enhanced_memo(num - 1, memo) + fibonacci_enhanced_memo(num - 2, memo)

    return memo[num]


start_time = time.perf_counter()
print(fibonacci_enhanced_memo(100))
end_time = time.perf_counter()
print(f"Running Time is {end_time - start_time}")