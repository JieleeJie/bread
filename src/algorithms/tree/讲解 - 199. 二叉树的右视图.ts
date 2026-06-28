/**
 * https://leetcode.cn/problems/binary-tree-right-side-view/description/
 * 先递归右子树，再递归左子树，
 * 两个问题：1. 怎么把答案记下来 2. 怎么判断这个节点是否需要记录到答案中
 * 如果递归深度等于答案的长度，则需要记录到答案中
 */

import TreeNode from '../../TreeNode';

// DFS
function rightSideView(root: TreeNode | null): number[] {
  const ans: number[] = [];
  function func(root: TreeNode | null, depth: number) {
    if (!root || root?.val === null) {
      return;
    }
    if (depth === ans.length) {
      ans.push(root?.val);
    }
    func(root?.right, depth + 1);
    func(root?.left, depth + 1);
  }
  func(root, 0);
  return ans;
}

function rightSideView(root: TreeNode | null): number[] {
  const answer: number[] = [];

  const func = (node: TreeNode | null, depth: number) => {
    if (node === null) {
      return;
    }
    if (depth === answer.length) {
      answer.push(node.val);
    }
    depth++;
    func(node.right, depth);
    func(node.left, depth);
  };
  func(root, 0);
  return answer;
}
