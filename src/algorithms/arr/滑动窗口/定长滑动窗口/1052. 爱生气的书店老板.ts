/**
 * https://leetcode.cn/problems/grumpy-bookstore-owner/description/
 * 拆分两类，然后相加
 * 1. 老板不生气时的顾客数量之和 这些顾客可以感到满意
 * 2. 需要找到一个长度为 minutes 的窗口，使得该窗口内原本生气时的顾客总数（即不满意顾客总数）最大。再老板板使用技巧后，原本不满意的顾客也可以感到满意
 * 注意：维护的长度为 minutes 的窗口，不是该窗口内顾客总数最大，而是该窗口内生气的顾客总数最大
 */
function maxSatisfied(customers: number[], grumpy: number[], minutes: number): number {
  let notAngrySum = 0;
  let angrySum = 0;
  let maxAngrySum = 0;
  for (let right = 0; right < customers.length; right++) {
    notAngrySum += grumpy[right] === 0 ? customers[right] : 0;
    angrySum += grumpy[right] === 1 ? customers[right] : 0;
    const left = right - minutes + 1;
    if (left < 0) {
      continue;
    }
    maxAngrySum = Math.max(maxAngrySum, angrySum);
    angrySum -= grumpy[left] === 1 ? customers[left] : 0;
  }
  return notAngrySum + maxAngrySum;
}
