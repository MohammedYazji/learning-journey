# Queue need to remove the first element => FIFO
# but stack only allows remove the last element => LIFO
# so we need implement FIFO using LIFO...

# to implement this we need two stacks..., one to push and another to pop [after reverse values]
# the first should push to it normally
# then reverse the stack and pass it to the second stack to pop from the first
from stack_Array_implemetation import ArrayStack

class QueueUsingStacks:
    def __init__(self, capacity):
        self.input = ArrayStack(capacity)
        self.output = ArrayStack(capacity)

    def is_empty(self):
        if self.input.is_empty() and self.output.is_empty():
            return True
        return False

    def enqueue(self, value):
        # if the input is full so the queue is empty
        if self.input.is_full():
            print("The Queue is full")
            return
        self.input.push(value) # add to first normally

    
    def dequeue(self):
        if self.is_empty():
            print("The Queue is empty")
            return None
        
        # if the output is totally empty so push all inputs into it in reverse order
        if self.output.is_empty():
            for _ in range(self.input.n + 1):
                self.output.push(self.input.pop())

        # pop from output stack, so now we remove from the first of queue because we reverse it
        return self.output.pop()

    def peek(self):
        # if the queue is empty
        if self.is_empty():
            return None
        # if the output is totally empty so push all inputs into it in reverse order
        if self.output.is_empty():
            # loop over the input stack
            for _ in range(self.input.n + 1): 
                self.output.push(self.input.pop())

        return self.output.peek()


my_queue = QueueUsingStacks(5)
my_queue.enqueue(100) # first in
my_queue.enqueue(200)
my_queue.enqueue(300) # last in
print('=' * 10)
print(my_queue.dequeue())
print(my_queue.dequeue())
print(my_queue.dequeue())
