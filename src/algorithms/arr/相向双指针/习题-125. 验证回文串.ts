/**
 * https://leetcode.cn/problems/valid-palindrome/description/
 */
function isPalindrome(s: string, i: number, j: number): boolean {
  const str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  // 纯库方法
  // return str === str.split('').reverse().join('');
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
