/**
 * https://leetcode.cn/problems/balanced-binary-tree/description/
 * 利用高度为非负数，用 -1 表示不平衡，
 * 如果发现不平衡，就把 -1 返回父节点，父节点收到 -1 也立刻返回，不再递归。
 * 也就是只要返回了-1，-1 会不断返回，一路回到递归的调用入口，最后在入口处判断下返回的数是不是 -1 即可得到结果
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
