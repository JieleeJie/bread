import { ListNode } from './ListNode';

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head?.next === null) {
    return head;
  }
  const last = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return last;
}

/**
 * https://leetcode.cn/problems/reverse-linked-list-ii/description/
 * 找到 left 和 right子链表。同时记录 left 的前驱和 right 的后继。将子链表和前驱后继节点断开，然后翻转子链表，再和前驱后继连接上
 */
function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  // 因为头节点有可能发生变化，使用虚拟头节点可以避免复杂的分类讨论
  const dummy = new ListNode(-1);
  dummy.next = head;

  let pointLeft = dummy;
  // 第 1 步：从虚拟头节点走 left - 1 步，来到 left 节点的前一个节点
  for (let i = 0; i < left - 1; i++) {
    pointLeft = pointLeft.next;
  }

  let pointRight = pointLeft;
  // 第 2 步：从 pre 再走 right - left + 1 步，来到 right 节点
  for (let i = 0; i < right - left + 1; i++) {
    pointRight = pointRight.next;
  }

  // 第 3 步：切断出一个子链表（截取链表）
  const nodeLeft = pointLeft.next;
  const nodeRight = pointRight.next;

  // 注意：切断链接
  pointLeft.next = null;
  pointRight.next = null;

  // 第 4 步：同第 206 题，反转链表的子区间
  reverseList(nodeLeft);

  // 第 5 步：接回到原来的链表中
  pointLeft.next = pointRight;
  nodeLeft.next = nodeRight;

  return dummy.next;
}
