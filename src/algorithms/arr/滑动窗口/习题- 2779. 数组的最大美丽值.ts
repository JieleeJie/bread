/**
 * https://leetcode.cn/problems/maximum-beauty-of-an-array-after-applying-operation/
 * 直接看题解吧，问题的转化不是自己能想到的
 */
function maximumBeauty(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let left = 0;
  let answer = 0;
  for (let right = 0; right < nums.length; right++) {
    while (nums[right] - nums[left] > 2 * k) {
      left++;
    }
    answer = Math.max(answer, right - left + 1);
  }

  return answer;
}
