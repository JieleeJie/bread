/**
 * https://leetcode.cn/problems/palindrome-partitioning/
 * 回溯三问：
 * 当前操作？选择回文子串[i,j] 加入path
 * 子问题？从下标≥i的后缀中构造回文分割
 * 下一个子问题？从下标≥j+1的后缀中构造回文分割
 */

// 回文串判断
function isPalindrome(s: string, left: number, right: number) {
  while (left < right) {
    if (s.charAt(left++) !== s.charAt(right--)) {
      return false;
    }
  }
  return true;
}

function partition(s: string): string[][] {
  const answer: string[][] = [];
  const path: string[] = [];
  const len = s.length;

  function dfs(i: number) {
    // 因为每个字母都需要在答案中，所以得等分割完以后再更新答案
    if (i === len) {
      answer.push(path.slice());
      return;
    }

    // 从下标≥i的后缀中构造回文分割
    for (let j = i; j < len; j++) {
      // 选择回文子串[i,j] 加入path
      if (isPalindrome(s, i, j)) {
        path.push(s.substring(i, j + 1));
        // 从下标≥j+1的后缀中构造回文分割
        dfs(j + 1);
        path.pop();
      }
    }
  }

  dfs(0);

  return answer;
}
