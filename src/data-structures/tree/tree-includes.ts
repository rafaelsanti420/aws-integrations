import { SNode } from './models'

export const treeIncludesBreadth = (
  root: SNode | null,
  target: string
): boolean => {
  const queue = [root]
  if (root == null) return false

  while (queue.length > 0) {
    const current = queue.shift()
    if (current != null) {
      if (current.val === target) {
        return true
      }

      if (current.left != null) {
        queue.push(current.left)
      }
      if (current.right != null) {
        queue.push(current.right)
      }
    }
  }
  return false
}

export const treeIncludesDepthRecur = (
  root: SNode | null,
  target: string
): boolean => {
  if (root == null) return false
  if (root.val == target) return true
  return (
    treeIncludesDepthRecur(root.left, target) ||
    treeIncludesDepthRecur(root.right, target)
  )
}
