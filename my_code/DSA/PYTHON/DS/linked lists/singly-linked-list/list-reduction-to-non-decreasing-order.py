# This program reduces a singly linked list to a non-decreasing (increasing or equal) sequence
# by repeatedly merging the adjacent pair of nodes with the smallest sum.
# Each merge operation replaces two nodes with a single node whose value is their sum.
# The process continues until the entire list is non-decreasing.
# The method returns the total number of merge operations performed.


class Node:
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

    def to_list(self):
        result = []
        current = self.head
        while current:
            result.append(current.val)
            current = current.next
        return result

    def is_non_decreasing(self):
        # thi method to check if the list we have is non decreasing order
        # so if non-decreasing [increasing order] return True to stop and return the operations count
        curr = self.head
        while curr and curr.next:
            # if the node is greater than the one after it
            # so its has decreasing
            if curr.val > curr.next.val:
                return False
            curr = curr.next

        # if the looping over and there's no False
        # so all nodes in increasing order ✅
        return True

    # we just need the whole list to be in increasing
    def reduce_to_non_decreasing(self):

        operations = 0
        # while the list still in decreasing order
        while not self.is_non_decreasing():
            # Find all adjacent pairs and their sums

            # first but the min as infinite as a high value
            min_sum = float('inf')

            # previous node to the pair [to not loose the link]
            # so when we replace the two nodes with their sum, then we need to set the min_prev next pointer to refer into the new sum node
            # by making it to be the current prev value in looping
            min_prev = None  

            # start looping from the head
            curr = self.head
            # in the first loop the previous of head node => None
            prev = None

            # loop over the list, while in the list yet
            while curr and curr.next:
                # sum the current node value with the next one
                pair_sum = curr.val + curr.next.val
                # if this sum is less than the min so set it to be the new min
                if pair_sum < min_sum:
                    # update the min with the new value
                    min_sum = pair_sum
                    # set the node before the best min-sum pair to be the 
                    min_prev = prev
                # move the previous current node, current node one step
                prev = curr
                curr = curr.next

            # if the min_prev = prev = None in first loop, when the current is the head
            if min_prev is None:
                # The smallest pair is at the head
                # so make a new node and replace it with hte head

                # make two pointers of the head and the next node
                first = self.head
                second = first.next
                # make a new node with these two values
                new_node = Node(first.val + second.val)
                # make the new node point the nest of the second node
                new_node.next = second.next
                # then update the head to be the new node
                self.head = new_node
            else:
                # else if the best min-sum is not at the beginning

                # make two pointers of the prev minimum pair next node and the next node
                # so the I catch the two nodes with the minimum sum   
                first = min_prev.next
                second = first.next

                # make a new node with these two values
                new_node = Node(first.val + second.val)
                # then make the new node to point into the next of the old second node  
                new_node.next = second.next
                # finally make the previous of min pair to refer into the new node
                min_prev.next = new_node

            # in each loop if the list still in decreasing order, increment the counter by one
            operations += 1

        return operations


my_list = LinkedList()
my_list.push(5).push(2).push(3).push(1)
print("Before:", my_list.to_list())
opreations_count = my_list.reduce_to_non_decreasing()
print("After:", my_list.to_list())
print("Operations:", opreations_count)

# [5, 2, 3, 1] # min_sum = 4 => [3, 1]
# [5, 2, 4] # min_sum = 6 => [5, 6]
# [5, 6] # increasing order ✅💪
