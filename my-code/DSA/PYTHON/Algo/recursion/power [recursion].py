def power(base, exponent):
    #  stop point => Base Case
    if exponent == 0:
        return 1
    
    return base * power(base, exponent - 1)

print(power(2, 3))