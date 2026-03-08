function lower_bound(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // 处理 (left + right) / 2 溢出问题
    const middle = left + Math.floor((right - left) / 2);
    if (nums[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
}

function searchInsert(nums: number[], target: number): number {
  return lower_bound(nums, target);
}
