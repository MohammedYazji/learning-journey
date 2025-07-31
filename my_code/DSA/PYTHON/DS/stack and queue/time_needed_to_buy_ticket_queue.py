from queue_list_implementation import Queue
##############################
#  Problem Description (Simplified):

# There are people standing in a line to buy tickets.

# Each person can only buy 1 ticket per turn.

# If someone needs more tickets, they go to the end of the line after buying one.

# Once they buy all their tickets, they leave the line.

# You're given an array tickets[] — where tickets[i] is how many tickets person i wants.

# Return the total time it takes for the person at position k to finish buying all their tickets.

# NOTE: Each ticket takes 1 second to buy.
#################################

def time_required_to_buy(tickets, k):
    q = Queue()

    # Add each person to the queue as (index, number of tickets)
    for i in range(len(tickets)):
        q.enqueue((i, tickets[i]))

    time = 0

    while True:
        person_index, ticket_count = q.dequeue()
        
        # Person buys one ticket
        # decrement the number of tickets
        # increment the time by one
        ticket_count -= 1
        time += 1

        # If it's person k and they finished [has no tickets], return the time
        if person_index == k and ticket_count == 0:
            return time
        
        # If they still need more tickets, go to the end of the line
        if ticket_count > 0:
            q.enqueue((person_index, ticket_count))


person_list = [2, 3, 2, 4, 1]
k = 3
print(f'The Person Number {k + 1} will take', time_required_to_buy(person_list, 3), f'Seconds to buy {person_list[k]} tickets..')
