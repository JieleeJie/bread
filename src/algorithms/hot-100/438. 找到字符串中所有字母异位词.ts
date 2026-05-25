/**
 * 定长滑动窗口；需要通过charCodeAt(0)给定索引处的 UTF-16 码元
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/description/
 * @param s
 * @param p
 * @returns
 */
const findAnagrams = function (s: string, p: string) {
  // 统计 p 的每种字母的出现次数
  const cntP = new Array(26).fill(0);
  for (const c of p) {
    cntP[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }

  const ans = [];
  const cntS = new Array(26).fill(0); // 统计 s 的长为 len(p) 的子串 t 的每种字母的出现次数
  for (let right = 0; right < s.length; right++) {
    cntS[s[right]!.charCodeAt(0) - 'a'.charCodeAt(0)]++; // 右端点字母进入窗口
    const left = right - p.length + 1;
    if (left < 0) {
      // 窗口长度不足 len(p)
      continue;
    }
    if (JSON.stringify(cntP) === JSON.stringify(cntS)) {
      ans.push(left);
    }
    cntS[s[left]!.charCodeAt(0) - 'a'.charCodeAt(0)]--; // 左端点字母离开窗口
  }
  return ans;
};
