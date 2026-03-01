/**
 * https://leetcode.cn/problems/k-radius-subarray-averages/description/
 * right < 2 * k 之前一直累加，之后开始计算平均值
 * 中心 k 的索引可用 right - k
 * 左指针移动的索引为 right - 2 * k
 */
function getAverages(nums: number[], k: number): number[] {
  const result = new Array(nums.length).fill(-1);
  let sum = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    if (right < 2 * k) {
      continue;
    }
    result[right - k] = Math.floor(sum / (2 * k + 1));
    sum -= nums[right - 2 * k];
  }
  return result;
}
