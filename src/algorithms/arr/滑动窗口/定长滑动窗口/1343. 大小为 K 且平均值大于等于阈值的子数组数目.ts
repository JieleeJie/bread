/**
 * https://leetcode.cn/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/description/
 * 遍历arr。summ += arr[right]
 * 当窗口长度未达到 k 时，无需处理
 * 当窗口长度达到 k 时，计算平均值了，如果平均值大于等于threshold，count++；
 * 左指针移动时 sum -= arr[left];
 */
function numOfSubarrays(arr: number[], k: number, threshold: number): number {
  // 统计子数组和
  let sum = 0;
  // 统计符合条件的子数组个数
  let count = 0;
  for (let right = 0; right < arr.length; right++) {
    sum += arr[right];
    const left = right - k + 1;
    if (left < 0) {
      continue;
    }
    if (sum / k >= threshold) {
      count++;
    }
    sum -= arr[left];
  }

  return count;
}
