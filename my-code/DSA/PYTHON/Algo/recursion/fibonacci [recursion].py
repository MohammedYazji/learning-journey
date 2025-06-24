import time

def fibonacci(num):
    if num==0: 
        return 0
    if num == 1 or num == 2:
        return 1
    
    return fibonacci(num - 1) + fibonacci(num - 2)

start_time = time.perf_counter()
print(fibonacci(40))
end_time = time.perf_counter()
print(f"Running Time is {end_time - start_time}")
