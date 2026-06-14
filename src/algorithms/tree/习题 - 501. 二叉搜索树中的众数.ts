/**
 * https://leetcode.cn/problems/find-mode-in-binary-search-tree/
 * @param root
 */

import TreeNode from '../../TreeNode';

// 中序遍历是一个有序的序列，所以我们可以先获得这棵树的中序遍历，然后从扫描这个中序遍历序列，然后用一个哈希表来统计每个数字出现的个数，这样就可以找到出现次数最多的数字。

function findMode(root: TreeNode | null): number[] {
  const valueArr: number[] = [];

  const fun = (node: TreeNode | null) => {
    if (node === null) {
      return;
    }
    fun(node.left);
    valueArr.push(node.val);
    fun(node.right);
  };

  fun(root);

  const map = new Map();

  for (const element of valueArr) {
    map.set(element, (map.get(element) || 0) + 1);
  }

  let answer: number[] = [];
  let max = Number.NEGATIVE_INFINITY;
  for (const [key, val] of map.entries()) {
    if (val > max) {
      max = val;
      answer = [key];
    } else if (val === max) {
      answer.push(key);
    }
  }

  return answer;
}
