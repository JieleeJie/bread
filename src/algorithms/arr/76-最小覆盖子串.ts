/**
 * 非常经典，但过于复杂，体会思想即可。
 * 解题参考：
 * 1. https://labuladong.online/zh/algo/essential-technique/sliding-window-framework/#%E4%B8%80%E6%9C%80%E5%B0%8F%E8%A6%86%E7%9B%96%E5%AD%90%E4%B8%B2
 * 2. https://leetcode.cn/problems/minimum-window-substring/solutions/2713911/liang-chong-fang-fa-cong-o52mn-dao-omnfu-3ezz/
 */
function minWindow(s: string, t: string): string {
  // 快慢指针
  let slow = 0;
  let fast = 0;
  // 最短子串 的起始位置和长度
  let shortestStrStart = 0;
  let shortestStrLength = Number.MAX_SAFE_INTEGER;
  // 一个哈希表 cntS，用来统计 s 子串中每个字母的出现次数。
  const cntS = new Map<string, number>();
  //  一个哈希表 cntT 统计 t 中每个字母的出现次数。
  const cntT = new Map<string, number>();
  for (const element of t) {
    cntT.set(element, (cntT.get(element) || 0) + 1);
  }
  // 表示 cntS 中 满足 cntS[i] === cntT[i] 的字母个数。如果 valid 和 cntT.size 的大小相同，则说明子串已满足条件，已经完全覆盖了串 t。
  let valid = 0;
  // 开始遍历
  while (fast < s.length) {
    if (cntT.has(s[fast])) {
      cntS.set(s[fast], (cntS.get(s[fast]) || 0) + 1);
      // 当 cntS 中的字母出现次数等于 cntT 中的字母出现次数时，valid 加 1。
      if (cntS.get(s[fast]) === cntT.get(s[fast])) {
        valid++;
      }
    }
    fast++;
    // 当 valid 等于 cntT 的大小，说明子串中包含了 t 中的所有字母，此时可以开始移动慢指针，缩短窗口
    while (valid === cntT.size) {
      // 更新最小子串
      if (fast - slow < shortestStrLength) {
        shortestStrStart = slow;
        shortestStrLength = fast - slow;
      }
      if (cntT.has(s[slow])) {
        if (cntS.get(s[slow]) === cntT.get(s[slow])) {
          valid--;
        }
        cntS.set(s[slow], (cntS.get(s[slow]) || 0) - 1);
      }
      slow++;
    }
  }

  return shortestStrLength === Number.MAX_SAFE_INTEGER
    ? ''
    : s.substring(shortestStrStart, shortestStrStart + shortestStrLength);
}
