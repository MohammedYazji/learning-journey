from stack_list_implementation_top import Stack

# Stack to store actions performed
undo_stack = Stack()

# Stack to store undone actions (for redoing)
redo_stack = Stack()


def perform_action(action):
    # When a new action is done:
    # - push it onto the undo stack
    # - clear the redo stack since the redo path is no longer valid
    undo_stack.push(action)
    redo_stack.clear()


def undo():
    # To undo:
    # - pop the last action from undo stack
    # - push it to the redo stack to allow redoing it
    if undo_stack:
        last_action = undo_stack.pop()
        redo_stack.push(last_action)
        print(f"Undo: {last_action}")


def redo():
    # To redo:
    # - pop the last action from redo stack
    # - push it back onto the undo stack
    if redo_stack:
        last_redo = redo_stack.pop()
        undo_stack.push(last_redo)
        print(f"Redo: {last_redo}")


# Example usage
perform_action("Type A")  # undo: [A], redo: []
perform_action("Type B")  # undo: [A, B], redo: []
undo()                    # undo: [A], redo: [B]
redo()                    # Redo: [A, B], redo: []
