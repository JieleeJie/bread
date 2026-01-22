/**
 * 26 - 删除有序数组中的重复项
 * 快慢指针。由于数组已经排序，快指针表示遍历数组到达的下标位置，慢指针表示非重复元素要填入的下标位置，初始时两个指针都指向下标 0。
 * 当快慢指针所指的值不一样时，用快指针的值覆盖慢指针的值，并将慢指针后移一位。最后返回 slow + 1
 */
function removeDuplicates(nums: number[]): number {
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++;
      nums[slow] = nums[fast]!;
    }
    fast++;
  }
  return slow + 1;
}
