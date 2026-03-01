/**
 *  https://leetcode.cn/problems/length-of-longest-subarray-with-at-most-k-frequency/
 * 同讲解3，修改一下判断条件
 */
function maxSubarrayLength(nums: number[], k: number): number {
  let answer = 0;
  const cntMap = new Map();
  let left = 0;
  for (let right = 0; right < nums.length; right++) {
    const element = nums[right];
    cntMap.set(element, (cntMap.get(element) || 0) + 1);
    while (cntMap.get(element) > k) {
      cntMap.set(nums[left], cntMap.get(nums[left]) - 1);
      left++;
    }
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}
