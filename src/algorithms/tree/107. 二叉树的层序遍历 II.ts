/**
 * https://leetcode.cn/problems/binary-tree-level-order-traversal-ii/
 * @param root
 */

import TreeNode from '../../TreeNode';

function levelOrderBottom(root: TreeNode | null): number[][] {
  if (!root) return [];
  const answer: number[][] = [];
  const cur = [root];
  while (cur.length) {
    const vals: number[] = [];
    const len = cur.length;
    for (let i = 0; i < len; i++) {
      const node = cur.shift();
      vals.push(node!.val);
      if (node?.left) cur.push(node.left);
      if (node?.right) cur.push(node.right);
    }
    answer.push(vals);
  }
  return answer.reverse();
}
