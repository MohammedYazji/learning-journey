def reverse_str(s):
    if len(s) == 0:
        return ''
    
    return s[-1] + reverse_str(s[0:-1])

print(reverse_str('Mohammed Yazji'))