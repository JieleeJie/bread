/**
 * https://leetcode.cn/problems/maximum-depth-of-binary-tree/description/
 */

import TreeNode from '../../TreeNode';

// 自底向上(归)
function maxDepth(root: TreeNode | null): number {
  if (!root || root?.val === null) {
    return 0;
  }
  const leftMaxDepth = maxDepth(root?.left);
  const rightMaxDepth = maxDepth(root?.right);

  return Math.max(leftMaxDepth, rightMaxDepth) + 1;
}

const node3 = new TreeNode(3);
const node4 = new TreeNode(4);
const node5 = new TreeNode(5);
node3.left = node4;
node3.right = node5;

// 自顶向下（递）
function maxDepth(root: TreeNode | null): number {
  let answer = 0;
  function dfs(node: TreeNode | null, depth: number) {
    if (node === null) {
      return;
    }
    depth++;
    answer = Math.max(answer, depth);
    dfs(node.left, depth);
    dfs(node.right, depth);
  }
  dfs(root, 0);
  return answer;
}
