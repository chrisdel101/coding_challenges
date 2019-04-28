class Node:
    def __init__(self, value):
        self.value = value
        self.left = None
        self.right = None

class BinaryTree:
    def __init__(self):
        self.root = None
        self.left = None
        self.right = None

    def addNode(self,value):
        # make new node
        node = Node(value)
        if self.root == None:
            self.root =  node
            print('root set', self.root)
        else:
            current = self.root
            print(node.value)
            print(current.value)
            # if greater of == go right
            if node.value > current.value:
                if current.right == None:
                    current.right =  node
                else:
                    current = current.right

            elif node.value < current.value:
                if current.left == None:
                    current.left =  node
                else:
                    current = current.left
            else:
                pass
            # print('v', self.root)
            # print('r', self.right)
            # print('l', self.left)
        self = list(self.right)
        # for key in self.keys():
        #         print(key)
tree = BinaryTree()
tree.addNode(10)
tree.addNode(20)
# tree.addNode(25)

# check if root exists
# if not, make node root
# if yes, check if greater of lesser
