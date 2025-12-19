class MyNode {
  prev: MyNode | null;
  next: MyNode | null;
  val: number;

  constructor(val: number) {
    this.prev = null;
    this.next = null;
    this.val = val;
  }
}

class MyLinkedList {
  head: MyNode;
  tail: MyNode;
  size: number;

  constructor() {
    this.head = new MyNode(0);
    this.tail = new MyNode(0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) {
      return -1;
    }

    let p = this.head;
    for (let i = 0; i <= index; i++) {
      p = p.next!;
    }

    return p.val;
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val);
  }

  addAtTail(val: number): void {
    this.addAtIndex(this.size, val);
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) return;

    let p = this.head;
    for (let i = 0; i < index; i++) {
      p = p.next!;
    }

    const newNode = new MyNode(val);
    newNode.next = p.next;
    newNode.prev = p;
    p.next!.prev = newNode;
    p.next = newNode;

    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return;
    }

    let p = this.head;
    for (let i = 0; i < index; i++) {
      p = p.next!;
    }

    if (p.next?.next === null) {
      p.next.prev = null;
      p.next = null;
      this.tail = p;
      this.size--;
      return;
    }

    const temp = p.next?.next;
    p.next = temp!;
    temp!.prev = p;

    this.size--;
  }
}
