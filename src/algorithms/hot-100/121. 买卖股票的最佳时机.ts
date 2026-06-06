/**
 * https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/
 * 维护一个最大利润answer 肯定还需要一个最低价 minPrice, 遍历的时候更新
 */

function maxProfit(prices: number[]): number {
  let answer = 0;
  let minPrice = prices[0];
  for (const curPrice of prices) {
    answer = Math.max(answer, curPrice - minPrice);
    minPrice = Math.min(minPrice!, curPrice);
  }
  return answer;
}
