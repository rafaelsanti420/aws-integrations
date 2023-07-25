import { IGraph } from './models'

export const largestComponent = (graph: IGraph): number => {
  let longest = 0
  const visited: Set<string> = new Set()

  for (const node in graph) {
    const size = exploreSize(graph, node, visited)
    longest = Math.max(size, longest)
  }
  return longest
}
const exploreSize = (
  graph: IGraph,
  node: string,
  visited: Set<string>
): number => {
  if (visited.has(node)) return 0

  visited.add(node)

  let size = 1

  for (const neighbor of graph[node]) {
    size += exploreSize(graph, neighbor, visited)
  }

  return size
}
