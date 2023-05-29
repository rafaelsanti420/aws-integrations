type Grid = number[][]
type Position = [number, number, number]

function shortestPathInLabyrinth(
  rows: number,
  cols: number,
  grid: Grid
): number {
  function isValidMove(x: number, y: number): boolean {
    return 0 <= x && x < rows && 0 <= y && y < cols && grid[x][y] === 0
  }

  const moves: Position[] = [
    [-1, 0, 0],
    [1, 0, 0],
    [0, -1, 0],
    [0, 1, 0],
  ]

  const queue: Position[] = [[0, 0, 0]]

  while (queue.length > 0) {
    const [x, y, distance] = queue.shift() as Position

    if (x === rows - 1 && y === cols - 1) {
      return distance
    }

    grid[x][y] = 1

    for (const move of moves) {
      const newX = x + move[0]
      const newY = y + move[1]

      if (isValidMove(newX, newY)) {
        queue.push([newX, newY, distance + 1])
      }
    }
  }

  return -1 // This line should never be reached, as there is always a path
}

// Example usage
const rows = 3
const cols = 4
const grid: Grid = [
  [0, 0, 1, 0],
  [1, 0, 0, 0],
  [0, 0, 1, 0],
]

console.log(shortestPathInLabyrinth(rows, cols, grid)) // Output: 8
