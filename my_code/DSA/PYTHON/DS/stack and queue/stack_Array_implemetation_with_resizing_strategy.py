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
    
    def size(self):
        return self.n + 1
    
    def is_full(self):

        return self.size() == self.capacity
    
    # I make it protected to not using it out of the class
    # O(n)
    def _resize(self, new_capacity):
        # make a new stack
        new_stack = [None] * new_capacity

        # then loop over the original stack and push its value here
        for i in range(self.size()): # size not include
            new_stack[i] = self.stack[i]
        
        # then make my stack to be the new stack
        self.stack = new_stack
        # and the capacity to be the new one
        self.capacity = new_capacity
    
    def push(self, val):
        if self.is_full():
            # double the capacity
            self._resize(self.capacity * 2)

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

        # shrinks the capacity if 1/4 full
        # the capacity must be greater than 4 because
        # for example if capacity is 4 and size is 1, 
        # so 1 <= 4 => true so the capacity will be 2 next time
        if 0 < self.size() <= self.capacity // 4 and self.capacity > 4:
            self._resize(self.capacity // 2)

        return value
    
    def peek(self):
        if self.is_empty():
            print("THe Stack is Empty!")
            return None
        # else
        return self.stack[self.n]
    
    def print_stack(self):
        print(self.stack[:self.n + 1])
        
    
my_stack = ArrayStack(50)
my_stack.push(1)
my_stack.push(2)
my_stack.push(3)
my_stack.push(4)
my_stack.push(5)
my_stack.push(6)
my_stack.print_stack()
