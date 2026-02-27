/**
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/description/
 * 重复的字符一定来源于 right 指针指向的字符。
 * 用哈希表记录字符出现的次数，从而判断出是否出现重复字符
 * 出现重复字符则左端点右移，直至没有重复字符
 * 注意：没有重复字符时每次都需要更新结果
 */
function lengthOfLongestSubstring(s: string): number {
  let answer = 0;
  let left = 0;
  const charCntMap = new Map();
  // 枚举右端点
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    // 统计字符出现次数
    charCntMap.set(char, (charCntMap.get(char) ?? 0) + 1);
    // 出现重复字符则缩短窗口（左端点右移）
    while (charCntMap.get(char) > 1) {
      charCntMap.set(s[left], charCntMap.get(s[left]) - 1);
      left++;
    }
    // 如果 charCntMap.get(char) <= 1 没有重复字符，直接更新结果
    // 如果 charCntMap.get(char) > 1 上述步骤已移除重复字符。走到这，也没有重复字符了
    // 更新结果，结果即子串长度，即字符个数
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}
