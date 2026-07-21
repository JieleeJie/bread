/**
 * https://leetcode.cn/problems/combination-sum-iii/description/
 * @param k
 * @param n
 */

function sum(arr: number[]) {
  return arr.reduce((pre, cur) => pre + cur, 0);
}

function combinationSum3(k: number, n: number): number[][] {
  const answer: number[][] = [];
  const path: number[] = [];

  function dfs(i: number) {
    // 剪枝 - 还需要 remain 个数
    const remain = k - path.length;
    // 但剩余的数量小于 remain
    if (n - i + 1 < remain) {
      return;
    }
    // 剪枝 - 已选元素之和已经大于 n 了
    if (sum(path) > n) {
      return;
    }
    if (path.length === k && sum(path) === n) {
      answer.push(path.slice());
      return;
    }
    // 注意要求数字为 1-9
    for (let j = i; j <= 9; j++) {
      path.push(j);
      dfs(j + 1);
      path.pop();
    }
  }

  dfs(1);

  return answer;
}
