def factorial(num):
    total = 1
    for i in range(num, 0, -1):
        total *= i
    return total

print(factorial(4))