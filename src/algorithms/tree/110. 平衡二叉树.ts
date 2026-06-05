/**
 * https://leetcode.cn/problems/balanced-binary-tree/description/
 */

import TreeNode from '../../TreeNode';

function treeLength(root: TreeNode | null): number {
  if (!root || root?.val === null) {
    return 0;
  }
  const leftLength = treeLength(root?.left);
  if (leftLength === -1) {
    return -1;
  }
  const rightLength = treeLength(root.right);
  if (rightLength === -1) {
    return -1;
  }
  if (Math.abs(leftLength - rightLength) > 1) {
    return -1;
  }
  return Math.max(leftLength, rightLength) + 1;
}

function isBalanced(root: TreeNode | null): boolean {
  return treeLength(root) !== -1;
}

const node1 = new TreeNode(1);
const node2L = new TreeNode(2);
const node2R = new TreeNode(2);
const node3L = new TreeNode(3);
const node3R = new TreeNode(3);
const node4L = new TreeNode(4);
const node4R = new TreeNode(4);

node1.left = node2L;
node2L.left = node3L;
node3L.left = node4L;

node1.right = node2R;
node2R.right = node3R;
node3R.right = node4R;

treeLength(node1);
