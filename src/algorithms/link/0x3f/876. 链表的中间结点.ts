import { ListNode } from '../ListNode';

/**
 * https://leetcode.cn/problems/middle-of-the-linked-list/
 * 快指针走两步，慢指针走一步。快指针走到最后一个节点（节点个数为奇数）或快指针为 null（节点个数为偶数）时，慢指针指向中间节点
 */
function middleNode(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow!.next;
  }
  return slow;
}
