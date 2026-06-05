/**
 * https://leetcode.cn/problems/product-of-array-except-self/
 * @param nums
 * @returns
 */
function productExceptSelf(nums: number[]): number[] {
  const numsLen = nums.length;
  const prefix = Array(numsLen).fill(1);
  const suffix = Array(numsLen).fill(1);
  const answer = Array(numsLen).fill(1);
  for (let i = 0; i < numsLen - 1; i++) {
    const element = nums[i];
    prefix[i + 1] = prefix[i] * element;
  }

  for (let j = numsLen - 1; j > 0; j--) {
    const element = nums[j];
    suffix[j - 1] = suffix[j] * element;
  }

  for (let k = 0; k < numsLen; k++) {
    answer[k] = prefix[k] * suffix[k];
  }

  return answer;
}
// [1,2,3,4]

// [1,1,2,6]

// [24,12,4,1]

// [24,12,8,6]
