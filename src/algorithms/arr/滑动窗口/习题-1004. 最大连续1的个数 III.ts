/**
 * https://leetcode.cn/problems/max-consecutive-ones-iii/description/
 * 用 count0 统计零的次数，当 count0 > k 时，将左指针移动到第一个零的后面（相当于减去一个0）
 * 03xf题解: 统计窗口内 0 的个数 cnt0，则问题转化成在 cnt0 <= k 的前提下，窗口大小的最大值。
 */
function longestOnes(nums: number[], k: number): number {
  let answer = 0;
  let count0 = 0;
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    if (nums[right] === 0) {
      count0++;
    }
    if (count0 > k) {
      while (nums[left] !== 0) {
        left++;
      }
      count0--;
      left++;
    }
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}
