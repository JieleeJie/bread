/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-with-cooldown/description/
 * 冷冻期：买入股票的时候，前一天不能有卖出操作
 * 类似打家劫舍，从右到左思考，如果选第i个房子，那么就只能选第i-2个房子，不能选第i-1个房子。
 * 所以对于买入操作，直接递归到i-2
 */

// 记忆化搜索
function maxProfit(prices: number[]): number {
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
      res = Math.max(dfs(i - 1, 1), dfs(i - 2, 0) - prices[i]);
    } else {
      res = Math.max(dfs(i - 1, 0), dfs(i - 1, 1) + prices[i]);
    }
    cache[i][hold] = res;
    return res;
  }

  return dfs(len - 1, 0);
}
