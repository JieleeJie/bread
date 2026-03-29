import { ListNode } from './ListNode';

/**
 * https://leetcode.cn/problems/linked-list-cycle/?envType=study-plan-v2&envId=top-100-liked
 * 参考 876. 链表的中间结点 节点。快指针走两步，慢指针走一步
 */
function hasCycle(head: ListNode | null): boolean {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    // 如果有环。快慢指针一定会相遇
    // 因为慢指针进入环后。快指针相对于慢指针的【相对速度】为1。即满指针没走，快指针每次走一步
    if (fast === slow) {
      return true;
    }
  }
  return false;
}
