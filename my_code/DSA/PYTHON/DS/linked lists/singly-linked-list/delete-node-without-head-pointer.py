# 🔹 This problem requires deleting a node from a singly linked list,
# but you're NOT given the head pointer — only the node to delete.
#
# 🔸 Therefore:
# - We cannot traverse the list or find the previous node.
# - So, we can't use a full LinkedList class with head reference.
# 
# ✅ The trick:
# - Copy the value from the next node into the current one.
# - Then skip the next node (node.next = node.next.next)
#
# ⚠️ This works only if the node is NOT the tail.

class ListNode:
    def __init__(self, val):
        self.val = val
        self.next = None

########################################

class Solution:
    def deleteNode(self, node):
        """
        Deletes the given non-tail node from a singly linked list.
        
        In a real interview (e.g. LeetCode), you are only given `node`,
        and NOT the head of the list. So, we can't access the previous node.
        Instead, we copy the value from the next node and bypass it.
        
        Time: O(1)  |  Space: O(1)
        """
        node.val = node.next.val
        node.next = node.next.next

#########################################

# function to create a linked list from an array
def create_linked_list(values):
    my_list = ListNode(0)
    current = my_list
    for n in values:
        current.next = ListNode(n)
        current = current.next
    return my_list.next

def find_node(head, target):
    """
    Helper method to find and return the first node with the given target value.
    Used only for testing to simulate LeetCode behavior
    where the node to delete is passed directly (not the head).
    """
    current = head
    while current:
        if current.val == target:
            return current
        current = current.next
    return None

def print_linked_list(head):
    while head:
        print(head.val, end=" -> ")
        head = head.next
    print("None")

#########################################

# Create my list: 1 -> 2 -> 3 -> 4 -> 5
head = create_linked_list([1, 2, 3, 4, 5])

# print the list before deleting process
print("Before Deleting: ")
print_linked_list(head)

# NOTE:
# In the real problem, you're given only the node to delete, not the head.
# Here, we use `find_node()` to simulate that just for testing. [in interview you don't need this]
node = find_node(head, 3)

# Delete the node
Solution().deleteNode(node)

# print the list after deleting process
# 1 -> 2 -> 4 -> 5
print("After Deleting: ")
print_linked_list(head)