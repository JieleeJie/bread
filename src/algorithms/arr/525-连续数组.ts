/**
 * https://leetcode.cn/problems/contiguous-array/
 * 核心思想：
 *    利用前缀和：碰1加一，碰0减一
 *    原始数组[0,1,1,1,1,1,0,0,0]
 *    数组转换：[-1,1,1,1,1,1,-1,-1,-1]
 *    前缀和数组：[-1,0,1,2,3,4,3,2,1]
 *    两种情况会出现相同数量的 0 和 1
 *    1. 前缀和数组中出现相同的元素，说明中间的子数组和为0，即子数组中0和1的数量相等
 *    2. 前缀和数组中元素为0，说明从数组开始到当前位置的子数组和为0，即子数组中0和1的数量相等
 * 算法步骤：
 *     1. 创建一个哈希表，用 key 来储存 前缀和值, value 来储存当前 index。
 *     2. 碰到0就将 sum decrement (减一), 碰到1则increment (加一)。
 *     3. 如果能在哈希表中找到当前的 sum 值, 则取出对应的 indexBefore, 在看当前的 index - indexBefore 是否比 maxLen 大, 取其中的最优解。
 *     4. 特别考虑到前缀和为0的情况，如[0,1]，前缀和数组为[-1,0]，最大子数组长度为2。所以 map 需要维护一个初始值 (0,-1)
 */
function findMaxLength(nums: number[]): number {
  const map = new Map();
  map.set(0, -1);
  let sum = 0;
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i] === 0 ? -1 : 1;
    sum += num;
    if (map.has(sum)) {
      const indexBefore = map.get(sum);
      maxLen = Math.max(maxLen, i - indexBefore);
    } else {
      map.set(sum, i);
    }
  }
  return maxLen;
}
