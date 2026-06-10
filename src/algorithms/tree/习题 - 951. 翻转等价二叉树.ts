/**
 * https://leetcode.cn/problems/flip-equivalent-binary-trees/description/
 */

import TreeNode from '../../TreeNode';

function flipEquiv(root1: TreeNode | null, root2: TreeNode | null): boolean {
  if (root1 === null || root2 === null) {
    return root1 === root2;
  }
  // 值相等的前提下 看左右子树相等 或 左右子树是否对称
  return (
    root1.val === root2.val &&
    ((flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) ||
      (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left)))
  );
}
