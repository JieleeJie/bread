/**
 * https://leetcode.cn/problems/maximum-length-substring-with-two-occurrences/description/
 * 通讲解3，修改一下判断条件
 */
function maximumLengthSubstring(s: string): number {
  let answer = 0;
  let left = 0;
  const charCntMap = new Map<string, number>();
  for (let right = 0; right < s.length; right++) {
    const element = s[right];
    charCntMap.set(element, (charCntMap.get(element) ?? 0) + 1);
    while (charCntMap.get(element) > 2) {
      charCntMap.set(s[left], charCntMap.get(s[left]) - 1);
      left++;
    }
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}
