import { ListNode } from './ListNode';

// function reverseList(head: ListNode | null): ListNode | null {
//   let prev = null;
//   let curr = head;
//   while (curr) {
//     const temp = curr.next;
//     curr.next = prev;
//     prev = curr;
//     curr = temp;
//   }
//   return prev;
// }

// 题目要求不能用翻转链表的方法，所以用栈
// function addTwoNumbers1(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//   const reverseL1 = reverseList(l1);
//   const reverseL2 = reverseList(l2);
//   let pointA = reverseL1;
//   let pointB = reverseL2;
//   let carry = 0;
//   const dummy = new ListNode(-1);
//   let pointDummy = dummy;
//   while (pointA || pointB) {
//     const nodeAVal = pointA ? pointA.val : 0;
//     const nodeBVal = pointB ? pointB.val : 0;
//     const sum = nodeAVal + nodeBVal + carry;
//     carry = Math.floor(sum / 10);
//     const node = new ListNode(sum % 10);
//     pointDummy.next = node;
//     pointDummy = pointDummy.next;
//     if (pointA?.next) {
//       pointA = pointA.next;
//     }
//     if (pointB?.next) {
//       pointB = pointB.next;
//     }
//   }

//   if (carry) {
//     pointDummy.next = new ListNode(carry);
//     pointDummy = pointDummy.next;
//   }

//   return reverseList(dummy.next);
// }

/**
 * https://leetcode.cn/problems/add-two-numbers-ii/description/
 * 思路： 不能翻转链表 所以考虑用栈。所有需要逆序的都先考虑用栈
 * 把所有数字压入栈中，再依次取出相加。计算过程中需要注意进位的情况。
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const stack1: number[] = [];
  const stack2: number[] = [];
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let carry = 0;
  let pointA = null;
  while (stack1.length || stack2.length) {
    const node1Val = stack1.pop() || 0;
    const node2Val = stack2.pop() || 0;
    const sum = node1Val + node2Val + carry;
    carry = Math.floor(sum / 10);
    // pointDummy.next = new ListNode(sum % 10);
    // pointDummy = pointDummy.next;
    const node = new ListNode(sum % 10);
    node.next = pointA;
    pointA = node;
  }
  if (carry) {
    const node = new ListNode(carry);
    node.next = pointA;
    pointA = node;
  }
  return pointA;
}
