import { ListNode } from '../ListNode.ts';

function reverseList(head: ListNode | null): ListNode | null {
  let cur = head;
  let pre = null;
  while (cur) {
    const curNext = cur.next;
    cur.next = pre;
    pre = cur;
    cur = curNext;
  }
  return pre;
}
