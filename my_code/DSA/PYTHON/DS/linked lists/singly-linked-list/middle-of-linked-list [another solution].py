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

    def middle_node_by_length(self):
        # make new pointer to not mutate the original head
        current = self.head

        length = 0
        counter = 0

        # First: calculate length
        while current:
            current = current.next
            length += 1

        # Second: go to the middle
        # Reset the pointer to loop again
        current = self.head
        while counter < length // 2:
            current = current.next
            counter += 1

        return current

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
mid = my_list.middle_node_by_length()
print("Middle node value is:", mid.value)

# Calc the length first, then loop until the mid  => length // 2
# THIS SOLUTION TAKE Time => O(n), and Space O(1)
# same as the first solution 
# but in interviews prefer the first one