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

// 中序遍历 左子树 -> 节点值 -> 右子树
// 对于二叉搜索树，中序遍历中的值，一定满足 当前值小于前一个节值 大于后一个值
// 遍历完左子树，看当前的节点值是否大于上一个节点值。把当前节点值用 pre 记录下来，和下一个节点值进行大小比较。
const isValidBST = function (root: TreeNode | null) {
  let pre = -Infinity;
  function dfs(node: TreeNode | null) {
    if (node === null) {
      return true;
    }
    // 遍历到最左边的节点
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
