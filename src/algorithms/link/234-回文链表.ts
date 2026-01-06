import { ListNode } from './ListNode';

/**
 * https://leetcode.cn/problems/palindrome-linked-list/
 * 复制链表值到数组列表中。 使用双指针法判断是否为回文。 注意一个 for 循环中有两个遍历，一个向前遍历，一个向后遍历。
 */
function isPalindrome(head: ListNode | null): boolean {
  const nodeVals: number[] = [];

  while (head) {
    nodeVals.push(head.val);
    head = head.next;
  }

  for (let i = 0, j = nodeVals.length - 1; i < j; i++, j--) {
    if (nodeVals[i] !== nodeVals[j]) {
      return false;
    }
  }

  return true;
}
