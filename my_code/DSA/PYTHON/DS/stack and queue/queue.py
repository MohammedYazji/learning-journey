class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class Queue:
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0

    # push add to end O(1)
    # called enqueue
    def enqueue(self, val):
        # make a new node to push
        new_node = Node(val)

        if not self.first:
            self.first = new_node
            self.last = new_node
        else:
            # set the last node next to point into the new node
            self.last.next = new_node
            # and set the last node to be the new node itself
            self.last = new_node
        self.size += 1
        return self.size
    
    # shift remove from first O(1)
    # called dequeue
    def dequeue(self):
        if not self.first:
            return None
        
        # store the last in (first node) to return after removing
        popped_node = self.first

        # if the size is one just one node
        if self.size == 1:
            # reset the initial values
            self.first = None
            self.last = None
        else:
            # set the first to be the new first
            self.first = self.first.next
        self.size -= 1
        return popped_node.val