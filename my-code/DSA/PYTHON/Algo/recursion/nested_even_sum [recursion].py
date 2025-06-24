def nested_even_sum(obj):
    total = 0

    for item in obj:
        if isinstance(obj[item], dict):
            total += nested_even_sum(obj[item])

        elif isinstance(obj[item], int) and obj[item] % 2 == 0:
            total += obj[item]
    return total


# Also can pass the total explictly
# def nested_even_sum(obj, total=0):
#     for key in obj:
#         value = obj[key]
#         if isinstance(value, dict):
#             total += nested_even_sum(value)
#         elif isinstance(value, int) and value % 2 == 0:
#             total += value
#     return total





print(nested_even_sum( {
    'a': 2,
    'b': {
        'b1': 3,
        'b2': {
            'b3': 4,
            'b4': {
                'b5': 6
            }
        },
        'b6': 7
    },
    'c': {
        'c1': 8,
        'c2': "hello",
        'c3': {
            'c4': 10
        }
    },
    'd': 1
}))