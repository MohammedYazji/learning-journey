class Node:
    def __init__(self, value):
        self.value = value
        self.next = None

class LinkedList:
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

    def middle_node(self):
        # pointer move one step each time
        step = self.head
        # pointer move two steps each time
        two_steps = self.head

        # while the second pointer not none, and has another node after it
        while two_steps and two_steps.next:
            # move one step
            step = step.next
            # move two step
            two_steps = two_steps.next.next
        
        # so when the second pointer reach the end, the first pointer will reach the middle
        # after stop the loop will return the middle node
        return step

    def display(self):
        # print the linked list
        current = self.head
        while current:
            print(current.value, end=" ")
            current = current.next
        print("None")


my_list = LinkedList()
for i in range(1, 6):  
    my_list.push(i)

my_list.display()
mid = my_list.middle_node()
print("Middle node value is:", mid.value)

# Using Two Pointers pattern
# Slow, fast pointers
# THIS SOLUTION TAKE Time => O(n), and Space O(1)
# BEST PRACTICE