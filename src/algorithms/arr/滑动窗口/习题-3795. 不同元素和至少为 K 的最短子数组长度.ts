/**
 * https://leetcode.cn/problems/minimum-subarray-length-with-distinct-sum-at-least-k/description/
 * 元素 nums[right] 进入窗口后，如果 nums[right] 在窗口内的出现次数等于 1，把 nums[right] 加到窗口元素和 sum 中。
 * 元素 nums[left] 离开窗口后，如果 nums[left] 在窗口内的出现次数等于 0，把 nums[left] 从窗口元素和 sum 中减掉。
 */
function minLength(nums: number[], k: number): number {
  let answer = nums.length + 1;
  const cntMap = new Map();
  let left = 0;
  let sum = 0;
  for (let right = 0; right < nums.length; right++) {
    cntMap.set(nums[right], (cntMap.get(nums[right]) ?? 0) + 1);
    if (cntMap.get(nums[right]) === 1) {
      sum += nums[right];
    }
    while (sum >= k) {
      answer = Math.min(answer, right - left + 1);
      // 注意 一直到 cntMap.get(nums[left]) === 0 时才执行  sum -= nums[left];
      // 这儿是错误写法。如测试用例 [6,6,11], left 移动到下标 1 就结束了循环。
      // 提前执行了 sum -= nums[left]; 导致while 循环的条件不满足
      //   if (cntMap.get(nums[left]) >= 1) {
      //     sum -= nums[left];
      //     cntMap.set(nums[left], 0);
      //   }
      // 正确写法 结束循环时 left 移动到了下标 2
      cntMap.set(nums[left], cntMap.get(nums[left]) - 1);
      if (cntMap.get(nums[left]) === 0) {
        sum -= nums[left];
      }
      left++;
    }
  }

  return answer > nums.length ? -1 : answer;
}
