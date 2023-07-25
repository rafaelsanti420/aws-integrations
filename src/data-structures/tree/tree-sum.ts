import { SNode } from './models'

export const treeSumRecurDepth = (root: SNode | null): string => {
  if (root == null) return ''
  return root.val + treeSumRecurDepth(root.left) + treeSumRecurDepth(root.right)
}

export const treeSumRecurBreadth = (root: SNode | null): string => {
  if (root == null) return ''
  const queue = [root]

  let totalSum = ''

  while (queue.length > 0) {
    const current = queue.shift()
    if (current != null) {
      totalSum += current.val

      if (current.left != null) queue.push(current.left)
      if (current.right != null) queue.push(current.right)
    }
  }
  return totalSum
}
