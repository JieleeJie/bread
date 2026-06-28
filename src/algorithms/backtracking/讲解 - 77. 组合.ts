/**
 * https://leetcode.cn/problems/combinations/
 * @param n
 * @param k
 */

function combine(n: number, k: number): number[][] {
  const answer: number[][] = [];
  const path: number[] = [];

  function dfs(i: number) {
    // 剪枝（不操作也能过）
    const d = k - path.length; // 还需要 d 个数
    // 只剩 n-i 个数
    if (n - i + 1 < d) {
      return;
    }

    // 边界条件
    if (path.length === k) {
      answer.push(path.slice());
      return;
    }
    for (let j = i; j <= n; j++) {
      path.push(j);
      dfs(j + 1);
      path.pop();
    }
  }

  dfs(1);

  return answer;
}
