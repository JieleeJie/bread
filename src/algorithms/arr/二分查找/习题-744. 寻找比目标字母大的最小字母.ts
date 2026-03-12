function lower_bound(letters: string[], target: number): number {
  let left = 0;
  let right = letters.length - 1;
  while (left <= right) {
    const middle = left + Math.floor((right - left) / 2);
    const midCharCode = letters[middle].charCodeAt(0) - 'a'.charCodeAt(0);
    if (midCharCode < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return left;
}

function addChar(ch: string, n: number) {
  return String.fromCharCode(ch.charCodeAt(0) + n);
}

/**
 * https://leetcode.cn/problems/find-smallest-letter-greater-than-target/description/
 * 不能直接用字符比较，需要借助 charCodeAt 将字符转为 UTF-16 码元
 */
function nextGreatestLetter(letters: string[], target: string): string {
  const _target = target.charCodeAt(0) - 'a'.charCodeAt(0) + 1;

  const charIndex = lower_bound(letters, _target);
  if (charIndex >= letters.length) {
    return letters[0];
  }
  return letters[charIndex];
}
