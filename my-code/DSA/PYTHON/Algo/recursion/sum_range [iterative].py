def sum_range(num):
    result = 0
    for i in range(num, 0, -1):
        result += i
    return result

print(sum_range(3))