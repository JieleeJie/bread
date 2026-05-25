/**
 * https://leetcode.cn/problems/longest-consecutive-sequence/description/
 * @param nums
 * @returns
 */
const longestConsecutive = function (nums: number[]) {
  const st = new Set<number>(nums); // 把 nums 转成哈希集合
  let ans = 0;
  for (const x of st) {
    // 遍历哈希集合
    if (st.has(x - 1)) {
      // 如果 x 不是序列的起点，直接跳过
      continue;
    }
    // x 是序列的起点
    let y = x + 1;
    while (st.has(y)) {
      // 不断查找下一个数是否在哈希集合中
      y++;
    }
    // 循环结束后，y-1 是最后一个在哈希集合中的数
    ans = Math.max(ans, y - x); // 从 x 到 y-1 一共 y-x 个数
    if (ans * 2 >= st.size) {
      break;
    }
  }
  return ans;
};
