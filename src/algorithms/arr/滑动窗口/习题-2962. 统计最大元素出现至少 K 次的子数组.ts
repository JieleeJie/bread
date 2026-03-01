/**
 * https://leetcode.cn/problems/count-subarrays-where-max-element-appears-at-least-k-times/description/
 * 当最大值的个数 maxValueCount === k 时，移动 left 指针直到 maxValueCount < k，
 * 此时 [left,right] 这个子数组是不满足题目要求的。[left−1,right]，还有 [left−2,right],[left−3,right],…,[0,right] 都是满足要求的。
 */
function countSubarrays(nums: number[], k: number): number {
  const maxValue = Math.max(...nums);
  let answer = 0;
  let left = 0;
  let maxValueCount = 0;
  for (const element of nums) {
    if (element === maxValue) {
      maxValueCount++;
    }
    while (maxValueCount === k) {
      if (nums[left] === maxValue) {
        maxValueCount--;
      }
      left++;
    }
    answer += left;
  }

  return answer;
}
