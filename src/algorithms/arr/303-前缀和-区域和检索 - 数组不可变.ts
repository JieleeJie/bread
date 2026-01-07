/**
 *  https://leetcode.cn/problems/range-sum-query-immutable/
 * 前缀和：即前n项的和。
 * 如果每次都遍历求前 n 项和，都进行一次 for 循环。时间复杂度为 O(n)，而前缀和只需要 O(1) 的时间复杂度。
 */
class NumArray {
  sum: number[] = [];
  constructor(nums: number[]) {
    this.sum = new Array(nums.length).fill(0);
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      this.sum[i + 1] = this.sum[i] + element;
    }
  }

  sumRange(left: number, right: number): number {
    return this.sum[right + 1] - this.sum[left];
  }
}
