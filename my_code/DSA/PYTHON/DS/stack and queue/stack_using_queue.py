# Stack Using Queue:
# This Solution using One Queue

# The problem is as follows:
# Queue needs to remove first element => FIFO
# but Stack only allows removing the last element => LIFO

# To implement this, we need one queue...
# 1) when push push normally to the queue
# 2) but when pop, we need to dequeue all elements except the last one, after dequeue each element, push it to the last, 
from queue_Array_implementation import ArrayQueue

class StackUsingArrayQueues:
    def __init__(self, capacity):
        # make one queue
        self.q = ArrayQueue(capacity)

    def is_empty(self):
        return self.q.is_empty()


    # time complexity O(1)
    def push(self, data):
        # push is normal enqueue
        self.q.enqueue(data)

    # time complexity O(n)
    def pop(self):
        if self.q.is_empty():
            print("Stack is empty")
            return None
        # we need to pop all elements except the last one
        # then push each element to the last
        # I loop until size - 1 to not dequeue the last element and push it
        for _ in range(self.q.size - 1):
            self.q.enqueue(self.q.dequeue())
        # when we make space and the last element, become the first so dequeue it
        return self.q.dequeue()
    
    def peek(self):
        # peek in queue just returns the first element
        # so lets make the same thing as pop but without pop
        if self.q.is_empty():
            return None
        
        for _ in range(self.q.size - 1):
            self.q.enqueue(self.q.dequeue())

        # pop the last element then push it again
        top = self.q.dequeue()
        self.q.enqueue(top)
        return top

my_stack = StackUsingArrayQueues(5)
my_stack.push(1)
my_stack.push(2)
my_stack.push(3)
print("peek", my_stack.peek())
my_stack.push(4)
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())