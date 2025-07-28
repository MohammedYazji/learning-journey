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

    def reverseList(self, head):
        # Base Case
        if not head:
            return None
        
        current = head
        # each time consider the current as a head
        if current.next:
            # call the recursive function
            current = self.reverseList(head.next)
            # set the head.next point to the head itself
            # node1 => node2
            # node2 => node1
            head.next.next = head
        # Break the original link
        head.next = None

        return current

    def reverse(self):
        self.head = self.reverseList(self.head)



my_list = LinkedList()
for n in [1, 2, 3, 4, 5]:
    my_list.push(n)

print("Original List:")
my_list.display()

my_list.reverse()

print("Reversed List:")
my_list.display()


# Recurcive
# T O(n), M O(n)