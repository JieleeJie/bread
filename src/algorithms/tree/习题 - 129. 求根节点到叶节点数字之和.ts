/**
 * https://leetcode.cn/problems/sum-root-to-leaf-numbers/description/
 */

import TreeNode from '../../TreeNode';

function sumNumbers(root: TreeNode | null): number {
  const answer: string[] = [];
  let sum = 0;
  const func = (node: TreeNode | null, curStr: string) => {
    if (!node) {
      return;
    }
    curStr = `${curStr}${node.val}`;
    // 叶子节点
    if (!node.left && !node.right) {
      answer.push(curStr);
    }
    func(node.left, curStr);
    func(node.right, curStr);
  };
  func(root, '');
  for (const ele of answer) {
    sum += +ele;
  }
  return sum;
}
