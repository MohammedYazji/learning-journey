class Node:
    def __init__(self, val=0):
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


    # I make it static because it  does not depend on any instance, it's related to the class but doesn’t use or modify the class’s own data
    @staticmethod
    def merge_two_lists(list1, list2):
        # make a new node (list) to store the two lists
        new_node = Node()

        # make a pointer to loop over the new list
        current = new_node

        # The loop continues as long as neither list is empty.
        # If one of them becomes None, we exit the loop — because there's nothing more to compare in that list.
        while list1 and list2:
            # If list1 has the smaller value, it should come next in the merged list
            if list1.val < list2.val:
                # Connect the current node to the node from list1, because it’s the smaller one
                current.next = list1
                # Move the pointer in list1 one step
                list1 = list1.next
            else:
                # If list2.val is smaller or equal, do the same logic with list2
                current.next = list2
                list2 = list2.next

            # after each process move the current one step
            current = current.next

        # push the remaining non empty list to my new node list
        if list1:
            current.next = list1
        else:
            current.next = list2

        # return the new node next pointer from where we start build our new list
        return new_node.next

# First list: 1 -> 3 -> 5
list1 = LinkedList()
for node in [1, 3, 5]:
    list1.push(node)

# Second list: 2 -> 4 -> 6
list2 = LinkedList()
for node in [2, 4, 6]:
    list2.push(node)

# Merge them
merged_lists = LinkedList.merge_two_lists(list1.head, list2.head)

# Print merged list
current = merged_lists
while current:
    print(current.val, end=" -> ")
    current = current.next
print("None")

# Iterative with new_node (list) to store the new list
# in ech loop compare the less value and push it
# when on of the lists become empty then just pus the another one
# T => O(n), M => O(1)