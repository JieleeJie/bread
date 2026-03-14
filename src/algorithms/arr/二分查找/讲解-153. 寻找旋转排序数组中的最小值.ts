/**
 * https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array/description/
 * [4,5,6,7,0,1,2] - AB 类型数组；[0,1,2,4,5,6,7] - AA 类型数组
 * 1. 没有 target，制造一个 target（nums[lastInd]）
 * 2. 如果 nums[middle] < nums[lastInd]。
 *    对于 AA 型数组，则最小值一定在 middle 往左
 *    对于 AB 型数组，则最小值也一定在 middle 往左。
 *      因为是有序数组，如果 middle 在 AB 中的 A， 肯定都大于 nums[lastInd]，与判断不符
 *      因为是有序数组，如果 middle 在 AB 中的 B， 肯定都大于 nums[lastInd]，middle 要么是最小值，要么在最小值左边
 * 3. 如果 nums[middle] >= nums[lastInd]
 *    对于 AB 型数组，则最小值也一定在 middle 往右。
 *    对于 AA 型数组，因为是有序数组，不存在这种情况
 */
function findMin(nums: number[]): number {
  let left = 0;
  // 因为 target 是最后一个元素，所以二分区间范围为[0,n-2]
  let right = nums.length - 2;
  // 最后的元素
  const lastInd = nums.length - 1;
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] < nums[lastInd]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return nums[left];
}
