class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class CircularLinkedList:
    def __init__(self):
        self.head = None

    def create(self, n):
        # to save the last node each loop to point to the next one
        prev = None
        for i in range(1, n + 1):
            new_node = Node(i)
            if not self.head:
                self.head = new_node
                prev = new_node
            else:
                prev.next = new_node
                prev = new_node
        # to make it circular
        prev.next = self.head

    def eliminate(self, k):
        current = self.head
        prev= None

        # while there are more than one node
        while current != current.next:
            # to loop twice
            for _ in range(k - 1):
                # store the previous one to can remove the current safely
                prev = current
                current = current.next
            # remove the current node
            prev.next = current.next
            # start the next loop
            # start from the next node 
            current = current.next
        
        # when finish and still just one node return it
        return current.data



    def print(self):
        current = self.head.next
        my_string = str(self.head.data) + ' '
        while current != self.head:
            my_string += str(current.data) + ' '
            current = current.next
        print(my_string)

my_list = CircularLinkedList()
my_list.create(5)
my_list.print()
print(my_list.eliminate(3))

# Problem Description: You are given a group of n people, each assigned a unique identifier from 1 to n, standing in a sequence. Starting from the first person, a counting process is carried out repeatedly: every time, the k-th person in the sequence is removed. After each removal, counting resumes from the next person in line. This elimination process continues until only one person remains. Your task is to determine the identifier of that last remaining person.
