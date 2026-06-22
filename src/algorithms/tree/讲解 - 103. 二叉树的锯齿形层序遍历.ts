/**
 * https://leetcode.cn/problems/binary-tree-zigzag-level-order-traversal/description/
 * @param root
 */

import TreeNode from '../../TreeNode';

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  const answer = [];
  const cur = [root];
  let even = false;
  while (cur.length) {
    const vals: number[] = [];
    const len = cur.length;
    for (let i = 0; i < len; i++) {
      const ele = cur.shift();
      vals.push(ele?.val);
      if (ele?.left) cur.push(ele.left);
      if (ele?.right) cur.push(ele.right);
    }
    answer.push(even ? vals.reverse() : vals);
    even = !even;
  }
  return answer;
}
