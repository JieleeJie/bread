function lower_bound(nums: number[], target: number): number {
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

function search(nums: number[], target: number): number {
  const result = lower_bound(nums, target);
  if (nums[result] !== target || result >= nums.length || result < 0) {
    return -1;
  }
  return result;
}
