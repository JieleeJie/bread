/**
 * https://leetcode.cn/problems/generate-parentheses/
 * @param n
 * 回溯三问：
 * 1.当前操作？枚举path[i]是左括号还是右括号
 * 2.子问题？构造字符串≥i的部分
 * 3.下一个子问题？构造字符串≥i+1的部分
 */
function generateParenthesis(n: number): string[] {
  // 问题转化：从 2n 个位置中选 n 个放左括号，n 个放右括号
  // 本质是「选或不选」的思想：第 i 个位置选左括号 或 又括号
  const m = 2 * n;
  const answer: string[] = [];
  const path = new Array(n);

  // open 为已选左括号的数量
  function dfs(i: number, open: number) {
    if (i === m) {
      answer.push(path.join(''));
      return;
    }
    // 共有两种递归：选左括号和选右括号
    // 共需 n 个，已选 open 个。只要 open< n 就可以选左括号
    if (open < n) {
      path[i] = '(';
      dfs(i + 1, open + 1);
    }
    // 右括号的个数为 i—open
    // 如果右括号的个数小于左括号的个数即 i 一 open < open，就可以选右括号
    if (i - open < open) {
      path[i] = ')';
      dfs(i + 1, open);
    }
  }

  dfs(0, 0);

  return answer;
}
