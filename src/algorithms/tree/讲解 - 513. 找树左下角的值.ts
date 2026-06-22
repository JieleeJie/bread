/**
 * https://leetcode.cn/problems/find-bottom-left-tree-value/
 * @param root
 */
import TreeNode from '../../TreeNode';

// 方法一：正常层次遍历，最后一层的第一个节点
function findBottomLeftValue1(root: TreeNode | null): number {
  let answer: number[] = [];
  const cur = [root];
  while (cur.length) {
    const vals: number[] = [];
    const len = cur.length;
    for (let i = 0; i < len; i++) {
      const element = cur.shift();
      vals.push(element!.val);
      if (element?.left) cur.push(element.left);
      if (element?.right) cur.push(element.right);
    }
    answer = vals;
  }
  // 最后一层的第一个节点
  return answer[0]!;
}

// 方法二：从右到左的层次遍历，最后一个出队的节点即答案
function findBottomLeftValue(root: TreeNode | null): number {
  const cur = [root];
  let node: TreeNode | null = null;
  while (cur.length) {
    node = cur.shift()!;
    if (node.right) cur.push(node.right);
    if (node.left) cur.push(node.left);
  }
  return node?.val!;
}
