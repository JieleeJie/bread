/**
 * https://leetcode.cn/problems/letter-combinations-of-a-phone-number/
 * 用一个path 数组记录路径上的字母
    回溯三问
    1. 当前操作? 枚举 `path[i]` 要填入的字母
    2. 子问题？构造字符串 `>=i` 的部分
    3. 下—个子问题？构造字符串 `≥i+1` 的部分
    `dfs(i) -> dfs(i+1)`
 */

function letterCombinations(digits: string): string[] {
  const MAPPING = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

  const len = digits.length;

  if (len <= 0) {
    return [];
  }
  // 注意与 78 题的区别：如果 path 初始化成固定长度就不需要 pop。如果初始化成空list就需要pop
  const path = new Array(len);
  const answer: string[] = [];

  function dfs(i: number) {
    // 编辑条件，递归的次数等于 len 时，即获得答案
    if (i === len) {
      answer.push(path.join(''));
      return;
    }
    // digits 是输入的数字，如 '23'，通过索引i 取到对应的数字再 map 出对应字符串
    const letter = MAPPING[+digits[i]!]!;
    // 外层遍历第一个数字对应的字符串，如 '2' 对应的 ’abc‘ 即 path[0] 为 'a' 'b' 'c'
    // dfs 遍历里层，如 '3' 对应的 ’d‘ 'e' 'f'。直到碰到边界条件
    for (const element of letter) {
      path[i] = element;
      dfs(i + 1);
    }
  }

  dfs(0);

  return answer;
}
