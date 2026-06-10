/**
 * https://leetcode.cn/problems/count-good-nodes-in-binary-tree/description/
 */

import TreeNode from '../../TreeNode';

function goodNodes(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    return 1;
  }

  let answer = 0;

  const fun = (node: TreeNode | null, max: number) => {
    if (!node) {
      return;
    }
    if (node.val >= max) {
      answer++;
      max = node.val;
    }
    fun(node.left, max);
    fun(node.right, max);
  };
  fun(root, Number.MIN_SAFE_INTEGER);

  return answer;
}

// 作者：灵茶山艾府

// var goodNodes = function (root, mx = -Infinity) {
//     if (root === null)
//         return 0;
//     const left = goodNodes(root.left, Math.max(mx, root.val));
//     const right = goodNodes(root.right, Math.max(mx, root.val));
//     return left + right + (mx <= root.val);
// };
