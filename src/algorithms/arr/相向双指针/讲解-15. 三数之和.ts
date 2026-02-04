/**
 * https://leetcode.cn/problems/3sum/description/
 * 难度偏大. 但思想和 167 题类似, 167是两个指针,该题是三指针,左边两个,右边一个即可
 * 注意 不能出现重复三元组, 所以指针移动时,都判断一下和上一个元素是否相等, 相等则跳过
 */
function threeSum(nums: number[]): number[][] {
  nums.sort((a, b) => a - b);
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    const element = nums[i];
    // 出现相等元素则跳过 避免出现重复的三元组
    if (i > 0 && element === nums[i - 1]) {
      continue;
    }
    // 外层遍历 i, 里层锁定 i，遍历 j 和 k
    let j = i + 1;
    let k = nums.length - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      // 因为已经排序过了，如果 sum > 0, 则 k--，否则 j++
      if (sum > 0) {
        k--;
      } else if (sum < 0) {
        j++;
      } else {
        // 满足条件 则添加三元组
        res.push([nums[i], nums[j], nums[k]]);
        // 因为不能出现重复三元组,所以 j++ 同时 k-- 同时去重
        j++;
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
        k--;
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }

  return res;
}
