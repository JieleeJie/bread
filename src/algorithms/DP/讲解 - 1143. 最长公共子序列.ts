/**
 * https://leetcode.cn/problems/longest-common-subsequence/description/
 */

// 记忆化搜索
function longestCommonSubsequence1(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;

  const cache = Array.from({ length: m }, () => new Array(n).fill(-1));

  function dfs(i: number, j: number) {
    if (i < 0 || j < 0) {
      return 0;
    }
    if (cache[i][j] !== -1) {
      return cache[i][j];
    }
    if (text1[i] === text2[j]) {
      return dfs(i - 1, j - 1) + 1;
    }
    const res = Math.max(dfs(i - 1, j), dfs(i, j - 1));
    cache[i][j] = res;
    return res;
  }

  return dfs(m - 1, n - 1);
}

// 递推
function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;

  const f = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (text1[i] === text2[j]) {
        f[i + 1][j + 1] = f[i][j] + 1;
      } else {
        f[i + 1][j + 1] = Math.max(f[i][j + 1], f[i + 1][j]);
      }
    }
  }

  return f[m][n];
}
