/**
 * https://leetcode.cn/problems/subarray-product-less-than-k/
 * 特例：题目提示 nums[i] 是正整数，所以k <= 1 直接 return 0
 * 双指针，外层移动右指针，同时累乘。
 * 当 product >= k，更新累乘结果，移动左指针
 * 注意：answer 的更新在 while 外面。因为统计的是小于 k 的子数组，如 [10]、[5]、[2] 这些都算
 */
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) {
    return 0;
  }
  let product = 1;
  let left = 0;
  let answer = 0;
  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];
    while (product >= k) {
      product /= nums[left];
      left++;
    }
    answer += right - left + 1;
  }

  return answer;
}
