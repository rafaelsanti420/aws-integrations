export type Iinode<T> = {
  data: T
  next: Iinode<T> | undefined
}

export class Inode<T> implements Iinode<T> {
  data: T
  next: Inode<T> | undefined

  constructor(data: T) {
    this.data = data
    this.next = undefined
  }
}
