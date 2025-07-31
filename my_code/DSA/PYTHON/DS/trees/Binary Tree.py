class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, data):

        # make the new node to push it
        new_node = Node(data)

        # if the tree is empty yet => make the root the new node
        if not self.root:
            self.root = new_node
        # else we will pass the root with the data to add
        else:
            self._insert(self.root, data)

    def _insert(self, node, data):
        new_node = Node(data)
        # if the left pointer of the node is empty add it there
        if not node.left:
            node.left = new_node

        # if the right pointer of the node is empty add it there
        elif not node.right:
            node.right = new_node
        # else so the node is full has two children so call the function again with the left child
        else:
            self._insert(node.left, data)

    def search(self, node, target):
        if node is None:
            return False
        if node.value == target:
            return True
        return self.search(node.left, target) or self.search(node.right, target)

    def delete(self, root, key):
        if root is None:
            return None

        if root.value == key:
            # Case 1: No child
            if not root.left and not root.right:
                return None
            # Case 2: One child
            if not root.left:
                return root.right
            if not root.right:
                return root.left
            # Case 3: Two children
            succ_parent = root
            succ = root.right
            while succ.left:
                succ_parent = succ
                succ = succ.left
            if succ_parent != root:
                succ_parent.left = succ.right
            else:
                succ_parent.right = succ.right
            root.value = succ.value
            return root

        root.left = self.delete(root.left, key)
        root.right = self.delete(root.right, key)
        return root

    # Inorder traversal: left -> root -> right
    def inorder(self, node):
        if node:
            self.inorder(node.left)
            print(node.value, end=' ')
            self.inorder(node.right)

    # Preorder traversal: root -> left -> right
    def preorder(self, node):
        if node:
            print(node.value, end=' ')
            self.preorder(node.left)
            self.preorder(node.right)

    # Postorder traversal: left -> right -> root
    def postorder(self, node):
        if node:
            self.postorder(node.left)
            self.postorder(node.right)
            print(node.value, end=' ')

    def get_height(self, node):
        # Base Case: stop when reach leaf
        if node is None:
            return 0
        # loop over the all nodes using recursion
        # and get the max between height of children + 1
        # why +1 because we start 0 height on leaf, then we increment one each level toward the root
        return 1 + max(self.get_height(node.left), self.get_height(node.right))