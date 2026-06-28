/**
 * https://leetcode.cn/problems/kth-largest-sum-in-a-binary-tree/description/
 * @param root
 * @param k
 */

import TreeNode from '../../TreeNode';

function kthLargestLevelSum(root: TreeNode | null, k: number): number {
  const answers: number[] = [];
  const cur = [root];
  while (cur.length) {
    let sum = 0;
    const len = cur.length;
    for (let i = 0; i < len; i++) {
      const node = cur.shift();
      sum += node?.val;
      if (node?.left) cur.push(node.left);
      if (node?.right) cur.push(node.right);
    }
    answers.push(sum);
  }
  if (answers.length < k) {
    return -1;
  }
  answers.sort((a, b) => b - a);
  return answers[k - 1]!;
}
