/**
 * https://leetcode.cn/problems/permutations/
 * 可以参考src\algorithms\interview\全排列.ts的写法
 */

function permute(nums: number[]): number[][] {
  const answer: number[][] = [];
  const path: number[] = [];
  const len = nums.length;

  // i即路径的第i位，也表示需要构造>=i的排列，s表示剩余可选的数的集合
  function dfs(i: number, s: number[]) {
    if (i === len) {
      answer.push(path.slice());
    }
    for (const element of s) {
      path.push(element);
      dfs(
        i + 1,
        s.filter(item => item !== element)
      );
      path.pop();
    }
  }

  dfs(0, nums);

  return answer;
}
