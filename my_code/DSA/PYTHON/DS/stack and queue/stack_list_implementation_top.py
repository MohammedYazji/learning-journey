# linked list implementation [top]

class Node:
    def __init__(self, data):
        # each element in the stack must have data and pointer to the nest element
        self.data = data
        self.next = None

class Stack:
    def __init__(self):
        # top pointer for each stack instance to track the top element
        self.top = None

    #  time complexity O(1)
    def peek(self):
        # if the top [last element] is not empty [None] return its data
        if not self.top:
            return None
        else:
            return self.top.data
        
    # time complexity O(1)
    def is_empty(self):
        # if the top is empty then return true
        if not self.top:
            return True
        else:
            return False
    
    # time complexity O(1)
    def clear(self):
        # remove the access (pointer which catch the list)
        # so now my pointer not refer anywhere
        self.top = None
    
    # push to the start of the list [top]
    # because in list the top refer to the start O(1)
    # but in our stack top refer to last in element
    # time complexity O(1)
    def push(self, data):
        # create a new node to add it
        new_node = Node(data)
        # set the newNode next to point to the previous start of the list
        new_node.next = self.top
        # set the top to be the new node
        self.top = new_node

        # and return it
        return self
    
    # remove the first node of the list [top]
    # because in list we top refer to the start O(1)
    # but in our stack top refer to last in element
    # time complexity O(1)
    def pop(self):
        # if the stack is empty return None
        if self.is_empty():
            return None
        
        # store the top in (top node) to return after removing
        popped_node = self.top
        # make the top node be the next node
        self.top = self.top.next

        return popped_node.data
