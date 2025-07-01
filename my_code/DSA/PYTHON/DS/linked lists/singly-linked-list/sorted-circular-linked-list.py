class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class SortedCircularLinkedList:
    def __init__(self):
        self.head = None
    
    def insert(self, data):
        new_node = Node(data)

        # 1: if the list is empty yet
        if not self.head:
            # set the head to be the new node
            self.head = new_node
            # and make it to point to itself
            self.head.next = new_node
        
        # 2: if the list has just a node
        elif self.head.next == self.head:
            # 2.1: if the data want to insert is larger than the head or equal it so add this new node after the head
            if data >= self.head.data:
                # first set the head to point into the new node
                self.head.next = new_node
                # and set the new node to point back to the head [To Make It Circular]
                new_node.next = self.head
            # 2.2: else if the data want to insert is smaller than the head, so add this new node before the head
            else:
                # first set the new node to point to the head
                new_node.next = self.head
                # and update the new head to be the new node
                self.head = new_node
                # then make the old head [Which is the last node now] to point back to the new head
                self.head.next.next = self.head
        
        # 3: if the list has more than one node
        else:
            # declare a temp variable to track traversing without changing the original head
            current = self.head
            # flag to stop the process if the new node inserted
            inserted = False

            # 3.1: if the data want to insert is smaller than the head, so add this new node before the head
            if data < self.head.data:
                # traversing over the list to reach the last node [when reach before the head]
                while current.next != self.head:
                    # each loop move one step
                    current = current.next
                # after we exit the loop and reach the last node, make it to point to the nea head which is the new node now
                current.next = new_node
                # then set the new node [new head] to point into the old one
                new_node.next = self.head
                # then update the head to be the new node
                self.head = new_node
            
            # 3.2: else if the data want to insert is larger than the head, so add this new node after the head
            else:
                # traverse through the list until reach before the head
                while current.next != self.head:
                    # if the data in the correct position add it, so if its larger than the current node and smaller than the next node
                    if data > current.data and data < current.next.data:
                        # first make the new node point to the next node
                        new_node.next = current.next
                        # and make the current node point to the new node
                        current.next = new_node
                        # finally set the flag to be true [inserted successfully] need it later
                        inserted = True
                        break
                    # move one step each loop
                    current = current.next
                
                # if we couldn't add the node in the last while loop, [inserted FALSE] so its position between the last node and the head, so insert it at last
                if not inserted:
                    # set the new node next to point the head [make it circular]
                    new_node.next = self.head
                    # then link it with the rest of list as the last node
                    current.next = new_node

    # traverse through the whole list until reach before the head and add each node data to my string output
    def print(self):
        # if the list is empty so dont traverse
        if not self.head:
            return None
        
        # declare the output string with initial value  the first node
        output = str(self.head.data) + ' '
        # then start looping frm the second node
        current = self.head.next

        # if the temp variable 'current' reach the head stop
        while current != self.head:
            # in each loop add the node data after convert it to string, and concat it with space ' '
            output += str(current.data) + ' '
            # move one step each loop
            current = current.next
        # finally return the output string
        print(output)
    

my_linked_list = SortedCircularLinkedList()
my_linked_list.insert(7)
my_linked_list.insert(3)
my_linked_list.insert(9)
my_linked_list.insert(1)
my_linked_list.insert(4)
my_linked_list.print()
