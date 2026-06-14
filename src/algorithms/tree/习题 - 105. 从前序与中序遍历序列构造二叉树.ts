import TreeNode from '../../TreeNode';

/**
 * https://leetcode.cn/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 * 
确定根节点：
前序遍历的第一个元素一定是整个树的根节点。

划分左右子树：
根据根节点在中序遍历中的位置，可以将中序遍历序列划分为左子树和右子树的中序遍历序列。
左子树的中序遍历序列位于根节点的左边，右子树的中序遍历序列位于根节点的右边。

递归构建：
根据左子树和右子树的中序遍历序列长度，可以在前序遍历序列中划分出对应的左子树和右子树的前序遍历序列。
递归地对左右子树进行上述操作，直到遍历序列为空，返回 null。
 */

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (preorder.length === 0) {
    return null;
  }
  // preorder[0] 二叉树的根
  const x = preorder[0];
  // 在中序遍历，通过根元素区分左右子树
  const ind = inorder.indexOf(x!);
  // 左子树的中序遍历
  const inorderLeft = inorder.slice(0, ind);
  // 右子树的中序遍历
  const inorderRight = inorder.slice(ind + 1);
  // 左子树的前序遍历
  const preorderLeft = preorder.slice(1, ind + 1);
  // 右子树的前序遍历
  const preorderRight = preorder.slice(ind + 1);
  const left = buildTree(preorderLeft, inorderLeft);
  const right = buildTree(preorderRight, inorderRight);
  return new TreeNode(x, left, right);
}
