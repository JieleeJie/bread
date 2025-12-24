import { ListNode } from './ListNode';

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
