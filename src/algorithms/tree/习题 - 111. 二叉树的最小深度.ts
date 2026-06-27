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

// 自底向上「归」  - 方法一
// 并不需要特判 node 是叶子的情况，因为在没有右儿子的情况下，我们会递归 node.left，如果它是空节点，递归的返回值是 0，加一后得到 1，这正是叶子节点要返回的值。
function minDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }
  // 没有左儿子
  if (!root.left) {
    return minDepth(root.right) + 1;
  }
  // 没有右儿子
  if (!root.right) {
    return minDepth(root.left) + 1;
  }
  // 前面只是求深度，这儿才是求最小值
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}

// 自底向上「归」  - 方法二
const minDepth = function (root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  if (root.left === null && root.right === null) {
    // root 是叶子
    return 1;
  }
  const leftDepth = root.left ? minDepth(root.left) : Infinity;
  const rightDepth = root.right ? minDepth(root.right) : Infinity;
  return Math.min(leftDepth, rightDepth) + 1;
};

// 自顶向下「递」
function minDepth(root: TreeNode | null): number {
  let answer = Number.POSITIVE_INFINITY;
  const dfs = (node: TreeNode | null, depth: number) => {
    if (node === null) {
      return;
    }
    depth++;
    if (node.left === null && node.right === null) {
      answer = Math.min(answer, depth);
      return;
    }
    dfs(node.left, depth);
    dfs(node.right, depth);
  };
  dfs(root, 0);
  return root ? answer : 0;
}
