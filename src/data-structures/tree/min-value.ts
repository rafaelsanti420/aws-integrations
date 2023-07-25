import { NNode } from './models'
import e from 'express'

export const treeMinValueIterDepth = (root: NNode | null): number => {
  const stack = [root]

  let smallest = Infinity
  while (stack.length > 0) {
    const current = stack.pop()

    if (current != null) {
      smallest = Math.min(smallest, current.val)

      if (current.left) {
        stack.push(current.left)
      }

      if (current.right) {
        stack.push(current.right)
      }
    }
  }
  return smallest
}

export const treeMinValueRecurDepth = (root: NNode | null): number => {
  if (root == null) return Infinity

  return Math.min(
    root?.val,
    treeMinValueRecurDepth(root.left),
    treeMinValueRecurDepth(root.right)
  )
}
