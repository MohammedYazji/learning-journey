def sum_range(num):
    if num == 1:
        return 1
    return num + sum_range(num - 1)

print(sum_range(3))