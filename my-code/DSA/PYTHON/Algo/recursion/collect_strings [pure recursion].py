def collect_strings(obj):
    my_str = []

    for key in obj:
        value = obj[key]
        if isinstance(value, dict):
            my_str = my_str + collect_strings(value)
        elif isinstance(value, str):
            my_str.append(value)
        
    return my_str



print(collect_strings({
  'stuff': "hello",
  'data': {
    'value': 42,
    'info': {
      'isRight': True,
      'message': "world"
    },
    'moreData': {
      'text': "foo",
      'deep': {
        'deeper': "bar"
      }
    }
  }
}))