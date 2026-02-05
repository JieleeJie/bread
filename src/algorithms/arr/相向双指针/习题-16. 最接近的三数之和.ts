/**
 * https://leetcode.cn/problems/3sum-closest/description/
 * 和167类似
 * 167 是 sum 和 0比较。 这题是 sum 和 target 比较
 * 然后维护一个最小值，满足  ∣s−target∣<∣ans−target∣ 则更新最小值
 */
function threeSumClosest(nums: number[], target: number): number {
  nums.sort((a, b) => a - b);
  let answer = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (Math.abs(sum - target) < Math.abs(answer - target)) {
        answer = sum;
      }
      if (sum > target) {
        k--;
      } else if (sum < target) {
        j++;
      } else {
        return target;
      }
    }
  }
  return answer;
}
