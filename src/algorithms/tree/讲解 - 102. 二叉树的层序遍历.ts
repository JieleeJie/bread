/**
 * https://leetcode.cn/problems/binary-tree-level-order-traversal/description/
 * @param root
 */

import TreeNode from '../../TreeNode';

// 双数组写法
function levelOrder1(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  const answer: number[][] = [];
  let cur = [root];
  while (cur.length) {
    // 最终返回的是一个二维数组，所以每一层都需要维护一个 vals, 遍历完以后push到answer中
    const vals: number[] = [];
    // 存放子节点
    const next: TreeNode[] = [];
    for (const ele of cur) {
      // 存当前层的节点值
      vals.push(ele.val);
      if (ele.left) next.push(ele.left);
      if (ele.right) next.push(ele.right);
    }
    // 父节点遍历完以后，将子节点置为新的父节点。即开始遍历下一层
    cur = next;
    answer.push(vals);
  }
  return answer;
}

// 队列写法：
// 将current和next合并为一个双端队列；每次把当前层的节点出队，把下一层的节点入队。
// 循环的次数为队列的长度，在开始的时候获取一下
function levelOrder(root: TreeNode | null): number[][] {
  if (root === null) {
    return [];
  }
  const answer: number[][] = [];
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
    answer.push(vals);
  }
  return answer;
}
