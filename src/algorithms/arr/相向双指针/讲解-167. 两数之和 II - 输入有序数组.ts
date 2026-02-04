/**
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/description/
 * 左右两指针相向而行。
 * 如果 numbers[left] + numbers[right] > target 则right--
 * 因为 numbers[right] 往右的数一定比 numbers[right] 大。
 * 反之亦然，相等则结束
 */
function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] + numbers[right] === target) {
      break;
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      left++;
    }
  }
  return [left + 1, right + 1];
}
