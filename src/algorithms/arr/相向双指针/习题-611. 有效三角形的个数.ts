/**
 * https://leetcode.cn/problems/valid-triangle-number/description/
 * 思想与 167 类似。
 * 注意更新的条件是组成三角形，即任意两边之和大于第三边，但在排序后就是两条小的边长之和大于最长边长。
 * 所以 外层循环枚举最长边 内层用双指针循环枚举其他两边之和。
 * 当找到一个 nums[i] + nums[j] > nums[k] 时，由于数组是排序后的，所以此时 i 之后的任意一个数与 j 组成的三元组也一定满足条件，所以直接加上 j-i。
 */
function triangleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);
  let count = 0;
  for (let k = 2; k < nums.length; k++) {
    let i = 0;
    let j = k - 1;
    while (i < j) {
      if (nums[i] + nums[j] > nums[k]) {
        count += j - i;
        j--;
      } else {
        i++;
      }
    }
  }

  return count;
}
