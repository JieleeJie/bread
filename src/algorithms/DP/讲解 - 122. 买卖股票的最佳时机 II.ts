/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii/
 * @param prices
 */

// 记忆化搜索
function maxProfit1(prices: number[]): number {
  const len = prices.length;
  // 初始化为 Number.POSITIVE_INFINITY，不能是 0 或 -1 这种具体数字，因为利润可能就是这个值
  const cache = Array.from({ length: len }, () => new Array(2).fill(Number.POSITIVE_INFINITY));
  function dfs(i: number, hold: 0 | 1) {
    if (i < 0) {
      return hold ? Number.NEGATIVE_INFINITY : 0;
    }
    if (cache[i][hold] !== Number.POSITIVE_INFINITY) {
      return cache[i][hold];
    }
    let res;
    if (hold) {
      res = Math.max(dfs(i - 1, 1), dfs(i - 1, 0) - prices[i]);
    } else {
      res = Math.max(dfs(i - 1, 0), dfs(i - 1, 1) + prices[i]);
    }
    cache[i][hold] = res;
    return res;
  }

  return dfs(len - 1, 0);
}

// 递推
function maxProfit(prices: number[]): number {
  const len = prices.length;
  //   由于涉及到 i-1 数组越界，所以长度为 len + 1
  const f = Array.from({ length: len + 1 }, () => new Array(2).fill(0));
  f[0][0] = 0;
  f[0][1] = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < len; i++) {
    f[i + 1][1] = Math.max(f[i][1], f[i][0] - prices[i]);
    f[i + 1][0] = Math.max(f[i][0], f[i][1] + prices[i]);
  }
  return f[len][0];
}
