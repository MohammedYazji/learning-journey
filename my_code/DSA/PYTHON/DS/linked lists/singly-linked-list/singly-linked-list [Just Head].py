class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

# beginning => head
# no tail and no length
class SinglyLinkedList:
    def __init__(self):
        self.head = None

    # pushing to the end of the list O(n)
    def push(self, val):
        #  Receive a value and make a new node
        new_node = Node(val)

        # if there's no head => empty list
        # so set the head to be the new Node
        if not self.head:
            self.head = new_node
            return self

        # if not empty, loop until the end
        current = self.head
        while current.next:
            current = current.next

        # then make the last node point into the new node
        current.next = new_node
        return self
    

    # remove from the end of the list O(n)
    def pop(self):

        if not self.head:
            return None

        # if only one node
        if not self.head.next:
            val = self.head.val
            self.head = None
            return val

        # use two pointers to reach the last and second last nodes
        current = self.head
        while current.next and current.next.next:
            current = current.next

        # store the last node's value
        val = current.next.val  
        # and make the node before last point to None
        # remove last node
        current.next = None 
        return val
    
    
    # remove the first element (head) O(1)
    def shift(self):
        if not self.head:
            return None

        # store the head to return it later
        val = self.head.val
        # then make the head to be the second node
        self.head = self.head.next
        return val

    # add to the beginning (head) O(1)
    def unshift(self, val):
        # make the node
        new_node = Node(val)
        # make the new node to point into the original head
        new_node.next = self.head
        # and set the head to be the new node
        self.head = new_node
        return self
    
    # get node at a specific index O(n)
    def get(self, index):
        current = self.head
        # make counter to loop until reach the counter - 1
        counter = 0

        # if there's head so we still in the list so keep going
        while current:
            # if we reach the index we want so return it
            if counter == index:
                return current
            current = current.next
            counter += 1

        # if we didn't return any value so, index out of bounds
        return None
    
    # update the value of a node at given index
    def set(self, index, val):
        # use the get method 🩷
        found_node = self.get(index)
        #  change it's value, if exist not None
        if found_node:
            found_node.val = val
            return True
        return False
    
    # insert at specific index O(n)
    def insert(self, index, val):
        #  if the index is zero so add at first
        # unshift
        if index == 0:
            return self.unshift(val)

        # else implement our insert method
        # we will use the get method, but don't need the index itself
        # I want the previous one
        prev = self.get(index - 1)
        # to ensure that the index is valid
        if not prev:
            return False
        # make a new node
        new_node = Node(val)
        # make it point the next of the previous
        new_node.next = prev.next
        # and set the previous to point on the new node
        prev.next = new_node
        return True
    
        # remove at specific index O(n)
    
    def remove(self, index):
        # if the first one shift it
        if index == 0:
            return self.shift()

        prev = self.get(index - 1)
        # ensure that the index is valid
        if not prev or not prev.next:
            return None
        
        # and set the prev next
        # to be the next of the next node
        removed = prev.next
        prev.next = removed.next

        return removed.val

    # reverse the list O(n)
    def reverse(self):
        # previous as null to make the first node point to the None
        # make it the last node
        prev = None
        #  set the current (as temp variable) to be the head    
        current = self.head

        while current:
            # in each loop store the next node to not lost the rest of the list
            next_node = current.next
            # then set the current to point to the previous node
            current.next = prev
            # then move the previous node to be the current
            prev = current
            # and move the current to the next node, which we stored it before
            # to process the next one
            current = next_node

        # finally set new head
        self.head = prev  
        return self
    
    def __str__(self):
        res = ''
        current = self.head
        while current:
            res += str(current.val) + ' '
            current = current.next
        return res
    
linked_list = SinglyLinkedList()
linked_list.push(10).push(20).push(30).push(40).push(50)
print(linked_list)
print('=' * 5)
print(linked_list.reverse())