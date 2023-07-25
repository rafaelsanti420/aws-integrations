import { SNode } from './models'

export const depthFirstValues = (root: SNode): string[] => {
  const stack = [root]
  const result = []
  while (stack.length > 0) {
    const current = stack.pop()

    if (current != null) {
      result.push(current.val)

      if (current.left) {
        stack.push(current.left)
      }

      if (current.right) {
        stack.push(current.right)
      }
    }
  }
  return result
}

export const depthFirstValuesRecur = (root: SNode | null): string[] => {
  if (root == null) {
    return []
  }
  return [
    root.val,
    ...depthFirstValuesRecur(root.left),
    ...depthFirstValuesRecur(root.right),
  ]
}

export const breadthFirstValues = (root: SNode | null): string[] => {
  const result: string[] = []

  if (root == null) {
    return []
  }

  const queue = [root]

  while (queue.length > 0) {
    const current = queue.shift()
    if (current != null) {
      result.push(current.val)

      if (current.left != null) {
        queue.push(current.left)
      }
      if (current.right != null) {
        queue.push(current.right)
      }
    }
  }

  return result
}
