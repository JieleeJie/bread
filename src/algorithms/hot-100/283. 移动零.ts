/**
 * https://leetcode.cn/problems/move-zeroes/description/
 * @param nums
 */

// 方法1，把非 0 元素前置，末尾补0
// function moveZeroes(nums: number[]): void {
//   let point = 0;
//   for (const ele of nums) {
//     if (ele !== 0) {
//       nums[point] = ele;
//       point++;
//     }
//   }
//   nums.fill(0, point);
// }

// 方法2：交换
function moveZeroes(nums: number[]): void {
  let point = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[point]] = [nums[point], nums[i]];
      point++;
    }
  }
}
