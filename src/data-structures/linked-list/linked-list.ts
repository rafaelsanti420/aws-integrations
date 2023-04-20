import { Inode } from './node'

type IILinkedList<T> = {
  insert(data: T, index: number): void
  search(key: T): Inode<T> | null
  append(data: T): void
  remove(data: T): void
  getSize2(): number
  toArray(): T[]
}

type IOptionalNode<T> = Inode<T> | undefined

class LinkedList<T> implements IILinkedList<T> {
  static fromArray<T>(arr: T[]): LinkedList<T> {
    const first = arr[0]
    const rest = arr.slice(1)
    const ll = new LinkedList<T>(first)
    rest.forEach(e => ll.append(e))
    return ll
  }

  static fromOne<T>(one: T): LinkedList<T> {
    const ll = new LinkedList<T>(one)
    ll.append(one)
    return ll
  }

  private head: IOptionalNode<T>
  private tail: IOptionalNode<T>

  private constructor(headData: T) {
    const headNode = new Inode(headData)
    this.head = headNode
    this.tail = headNode
  }

  // Adds a new node at the end of the linked list
  // insertion takes constant time O(1) but finding the
  // node at the insertion point takes linear time 0(n)
  insert(data: T, index: number): void {
    if (index < 0) {
      throw new Error('negative index')
    }
    if (index === 0) {
      this.append(data)
      return
    }

    const newNode = new Inode(data)
    let position = index
    let current = this.head

    while (position > 1) {
      current = newNode?.next
      position -= 1
    }

    const prev_node = current
    const next_node = current?.next
    if (prev_node == null || newNode == null) {
      throw new Error('something went terribly wrong 1')
    }
    prev_node.next = newNode
    newNode.next = next_node
  }

  search(key: T): Inode<T> | null {
    let current = this.head
    while (current != null) {
      if (current?.data === key) {
        return current
      } else {
        if (current.next == null) {
          throw new Error('something went terribly wrong 2')
        }
        current = current.next
      }
    }
    return null
  }

  // Adds a new node at the end of the linked list
  append(data: T): void {
    const newNode = new Inode(data)

    if (this.head == null) {
      this.head = newNode
      this.tail = newNode
      return
    }

    if (this.tail == null) {
      throw new Error('something went terribly wrong 5')
    }

    this.tail.next = newNode
    this.tail = newNode
  }

  // Removes the first node in the linked list with the given data
  // returns node or undefined
  // takes linear time O(n)
  remove(key: T): IOptionalNode<T> {
    if (this.head == null) {
      throw new Error('head is null')
    }

    let current: IOptionalNode<T> = this.head
    let previous: IOptionalNode<T> = undefined
    let found = false

    while (current != null && found == false) {
      if (current.data == key && current === this.head) {
        found = true
        this.head = current.next
        return
      }

      if (current.data == key) {
        found = true
        previous!.next = current.next
        return
      }
      previous = current
      current = current.next
    }

    return current
  }

  // Returns the size of the linked list
  getSize2(): number {
    let current = this.head
    let count = 0

    while (current != null) {
      count++
      current = current.next
    }

    return count
  }

  // Returns an array containing the data of each node in the linked list
  toArray(): T[] {
    const result: T[] = []

    let currentNode: IOptionalNode<T> = this.head
    while (currentNode) {
      result.push(currentNode.data)
      currentNode = currentNode.next
    }

    return result
  }
}

const l = LinkedList.fromArray<string>(['shit'])
l.append('hi')
l.append('hi')
l.insert('hi1', 1)
l.remove('hi')

l.getSize2()
console.log(l.toArray())
console.log(l.search('hi'))
