/**
 * https://leetcode.cn/problems/maximum-difference-between-node-and-ancestor/description/
 */

import TreeNode from '../../TreeNode';

function maxAncestorDiff(root: TreeNode | null): number {
  let answer = 0;

  const fun = (node: TreeNode | null, max: number, min: number) => {
    if (node === null) {
      // 到叶子节点后(这儿的判断其实是叶子节点的子节点了), 可以获得该条路径上的最大值和最小值，更新答案
      answer = Math.max(answer, max - min);
      return;
    }
    max = Math.max(max, node.val);
    min = Math.min(min, node.val);
    fun(node.left, max, min);
    fun(node.right, max, min);
  };

  fun(root, root?.val, root?.val);

  return answer;
}
