/**
 * https://leetcode.cn/problems/search-in-a-binary-search-tree/
 * @param root
 * @param val
 */

import TreeNode from '../../TreeNode';

// 普通做法
// function searchBST(root: TreeNode | null, val: number): TreeNode | null {
//   let answer: TreeNode | null = null;
//   const fun = (node: TreeNode | null) => {
//     if (node === null) {
//       return;
//     }
//     if (node.val === val) {
//       answer = node;
//     }
//     fun(node.left);
//     fun(node.right);
//   };
//   fun(root);
//   return answer;
// }

// 二叉搜索树做法 - 就是二分法
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
  if (root === null) {
    return null;
  }
  if (root.val === val) {
    return root;
  }
  return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val);
}
