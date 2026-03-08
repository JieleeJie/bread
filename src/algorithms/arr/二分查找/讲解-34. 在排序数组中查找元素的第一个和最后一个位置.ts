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

function searchRange(nums: number[], target: number): number[] {
  const start = lower_bound(nums, target);
  if (start >= nums.length || nums[start] !== target) {
    return [-1, -1];
  }
  // <= target 的数可转化为 > target 的数的左边那个数
  const end = lower_bound(nums, target + 1) - 1;
  return [start, end];
}
