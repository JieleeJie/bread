/**
 * 有 n 中物品，第i 个物品的体积为 w[i]，价值为 v[i]。每种物品可以无限次重复选，求体积和不超过capacity时的最大价值和
 * capacity: 背包容量
 * w[i]: 第 i 个物品的体积
 * v[i]: 第 i 个物品的价值
 */
function unbounded_knapsack(capacity: number, w: number[], v: number[]): number {
  const n = w.length;
  // 初始化二维缓存，行数 n，列数 capacity+1，全部填充 -1
  // 列数 capacity+1：当 列数 = capacity 时，有效索引是 0 到 capacity - 1，无法访问 c = capacity 这个初始状态
  // 或者说，参数 c（当前剩余容量）的取值范围是 [0, capacity]，这是一个闭区间，包含了 0 和 capacity 这两个端点。
  const cache: number[][] = Array.from({ length: n }, () => new Array(capacity + 1).fill(-1));

  // 第i个物品，背包剩余容量c
  function dfs(i: number, c: number) {
    // 没有可选的了
    if (i < 0) {
      return 0;
    }
    if (cache[i][c] !== -1) {
      return cache[i][c];
    }
    // 当前物品的体积大于背包剩余容量
    if (w[i] > c) {
      return dfs(i - 1, c);
    }
    // 和01背包的区别只体现在这一行代码。dfs(i, c - w[i]) + v[i]
    const res = Math.max(dfs(i - 1, c), dfs(i, c - w[i]) + v[i]);
    cache[i][c] = res;
    return res;
  }

  return dfs(n - 1, capacity);
}
