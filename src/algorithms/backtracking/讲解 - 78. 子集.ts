/**
 * https://leetcode.cn/problems/subsets/
 * 见回溯.md中的子集型 与 视频讲解
 * 注意与 17 题的区别。78是添加/删除。17是更新
 * @param nums
 */

// 模板1
function subsets(nums: number[]): number[][] {
  const answer: number[][] = [];
  // 注意与 17 题的区别：如果 path 初始化成固定长度就不需要 pop。如果初始化成空list就需要pop
  const path: number[] = [];
  const len = nums.length;

  function dfs(i: number) {
    if (i === len) {
      answer.push(path.slice());
      return;
    }
    // 不选择当前元素，则递归下一个
    dfs(i + 1);
    // 选择当前元素
    // 加入路径path - 从下标 >=i 的数字中构造子集
    path.push(nums[i]);
    // 递归下一个元素 - 从下标 >=i+1 的数字中构造子集
    dfs(i + 1);
    // 恢复现场。
    // 如 nums = [1,2,3],path=[1] 选择当前元素2，path=[1,2], 递归后续的元素。
    // 递归完以后，需要将2 pop出去，方便再当前索引位置选择下一个元素3 path=[1,3]
    path.pop();
  }

  dfs(0);

  return answer;
}

// 模板2
function subsets(nums: number[]): number[][] {
  const answer: number[][] = [];
  const path: number[] = [];

  function dfs(i: number) {
    // 递归到的每个节点都是答案
    answer.push(path.slice());
    // 可以省略
    // if (i === n) {
    //   return;
    // }
    // 枚举当前要填的数字。
    // (从下标 ≥i 的数字中构造子集)
    for (let j = i; j < nums.length; j++) {
      // (—个下标 j≥i 的数字，加入path)
      path.push(nums[j]);
      // (从下标 ≥j+1 的数字中构造子集)
      dfs(j + 1);
      path.pop();
    }
    // 参考 17 题外层与里层的思路去看这个循环
  }

  dfs(0);

  return answer;
}
