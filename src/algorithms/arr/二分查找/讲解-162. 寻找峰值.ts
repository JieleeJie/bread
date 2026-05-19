/**
 * https://leetcode.cn/problems/find-peak-element/description/
 * 1. 没有 target，制造一个 target（nums[middle + 1]）
 * 2. 使用 nums[middle] 和 nums[middle + 1] 比较
 * 3. 之所以可以这么比较 是因为 虽然存在多个峰顶，但可以假设只有一个且就是我们要找的那个
 * 4. 所以 nums[middle] < nums[middle + 1] 时可以认为 middle 往前的数都小于 nums[middle + 1]
 * 5.  nums[middle] >= nums[middle + 1] 时可以认为 middle 往后的数都大于 nums[middle + 1]
 */
function findPeakElement(nums: number[]): number {
  let left = 0;
  // 二分区间的范围[0, n-2]，因为 nums[−1]=nums[n]=−∞
  // nums[n-1] 要么是峰顶（递增数组），要么在峰顶往右
  // 如果 nums[n-1] 是峰顶，则二分结束后 left 的位置就是 n-1
  // 如果 nums[n-1] 在峰顶往右，则二分区间的范围取 [0, n-2]，也方便进行 nums[middle] < nums[middle + 1] 比较
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
