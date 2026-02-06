/**
 * https://leetcode.cn/problems/container-with-most-water/description/
 * 指针的移动取决于高度较低（AAA）的那一侧。
 * 如果移动高度较高(BBB)的指针，指针之间的面积只会减小
 * 因为宽度会减小，高度也不会增加。
 * 高度也不会增加，是因为移动后的高度(CCC), 如果 CCC > AAA, 计算面积时用的是短的那一侧即 AAA 的高度
 * 如果 CCC < AAA, 高度降低  面积肯定更低
 */
function maxArea(height: number[]): number {
  let maxArea = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    maxArea = Math.max(area, maxArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxArea;
}
