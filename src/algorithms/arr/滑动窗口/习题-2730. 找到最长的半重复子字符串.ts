/**
 * https://leetcode.cn/problems/find-the-longest-semi-repetitive-substring/description/
 * 移动右指针 right，并统计相邻相同的情况出现了多少次，记作 same。
 * 如果 same>1，则不断移动左指针 left 直到 s[left]=s[left−1]。此时将一对相同的字符移到窗口之外。然后将 same 置为 1。
 */
function longestSemiRepetitiveSubstring(s: string): number {
  // 如果将 answer 初始化为 1，就无需该特殊判断
  if (s.length <= 1) {
    return 1;
  }
  let answer = 0;
  let same = 0;
  let left = 0;
  for (let right = 1; right < s.length; right++) {
    if (s[right] === s[right - 1]) {
      same++;
    }
    if (same > 1) {
      // left先移动一次，方便判断
      left++;
      // 当 s[left]=s[left−1]。表明将一对相同的字符移到窗口之外。此时将 same 置为 1
      while (s[left] !== s[left - 1]) {
        left++;
      }
      same = 1;
    }
    answer = Math.max(answer, right - left + 1);
  }

  return answer;
}
