// class ListNode {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

import { ListNode } from './ListNode';

// 把原链表分成两个小链表，一个链表中的元素大小都小于 x，另一个链表中的元素都大于等于 x，最后再把这两条链表接到一起，

function partition(head: ListNode | null, x: number): ListNode | null {
  // 存放小于 x 的链表的虚拟头结点
  const dummy1 = new ListNode(-1);
  // 存放大于 x 的链表的虚拟头结点
  const dummy2 = new ListNode(-1);
  // 指针
  let p1 = dummy1;
  let p2 = dummy2;
  let p = head;

  while (p !== null) {
    if (p.val < x) {
      p1.next = p;
      p1 = p1.next;
    } else {
      p2.next = p;
      p2 = p2.next;
    }
    // 断开原连接的 next 指针。否则 p = p.next 直接前进会形成环
    const temp = p?.next;
    p.next = null;
    p = temp;
  }

  p1.next = dummy2.next;
  return dummy1.next;
}

function partition2(head: ListNode | null, x: number): ListNode | null {
  // 存放小于 x 的链表的虚拟头结点
  const dummy1 = new ListNode(-1);
  // 存放大于 x 的链表的虚拟头结点
  const dummy2 = new ListNode(-1);
  // 指针
  let p1 = dummy1;
  let p2 = dummy2;
  let p = head;

  while (p !== null) {
    if (p.val < x) {
      p1.next = p;
      p1 = p1.next;
    } else {
      p2.next = p;
      p2 = p2.next;
    }
    p = p.next;
  }
  p1.next = null;
  p2.next = null;

  p1.next = dummy2.next;
  return dummy1.next;
}
