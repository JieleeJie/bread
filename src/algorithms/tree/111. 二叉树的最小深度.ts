/**
 * https://leetcode.cn/problems/minimum-depth-of-binary-tree/description/
 * 如果 node 是空节点，由于没有节点，返回 0。
如果 node 没有右儿子，那么深度就是左子树的深度加一，即 dfs(node)=dfs(node.left)+1。
如果 node 没有左儿子，那么深度就是右子树的深度加一，即 dfs(node)=dfs(node.right)+1。
如果 node 左右儿子都有，那么分别递归计算左子树的深度，以及右子树的深度，二者取最小值再加一
 */
import TreeNode from '../../TreeNode';
function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  if (!root.left) {
    return minDepth(root.right) + 1;
  }
  if (!root.right) {
    return minDepth(root.left) + 1;
  }
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}
