def stringify_numbers(obj):
    new_obj = {}

    for key in obj:
        value = obj[key]
        if isinstance(value, dict):
            new_obj[key] = stringify_numbers(value)
        elif isinstance(value, int):
            new_obj[key] = f'{value}'
        else:
            new_obj[key] = value
    return new_obj

print(stringify_numbers({
    'num': 1,
    'test': [],
    'data': {
      'val': 4,
      'info': {
        'isRight': True,
        'random': 66,
      },
    },
  }))