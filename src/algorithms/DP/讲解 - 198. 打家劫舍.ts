/**
 * https://leetcode.cn/problems/house-robber/
 * @param nums
 */

// 第一种做法，采用回溯 - 会超时
function rob1(nums: number[]): number {
  const len = nums.length;

  // dfs(i)就是从前i个房子中得到的最大金额和
  // 它取决于第i个房子选或不选。
  // 如果不选，问题转变为  dfs(i - 2) + nums[i]
  // 如果选，问题转变为  dfs(i - 1)
  // 取两种情况的一个最大值
  function dfs(i: number): number {
    if (i < 0) {
      return 0;
    }
    return Math.max(dfs(i - 1), dfs(i - 2) + nums[i]!);
  }

  // 是前 len-1 个房子的最大值，而不是第 len-1 个房子的值。
  return dfs(len - 1);
}

// 增加记忆化搜索
function rob2(nums: number[]): number {
  const len = nums.length;
  const cache = new Array(len).fill(-1);

  // dfs(i)就是从前i个房子中得到的最大金额和
  // 它取决于第i个房子选或不选。
  // 如果不选，问题转变为  dfs(i - 2) + nums[i]
  // 如果选，问题转变为  dfs(i - 1)
  // 取两种情况的一个最大值
  function dfs(i: number): number {
    if (i < 0) {
      return 0;
    }
    if (cache[i] !== -1) {
      return cache[i];
    }
    const res = Math.max(dfs(i - 1), dfs(i - 2) + nums[i]!);
    cache[i] = res;
    return res;
  }

  // 是前 len-1 个房子的最大值，而不是第 len-1 个房子的值。
  return dfs(len - 1);
}

// 翻译成递推
function rob(nums: number[]): number {
  const len = nums.length;
  const f = new Array(len + 2).fill(0);

  for (let i = 0; i < len; i++) {
    const element = nums[i];
    f[i + 2] = Math.max(f[i + 1], f[i] + element);
  }

  // 为了避免边界情况，初始化的长度是加2的（且前两个都为0），所以下标为f[len-1+2 ]。
  return f[len + 1];
}
