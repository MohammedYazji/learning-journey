const Stack = require("./stack_list_implementation_top");

const undoStack = new Stack(); // keeps track of actions done
const redoStack = new Stack(); // keeps track of actions undone

function performAction(action) {
  // When a new action is performed:
  // - push it to undo stack
  // - clear redo stack because the redo path is broken
  undoStack.push(action);
  redoStack.clear();
}

function undo() {
  // To undo:
  // - pop the last action from undo stack
  // - push it to redo stack so we can redo it later
  if (!undoStack.isEmpty()) {
    const lastAction = undoStack.pop();
    redoStack.push(lastAction);
    console.log(`Undo: ${lastAction}`);
  }
}

function redo() {
  // To redo:
  // - pop the last undone action from redo stack
  // - push it back to undo stack
  if (!redoStack.isEmpty()) {
    const lastRedo = redoStack.pop();
    undoStack.push(lastRedo);
    console.log(`Redo: ${lastRedo}`);
  }
}

// Example usage
performAction("Type A"); // undo: [A], redo: []
performAction("Type B"); // undo: [A, B], redo: []
undo(); // undo: [A], redo: [B]
redo(); // Redo: [A, B], undo: []
