class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this._operators = "+-*/^";
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const node = this.top.data;
    this.top = this.top.next;
    return node;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.top.data;
  }

  isEmpty() {
    return this.top === null;
  }

  // Check if character is operand (alphanumeric)
  _isOperand(c) {
    return /^[a-z0-9]$/i.test(c);
  }

  // Check if character is operator
  _isOperator(c) {
    return this._operators.includes(c);
  }

  // Get precedence of operators
  _getPrecedence(c) {
    const order = "+-*/^";
    const values = [1, 1, 2, 2, 3];
    const index = order.indexOf(c);
    return index !== -1 ? values[index] : 0;
  }

  // Check if operator is right associative (only '^')
  _isRightAssociative(c) {
    return c === "^";
  }

  // Convert infix expression string to postfix expression string
  infixToPostfix(string) {
    let output = "";

    for (let char of string) {
      if (char === " ") {
        // Ignore spaces
        continue;
      }

      if (this._isOperand(char)) {
        // If operand, add to output with space
        output += char + " ";
      } else if (char === "(") {
        // Push '(' to stack
        this.push(char);
      } else if (char === ")") {
        // Pop until '(' found
        while (this.peek() !== "(") {
          output += this.pop() + " ";
        }
        this.pop(); // remove '('
      } else if (this._isOperator(char)) {
        // While stack not empty and conditions for precedence
        while (!this.isEmpty()) {
          const top = this.peek();
          if (top === "(") break;

          const precTop = this._getPrecedence(top);
          const precChar = this._getPrecedence(char);

          if (
            precTop > precChar ||
            (precTop === precChar && !this._isRightAssociative(char))
          ) {
            output += this.pop() + " ";
          } else {
            break;
          }
        }
        this.push(char);
      }
    }

    // Pop all remaining operators
    while (!this.isEmpty()) {
      output += this.pop() + " ";
    }

    return output.trim(); // trim trailing space
  }
}

///////////////////////////////////////

const myStack = new Stack();

console.log("=".repeat(25));
let expr1 = "(1 + 2) * 3";
console.log("Infix:   ", expr1);
console.log("Postfix: ", myStack.infixToPostfix(expr1));

console.log("=".repeat(25));
let expr2 = "5 + ( 6 - 2 ) * 9";
console.log("Infix:   ", expr2);
console.log("Postfix: ", myStack.infixToPostfix(expr2));

console.log("=".repeat(25));
let expr3 = "( 1 + 2 ) * ( 3 + 4 )";
console.log("Infix:   ", expr3);
console.log("Postfix: ", myStack.infixToPostfix(expr3));

console.log("=".repeat(25));
let expr4 = "2 ^ 3 ^ 2";
console.log("Infix:   ", expr4);
console.log("Postfix: ", myStack.infixToPostfix(expr4));
