/**
 * https://leetcode.cn/problems/coin-change/
 * @param coins
 * @param amount
 */

// 记忆化搜索
function coinChange1(coins: number[], amount: number): number {
  const n = coins.length;
  const cache: number[][] = Array.from({ length: n }, () => new Array(amount + 1).fill(-1));

  // 第i个物品，背包剩余容量c
  function dfs(i: number, c: number) {
    // 没有可选的了
    if (i < 0) {
      // 当剩余金额 c 为 0 时，不需要再继续增加硬币数，所以返回0
      return c === 0 ? 0 : Number.POSITIVE_INFINITY;
    }
    if (cache[i][c] !== -1) {
      return cache[i][c];
    }
    // 当前物品的体积大于背包剩余容量
    if (coins[i] > c) {
      return dfs(i - 1, c);
    }
    // 和01背包的区别只体现在这一行代码。dfs(i, c - w[i]) + v[i]
    const res = Math.min(dfs(i - 1, c), dfs(i, c - coins[i]) + 1);
    cache[i][c] = res;
    return res;
  }

  const answer = dfs(n - 1, amount);
  return answer < Number.POSITIVE_INFINITY ? answer : -1;
}

// 改成递推
function coinChange(coins: number[], amount: number): number {
  const n = coins.length;
  const m = amount + 1;
  // 因为 在循环时 i-1 会越界，所以改为 i+1，对应长度 n+1
  // 参数 c 的取值范围是 [0, capacity]，这是一个闭区间，包含了 0 和 capacity 这两个端点。所以长度为 m+1
  const f: number[][] = Array.from({ length: n + 1 }, () => new Array().fill(Infinity));

  // 从上述记忆化搜索边界条件可知：i=0 c=0时，满足条件，此时不再需要硬币，返回0,其他时候都初始化为无穷大，
  f[0][0] = 0;
  for (let i = 0; i < n; i++) {
    const x = coins[i];
    // 这儿 c <= m 或 c <= amount 都行
    for (let c = 0; c <= amount; c++) {
      if (c < x) {
        f[i + 1][c] = f[i][c];
      } else {
        f[i + 1][c] = Math.min(f[i][c], f[i + 1][c - x] + 1);
      }
    }
  }

  const answer = f[n][amount];
  return answer < Number.POSITIVE_INFINITY ? answer : -1;
}
