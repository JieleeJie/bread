/**
 * 1. https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 * 注意两点：
 * 出现重复字符则缩短窗口。
 * 更新 maxLen时机：缩短窗口完成，此时没有重复子串
 */
function lengthOfLongestSubstring(s: string): number {
  // 快慢指针
  let slow = 0;
  let fast = 0;
  // 一个 map 存储字符出现次数
  const map = new Map();
  // 最长子串长度
  let maxLen = 0;
  while (fast < s.length) {
    // 统计字符出现次数
    const fastCurrentChar = s[fast];
    map.set(fastCurrentChar, (map.get(fastCurrentChar) || 0) + 1);
    fast++;
    // 出现重复字符则缩短窗口。可能有重复字符 如示例中 s 为 pwwkew 时，map.get('w') 为 2，所以需要使用while 而不是 if
    // 注意 此处使用 map.get(fastCurrentChar) 而不是 map.get(s[fast])，因为 fast 已经自增了
    while (map.get(fastCurrentChar) > 1) {
      map.set(s[slow], map.get(s[slow]) - 1);
      slow++;
    }
    // 缩短窗口完成，即没有重复子串，此时更新 maxLen
    maxLen = Math.max(maxLen, fast - slow);
  }
  return maxLen;
}
