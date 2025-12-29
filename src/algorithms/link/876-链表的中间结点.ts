import { ListNode } from './ListNode';

// function middleNode(head: ListNode | null): ListNode | null {
//   const dummy = new ListNode(-1, head);
//   let slow = dummy;
//   let fast = dummy;
//   // 节点个数为奇数
//   let isOdd = false;
//   while (fast.next !== null && fast.next.next !== null) {
//     fast = fast.next.next;
//     slow = slow.next;
//   }
//   while (fast.next !== null && fast.next.next === null) {
//     fast = fast.next;
//     slow = slow.next;
//     isOdd = true;
//   }
//   return isOdd ? slow : slow.next;
// }

/**
 * https://leetcode.cn/problems/middle-of-the-linked-list/description/
 * 每当慢指针 slow 前进一步，快指针 fast 就前进两步，这样，当 fast 走到链表末尾时，slow 就指向了链表中点。
 */
function middleNode(head: ListNode | null): ListNode | null {
  // 快慢指针初始化指向 head
  let slow = head,
    fast = head;
  // 快指针走到末尾时停止
  while (fast !== null && fast.next !== null) {
    // 慢指针走一步，快指针走两步
    slow = slow.next;
    fast = fast.next.next;
  }
  // 慢指针指向中点
  return slow;
}
