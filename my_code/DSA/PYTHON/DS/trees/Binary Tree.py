class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None

    def insert(self, value):
        new_node = Node(value)

        if self.root is None:
            self.root = new_node
        else:
            self._insert(self.root, value)

    def _insert(self, node, value):
        if node.left is None:
            node.left = Node(value)
        elif node.right is None:
            node.right = Node(value)
        else:
            self._insert(node.left, value)

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
