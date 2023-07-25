const zeroMatrix = (m: number[][]) => {
  for (let i = 0; i < m.length; i++) {
    for (let j = 0; j < m[i].length; j++) {
      if (m[i][j] === 0) {
        for (let k = 0; k < m[i].length; k++) {
          m[i][k] = 0
        }
        break
      }
    }
  }
  return m
}
const matrix = [
  [1, 2, 3],
  [4, 5, 0],
  [7, 8, 9],
]
console.log(zeroMatrix(matrix))
