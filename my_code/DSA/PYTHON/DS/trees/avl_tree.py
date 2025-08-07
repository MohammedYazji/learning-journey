class AVLNode:
    def __init__(self, key):
        self.key = key
        self.left = None
        self.right = None
        self.height = 1

class AVLTree:
    def get_height(self, node):
        return node.height if node else 0
    
    def get_balance(self, node):
        if node is None:
            return 0
        return self.get_height(node.left) - self.get_height(node.right)
    
    def rotate_right(self, y):
        x = y.left
        T2 = x.right
        x.right = y
        y.left = T2
        y.height = max(self.get_height(y.left), self.get_height(y.right)) + 1
        x.height = max(self.get_height(x.left), self.get_height(x.right)) + 1
        return x
    
    def rotate_left(self, x):
        y = x.right
        T2 = y.left
        y.left = x
        x.right = T2
        x.height = max(self.get_height(x.left), self.get_height(x.right)) + 1
        y.height = max(self.get_height(y.left), self.get_height(y.right)) + 1
        return y
    
    def rebalance(self, node):
        balance = self.get_balance(node)
        if balance > 1:
            if self.get_balance(node.left) < 0:
                node.left = self.rotate_left(node.left)
            return self.rotate_right(node)
        if balance < -1:
            if self.get_balance(node.right) > 0:
                node.right = self.rotate_right(node.right)
            return self.rotate_left(node)
        return node
    
    def insert(self, root, key):
        if not root:
            return AVLNode(key)
        elif key < root.key:
            root.left = self.insert(root.left, key)
        else:
            root.right = self.insert(root.right, key)
        root.height = max(self.get_height(root.left), self.get_height(root.right)) + 1
        
        return self.rebalance(root)
    
    def delete(self, root, key):
        # Base case: if the tree is empty
        if not root:
            return root
        # If the key to be deleted is smaller than the root's key, then it lies in the left subtree
        if key < root.key:
            root.left = self.delete(root.left, key)
        # If the key to be deleted is greater than the root's key, then it lies in the right subtree
        elif key > root.key:
            root.right = self.delete(root.right, key)
        # If key is same as root's key, then this is the node to be deleted
        else:
            # Node with only one child or no child
            if not root.left:
                return root.right
            elif not root.right:
                return root.left
            
            # Node with two children: Get the inorder successor (smallest in the right subtree)
            temp = self.find_min(root.right)
            root.key = temp.key
            # Delete the inorder successor
            root.right = self.delete(root.right, temp.key)
        return self.rebalance(root)

    def find_min(self, node):
        current = node
        while current.left:
            current = current.left
        return current
    
    def find_max(self, node):
        current = node
        while current.right:
            current = current.right
        return current
    
    def is_valid_avl(self, root):
        # Empty tree is valid AVL => 0
        if root is None:
            return True
        
        # Check the current node balance factor
        balance = self.get_balance(root)
        
        # if not -1, 0, 1 so return False
        if balance < -1 or balance > 1:
            return False
        
        # using recursion check left and right subtrees balance factor
        left_valid = self.is_valid_avl(root.left)
        right_valid = self.is_valid_avl(root.right)
        
        # so for each subtree the balance factor must be 0, -1, 1 or will return False
        return left_valid and right_valid

    def range_search(self, root, low, high):
        result = []

        # use helper method to not mutate the original list
        def helper(node):
            # if we reach to leaf child => return
            # stop here
            if not node:
                return

            # if value of the node greater than the low so just check the left
            if node.key > low:
                helper(node.left)

            # Include the current node if it's in range
            if low <= node.key <= high:
                result.append(node.key)

            # if value of the node less than the high so just check the left
            if node.key < high:
                helper(node.right)



        helper(root)
        return result

    def kth_smallest(self, root, index):
        output = []

        # I use this helper recursion method pattern to not mutate the original list
        def get_inorder(node):

            # when reach the leaf children
            # STOPPP
            if not node:
                return
            
            get_inorder(node.left)
            output.append(node.key)
            get_inorder(node.right)

        get_inorder(root)

        return output[index - 1] if 0 < index <= len(output) else None

            



