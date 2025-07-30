# linked list implementation [top]

class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class Stack:
    def __init__(self):
        self.top = None

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
    
    # add to the top of the list
    # its unshift but I called it push
    # to be O(1), while real push take O(n)
    def push(self, val):
        # create a new node to add it
        new_node = Node(val)
        # set the newNode next to point to the previous start
        new_node.next = self.top
        #  set the start to be the new node
        self.top = new_node

        # and return it
        return self
    
    # remove the top node of the list
    # its shift but I called it push
    # to be O(1), while real pop take O(n)
    def pop(self):
        if not self.top:
            return None
        
        # store the last in (top node) to return after removing
        popped_node = self.top
        # make the top node be the next node
        self.top = self.top.next

        return popped_node.val
    

# Commenting for Testing
# stack = Stack()
# stack.push(32)
# stack.push(12)
# stack.push(65)
# stack.push(10)
# print(stack.pop())
# print(stack.pop())
# print(stack.pop())
# print(stack.pop())