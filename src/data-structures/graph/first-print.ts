import { IGraph } from './models'

export const breadthPrintImp = (graph: IGraph, source: string): string[] => {
  const result = []
  const queue = [source]
  while (queue.length > 0) {
    const current = queue.shift()
    if (current != null) {
      result.push(current)
      for (const neighbor of graph[current]) {
        queue.push(neighbor)
      }
    }
  }
  return result
}

export const depthPrintImp = (graph: IGraph, source: string) => {
  const result = []
  const stack = [source]

  while (stack.length > 0) {
    const current = stack.pop()

    if (current != null) {
      result.push(current)

      for (const neighbor of graph[current]) {
        stack.push(neighbor)
      }
    }
  }
  return result
}
export const depthPrintRecur = (graph: IGraph, source: string) => {
  console.log(source)
  for (const neighbor of graph[source]) {
    depthPrintRecur(graph, neighbor)
  }
}
