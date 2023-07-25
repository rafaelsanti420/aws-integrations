import { IGraph } from './models'

export const buildUndirectedGraphFromEdges = (edges: string[][]) => {
  const graph: IGraph = {}

  for (const edge of edges) {
    const [a, b] = edge
    if (!(a in graph)) {
      graph[a] = []
    }
    if (!(b in graph)) {
      graph[b] = []
    }

    graph[a].push(b)
    graph[b].push(a)
  }
  return graph
}
