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