import { NNode } from './models'

export const maxPathRecur = (root: NNode | null): number => {
  if (root == null) return -Infinity
  if (root.right == null && root.left == null) return root.val
  return root.val + Math.max(maxPathRecur(root.left), maxPathRecur(root.right))
}
