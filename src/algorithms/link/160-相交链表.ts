import { ListNode } from './ListNode';

/**
 * https://leetcode.cn/problems/intersection-of-two-linked-lists/description/
 * 思路：两次遍历，先遍历A链表，保存每个节点的标记。再遍历B链表，遇到了已有标记的节点则 return
 * set() 的使用可降低复杂度
 */
// function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
//   const nodeSet = new Set();
//   let pointA = headA;
//   let pointB = headB;
//   while (pointA) {
//     if (!nodeSet.has(pointA)) {
//       nodeSet.add(pointA);
//       pointA = pointA.next;
//     }
//   }
//   while (pointB) {
//     if (nodeSet.has(pointB)) {
//       return pointB;
//     }
//     pointB = pointB.next;
//   }
//   return null;
// }

/**
 * 双指针: A 指针遍历完 A 链表后，再遍历 B 链表；B 指针遍历完 B 链表后，再遍历 A 链表
 * 如果两个链表有交点，则最终会同时指向交点
 * 如果两个链表没有交点， 因为遍历的步数是一样的，则最终会同时指向 null
 */
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let pointA = headA;
  let pointB = headB;
  while (pointA !== pointB) {
    if (pointA === null) {
      pointA = headB;
    } else {
      pointA = pointA?.next;
    }
    if (pointB === null) {
      pointB = headA;
    } else {
      pointB = pointB?.next;
    }
  }
  return pointA;
}
