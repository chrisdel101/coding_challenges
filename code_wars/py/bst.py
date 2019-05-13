class Node:
    def __init__(self, value):
        self.value = value
        self.right = None
        self.left = None

class BST:
    def __init__(self, root = None):
        self.root = None

    def insert(self, value):
        node =  Node(value)
        if self.root == None:
            self.root = node
            print(self.root.value)
        else:
            current = self.root
            print('c', current.value)
            print('c', current.right)
            print('c', current.left)
            print('c', value)
            # right
            while value != current.value:
                if node.value > current.value:
                    if not current.right:
                        print('right')
                        current.right = node
                        break
                    current = current.right
                # left
                if node.value <  current.value:
                    print('left')
                    if not current.left:
                        current.left = node
                        break
                    current = current.left
        # print(self.root.right.value)
            # while current != None:
            #     if
            # print('n', node.value)
b1 = BST()
b1.insert(10)
b1.insert(20)
