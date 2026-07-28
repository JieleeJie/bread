/**
 * https://leetcode.cn/problems/maximum-subarray/description/
 */

// 注意：答案不是 f[n−1]，这仅仅表示以 nums[n−1] 结尾的最大子数组和。或者说 f[n−1] 意味着 nums[n−1] 一定要选，但这不一定正确。

function maxSubArray(nums: number[]): number {
  const numsLen = nums.length;
  // 定义 f[i] 表示以 nums[i] 结尾的最大子数组和。
  const f = new Array(numsLen);
  f[0] = nums[0];
  for (let i = 1; i < numsLen; i++) {
    f[i] = Math.max(f[i - 1], 0) + nums[i];
  }

  return Math.max(...f);
}
