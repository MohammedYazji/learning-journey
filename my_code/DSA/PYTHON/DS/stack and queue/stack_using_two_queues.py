# Stack Using Queue:
# This Solution using Two Queues: pop-heavy solution

# The problem is as follows:
# Queue needs to remove first element => FIFO
# but Stack only allows removing the last element => LIFO

# To implement this, we need two queues...
# 1) one to enqueue new elements normally
# 2) # then move all elements except the last from the first queue to the second,
# and dequeue the last element from the first queue
from queue_Array_implementation import ArrayQueue

class StackUsingArrayQueues:
    def __init__(self, capacity):
        # make two queues
        self.q1 = ArrayQueue(capacity)
        self.q2 = ArrayQueue(capacity)
        self.capacity = capacity

    def is_empty(self):
        return self.q1.is_empty()

    # time complexity O(1)
    def push(self, x):
        # push is normal enqueue
        self.q1.enqueue(x)

    # time complexity O(n) [pop-heavy solution]
    def pop(self):
        if self.q1.is_empty():
            print("Stack is empty")
            return None

        # we need to move all the elements from the first queue to the second queue
        # by this 
        for _ in range(self.q1.size - 1):
            self.q2.enqueue(self.q1.dequeue())

        top = self.q1.dequeue()
        self.q1, self.q2 = self.q2, self.q1
        return top

    # get the last element in the queue
    def peek(self):
        if self.q1.is_empty():
            return None

        top = None
        # get the size of the first queue to loop over it
        original_size = self.q1.size

        for i in range(original_size):
            # pop all elements except the last and push them to the second queue
            val = self.q1.dequeue()
            self.q2.enqueue(val)
            # if we reach the last element after popping and pushing the last element set the top to be this element
            if i == original_size - 1:
                top = val
        # finally return all the elements from the second queue to the first queue
        self.q1, self.q2 = self.q2, self.q1
        return top
