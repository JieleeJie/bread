import { ListNode } from './ListNode';

/**
 * https://leetcode.cn/problems/merge-two-sorted-lists/description/
 * 比较 p1 和 p2 两个指针，将值较小的的节点接到 p 指针
 */

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode();
  let p = dummy;
  let p1 = list1;
  let p2 = list2;
  while (p1 && p2) {
    if (p1.val < p2.val) {
      p.next = p1;
      p1 = p1.next;
    } else {
      p.next = p2;
      p2 = p2.next;
    }
    p = p.next;
  }

  if (p1) {
    p.next = p1;
  }
  if (p2) {
    p.next = p2;
  }

  return dummy.next;
}
