/**
 * https://leetcode.cn/problems/maximum-average-subarray-i/description/
 * 维护一个 k 个数的和 sum, 一个最大平均值
 * 当窗口长度不够 k 时，只需要更新 sum
 * 当窗口长度够了，更新最大平均值 maxAverage。每次移动窗口时，sum 加上新元素，减去旧元素
 */
function findMaxAverage(nums: number[], k: number): number {
  let sum = 0;
  let maxAverage = Number.MIN_SAFE_INTEGER;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    const left = right - k + 1;
    if (left < 0) continue;
    maxAverage = Math.max(maxAverage, sum / k);
    sum -= nums[left];
  }
  return maxAverage;
}
