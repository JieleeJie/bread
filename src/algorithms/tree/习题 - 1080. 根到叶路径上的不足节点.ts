/**
 * https://leetcode.cn/problems/insufficient-nodes-in-root-to-leaf-paths/
 * @param root
 * @param limit
 */

import TreeNode from '../../TreeNode';

function sufficientSubset(root: TreeNode | null, limit: number): TreeNode | null {
  if (root === null) {
    return null;
  }

  limit -= root.val;
  //  叶子节点
  if (root.left === null && root.right === null) {
    return limit > 0 ? null : root;
  }
  root.left = sufficientSubset(root.left, limit);
  root.right = sufficientSubset(root.right, limit);
  // 非叶子节点 只要左右子节点中任一个不为空，就返回当前节点，否则返回 null
  return root.left || root.right ? root : null;
}
