function Node(data) {
  this.data = data
  this.left = null
  this.right = null
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function(root, data) {
    if (root === null) {
      this.root = new Node(data)

      return this.root
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data)
      } else {
        root.left = new Node(data)
      }
    } else {
      if (root.right) {
        this.insert(root.right, data)
      } else {
        root.right = new Node(data)
      }
    }
    return this.root
  }
  this.height = function(root) {
    if (root === null) {
      return
    } else {
      let rh = this.height(root.right)
      let lh = this.height(root.left)
      console.log(root)
      console.log('rh', rh)
      console.log('lh', lh)
      if (lh > rh) {
        return lh + 1
      } else {
        return rh + 1
      }
    }
  }
  this.printGivenLevel = function(root, level) {
    if (root === null) {
      return
    }
    if (level === 1) {
      //   console.log(root.data)
    } else if (level > 1) {
      printGivenLevel(root.left, level - 1)
      printGivenLevel(root.right, level - 1)
    }
  }
  this.levelOrder = function(root) {
    const height = this.height(root)
    // console.log('h',height)
    for (let index = 1; index < height; index++) {
      console.log('r', root)
      printGivenLevel(root, index)
    }
  }
}

const BST = new BinarySearchTree()
let root = BST.insert(null, 1)
root = BST.insert(root, 2)
root = BST.insert(root, 3)
BST.levelOrder(root)
