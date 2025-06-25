#  Uainf Flag #
# def string_search(string, sub):
#     count = 0

#     for i in range(len(string)):
#         match = True
#         for j in range(len(sub)):

#             if string[i + j] != sub[j]:
#                 match = False
#                 break
#         if match:
#             count += 1
#     return count
        

# or if reach the last character in the substring increment the counter
def string_search(string, sub):
    count = 0

    # addition good step to not have indexError
    # because in each inner loop we access also the next n number of indexes of the string
    # so we must subtract this (sub) from the string
    for i in range(len(string) - len(sub) + 1):
        for j in range(len(sub)):
            if string[i + j] != sub[j]:
                break

            if j == len(sub) - 1:
                count += 1
    return count

print(string_search('mohammed moyazji', 'mo'))