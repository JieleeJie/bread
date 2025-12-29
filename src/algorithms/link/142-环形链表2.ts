import { ListNode } from './ListNode';

/**
 * https://leetcode.cn/problems/linked-list-cycle-ii/description/
 *  一开始令快指针 fast 和慢指针 slow 都位于头部，然后快指针每次走 2 步，慢指针每次走 1 步，因此快指针走的步数始终等于快指针的 2 倍。
 * 假设从头到环入口的距离为 a，环长度为 b，相遇的时候 a 在环内走了 x，b 比 a 多走了 n 环（n 为正整数），那么有
 * a 走的距离：a + x
 * b 走的距离：a + x + nb
 * 距离关系：2(a + x) = a + x + nb
 * 可以得到： a + x = nb，取 n = 1, 即 a = b - x。
 * 新建一个指针 ptr，ptr 和 slow 每次同时走 1 步， 当 slow 指针继续走 b-x 到达环入口时，ptr 也整好到达环入口
 */
function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;
  let ptr = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
    if (fast === slow) {
      while (ptr !== slow) {
        ptr = ptr!.next;
        slow = slow!.next;
      }
      return ptr;
    }
  }
  return null;
}
