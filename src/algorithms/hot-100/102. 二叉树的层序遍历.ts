/**
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/description/
 */

import TreeNode from '../../TreeNode';

function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  const answer: number[][] = [];
  let cur = [root];
  while (cur.length) {
    const vals: number[] = [];
    const next: TreeNode[] = [];
    for (const ele of cur) {
      vals.push(ele.val);
      if (ele.left) next.push(ele.left);
      if (ele.right) next.push(ele.right);
    }
    cur = next;
    answer.push(vals);
  }
  return answer;
}
