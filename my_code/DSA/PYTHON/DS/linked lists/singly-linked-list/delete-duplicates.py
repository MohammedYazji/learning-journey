class Node(object):
    def __init__(self, val):
        self.val = val
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

    def display(self):
        current = self.head
        while current:
            print(current.val, end=" -> ")
            current = current.next
        print("None")

    @staticmethod
    def deleteDuplicates(head):
        # make a new pointer
        current = head

        # while the pointer in the list
        while current and current.next:
            # if the current node value equal the next one
            if current.val == current.next.val:
                # make it point into the next next [jump over the similar second node]
                current.next = current.next.next
            else:
                # else move one step normally
                current = current.next
        # finally return the head of the list
        return head


my_list = LinkedList()
for n in [1, 1, 2, 3, 3]:
    my_list.push(n)

print("Before removing duplicates:")
my_list.display()

print('=' * 4)
my_list.head = LinkedList.deleteDuplicates(my_list.head)

print("After removing duplicates:")
my_list.display()

# one pointers
# T => O(1), M => O(1)