import { ListNode } from './ListNode';

// 快慢指针：快指针先走 k 步，然后快慢指针再开始。p1 走到链表末尾的空指针时前进了 n - k 步，p2 也从 head 开始前进了 n - k 步。

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummy = new ListNode(-1, head);
  let slow = dummy;
  let fast = dummy;
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  while (fast.next !== null) {
    fast = fast.next;
    slow = slow.next;
  }
  slow.next = slow.next?.next;
  return dummy.next;
}
