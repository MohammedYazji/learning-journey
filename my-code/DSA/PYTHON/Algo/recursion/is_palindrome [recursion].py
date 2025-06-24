def is_palindrome(s):
    if len(s) == 1:
        return True
    if len(s) == 2:
        return s[0] == s[1]
    
    if s[0] == s[-1]:
        return is_palindrome(s[1: -1])
    
    return False

print(is_palindrome('Mohammed'))
