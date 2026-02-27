/**
 * https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 * 双指针，枚举右端点，右移左端点
 * 外层移动右指针，同时累加。
 * 当 sum >= target 时，更新累加结果，移动左指针
 */
// 写法二：在 while 循环内更新答案
function minSubArrayLen(target: number, nums: number[]): number {
  let minLen = nums.length + 1;
  let left = 0;
  let sum = 0;
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]!;
    while (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
      sum -= nums[left]!;
      left++;
    }
  }
  return minLen > nums.length ? 0 : minLen;
}

// 写法一：在 while 循环结束后更新答案
const minSubArrayLen1 = function (target, nums) {
  const n = nums.length;
  let minLen = n + 1;
  let sum = 0; // 子数组元素和
  let left = 0; // 子数组左端点
  for (let right = 0; right < n; right++) {
    // 枚举子数组右端点
    sum += nums[right];
    while (sum - nums[left] >= target) {
      // 尽量缩小子数组长度
      sum -= nums[left];
      left++; // 左端点右移
    }
    // 移动完以后还满足条件，则更新 minLen
    if (sum >= target) {
      minLen = Math.min(minLen, right - left + 1);
    }
  }
  return minLen <= n ? minLen : 0;
};
