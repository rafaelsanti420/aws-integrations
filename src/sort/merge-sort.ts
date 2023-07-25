// divide unsorted list into sublists
function splitF<T>(list: T[]): [T[], T[]] {
  const mid = Math.floor(list.length / 2)
  const left = list.slice(0, mid)
  const right = list.slice(mid)
  return [left, right]
}

const merge = (ar1: number[], ar2: number[]) => {
  const combined = []
  let i = 0
  let j = 0

  while (i < ar1.length && j < ar2.length) {
    if (ar1[i] < ar2[j]) {
      combined.push(ar1[i])
      i++
    } else {
      combined.push(ar2[j])
      j++
    }
  }

  while (i < ar1.length) {
    combined.push(ar1[i])
    i++
  }
  while (j < ar2.length) {
    combined.push(ar2[j])
    j++
  }

  return combined
}

function mergeSort(list: number[]): number[] {
  if (list.length <= 1) {
    return list
  }
  const [leftHalf, rightHalf] = splitF<number>(list)

  const left = mergeSort(leftHalf)
  const right = mergeSort(rightHalf)

  return merge(left, right)
}

console.log(mergeSort([3, 46, 3, 2, 45, 6, 7, 23, 1, 2, 7, 9]))
