class Node:
    def __init__(self,value):
        self.value = value
        self.next = None

class LinkedList:
    def __init__(self):
        self.root = None
    def traverse(self):
        if self.root == None:
            print("empty")
        else:
            current = self.root
            while current is not None:
                print(current.value)
                current = current.next
    def addNode(self, data):
        node = Node(data)
        # set to same as root next = first time to null
        print('root',self.root)
        node.next = self.root

        self.root = node
        print('ro', self.root.value)


LL = LinkedList()
LL.addNode(10)
LL.addNode(12)
# LL.root = Node(10)
# LL.root.next = Node(20)
# LL.root.next.next = Node(40)
# print(LL.value)

LL.traverse()
# LL.addNode(10)
# LL.addNode(12)
