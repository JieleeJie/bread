/**
 * https://leetcode.cn/problems/product-of-array-except-self/
 * 维护两个数组，一个表示从左到右累乘(第i个位置维护前i个数的乘积)，另一个表示从右到左累乘（第j个位置维护j+1到数组末尾的乘积），最后将两个数组对应位置相乘即可
 * 注意：从左到右和从右到左的累乘数组初始化时，第一个元素和最后一个元素需为1
 */
function productExceptSelf(nums: number[]): number[] {
  const length = nums.length;
  const leftSum = new Array(length).fill(1);
  const rightSum = new Array(length).fill(1);
  const sum = new Array(length);
  for (let i = 1; i < length; i++) {
    leftSum[i] = leftSum[i - 1] * nums[i - 1];
  }
  console.log('🚀 ~ productExceptSelf ~ leftSum:', leftSum);

  for (let j = length - 2; j >= 0; j--) {
    rightSum[j] = rightSum[j + 1] * nums[j + 1];
  }
  console.log('🚀 ~ productExceptSelf ~ rightSum:', rightSum);

  for (let k = 0; k < length; k++) {
    sum[k] = leftSum[k] * rightSum[k];
  }

  return sum;
}
