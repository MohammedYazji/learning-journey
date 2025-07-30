class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        self.top = None
        self.__operators = "+-*/^"

    def push(self, data):
        new_node = Node(data)

        new_node.next = self.top
        self.top = new_node

    def pop(self):
        if not self.top:
            return None
        node = self.top.data
        self.top = self.top.next
        return node

    def peek(self):
        if self.is_empty():
            return None
        return self.top.data

    def is_empty(self):
        return self.top is None

    # this method to check if the character is an operand
    def __isOperand(self, c):
        return c.isalnum()

    # this method to check if the character is an operator '+, -, *, /'
    def __isOperator(self, c):
        if c in self.__operators:
            return True

    # to check which operator has the highest precedence
    def __getPrecedence(self, c):
        order = "+-*/^"
        values = [1, 1, 2, 2, 3]
        if c in order:
            return values[order.index(c)]
        return 0

    # check if the character is left, right associative
    def __isRightAssociative(self, c):
        return c == '^'

    # from infix to postfix
    def infix_to_postfix(self, string):
        output = ""

        for char in string:
            # ignore spaces
            if char == ' ':
                continue
            # if is operand push it to the output immediately
            if self.__isOperand(char):
                output += char + ' '

            # and if the character is '(' push it to my stack
            elif char == '(':
                self.push(char)

            # and when I reach the ')' 
            elif char == ')':
                # pop the all operators and push it to my output until reach the '('
                while self.peek() != '(':
                    output += self.pop() + ' '
                # then remove the ( from the stack because we finish the process inside ()
                self.pop()

            # if the character is an operator
            elif self.__isOperator(char):
                while not self.is_empty():
                    top = self.peek()

                    # Stop if top is '('
                    if top == '(':
                        break

                    # Get precedence of the operators
                    prec_top = self.__getPrecedence(top)
                    prec_char = self.__getPrecedence(char)

                    # If top has higher precedence, or same precedence and [char is left-associative, not right]
                    # so pop the last operator and push it to my output
                    if prec_top > prec_char or (prec_top == prec_char and not self.__isRightAssociative(char)):
                        output += self.pop() + ' '
                    # when it's right-associative like '^' with equal precedence
                    # just push it after break the loop
                    else:
                        break

                self.push(char)

        # if we loop over the whole expression we have and finish it
        # and the stack is not empty yet, so => pop all the remaining operators and push it to the output
        while not self.is_empty():
            output += self.pop() + ' '

        return output


#####################################

my_stack = Stack()
print("="*25)
expr1 = "(1 + 2) * 3"
print("Infix:   ", expr1)
print("Postfix: ", my_stack.infix_to_postfix(expr1))

print("="*25)
expr2 = "5 + ( 6 - 2 ) * 9"
print("Infix:   ", expr2)
print("Postfix: ", my_stack.infix_to_postfix(expr2))

print("="*25)
expr3 =  "( 1 + 2 ) * ( 3 + 4 )"
print("Infix:   ", expr3)
print("Postfix: ", my_stack.infix_to_postfix(expr3))

# extra example in ^ right-associative
print("="*25)
expr3 =  "2 ^ 3 ^ 2"
print("Infix:   ", expr3)
print("Postfix: ", my_stack.infix_to_postfix(expr3))