class MaxStack {
  private items: number[] = []

  public push(item: number): void {
    // push is constant time  O(1)
    this.items.push(item)
  }

  pop(): number {
    // pop is constant time  O(1)
    if (this.items.length == 0) {
      throw new Error('stack is empty')
    } else {
      return this.items.pop() as number
    }
  }

  peekMaxLinear(): number {
    // Math max is linear time  O(n) because iterates through every element
    return Math.max(...this.items)
  }

  popMax(): number {
    let maxIndex = 0

    // forEach is linear time  O(n) because iterates through every element
    this.items.forEach(e => {
      if (maxIndex < e) {
        maxIndex = e
      }
    })
    const poppedElement = this.items[maxIndex]
    this.items = [
      ...this.items.slice(0, maxIndex),
      ...this.items.slice(maxIndex),
    ]
    return poppedElement
  }
}

const maxStack = new MaxStack()

maxStack.push(1)
