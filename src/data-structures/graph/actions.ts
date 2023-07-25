import { breadthPrintImp, depthPrintImp, depthPrintRecur } from './first-print'
import { edges, graph } from './models'
import { hasPath, hasPathRecur } from './has-path'
import { connectedComponentsCount } from './connected-components'
import { largestComponent } from './largest-component'
import { buildUndirectedGraphFromEdges } from './build-graph-from-edges'

console.log(depthPrintImp(graph, 'a'))
console.log(depthPrintRecur(graph, 'a'))
console.log(breadthPrintImp(graph, 'a'))
console.log(hasPathRecur(graph, 'a', 'b'))
console.log(hasPath(graph, 'a', 'b'))
console.log(buildUndirectedGraphFromEdges(edges))
console.log(connectedComponentsCount(graph))
console.log(largestComponent(graph))
