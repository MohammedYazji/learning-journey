# Using the insertion sort algorithm as a method in Singly Linked List Class to Sort the whole list we have
# think in it like a card game and you pick card by card, then sort them

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

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
    

    def insertion_sort_sll(self):
        # make a new list to be the new sorted list [init empty]
        sorted_head = None

        # Start from the head in the original list
        current = self.head

        # now traverse the original list node by node
        while current:
            # Save the next node before changing current.next
            next_node = current.next

            # If sorted list is empty OR current node less than the head of the sorted list [should be placed at the start]
            if sorted_head is None or current.data < sorted_head.data:
                # make the current node in the original list to point into the head of the new sorted list
                current.next = sorted_head
                # then set the sorted head to be the current node as the new head
                sorted_head = current

            # Find the correct place to insert the current node in sorted list
            else:
                # make a temp pointer start from the head of the new sorted list
                where = sorted_head

                # Move forward in sorted list while current.data is greater
                # if still nodes in the list and the current node in the original list is greater, so keep looping
                while where.next and where.next.data < current.data:
                    # move one step in the sorted list
                    where = where.next

                # So if the loop stop so => the current node now is less than where we are in the new list next pointer
                # So Insert current node in its correct position after the where we are in the new one

                # make the current node point into the next where we reach in the new one, because its the current <= where.next 
                current.next = where.next
                # and make the where to point into the new node after it which is the current
                where.next = current

            # Move to the next node in the original list
            current = next_node

        # Return the new head of the sorted list
        return sorted_head

my_list = SinglyLinkedList()
my_list.push(7).push(3).push(9).push(1).push(4)
print('Before Insertion Sort: ', my_list)
print('After Insertion Sort: ', my_list)


# think in it like a card game and you pick card by card, then sort them
def insertion_sort(arr):
    # so here start from index 1, assume that the first element in the right place because just I have this card yet
    for i in range(1, len(arr)):
        # pick the new card
        # store it in temp variable
        current = arr[i]
        # and get the elements before it
        j = i - 1
        # then loop over all elements before this new current element
        # until reach the zero
        # if the current is <= the arr[j], so we reach the correct position, so add current after it
        while j >= 0 and arr[j] > current:
            # shift all the greater items to the right
            arr[j + 1] = arr[j]
            # then move to the element before it
            j -= 1
        # Insert current into its correct position
        arr[j + 1] = current

    return arr