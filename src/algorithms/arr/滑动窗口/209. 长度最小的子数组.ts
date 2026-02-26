/**
 * https://leetcode.cn/problems/minimum-size-subarray-sum/description/
 * 双指针，外层移动右指针，同时累加。
 * 当 sum >= target 时，更新结果，移动左指针
 */
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
