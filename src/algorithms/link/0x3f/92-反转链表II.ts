import { ListNode } from '../ListNode';

/**
 * https://leetcode.cn/problems/reverse-linked-list-ii/description/
 * 找到 left 和 right子链表。同时记录 left 的前驱和 right 的后继。将子链表和前驱后继节点断开，然后翻转子链表，再和前驱后继连接上
 */
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const dummy = new ListNode();
  dummy.next = head;
  let p0 = dummy;
  let i = 1;
  while (i < left) {
    p0 = p0.next!;
    i++;
  }
  let pre = null;
  let cur = p0.next;
  while (left <= right) {
    const curNext = cur!.next;
    cur!.next = pre;
    pre = cur;
    cur = curNext;
    left++;
  }
  p0.next!.next = cur;
  p0.next = pre;

  return dummy.next;
}
