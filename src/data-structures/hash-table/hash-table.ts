class HashTable {
  private dataMap

  constructor(size = 7) {
    this.dataMap = new Array(size)
  }

  private _hash(key: string) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + (key.charCodeAt(i) % 23)) % this.dataMap.length
    }
    return hash
  }

  set(key: string, value: any): HashTable {
    const index: number = this._hash(key)

    if (!this.dataMap[index]) {
      this.dataMap[index] = []
    }

    this.dataMap[index].push([key, value])
    return this
  }

  get(key: string) {
    const index = this._hash(key)
    if (this.dataMap[index]) {
      for (let i = 0; i < this.dataMap[index].length; i++) {
        if (this.dataMap[index][i][0] === key) {
          return this.dataMap[index][i][1]
        }
      }
    }
    return undefined
  }

  keys(): string[] {
    const keys = []
    for (let i = 0; i < this.dataMap.length; i++) {
      const curr = this.dataMap[i]
      if (curr) {
        for (let j = 0; j < curr.length; j++) {
          keys.push(curr[j][0])
        }
      }
    }
    return keys
  }
}

const hashTable = new HashTable()

hashTable.set('lumber', 70)
hashTable.set('washers', 50)
hashTable.set('bolts', 20)

console.log(hashTable)
console.log(hashTable.keys())
const numbers1 = [1, 3, 5]
const numbers2 = [2, 4, 5]
console.log(hashTable.get('washers'))
console.log(itemInCommon(numbers1, numbers2))

function itemInCommon(a: number[], b: number[]): boolean {
  const map = new Map()

  for (let i = 0; i < a.length; i++) {
    map.set(a[i], true)
  }

  for (let j = 0; j < b.length; j++) {
    if (map.get(b[j])) return true
  }
  return false
}
