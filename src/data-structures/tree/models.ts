export class TNode<T> {
  public val: T
  public left: TNode<T> | null
  public right: TNode<T> | null

  constructor(val: T) {
    this.val = val
    this.left = null
    this.right = null
  }
}

export class SNode extends TNode<string> {}

export class NNode extends TNode<number> {}

export const a = new SNode('a')
const b = new SNode('b')
const c = new SNode('c')
const d = new SNode('d')
const e = new SNode('e')
const f = new SNode('f')

export const g = new NNode(1)
const h = new NNode(24)
const i = new NNode(6)
const j = new NNode(7)
const k = new NNode(8)
const l = new NNode(9)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

g.left = h
g.right = i
h.left = j
h.right = k
i.right = l

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f
