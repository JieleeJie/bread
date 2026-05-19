/**
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/?envType=study-plan-v2&envId=top-100-liked
 */
function lengthOfLongestSubstring(s: string): number {
  let answer = 0;
  const map = new Map();
  let left = 0;
  for (let right = 0; right < s.length; right++) {
    const element = s[right];
    map.set(element, (map.get(element) || 0) + 1);
    // 当有重复字符出现的时候，一直移动左指针直到没有重复字符的时候。
    // 注意，移动左指针的同时，更新左指针元素对应值
    while (map.get(element) > 1) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }
    answer = Math.max(answer, right - left + 1);
  }
  return answer;
}
