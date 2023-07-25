// list of adjacency
const adjacency = [
  { id: 2, goto: [{ id: 3 }] },
  { id: 1, goto: [{ id: 2 }] },
  { id: 4, goto: [{ id: 3 }] },
  { id: 6, goto: [] },
  { id: 3, goto: [{ id: 5 }] },
  { id: 7, goto: [{ id: 5 }] },
  { id: 5, goto: [{ id: 6 }] },
]

const sort = adj => {
  const targ = adj.find(x => x.goto.length === 0)
  const result = []
  recur(targ.id, adjacency, result)
  return result
}

const recur = (nodeId, adjacency, result) => {
  result.push(nodeId)
  const parents = adjacency.filter(x => x.goto.map(e => e.id).includes(nodeId))
  parents.forEach(parent => {
    recur(parent.id, adjacency, result)
  })
}

const target = sort(adjacency).reverse()
console.log(target)
