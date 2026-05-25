/**
 * https://leetcode.cn/problems/two-sum/description/?envType=study-plan-v2&envId=top-100-liked
 * 遍历一遍，遍历时把已经遍历过的元素存在 map 中，再看 map 中是不是有满足 target - element 的元素
 */
function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i]!;
    if (map.has(target - element)) {
      return [i, map.get(target - element)];
    }
    map.set(element, i);
  }
  return [];
}
