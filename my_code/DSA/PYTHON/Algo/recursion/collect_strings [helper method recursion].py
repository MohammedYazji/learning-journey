def collect_strings(obj):
    my_str = []

    def helper(helper_input):
        for key in helper_input:
            value = helper_input[key]
            if isinstance(value, dict):
                helper(value)
            elif isinstance(value, str):
                my_str.append(value)
    helper(obj)
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