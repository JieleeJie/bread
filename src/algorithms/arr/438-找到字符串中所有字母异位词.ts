function findAnagrams(s: string, p: string): number[] {
  // 快慢指针
  let slow = 0;
  let fast = 0;
  //  一个哈希表 cntS 统计 s 中满足条件的子串的字母出现次数。可能有重复的字符, 所以用 map
  const cntS = new Map();
  //  一个哈希表 cntP 统计 p 中每个字母的出现次数。可能有重复的字符, 所以用 map
  const cntP = new Map();
  for (let i = 0; i < p.length; i++) {
    cntP.set(p[i], (cntP.get(p[i]) || 0) + 1);
  }
  // 索引
  const res = [];
  // 表示 cntS 中 满足 cntS[i] === cntP[i] 的字母个数。如果 eligible 和 cntP.size 的大小相同，则说明子串已满足条件，存一下索引
  let eligible = 0;
  while (fast < s.length) {
    if (cntP.has(s[fast])) {
      cntS.set(s[fast], (cntS.get(s[fast]) || 0) + 1);
      if (cntS.get(s[fast]) === cntP.get(s[fast])) {
        eligible++;
      }
    }
    fast++;
    // 缩小窗口的时机是窗口大小 大于等于 p.length()
    // 维护的是一个定长的窗口，窗口长度为 p.length()。因为定长窗口每次向前滑动时只会移出一个字符，所以可改用 if
    while (fast - slow >= p.length) {
      if (eligible === cntP.size) {
        res.push(slow);
      }
      if (cntP.has(s[slow])) {
        if (cntS.get(s[slow]) === cntP.get(s[slow])) {
          eligible--;
        }
        cntS.set(s[slow], cntS.get(s[slow]) - 1);
      }
      slow++;
    }
  }
  return res;
}
