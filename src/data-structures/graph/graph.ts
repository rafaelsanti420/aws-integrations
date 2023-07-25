type AdjacencyList<T> = {
  [key: string]: T[]
}
type Vertices = 'A' | 'B' | 'C' | 'D'

class Graph {
  adjacencyList: AdjacencyList<Vertices>

  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex: string): boolean {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = []
      return true
    }
    return false
  }

  addEdge(vertex1: Vertices, vertex2: Vertices) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2)
      this.adjacencyList[vertex2].push(vertex1)
      return true
    }
    return false
  }

  removeEdge(vertex1: Vertices, vertex2: Vertices) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        v => v !== vertex2
      )
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        v => v !== vertex1
      )
      return true
    }
    return false
  }

  removeVertex(vertex: Vertices) {
    while (this.adjacencyList[vertex].length) {
      const temp = this.adjacencyList[vertex].pop()
      if (temp == null) {
        throw new Error('impossibru')
      }
      this.removeEdge(vertex, temp)
    }
    delete this.adjacencyList[vertex]
    return this
  }
}

const myGraph = new Graph()
myGraph.addVertex('A')
myGraph.addVertex('C')
myGraph.addVertex('B')
myGraph.addVertex('D')
myGraph.addEdge('A', 'B')
myGraph.addEdge('A', 'C')
myGraph.addEdge('C', 'B')
myGraph.addEdge('B', 'D')

myGraph.removeEdge('B', 'A')

// myGraph.removeVertex('D')
console.log(myGraph)
