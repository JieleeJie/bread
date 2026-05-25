/**
 * https://leetcode.cn/problems/group-anagrams/description/
 * @param strs
 * @returns
 */
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map();
  for (const str of strs) {
    // 将排序后的字符串作为 map 的 key
    const ele = str.split('').sort().join('');
    if (map.has(ele)) {
      map.get(ele).push(str);
    } else {
      map.set(ele, [str]);
    }
  }
  return Array.from(map.values());
}
