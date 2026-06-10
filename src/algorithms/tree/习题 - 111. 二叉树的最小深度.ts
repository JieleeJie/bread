/**
 * https://leetcode.cn/problems/minimum-depth-of-binary-tree/description/
 * 如果 node 是空节点，由于没有节点，返回 0。
如果 node 没有右儿子，那么深度就是左子树的深度加一，即 dfs(node)=dfs(node.left)+1。
如果 node 没有左儿子，那么深度就是右子树的深度加一，即 dfs(node)=dfs(node.right)+1。
如果 node 左右儿子都有，那么分别递归计算左子树的深度，以及右子树的深度，二者取最小值再加一

对于非叶节点，把握一个共同原则：如果一个儿子是空节点，另一个儿子不是空节点，那么答案只能来自非空的那一侧。
求最大深度，空节点返回 0，直接计算 max，一定会取到有节点的那一侧（因为深度比 0 大）。
求最小深度，空节点返回 0，直接计算 min，会取到空节点，不符合「答案只能来自非空的那一侧」。所以求最小深度必须多写一些逻辑。

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
