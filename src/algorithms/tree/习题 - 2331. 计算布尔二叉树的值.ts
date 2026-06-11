/**
 * https://leetcode.cn/problems/evaluate-boolean-binary-tree/description/
 */

import TreeNode from '../../TreeNode';

// 我的
// function evaluateTree(root: TreeNode | null): boolean {
//   const fun = (node: TreeNode | null) => {
//     if (node === null) {
//       return;
//     }
//     fun(node.left);
//     fun(node.right);
//     // 叶子节点
//     if (node.left === null && node.right === null) {
//       node.val = !!node.val;
//     }
//     // 非叶子节点
//     if (node.val === 2) {
//       node.val = !!(node.left?.val || node.right?.val);
//     }
//     if (node.val === 3) {
//       node.val = !!(node.left?.val && node.right?.val);
//     }
//   };
//   fun(root);
//   return !!root?.val;
// }

// 灵神
function evaluateTree(root: TreeNode | null): boolean {
  if (!root) {
    return false;
  }
  if (root.val === 2) {
    return evaluateTree(root.left) || evaluateTree(root.right);
  }
  if (root.val === 3) {
    return evaluateTree(root.left) && evaluateTree(root.right);
  }
  return !!root.val;
}
