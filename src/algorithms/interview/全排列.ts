/**
 * https://leetcode.cn/problems/VvJkup/
 * @param nums
 */
// [1,2,3]
function permute(nums: number[]): number[][] {
  // 用于存储生成的全排列
  const answer: number[][] = [];

  function subPermute(sub: number[], remain: number[]) {
    // 如果没有剩余元素，当前排列就是一个全排列
    if (remain.length === 0) {
      // 一个新数组，sub还会改变
      answer.push(sub.slice());
      return;
    }
    for (let i = 0; i < remain.length; i++) {
      // 将当前元素添加到排列
      sub.push(remain[i]);
      // 生成剩余元素的新数组
      const newRemain = remain.slice(0, i).concat(remain.slice(i + 1));
      // 递归生成剩余元素的排列
      subPermute(sub, newRemain);
      // 回溯，移除刚添加的元素，以尝试其他排列方法
      sub.pop();
    }
  }

  subPermute([], nums);

  return answer;
}
