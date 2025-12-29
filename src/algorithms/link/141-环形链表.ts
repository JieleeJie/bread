import { ListNode } from './ListNode';

/**
 * https://leetcode.cn/problems/linked-list-cycle/description/
 * 如果有环 快慢指针一定会相遇。因为快指针走的是慢指针的倍数（两倍）
 */
function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return true;
  }
  return false;
}
