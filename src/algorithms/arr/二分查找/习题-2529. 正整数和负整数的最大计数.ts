function lower_bound(nums: number[], target: number) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
}

function maximumCount(nums: number[]): number {
  // 第一个为0的数的左边都是负数
  const indNeg = lower_bound(nums, 0);
  // 第一个大于等于1的数后面都是正数
  const indPos = lower_bound(nums, 1);
  return nums.length - indPos > indNeg ? nums.length - indPos : indNeg;
}
