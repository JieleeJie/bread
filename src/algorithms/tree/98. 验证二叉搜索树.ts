/**
 * https://leetcode.cn/problems/validate-binary-search-tree/
 */
import TreeNode from '../../TreeNode';

// 前序遍历
// function isValidBST(
//   root: TreeNode | null,
//   leftVal: number = Number.MIN_SAFE_INTEGER,
//   rightVal: number = Number.MAX_SAFE_INTEGER
// ): boolean {
//   if (root === null) {
//     return true;
//   }
//   const x = root.val;
//   return leftVal < x && x < rightVal && isValidBST(root.left, leftVal, x) && isValidBST(root.right, x, rightVal);
// }

// 中序遍历
const isValidBST = function (root: TreeNode | null) {
  let pre = -Infinity;
  function dfs(node: TreeNode | null) {
    if (node === null) {
      return true;
    }
    if (!dfs(node.left)) {
      // 左
      return false;
    }
    if (node.val <= pre) {
      // 中
      return false;
    }
    pre = node.val;
    return dfs(node.right); // 右
  }
  return dfs(root);
};
