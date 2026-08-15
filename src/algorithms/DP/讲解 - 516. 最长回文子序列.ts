/**
 * https://leetcode.cn/problems/longest-palindromic-subsequence/
 * 讲解见截图LPS1-LPS4
 * @param s
 */

// 记忆化搜索
function longestPalindromeSubseq1(s: string): number {
  const n = s.length;

  const cache = Array.from({ length: n }, () => new Array(n));

  function dfs(i: number, j: number) {
    if (cache[i][j]) {
      return cache[i][j];
    }
    if (i > j) {
      return 0;
    }
    if (i === j) {
      return 1;
    }
    if (s[i] === s[j]) {
      return dfs(i + 1, j - 1) + 2;
    }
    const res = Math.max(dfs(i + 1, j), dfs(i, j - 1));
    cache[i][j] = res;
    return res;
  }

  return dfs(0, n - 1);
}

// 递推
function longestPalindromeSubseq(s: string): number {
  const n = s.length;

  const f = Array.from({ length: n }, () => new Array(n).fill(0));

  for (let i = n - 1; i >= 0; i--) {
    // 对应记忆化搜索中I=J的情况
    f[i][i] = 1;
    // 直接从i+1开始遍历，对应记忆化搜索中j>1。
    for (let j = i + 1; j < n; j++) {
      if (s[i] === s[j]) {
        f[i][j] = f[i + 1][j - 1] + 2;
      } else {
        f[i][j] = Math.max(f[i + 1][j], f[i][j - 1]);
      }
    }
  }

  return f[0][n - 1];
}
