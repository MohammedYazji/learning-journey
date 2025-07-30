# Problem: Given a string, determine if it is a palindrome. A palindrome reads the same forward and backward (e.g., "radar", "level").

def palindrome(string):
        
    stack = []
    length = len(string)
    
    # push the first half
    for i in range(length // 2):
        stack.append(string[i])
    
    # then start from the second half
    # if the string characters was even so its similar parts
    # start from the middle
    if length % 2 == 0:
        start = length // 2
    # else there is unique char "radar" => d , start from a
    else:
        start = length // 2 + 1
    
    # now start from the middle until the length - 1
    # and if the stack is empty => so the number of characters in the second half is not the same
    # or the char I popped not the same in the second half in the string FALSE
    for i in range(start, length):
        if not stack or stack.pop() != string[i]:
            return False
    
    # if the process finish and pooped or the items =>  TRUE
    return True

print(palindrome("radar"))