/**
 * https://leetcode.cn/problems/merge-two-binary-trees/description/
 */

import TreeNode from '../../TreeNode';

function mergeTrees(root1: TreeNode | null, root2: TreeNode | null): TreeNode | null {
  if (root1 === null && root2 === null) {
    return null;
  }
  if (root1 !== null && root2 === null) {
    return root1;
  }
  if (root1 === null && root2 !== null) {
    return root2;
  }

  const newNode = new TreeNode();

  newNode.val = (root1?.val || 0) + (root2?.val || 0);
  newNode.left = mergeTrees(root1.left, root2.left);
  newNode.right = mergeTrees(root1.right, root2.right);

  return newNode;
}
