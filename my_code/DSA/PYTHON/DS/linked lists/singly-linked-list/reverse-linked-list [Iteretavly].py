class Node:
    def __init__(self, val):
        self.val = val
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def push(self, val):
        new_node = Node(val)
        if not self.head:
            self.head = new_node
            return self
        current = self.head
        while current.next:
            current = current.next
        current.next = new_node
        return self

    def display(self):
        current = self.head
        while current:
            print(current.val, end=" -> ")
            current = current.next
        print("None")

    def reverse(self):
        # start the current from head
        # and the prev intial as None
        current, prev = self.head, None
        
        # if the pointer still in the list
        while current:
            # temporarily store next node
            next_node = current.next  
            # reverse current node's pointer [make to point on the previous one]
            current.next = prev     

            # move prev and current one step
            prev = current           
            current = next_node
        
        # when we finish the looping make the ew head to be the previous => [last node in the original list]
        self.head = prev

# Example Usage
my_list = LinkedList()
for n in [1, 2, 3, 4, 5]:
    my_list.push(n)

print("Original List:")
my_list.display()

my_list.reverse()

print("Reversed List:")
my_list.display()


# Iteretavly with pointers
# T => O(n), M => O(1)