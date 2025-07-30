# linked list implementation [top and bottom]

class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class Stack:
    def __init__(self):
        self.top = None
        self.bottom = None
        self.size = 0

    def peek(self):
        if not self.top:
            return None
        else:
            return self.top.val
        
    def is_empty(self):
        if not self.top:
            return True
        else:
            return False
    
    def clear(self):
        # remove the access (pointer which catch the list)
        self.top = None
        self.bottom = None
        
    # add to the top of the list
    # its unshift but I called it push
    # to be O(1), while real push take O(n)
    def push(self, val):
        # create a new node to add it
        new_node = Node(val)

        # if empty list set top, bottom to be the new node
        if not self.top:
            self.top = new_node
            self.bottom = new_node
        else:
            # set the newNode next to point to the previous start
            new_node.next = self.top
            #  set the start to be the new node
            self.top = new_node
        # increment the size of the stack
        self.size += 1
        # and return it
        return self.size
    
    # remove the top node of the list
    # its shift but I called it push
    # to be O(1), while real pop take O(n)
    def pop(self):
        if not self.top:
            return None
        
        # store the bottom in (top node) to return after removing
        popped_node = self.top

        # if the size is one just one node
        if self.size == 1:
            # reset the initial values
            self.top = None
            self.bottom = None
        
        else:
            self.top = self.top.next
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
print(stack.pop())