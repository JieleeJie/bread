/**
 * 27-移除元素
 * 快慢指针。都从 0 出发，快指针遍历数组，慢指针记录新数组的长度。
 * 快指针所指元素等于val时，慢指针停留一下，快指针继续遍历；快指针所指元素不等于val时，将该元素赋值给慢指针所指位置，并将慢指针后移一位。
 * 全局来看，只要快指针元素不等于val，就将其赋值给慢指针所指位置，慢指针后移一位，无需关心慢指针当前值是不是等于val。就好比，如果可以开辟新数组，就把快指针不等于val的元素push到新数组中。
 */
function removeElement(nums: number[], val: number): number {
  let slow = 0;
  let fast = 0;

  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]!;
      slow++;
    }
    fast++;
  }
  return slow;
}
