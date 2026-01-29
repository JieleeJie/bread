/**
 * https://leetcode.cn/problems/maximum-number-of-vowels-in-a-substring-of-given-length/description/
 * 遍历字符串，如果碰到元音字母，count++，
 * 因为是定长窗口k，左指针位置等于 right - k + 1;
 * 如果左指针位置的字母是元音字母，count--；
 * 在处理左指针逻辑前，先更新下maxCount
 */
function maxVowels(s: string, k: number): number {
  // 元音字母数
  let count = 0;
  // 最大元音字母数
  let maxCount = 0;
  for (let right = 0; right < s.length; right++) {
    if (['a', 'e', 'i', 'o', 'u'].includes(s[right])) {
      count++;
    }
    const left = right - k + 1;
    if (left < 0) {
      continue;
    }
    maxCount = Math.max(maxCount, count);
    if (['a', 'e', 'i', 'o', 'u'].includes(s[left])) {
      count--;
    }
  }
  return maxCount;
}
