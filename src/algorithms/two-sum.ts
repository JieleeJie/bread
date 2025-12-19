/**
 * LeetCode 1. Two Sum
 * 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target 的那 两个 整数，并返回它们的数组下标。
 *
 * 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
 * 你可以按任意顺序返回答案。
 */

/**
 * 解法1：暴力解法
 * 时间复杂度：O(n²)
 * 空间复杂度：O(1)
 */
function twoSumBruteForce(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i]! + nums[j]! === target) {
        return [i, j];
      }
    }
  }
  return [];
}

/**
 * 解法2：哈希表
 * 时间复杂度：O(n)
 * 空间复杂度：O(n)
 */
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]!;

    if (map.has(complement)) {
      const complementIndex = map.get(complement);
      if (complementIndex !== undefined) {
        return [complementIndex, i];
      }
    }

    map.set(nums[i]!, i);
  }

  return [];
}

// 测试用例
function testTwoSum(): void {
  console.log('=== Two Sum 测试 ===');

  const testCases = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
  ];

  testCases.forEach((testCase, index) => {
    const result1 = twoSumBruteForce(testCase.nums, testCase.target);
    const result2 = twoSum(testCase.nums, testCase.target);

    console.log(`测试用例 ${index + 1}:`);
    console.log(
      `输入: nums = [${testCase.nums.join(', ')}], target = ${testCase.target}`
    );
    console.log(`暴力解法结果: [${result1.join(', ')}]`);
    console.log(`哈希表解法结果: [${result2.join(', ')}]`);
    console.log(`期望结果: [${testCase.expected.join(', ')}]`);
    console.log('---');
  });
}

export { twoSum, twoSumBruteForce, testTwoSum };
