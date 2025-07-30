class ArrayQueue:
    def __init__(self, capacity):
        # for each instance make a new array with capacity and initial values of None for each index
        self.queue = [None] * capacity
        # the pointer will catch the index of the front of the queue
        self.front = 0
        # the pointer will catch the index of the last item in the queue
        self.rear = 0
        # the capacity of the queue
        self.capacity = capacity
        # the length of the queue
        self.size = 0
    
    def is_empty(self):
        return self.size == 0
    
    def is_full(self):
        return self.size == self.capacity
    
    def peek(self):
        if self.is_empty():
            print("The Queue is Empty!")
            return

        return self.queue[self.front]            


    def enqueue(self, val):
        if self.is_full():
            print("The Queue is Full!")
            return
        # else must push the new item into the list using the size index
        self.queue[self.rear] = val
        # we move the rear by the mod becuase we need when reach the last element to return and fill the items we pooped from the front
        self.rear = (self.rear + 1) % self.capacity
        # increment the size
        self.size += 1
    
    def dequeue(self):
        if self.is_empty():
            print("The Queue is Empty!")
            return
        # store the value of the front to return it later
        value = self.queue[self.front]
        # then the front by one
        self.front = (self.front + 1) % self.capacity
        # decrement the length of the queue
        self.size -= 1

        return value

    


my_queue = ArrayQueue(5)
my_queue.enqueue(1)
my_queue.enqueue(2)
my_queue.enqueue(3)

print(my_queue.dequeue())
print(my_queue.dequeue())
print(my_queue.dequeue())

