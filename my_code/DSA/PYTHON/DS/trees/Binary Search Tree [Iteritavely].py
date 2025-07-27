class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinarySearchTree:

    def __init__(self):
        self.root = None

    def insert(self, value):
        new_node = Node(value)

        # if the tree is empty yet => make the root to be this new node
        if self.root == None:
            self.root = new_node

        # else if the root is exist already
        else:
            # start from the root then keep lopoping until reach none to insert as leaf child
            current = self.root
            while True:
                # if the current node has the same value as the new node so dont add it and retuen none
                # other solutions make counter for each node for example we have two 10s
                if current.value == value: return None

                # the first case if the node i want to insert is less than the current node
                if value < current.value:
                    # so move to the left then check the left child if none insert it and return [break the loop], if not keep looping over nodes
                    if current.left == None:
                        # insert it when the left pointer is empty
                        current.left = new_node
                        return self
                    
                    # else if the left pointer of the current pointer not empty [have a child there], move another step
                    # to check the next node value
                    else:
                        current = current.left
                
                # the second case if the node i want to insert is greater than the current node
                elif value > current.value:
                    # so move to the right then check the right child if none insert it and return [break the loop], if not keep looping over nodes
                    if current.right == None:
                        # insert it when the right pointer is empty
                        current.right = new_node
                        return self
                    
                    # else if the right pointer of this current pointer not empty [have a child there], move another step
                    # to check the next node value
                    else:
                        current = current.right

    def find(self, value):
        if self.root == None:
            return False
        
        current, found = self.root, False
        while current and not found:
            if value < current.value:
                current = current.left

            elif value > current.value:
                current = current.right
            
            else:
                found = True
            
        return found


tree = BinarySearchTree() 
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)

print(tree.find(7))