/**
 * https://leetcode.cn/problems/subarray-sum-equals-k/description/
 * 由题 303. 区域和检索 - 数组不可变 可知，对于前缀和数组 sum，若 i < j, sum[j+1] - sum[i] 即为 [i,j] 中的元素和
 * 即 任意子数组的和，都可以表示为两个前缀和的差。
 * 对于该题，可转化为求 sum[j] - sum[i] = k (j > i) 的个数
 * 二重循环暴力 时间复杂度是 O(n^2) 太慢
 * 由题 1. 两数之和 - 无序 启发。可改为求 sum[i] = sum[j] - k 的个数（k是已知的，遍历的是j，j > i，所以如此变形）
 * 改用哈希表存 相同前缀和的个数，即可降级为 O(n)
 * @param nums
 * @param k
 */
function subarraySum(nums: number[], k: number): number {
  // 前缀和
  const sum = new Array(nums.length + 1).fill(0);
  for (let i = 0; i < nums.length; i++) {
    const ele = nums[i];
    sum[i + 1] = sum[i] + ele;
  }

  // 哈希
  const map = new Map();
  let answer = 0;
  for (const ele of sum) {
    answer += map.get(ele - k) ?? 0;
    map.set(ele, (map.get(ele) ?? 0) + 1);
  }

  return answer;
}
