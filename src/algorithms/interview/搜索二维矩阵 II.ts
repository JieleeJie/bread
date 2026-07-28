/**
 * https://leetcode.cn/problems/search-a-2d-matrix-ii/
 * @param matrix
 * @param target
 * @returns
 */

// 有序数组搜索，应该想到二分；
// 问题是如何分：左上角的值最小，右下角的值最大，搜索时都可以往两个方向（横着竖着）走
// 对于 右上角（左下角）这种中间值。横着往左走肯定是小于，竖着往下走肯定是大于
function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;
  let i = 0;
  let j = n - 1;

  while (i < m && j >= 0) {
    if (matrix[i][j] === target) {
      return true;
    }
    if (matrix[i][j] > target) {
      j--;
    } else {
      i++;
    }
  }

  return false;
}

// 单维数组二分。竖着遍历时，横着使用二分
function searchMatrix11(matrix: number[][], target: number): boolean {
  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i][0] <= target && bsearch(matrix[i], target)) return true;
    if (matrix[i][0] > target) return false;
  }
  return false;
}

function bsearch(array: number[], target: number): boolean {
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (target === array[mid]) return true;
    else if (target < array[mid]) right = mid - 1;
    else left = mid + 1;
  }
  return false;
}
