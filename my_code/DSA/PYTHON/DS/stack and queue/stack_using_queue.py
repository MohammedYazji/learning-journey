# Queue needs to remove first element => FIFO
# but Stack only allows removing the last element => LIFO

# To implement this, I think we need two queues...
# one to enqueue new elements normally
# then reverse the queue and pass it to the second queue to dequeue from the first
from queue_Array_implementation import ArrayQueue

class StackUsingArrayQueues:
    def __init__(self, capacity):
        self.q1 = ArrayQueue(capacity)
        self.q2 = ArrayQueue(capacity)
        self.capacity = capacity

    def is_empty(self):
        return self.q1.is_empty()

    def push(self, x):
        self.q1.enqueue(x)

    def pop(self):
        if self.q1.is_empty():
            print("Stack is empty")
            return None

        for _ in range(self.q1.size - 1):
            self.q2.enqueue(self.q1.dequeue())

        top = self.q1.dequeue()
        self.q1, self.q2 = self.q2, self.q1
        return top

    def peek(self):
        if self.q1.is_empty():
            return None

        top = None
        original_size = self.q1.size

        for i in range(original_size):
            val = self.q1.dequeue()
            self.q2.enqueue(val)
            if i == original_size - 1:
                top = val

        self.q1, self.q2 = self.q2, self.q1
        return top


my_stack = StackUsingArrayQueues(10)
my_stack.push(100)
my_stack.push(200)
my_stack.push(300) # last in

print(my_stack.pop())
print(my_stack.pop())
print(my_stack.pop())
