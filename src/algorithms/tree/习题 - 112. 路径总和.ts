import TreeNode from '../../TreeNode';

/**
 * https://leetcode.cn/problems/path-sum/description/
 * @param root
 * @param targetSum
 */

// 自下而上
// function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
//   const answer: number[] = [];
//   const deep = (node: TreeNode | null, sum: number = 0) => {
//     if (!node) {
//       return;
//     }
//     // 叶子节点
//     if (!node.left && !node.right) {
//       if (sum + node.val === targetSum) {
//         answer.push(targetSum);
//       }
//     } else {
//       sum += node.val;
//     }
//     deep(node.left, sum);
//     deep(node.right, sum);
//   };
//   deep(root);
//   return answer.length >= 1;
// }

// 自上而下
var hasPathSum = (root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    return false;
  }
  targetSum -= root.val;
  if (root.left === null && root.right === null) {
    // root 是叶子
    return targetSum === 0;
  }
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum);
};
