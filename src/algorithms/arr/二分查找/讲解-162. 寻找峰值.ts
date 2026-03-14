/**
 * https://leetcode.cn/problems/find-peak-element/description/
 * 1. 没有 target，
 * 2. 使用 nums[middle] 和 nums[middle + 1] 比较
 * 3. 之所以可以这么比较 是因为 虽然存在多个峰顶，但可以假设只有一个且就是我们要找的那个
 * 4. 所以 nums[middle] < nums[middle + 1] 时可以认为 middle 往前的数都小于 nums[middle + 1]
 * 5.  nums[middle] >= nums[middle + 1] 时可以认为 middle 往后的数都大于 nums[middle + 1]
 */
function findPeakElement(nums: number[]): number {
  let left = 0;
  let right = nums.length - 2;
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] < nums[middle + 1]) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
}
