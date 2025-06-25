class Node:
    def __init__(self, val):
        self.val = val
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    # add a new node at the end of the dll
    def push(self, val):
        new_node = Node(val)

        if not self.head:
            self.head = new_node
            self.tail = new_node

        else:
            # set the tail to point into the new_node
            self.tail.next = new_node
            # and set the new_node to point back to the tail
            new_node.prev = self.tail
            # then update the tail
            self.tail = new_node
        
        self.length += 1
        return self
    
    # remove the last node
    def pop(self):
        # if empty
        if not self.head:
            return None
        
        # store it to return it after removing
        popped_node = self.tail

        # if just one node => return to the initial point
        if self.length == 1:
            self.head = None
            self.tail = None

        else:
            # set the tail to be the previous node
            self.tail = popped_node.prev
            # set the new tail next to point into None
            self.tail.next = None
            # set the old tail next to point to None
            # (Unlink)
            popped_node.prev = None
        # decrement the length
        self.length -= 1
        # return the popped node
        return popped_node

    # remove the head
    def shift(self):
        if not self.head:
            return None
        
        # store the head to return it later
        old_head = self.head

        # if just one node => return to the initial point
        if self.length == 1:
            self.head = None
            self.tail = None
        
        else:
            # set the head to be the new one (second node)
            self.head = old_head.next

            # set the new head prev to point to None
            self.head.prev = None

            # set the old head next to point to None
            old_head.next = None 
        self.length -= 1
        return old_head

    # add a new node as head
    def unshift(self, val):
        # first create a new node to add it
        new_node = Node(val)

        # if empty make the head and tail to be the new node
        if not self.head:
            self.head = new_node
            self.tail = new_node
        

        else:
            # set the new node next to point into the old head
            new_node.next = self.head
            # then set the old head prev to point into the new node
            self.head.prev = new_node
            # then update the head to be the new node
            self.head = new_node
        # increment one to the length
        self.length += 1
        # return the list
        return self

    # get a node based on specific index
    def get(self, index):
        # invalid index
        if index < 0 or index >= self.length:
            return None
        
        # if closer to the head
        # start from the head
        if index <= self.length // 2:
            current = self.head
            counter = 0
            while counter != index:
                current = current.next
                counter += 1
            return current
        # if closer to the tail
        # start from the tail
        else:
            current = self.tail
            counter = self.length - 1
            while counter != index:
                current = current.prev
                counter -= 1
            return current

    # set a node with a new value
    def set(self, index, value):
        # use the get method to get the node
        found_node = self.get(index)

        # if the node exist
        if found_node:
            # set its value to be the new one
            found_node.val = value
            return True
        else:
            return False

    # insert a new node based on index
    def insert(self, index, val):
        if index < 0 or index > self.length:
            return False
        elif index == 0:
            self.unshift(val)
        elif index == self.length:
            self.push(val)
        
        else:
            # create a new node
            new_node = Node(val)
            # get the node before index we want add
            before_node = self.get(index - 1)
            # get the node after (more readable)
            after_node = before_node.next

            # set the new node next to point into the after node
            new_node.next = after_node
            # and the after node prev to point back to the new node
            after_node.prev = new_node
            # set the before node next to point into new node
            before_node.next = new_node
            # and the new node prev to point back into the before node
            new_node.prev = before_node

            self.length += 1
            return True




    def __str__(self):
        res = ''
        current = self.head
        while current:
            res += str(current.val) + ' '
            current = current.next
        return res
    
l = DoublyLinkedList()
l.push(10).push(20).push(30)
print(l)
l.insert(1, 15)
print(l)