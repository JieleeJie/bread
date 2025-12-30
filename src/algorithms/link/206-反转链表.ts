import { ListNode } from './ListNode';

/**
 * https://leetcode.cn/problems/reverse-linked-list/
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

export { reverseList };
