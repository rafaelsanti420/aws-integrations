import { IGraph } from './models'

export const connectedComponentsCount = (graph: IGraph): number => {
  const visited: Set<string> = new Set()
  let count = 0
  for (const node in graph) {
    if (explore(graph, node, visited)) {
      count += 1
    }
  }
  return count
}

const explore = (
  graph: IGraph,
  current: string,
  visited: Set<string>
): boolean => {
  if (visited.has(String(current))) return false

  visited.add(String(current))

  for (const neighbor of graph[current]) {
    explore(graph, neighbor, visited)
  }

  return true
}
