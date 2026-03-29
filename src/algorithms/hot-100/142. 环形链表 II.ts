import { ListNode } from './ListNode';

/**
 * https://leetcode.cn/problems/linked-list-cycle-ii/description/?envType=study-plan-v2&envId=top-100-liked
 * 具体分析见：https://www.bilibili.com/video/BV1KG4y1G7cu/?vd_source=9000202fbcab9d491c5acc56690cae0b
 */
function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow!.next;
    if (fast === slow) {
      // 快慢指针相遇后，根据推理（见视频分析），slow 和 head 再走相同的步数即可相遇再环的入口
      while (head !== slow) {
        head = head!.next;
        slow = slow!.next;
      }
      return head;
    }
  }
  return null;
}
