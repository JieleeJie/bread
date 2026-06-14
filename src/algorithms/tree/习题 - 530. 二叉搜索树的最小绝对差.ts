/**
 * https://leetcode.cn/problems/minimum-absolute-difference-in-bst/description/
 * @param root
 */

import TreeNode from '../../TreeNode';

function getMinimumDifference(root: TreeNode | null): number {
  let answer = Number.POSITIVE_INFINITY;
  let pre = Number.NEGATIVE_INFINITY;

  const fun = (node: TreeNode | null) => {
    if (node === null) {
      return;
    }
    fun(node.left);
    answer = Math.min(answer, node.val - pre);
    pre = node.val;
    fun(node.right);
  };

  fun(root);

  return answer;
}
