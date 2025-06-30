class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

# beginning => head
# length
# the tail of the list => None
class CircularSinglyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
        self.length = 0

    # pushing to the end of the list
    def push(self,val):
        #  Receive a value and make a new node
        new_node = Node(val)

        # if there's no head => empty list, length = 0
        # so set the head and tail to be the new Node
        # and set the tail next to point to the head
        if(not self.head):
            self.head = new_node
            self.tail = new_node
            self.tail.next = self.head
        
        # else if not empty
        # make the tail point on the new node {the previous tail}
        # then set the tail to be the new node
        # and set the tail to point to the head
        else:
            self.tail.next = new_node
            self.tail = new_node
            self.tail.next = self.head
        
        # then always increment the length by one
        self.length += 1
        return self
    
    # remove from the end of the list
    def pop(self):
        # if the list is empty => return None
        if (not self.head): 
            return None
        
        # if only one node
        if self.head == self.tail:
            # store it to return after removing
            value = self.head.val
            self.head = None
            self.tail = None
            self.length -= 1
            return value

        # more than one node
        current = self.head
        new_tail = current
        # else loop until reach the tail
        while current.next != self.head:
            new_tail = current
            current = current.next

        value = current.val
        # and set the tail to be the second last node
        self.tail = new_tail
        # then set the next of the second last node => head
        self.tail.next = self.head
        self.length -= 1

        return value
        
    # shifting => remove the head
    def shift(self):
        # if empty return None
        if not self.head:
            return None
        
        # else store the current head in a variable to return it
        current_head = self.head

        if self.head == self.tail:
            self.head = None
            self.tail = None
        
        else:
            # set the head to be the current head's next property
            self.head = self.head.next
            # Update tail.next to point to new head to maintain circularity
            self.tail.next = self.head

        # decrement the length
        self.length -= 1
        # return the head after remove it
        return current_head.val

    # unshifting => add a new head
    def unshift(self, val):
        # make a new node
        new_node = Node(val)

        if not self.head:
            # List is empty — new node becomes head and tail
            self.head = new_node
            self.tail = self.head
            self.tail.next = self.head
        
        # Insert at beginning and update circular link
        else:
            # set this new node next point to the old head
            new_node.next = self.head
            # then set the head to be this new node
            self.head = new_node
            self.tail.next = self.head

        # Always Do THis
        # increment the length
        self.length += 1
        # return the linked list
        return self

    # Get a node based on index
    def get(self, index):
        if index < 0 or index >= self.length:
            return None
        else:
            counter = 0
            current = self.head
            while counter < index:
                current = current.next
                counter += 1
            return current

    # set the node value with a new value
    def set(self, index, val):
            # use the get method 🩷
            found_node = self.get(index)
            #  change it's value
            if found_node:
                found_node.val = val
                return True
            return False
                
    # insert at specific position
    def insert(self, index, val):
        # if invalid index return null
        # if equal the length allow => so push a new node
        if index < 0 or index > self.length:
            return False
        
        # if the index equal the length so add new node at end
        # push
        elif index == self.length:
            self.push(val)
            return True
        
        #  if the index is zero so add at first
        # unshift
        elif index == 0:
            self.unshift(val)
            return True
        
        # else implement our insert method
        # we will use the get method, but don't need the index itself
        # I want the previous one
        else:
            prev = self.get(index - 1)
            # make a new node
            new_node = Node(val)
            # make it point the next of the previous
            new_node.next = prev.next
            # and set the previous to point on the new node
            prev.next = new_node
            self.length += 1
            return True

    # remove a specific node
    def remove(self, index):

        # if invalid index return false
        if index < 0 or index >= self.length:
            return None
        # if index is the last one pop it
        elif index == self.length - 1:
            return self.pop()
        # if the first one shift it
        elif index == 0 :
            return self.shift()
        else:
            # else get the previous node
            prev = self.get(index - 1)
            # and set the prev next
            # to be the next of the next node
            removed = prev.next
            prev.next = prev.next.next
            # prev.next = removed.next
            self.length -= 1
            return removed.val

    #  reverse a list
    def reverse(self):

        if not self.head or self.head.next == self.head:
            return self

        # Start from tail to make circular link work
        prev = self.tail  
        current = self.head

        while True:
            # in each loop store the next node to not lost the rest of the list
            next_node = current.next
            # then set the current to point to the previous node
            current.next = prev
            # then move the previous node to be the current
            prev = current
            # and move the current to the next node, which we stored it before
            # to process the next one
            current = next_node

            # Once we loop back to the original head, we’re done
            if current == self.head:
                break

        # swap head and tail
        self.head, self.tail = self.tail, self.head

        return self

    # traversing
    def __str__(self):
        if not self.head:
            return ''

        res = ''
        current = self.head
        while True:
            res += str(current.val) + ' '
            current = current.next
            if current == self.head:
                break
        return res


linked_list = CircularSinglyLinkedList()
linked_list.push(10).push(20).push(30).push(40).push(50)
print(linked_list)
print('=' * 5)
print(linked_list.reverse())
