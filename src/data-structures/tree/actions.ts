import {
  breadthFirstValues,
  depthFirstValues,
  depthFirstValuesRecur,
} from './first-values'
import { treeIncludesBreadth, treeIncludesDepthRecur } from './tree-includes'
import { treeSumRecurBreadth, treeSumRecurDepth } from './tree-sum'
import { treeMinValueIterDepth, treeMinValueRecurDepth } from './min-value'
import { a, g } from './models'
import { maxPathRecur } from './max-path'

console.log(depthFirstValues(a))
console.log(depthFirstValuesRecur(a))
console.log(breadthFirstValues(a))
console.log(treeIncludesBreadth(a, 'c'))
console.log(treeIncludesDepthRecur(a, 'c'))
console.log(treeSumRecurDepth(a))
console.log(treeSumRecurBreadth(a))
console.log(treeMinValueIterDepth(g))
console.log(treeMinValueRecurDepth(g))
console.log(maxPathRecur(g))
