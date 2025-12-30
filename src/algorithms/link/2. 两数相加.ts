import { ListNode } from './ListNode';

/**
 * https://leetcode.cn/problems/add-two-numbers/description/
 * 判断不能使用 while (pointA && pointB)。因为需要考虑最后一个节点有进位的情况，如5+6
 * 所以使用 while (pointA || pointB)； 当l1链表遍历完之后，l2链表还有值的时候，使用 0 充当 l1 链表的值
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let pointA = l1;
  let pointB = l2;
  let carry = 0;
  const dummy = new ListNode(0);
  let current = dummy;
  while (pointA || pointB) {
    const aVal = pointA ? pointA.val : 0;
    const bVal = pointB ? pointB.val : 0;
    const sum = aVal + bVal + carry;
    carry = Math.floor(sum / 10);
    current.next = new ListNode(sum % 10);
    current = current.next;
    if (pointA) {
      pointA = pointA.next;
    }
    if (pointB) {
      pointB = pointB.next;
    }
  }
  if (carry > 0) {
    current.next = new ListNode(carry);
    current = current.next;
  }
  return dummy.next;
}
