/**
 * https://leetcode.cn/problems/lowest-common-ancestor-of-a-binary-tree/
 * 1. 如果当前节点是p ，直接返回当前节点，不需要再往下遍历。
 *  如果 q 是 p 的子节点，计算遍历到 q ，最近公共祖先还是p
 *  如果 q 不是 p 的子节点，则继续往下遍历没有意义。应该遍历与 p 平级的分支
 * 2. 也就是说，就算return（第一个if）了，也不一定是最终结果。还得根据另一边的结果才能确定（后续的if）
 * 3. return 的可能是 p,q,null 或 结果
 * 带入示例多思考一下
 */

import TreeNode from '../../TreeNode';

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null || root === p || root === q) {
    return root;
  }
  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);
  if (left && right) {
    return root;
  }
  if (left) {
    return left;
  }
  if (right) {
    return right;
  }
  return null;
}
