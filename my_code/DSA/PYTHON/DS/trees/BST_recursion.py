class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None

class BST:
    def __init__(self):
        self.root = None

    def insert(self, data):
        # Start insertion from the root node
        self.root = self._insert(self.root, data)
        
    def _insert(self, node, data):
        # If current node is None make it the new node of this data
        if node is None:
            return Node(data)
        
        # If data is smaller, insert into
        if data < node.data:
            node.left = self._insert(node.left, data)

        # else, insert into right subtree
        else:
            node.right = self._insert(node.right, data)
        
        # Return the node to link it with its parent
        # if the subtree updated we link it again woth the root
        return node

    # Complexity => O(log n)
    def search(self, node, target):
        # Base Case When reach none [leaf no child]
        if node is None:
            return False
        
        # when the data I search for is equal this node data => I Found it 
        if node.data == target:
            return True
        
        # else if its smaller than the node, so recall the function with the left subtree to keep searching until reach none
        elif target < node.data:
            return self.search(node.left, target)
        
        # else if its greater than the node, so recall the function with the right subtree to keep searching until reach none
        else:
            return self.search(node.right, target)

    def delete(self, node, key):
        # we use the searching algorithm here again to find the node first

        if node is None:
            return node
        
        if key < node.data:
            # if the key is less than the current node, recall the function with the left subtree
            # update the left pointer of the parent
            node.left = self.delete(node.left, key)
        elif key > node.data:
            # if the key is greater than the current node, recall the function with the right subtree
            node.right = self.delete(node.right, key)
        else:
            # so here we found the node => let's delete it
            if node.left is None:
                # if the left subtree of this node is empty, so just return in its place the right subtree to link this right subtree with the current node parent pointer
                return node.right
            elif node.right is None:
                # if the right subtree of this node is empty, so just return in its place the left subtree to link this left subtree with the current node parent pointer
                return node.left
            # else the node has the two children so we will return instead of this current node the minimum value inside it's right subtree

            # after we get the minimum value in the right subtree, store it in temp variable
            temp = self.findMin(node.right)
            
            # then update the current node with the temp value
            node.data = temp.data
            # so now we hoisting the minimum of the right subtree above, so we need to delete the original minimum value because we use it above now
            # so recall the function with the right subtree to search on it, and pass the temp data to delete it
            node.right = self.delete(node.right, temp.data)
        return node

    def findMin(self, node):
        # first current is pointer catch the root node of the right subtree
        current = node

        # then we need to get the minimum value in this subtree, so get the leftmost node [the smallest one]
        while current.left:
            current = current.left
        return current
    
    def findMax(self, node):
        # first current is pointer catch the root node of the right subtree
        current = node

        # then we need to get the maximum value in this subtree, so get the rightmost node [the largest one]
        while current.right:
            current = current.right
        return current

    # left -> node -> right
    def inorder(self, node):
        result = []

        # I made the helper method to not mutate the result list
        def helper(n):
            # if not none so keep going
            if n:
                helper(n.left)
                result.append(str(n.data))
                helper(n.right)

        # in first call the helper method with the first node
        helper(node)
        return ' '.join(result) # convert the array to string

    # node -> left -> right
    def preorder(self, node):
        result = []

        def helper(n):
            if n:
                result.append(str(n.data)) 
                helper(n.left)
                helper(n.right)

        helper(node)
        return ' '.join(result)

    # left -> right -> node
    def postorder(self, node):
        result = []

        def helper(n):
            if n:
                helper(n.left)              
                helper(n.right)           
                result.append(str(n.data))  # Visit root last

        helper(node)
        return ' '.join(result)
    
    # Complexity => O(n)
    def isValidBST(self, node):
        # we dont need just to check if the directly children is left < node < right
        # instead we need to check the whole left subtree, and the whole right subtree => left_subtree < node < right_subtree

        def valid(node, left, right):
            if not node:
                return True # because empty Tree is BST
            
            if not( node.data < right and node.data > left):
                # must be left < node < right
                return False
            
            # go to the left subtree and check if all less than the node
            return (valid(node.left, left, node.data) and
            valid(node.right, node.data, right))
            # and all the right is greater than the node

        return valid(node, float("-inf"), float("+inf"))


    def build_tree(self, array):
        for i in range(0, len(array)):
            self.insert(array[i])

# Build the Tree
# tree = BST()
# numbers_tree = [17, 4, 1, 20, 9, 18, 34]
# tree.build_tree(numbers_tree)
# ########################
# print("Inorder: ", tree.inorder(tree.root))
# print("Preorder: ", tree.preorder(tree.root))  
# print("Postorder: ", tree.postorder(tree.root)) 
# ########################
# print(tree.search(tree.root, 20))
# ########################
# print(tree.isValidBST(tree.root))
