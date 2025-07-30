def valid_parentheses(string):
    stack = []
    my_map ={")" : "(", "]" : "[", "}" : "{"}

    # loop over the string
    for char in string:
        # if the character in my_map => closing
        if char in my_map:
            # if the stack not empty 
            # and the last character in stack is the => open of char
            if stack and stack[-1] == my_map[char]:
                # remove the open becuase found the closing one
                stack.pop()
            # else it's not there => False
            else:
                return False
        # else it's not closing its opening add it
        else:
            stack.append(char)
    # after finish the looping without False => so True
    # but ensure that the stack is empty
    if not stack:
        return True
    else:
        return False

print(valid_parentheses("{[()]}"))