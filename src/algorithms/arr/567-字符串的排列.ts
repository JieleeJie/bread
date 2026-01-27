/**
 * https://leetcode.cn/problems/permutation-in-string/description/
 * 和 76 相似，只是判断条件不同：
 * 1. 缩小窗口的时机是 窗口大小 大于 s1.length()
 * 2. 判断是否找到了合法子串的条件是 valid === cntS1.size
 */
function checkInclusion(s1: string, s2: string): boolean {
  let slow = 0;
  let fast = 0;
  //  一个哈希表 cntS1 统计 s1 中每个字母的出现次数。因为可能有重复的字符
  const cntS1 = new Map<string, number>();
  //  一个哈希表 cntS2 统计 s2 中每个字母的出现次数。因为可能有重复的字符
  const cntS2 = new Map<string, number>();
  for (const ele of s1) {
    cntS1.set(ele, (cntS1.get(ele) || 0) + 1);
  }
  // 表示 cntS2 中 满足 cntS2[i] === cntS1[i] 的字母个数。如果 valid 和 cntS1.size 的大小相同，则说明子串已满足条件，结束
  let valid = 0;
  while (fast < s2.length) {
    if (cntS1.get(s2[fast])) {
      cntS2.set(s2[fast], (cntS2.get(s2[fast]) || 0) + 1);
      // 当 cntS2 中的字母出现次数等于 cntS1 中的字母出现次数时，valid 加 1。
      if (cntS2.get(s2[fast]) === cntS1.get(s2[fast])) {
        valid++;
      }
    }
    fast++;
    // 缩小窗口的时机是窗口大小 大于 s1.length()
    while (fast - slow >= s1.length) {
      if (valid === cntS1.size) {
        return true;
      }
      if (cntS1.get(s2[slow])) {
        if (cntS2.get(s2[slow]) === cntS1.get(s2[slow])) {
          valid--;
        }
        cntS2.set(s2[slow], (cntS2.get(s2[slow]) || 0) - 1);
      }
      slow++;
    }
  }
  return false;
}
