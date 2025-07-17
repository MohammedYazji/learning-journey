class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class Queue:
    def __init__(self):
        self.front = None
        self.rear = None
        self.size = 0

    # push add to end O(1)
    # called enqueue
    def enqueue(self, val):
        # make a new node to push
        new_node = Node(val)

        if not self.front:
            self.front = self.rear = new_node
        else:
            # set the rear node next to point into the new node
            self.rear.next = new_node
            # and set the rear node to be the new node itself
            self.rear = new_node
        self.size += 1
        return self.size
    
    # shift remove from front O(1)
    # called dequeue
    def dequeue(self):
        if not self.front:
            return None
        
        # store the rear in (front node) to return after removing
        popped_node = self.front

        # SOLUTION 1...
        # # if the size is one just one node
        # if self.size == 1:
        #     # reset the initial values
        #     self.front = None
        #     self.rear = None
        # else:
        #     # set the front to be the new front
        #     self.front = self.front.next

        # SOLUTION 2...
        # OR WE DON'T NEED TO CHECK IF THE LENGTH IS 1
        # BECAUSE WHEN I MAKE the front None SO MAKE THE REAR NONE
        popped_node = self.front
        self.front = self.front.next
        # now if the front become none so make the rear none the list is empty now
        if not self.front:
            self.rear = None

        self.size -= 1
        return popped_node.val
    
    def peek(self):
        if not self.front:
            return None
        return self.front.val
    
    def is_empty(self):
        return self.front is None
    
    def clear(self):
        self.front = self.rear = None

my_queue = Queue()
my_queue.enqueue(1)
my_queue.enqueue(2)
my_queue.enqueue(3)

print(my_queue.dequeue())
print(my_queue.dequeue())
print(my_queue.dequeue())