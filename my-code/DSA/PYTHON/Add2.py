import time

def add_up_to(n):
    return n * (n + 1) / 2

start_time = time.perf_counter()
print(add_up_to(1000000000))
end_time = time.perf_counter()
print(f'The running time is {(end_time - start_time)} seconds. ')