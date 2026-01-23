/**
 * 283-移动零
 * 快慢指针，和27题类似。快指针遍历数组，慢指针记录非0元素的长度。
 * 快指针所指元素不等于0时，将该元素赋值给慢指针所指位置，并将慢指针后移一位。
 * 这样当快指针遍历完数组时，slow前面的元素都是非0元素。最后将慢指针后面的元素都赋值为0。
 */
function moveZeroes(nums: number[]): void {
  let slow = 0;
  let fast = 0;
  while (fast < nums.length) {
    if (nums[fast] !== 0) {
      nums[slow] = nums[fast];
      slow++;
    }
    fast++;
  }
  while (slow < nums.length) {
    nums[slow++] = 0;
  }
}
