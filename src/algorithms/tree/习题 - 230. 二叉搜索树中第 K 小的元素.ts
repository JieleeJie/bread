/**
 * https://leetcode.cn/problems/kth-smallest-element-in-a-bst/
 * @param root
 * @param k
 */

import TreeNode from '../../TreeNode';

// 不需要遍历完整颗树
// 在中序遍历，即「左-根-右」的过程中，每次递归完左子树，就把 k 减少 1，表示我们按照中序遍历访问到了一个节点。如果减一后 k 变成 0，那么答案就是当前节点的值，
function kthSmallest(root: TreeNode | null, k: number): number {
  let ans = 0;
  function dfs(node) {
    if (node === null || k <= 0) {
      return;
    }
    dfs(node.left); // 左
    if (--k === 0) {
      ans = node.val; // 根
    }
    dfs(node.right); // 右
  }
  dfs(root);
  return ans;
}
