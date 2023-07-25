import { IGraph } from './models'

export const hasPathRecur = (graph: IGraph, src: string, dst: string) => {
  if (src == dst) return true

  for (const neighbor of graph[src]) {
    if (hasPathRecur(graph, neighbor, dst)) {
      return true
    }
  }

  return false
}
export const hasPath = (graph: IGraph, src: string, dst: string) => {
  const queue = [src]

  while (queue.length > 0) {
    const current = queue.shift()

    if (current == dst) return true
    const neighbors = graph[current ?? '']

    neighbors.forEach(neighbor => {
      queue.push(neighbor)
    })
  }
  return false
}
