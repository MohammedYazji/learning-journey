import time

def add_up_to(n):
    result = 0
    for i in range(1, n+ 1):
        result += i
    return result

start_time = time.perf_counter()
print(add_up_to(1000000000))
end_time = time.perf_counter()
print(f'The running time is {(end_time - start_time)} seconds. ')