/**
 * https://leetcode.cn/problems/count-pairs-whose-sum-is-less-than-target/description/
 * 和 167 类似。排序 + 双指针。
 * 当找到一个 nums[left] + nums[right] < target 时，由于数组是有序的，
 * right 向左移动的过程中，和会越来越小，因此在 left < right 的条件下，right - left 就是所有
 * count += right - left; 后 left 再向右移动
 */
function countPairs(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let count = 0;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] + nums[right] < target) {
      count += right - left;
      left++;
    } else {
      right--;
    }
  }
  return count;
}
