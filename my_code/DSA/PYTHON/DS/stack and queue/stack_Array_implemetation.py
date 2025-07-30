class ArrayStack:
    def __init__(self, capacity):
        # for each instance make a new array with capacity and initial values of None for each index
        self.stack = [None] * capacity
        self.capacity = capacity
        # the length of items in the stack [-1 => empty yet]
        self.n = -1

    def is_empty(self):
        # if the length still -1 so its empty yet
        return self.n == -1
    
    def is_full(self):
        # if the length reach the length -1 because length starts from zero
        # for example capacity = 5 so length from 0 - 4
        return self.n == self.capacity - 1
    
    def push(self, val):
        if self.is_full():
            print("The Stack is Full")
            return
        # else increment the length by one, and push the value with this length as index
        # we increment the length first because we starts from -1
        self.n += 1
        self.stack[self.n] = val

    def pop(self):
        if self.is_empty():
            print("No items to POP!")
            return None
        # else store the value of the top to return it later, then decrement the length by
        value = self.stack[self.n]
        # optional step but to help garbage collection👍
        self.stack[self.n] = None # to remove the value from memory too
        self.n -= 1

        return value
    
    def peek(self):
        if self.is_empty():
            print("THe Stack is Empty!")
            return None
        # else
        return self.stack[self.n]
        
    
# Comment for Testing
# my_stack = ArrayStack(5)
# my_stack.push(1)
# my_stack.push(2)
# my_stack.push(3)
# my_stack.push(4)
# print(my_stack.pop())
# print(my_stack.pop())
# print(my_stack.pop())
# print(my_stack.pop())