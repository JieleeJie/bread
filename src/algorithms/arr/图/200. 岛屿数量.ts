function numIslands(grid: string[][]): number {
  let answer = 0;

  const rowLength = grid.length;
  const colLength = grid[0]?.length;

  const inArea = (row: number, col: number) => {
    return 0 <= row && row <= rowLength && 0 <= col && col <= colLength!;
  };

  const dfs = (row: number, col: number) => {
    // 不在区间范围内
    if (!inArea) {
      return;
    }
    // 不是岛屿
    if (grid[row]?.[col] !== '1') {
      return;
    }
    // 防止重复遍历
    grid[row]![col] = '2';
    dfs(row, col - 1);
    dfs(row, col + 1);
    dfs(row - 1, col);
    dfs(row + 1, col);
  };

  for (let r = 0; r < rowLength; r++) {
    for (let c = 0; c < colLength!; c++) {
      if (grid[r]?.[c] === '1') {
        dfs(r, c);
        answer++;
      }
    }
  }

  return answer;
}
