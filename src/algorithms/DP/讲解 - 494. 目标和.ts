/**
 * https://leetcode.cn/problems/target-sum/description/
 * 
 * - p是正数的累计和
- s-p是nums的和减去正数和得到的负数和
- `p-(s-p)` 在nums中添加完正负号后应该等于target(t)，则 `p = (s+t)/2`
- 问题转化成从 nums 数组中选择一些数字，使得它们的和恰好等于 `(s+t)/2` 的 方案数
- 加上题目条件可知，(s+t) 必然＞0且是偶数
 */

// 记忆化搜索
function findTargetSumWays1(nums: number[], target: number): number {
  // 转换为子集和问题：求和为 (sum + target) / 2 的方案数
  const numsSum = nums.reduce((acc, cur) => acc + cur);
  target = numsSum + target;
  if (target < 0 || target % 2 !== 0) return 0;
  target = target / 2;

  const n = nums.length;
  // 初始化二维缓存，行数 n，列数 target+1，全部填充 -1
  const cache: number[][] = Array.from({ length: n }, () => new Array(target + 1).fill(-1));

  // 把0-1背包代码拿过来修改一下
  function dfs(i: number, c: number) {
    // 递归终止：没有数字可选了
    if (i < 0) {
      // c === 0 表明 target 刚好减完，返回1表示这个方案可选，其他返回0
      return c === 0 ? 1 : 0;
    }
    // 当前状态已计算过，直接返回
    if (cache[i][c] !== -1) {
      return cache[i][c];
    }
    // 当前数字大于剩余容量，只能跳过
    if (nums[i] > c) {
      return dfs(i - 1, c);
    }
    // 不选 + 选当前数字
    const res = dfs(i - 1, c) + dfs(i - 1, c - nums[i]);
    cache[i][c] = res;
    return res;
  }

  return dfs(n - 1, target);
}

// 递推
function findTargetSumWays(nums: number[], target: number): number {
  // 转换为子集和问题：求和为 (sum + target ) / 2 的方案数
  const numsSum = nums.reduce((acc, cur) => acc + cur);
  target = numsSum + target;
  if (target < 0 || target % 2 !== 0) return 0;
  const m = target / 2;

  const n = nums.length;

  // 因为 在循环时 i-1 会越界，所以改为 i+1，对应长度 n+1
  // 参数 c 的取值范围是 [0, capacity]，这是一个闭区间，包含了 0 和 capacity 这两个端点。所以长度为 m+1
  const f: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  // 从上述记忆化搜索边界条件可知：i=0 c=0时，满足条件，即方案数为1，
  f[0][0] = 1;
  for (let i = 0; i < nums.length; i++) {
    const x = nums[i];
    for (let c = 0; c <= m; c++) {
      if (c < x) {
        f[i + 1][c] = f[i][c];
      } else {
        f[i + 1][c] = f[i][c] + f[i][c - x];
      }
    }
  }

  return f[n][m];
}

/**
 * 空间优化1 - 使用滚动数组：只用两个数组元素
 * 由于 f[i + 1][c] = f[i][c] + f[i][c - x]; 只会用到 f[i + 1] 和 f[i] 两个维度，
 * 如，算完f[0]和f[1]后，算f[2]时，f[2][c] = f[1][c] + f[1][c - x]; 此时 f[0] 没用上，此时可以用f[0]来存f[2]的结果
 * 代码实现上把 i 和 i+1 都模 2 就行
 */
// 实现如下
// if (c < x) {
//   f[(i + 1) % 2][c] = f[i % 2][c];
// } else {
//   f[(i + 1) % 2][c] = f[i % 2][c] + f[i % 2][c - x];
// }
// ...
// return f[n%2][m];

/**
 * 空间优化2 - 使用一个数组：
 * f[i + 1][c] = f[i][c] + f[i][c - x]; 优化为
 * f[c] = [c] + [c - x]; 具体看视频
 */
