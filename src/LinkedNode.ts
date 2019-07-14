export default class LinkedNode {
  public entity: any
  public next: any

  constructor(obj: any) {
    this.entity = obj
    this.next = null
  }
}
