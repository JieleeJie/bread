/**
 * https://leetcode.cn/problems/longest-increasing-subsequence/description/
 */

// 记忆化搜索
function lengthOfLIS2(nums: number[]): number {
  const cache = new Array(nums.length);
  function dfs(i: number) {
    if (cache[i]) {
      return cache[i];
    }
    let res = 0;
    // 枚举 i 前面的数
    for (let j = 0; j < i; j++) {
      // 碰到比 nums[i] 小的，则递归到 j，并求最大值
      if (nums[j] < nums[i]) {
        res = Math.max(res, dfs(j));
      }
    }
    // +1 表示 nums[i] 自身
    const result = res + 1;
    cache[i] = result;
    return result;
  }

  let answer = 0;

  for (let k = 0; k < nums.length; k++) {
    answer = Math.max(answer, dfs(k));
  }

  return answer;
}

// 递推
function lengthOfLIS(nums: number[]): number {
  const len = nums.length;
  const f = new Array(len).fill(0);
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        f[i] = Math.max(f[i], f[j]);
      }
    }
    f[i] += 1;
  }
  return Math.max(...f);
}
