/**
 * https://leetcode.cn/problems/sum-of-left-leaves/description/
 */

import TreeNode from '../../TreeNode';
function sumOfLeftLeaves(root: TreeNode | null): number {
  let answer = 0;

  function dep(node: TreeNode | null) {
    if (!node) {
      return;
    }
    // 这只能判断是叶子节点，不能判断是左叶子
    // if (node && node.left === null && node.right === null) {
    //   answer += node.val;
    // }

    const left = node.left; // 当前节点的左儿子
    if (left && left.left === null && left.right === null) {
      // 当前节点的左儿子是叶子
      answer += left.val; // 累加节点值
    }
    dep(node.left);
    dep(node.right);
  }

  dep(root);

  return answer;
}
