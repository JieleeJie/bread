/**
 * https://leetcode.cn/problems/range-sum-of-bst/
 * @param root
 * @param low
 * @param high
 */

import TreeNode from '../../TreeNode';

// 我的
// function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
//   let answer = 0;

//   const fun = (node: TreeNode | null) => {
//     if (node === null) {
//       return;
//     }
//     if (low <= node.val && node.val <= high) {
//       answer += node.val;
//       fun(node.left);
//       fun(node.right);
//     }
//     if (node.val > high) {
//       fun(node.left);
//     }
//     if (node.val < low) {
//       fun(node.right);
//     }
//   };

//   fun(root);

//   return answer;
// }

// 灵神的
function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (root === null) {
    return 0;
  }
  const x = root.val;
  if (x > high) {
    // 右子树没有节点在范围内，只需递归左子树
    return rangeSumBST(root.left, low, high);
  }
  if (x < low) {
    // 左子树没有节点在范围内，只需递归右子树
    return rangeSumBST(root.right, low, high);
  }
  return x + rangeSumBST(root.left, low, high) + rangeSumBST(root.right, low, high);
}
