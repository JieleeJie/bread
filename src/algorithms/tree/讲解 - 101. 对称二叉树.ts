/**
 * https://leetcode.cn/problems/symmetric-tree/
 * @param root
 */

import TreeNode from '../../TreeNode';

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null || q === null) {
    return p === q;
  }
  return p.val === q.val && isSameTree(p.left, q.right) && isSameTree(p.right, q.left);
}

function isSymmetric(root: TreeNode | null): boolean {
  return isSameTree(root?.left, root?.right);
}
