import { ListNode } from './ListNode';

/**
 * https://leetcode.cn/problems/reverse-linked-list/
 * 迭代解法
 */
function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let curr = head;
  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

/**
 * 递归解法
 * https://labuladong.online/algo/data-structure/reverse-linked-list-recursion/#%E9%80%92%E5%BD%92%E8%A7%A3%E6%B3%95
 */
function reverseList1(head: ListNode | null): ListNode | null {
  if (head === null || head?.next === null) {
    return head;
  }
  const last = reverseList1(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}

export { reverseList };
