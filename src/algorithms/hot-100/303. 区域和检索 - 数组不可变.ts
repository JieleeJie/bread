/**
 * https://leetcode.cn/problems/range-sum-query-immutable/description/
 */
class NumArray {
  sum: number[];
  constructor(nums: number[]) {
    this.sum = new Array(nums.length + 1).fill(0);
    for (let i = 0; i < nums.length; i++) {
      const element = nums[i];
      this.sum[i + 1] = this.sum[i] + element;
    }
  }

  sumRange(left: number, right: number): number {
    return this.sum[right + 1] - this.sum[left];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
