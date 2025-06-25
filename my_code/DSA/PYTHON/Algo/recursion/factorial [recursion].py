def factorial(num):
    # Base Case when num is 1 stop
    if num <= 1:
        return 1
    
    return num * factorial(num - 1)

print(factorial(4))