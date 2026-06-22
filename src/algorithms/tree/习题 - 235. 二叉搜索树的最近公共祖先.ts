/**
 * https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * 与 236 题不同的是，235题不需要判断空节点
 * 因为235是二叉搜索树，他是做出判断再递归，而236是递归之后拿结果进行判断，
 * 对于235的node来说，他只需要判断左右子树节点val大小就能知道pq在哪，不需要先递归
 */

import TreeNode from '../../TreeNode';

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  const x = root.val;
  if (p?.val < x && q?.val < x) {
    return lowestCommonAncestor(root?.left, p, q);
  }
  if (p?.val > x && q?.val > x) {
    return lowestCommonAncestor(root?.right, p, q);
  }
  // 这儿有几种情况
  // 1. 当前root节点是 p or q，
  // 2. p,q 在 当前root节点 的左右两侧，那 root 节点就是最近公共祖先
  return root;
}
