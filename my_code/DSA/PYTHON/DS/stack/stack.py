class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class Stack:
    def __init__(self):
        self.first = None
        self.last = None
        self.size = 0
    
    # add to the first of the list
    # its unshift but I called it push
    # to be O(1), while real push take O(n)
    def push(self, val):
        # create a new node to add it
        new_node = Node(val)

        # if empty list set first, last to be the new node
        if not self.first:
            self.first = new_node
            self.last = new_node
        else:
            # set the newNode next to point to the previous start
            new_node.next = self.first
            #  set the start to be the new node
            self.first = new_node
        # increment the size of the stack
        self.size += 1
        # and return it
        return self.size
    
    # remove the first node of the list
    # its shift but I called it push
    # to be O(1), while real pop take O(n)
    def pop(self):
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
            self.first = self.first.next
        self.size -= 1
        return popped_node.val
    

stack = Stack()
stack.push(32)
stack.push(12)
stack.push(65)
stack.push(10)
print(stack.pop())
print(stack.pop())
print(stack.pop())