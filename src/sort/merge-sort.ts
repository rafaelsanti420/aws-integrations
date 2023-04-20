// divide unsorted list into sublists
function splitF<T>(list: T[]): [T[], T[]] {
  const mid = Math.floor(list.length / 2)
  const left = list.slice(0, mid)
  const right = list.slice(mid)
  return [left, right]
}

function mergeF<T>(left, right) {
	const l = []



	while

}

function mergeSort<T>(list: T[]): T[] {
  if (list.length <= 1) {
    return list
  }
  const [leftHalf, rightHalf] = splitF(list)

  const left = mergeSort(leftHalf)
  const right = mergeSort(rightHalf)

  return merge(left, right)
}

console.log(mergeSort<number>([3, 46, 3, 2, 45, 6, 7, 23, 1, 2, 7, 9]))
