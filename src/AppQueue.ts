import LinkedNode from './LinkedNode'

export default class AppQueue {
  private _head: LinkedNode | null
  private _tail: LinkedNode | null
  private _length: number

  public constructor () {
    this._head = null
    this._tail = null
    this._length = 0
  }

  public size() {
    return this._length
  }

  public push(obj: any) {
    const node = new LinkedNode(obj)

    if (this.isEmpty()) {
      this._head = node
      this._tail = node
    } else {
      this._tail!.next = node
      this._tail = node
    }

    ++this._length
  }

  public popFirst() {
    if (this.isEmpty()) {
      throw new Error(`Empty queue can not pop item`)
    }

    const obj = this.getFirst()

    --this._length
    if (this.isEmpty()) {
      this._head = null
      this._tail = null
    } else {
      this._head = this._head!.next
    }

    return obj
  }

  public getFirst() {
    if (this.isEmpty()) {
      return null
    }
    return this._head!.entity
  }

  public isEmpty() {
    return this.size() === 0
  }
}
