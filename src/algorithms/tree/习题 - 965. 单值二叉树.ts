/**
 * https://leetcode.cn/problems/univalued-binary-tree/
 */

import TreeNode from '../../TreeNode';

function isUnivalTree(root: TreeNode | null): boolean {
  let answer = true;

  const fun = (root: TreeNode | null, val: number) => {
    if (!root) {
      return;
    }
    if (root.val !== val) {
      answer = false;
    }
    fun(root.left, val);
    fun(root.right, val);
  };
  fun(root, root?.val);
  return answer;
}
