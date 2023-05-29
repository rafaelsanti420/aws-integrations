class LLI<T> {
  data: T
  next: LLI<T> | null

  constructor(data: T) {
    this.data = data
    this.next = null
  }
}

const hasCycle = (lli: LLI<number>): boolean => {
  if (!lli) {
    return false
  }
  let slow = lli
  let fast = lli.next

  while (fast && fast.next) {
    if (slow == fast) {
      return true
    }

    slow = slow.next as LLI<number>
    fast = fast.next.next
  }

  return false
}

const lli1 = new LLI<number>(1)
const lli2 = new LLI<number>(2)
const lli3 = new LLI<number>(3)

lli1.next = lli2
lli2.next = lli3
lli3.next = lli2

console.log(hasCycle(lli1))
