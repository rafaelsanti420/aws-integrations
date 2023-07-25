class TreeNode {
  value: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(value: number) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinaryTree {
  root: TreeNode | null

  constructor() {
    this.root = null
  }

  insert(value: number): BinaryTree | undefined {
    const newNode = new TreeNode(value)

    if (this.root === null) {
      this.root = newNode
      return this
    }

    let temp: TreeNode | null = this.root

    while (true) {
      if (newNode.value === temp.value) return undefined

      if (newNode.value < temp.value) {
        if (temp.left === null) {
          temp.left = newNode
          return this
        }
        temp = temp.left
      } else {
        if (temp.right === null) {
          temp.right = newNode
          return this
        }
        temp = temp.right
      }
    }
  }
}

const binaryTree = new BinaryTree()

// Insert values
binaryTree.insert(5)
binaryTree.insert(3)
binaryTree.insert(7)
binaryTree.insert(2)
binaryTree.insert(4)
binaryTree.insert(6)
binaryTree.insert(8)

// Print the binary tree
console.log(binaryTree.root)

// Test cases
console.log(binaryTree.insert(4)) // undefined (value already exists)
console.log(binaryTree.insert(9)) // BinaryTree object (value inserted)

// Print the updated binary tree
console.log(binaryTree.root)
