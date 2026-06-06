/**
 * https://leetcode.cn/problems/binary-tree-inorder-traversal/description/
 */
import TreeNode from '../../TreeNode';

function inorderTraversal(root: TreeNode | null): number[] {
  const answer: number[] = [];
  function dfs(node: TreeNode | null) {
    if (node === null) {
      return;
    }
    dfs(node?.left);
    answer.push(node?.val);
    dfs(node?.right);
  }
  dfs(root);
  return answer;
}
