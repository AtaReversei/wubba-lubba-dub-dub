// ll for linked list
// am i not funny?

// queues are just linked lists that we don't traverse them
type QNode<T> = {
  value: T,
  next?: QNode<T>,
}

class Queue<T> {
  public length: number;
  private head?: QNode<T>
  private tail?: QNode<T>

  constructor() {
    this.head = this.tail = undefined
    this.length = 0
  }

  enqueue(item: T): void {
    const node = {value: item} as QNode<T>
    this.length++
    if (!this.tail) {
      this.tail = this.head = node
      return
    }
    this.tail.next = node
    this.tail = node
  }

  deque(): T | undefined {
    if (!this.head) {
      return undefined
    }

    this.length--
    const head = this.head
    this.head = this.head.next
    head.next = undefined // we don't need to do this
    if (this.length === 0) {
      this.tail = undefined
    }
    return head.value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}

type SNode<T> = {
  value: T,
  prev?: SNode<T>
}

class Stack<T> {
  public length: number
  private head?: SNode<T>

  constructor() {
    this.head = undefined
    this.length = 0
  }

  push(item: T): void {
    const node = {value: item} as SNode<T>
    this.length++
    if (!this.head) {
      this.head = node
      return
    }

    node.prev = this.head
    this.head = node
  }

  pop(): T | undefined {
    this.length = Math.max(0, this.length - 1)
    if (this.length === 0) {
      const head = this.head
      this.head = undefined
      return head?.value
    }

    const head = this.head
    this.head = head?.prev
    return head?.value
  }

  peek(): T | undefined {
    return this.head?.value
  }
}