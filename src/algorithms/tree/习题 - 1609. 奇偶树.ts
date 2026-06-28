/**
 * https://leetcode.cn/problems/even-odd-tree/
 * @param root
 */

import TreeNode from '../../TreeNode';

const isEven = (num: number) => {
  return num % 2 === 0;
};

function isEvenOddTree(root: TreeNode | null): boolean {
  const cur = [root];
  let even = true;
  while (cur.length) {
    const len = cur.length;
    let prev = even ? Number.NEGATIVE_INFINITY : Number.POSITIVE_INFINITY;
    for (let i = 0; i < len; i++) {
      const node = cur.shift();
      if (even) {
        if (!isEven(node!.val) && node!.val > prev) {
          prev = node!.val;
        } else {
          return false;
        }
      }
      if (!even) {
        if (isEven(node!.val) && node!.val < prev) {
          prev = node!.val;
        } else {
          return false;
        }
      }
      if (node?.left) {
        cur.push(node.left);
      }
      if (node?.right) {
        cur.push(node.right);
      }
    }
    even = !even;
  }
  return true;
}
