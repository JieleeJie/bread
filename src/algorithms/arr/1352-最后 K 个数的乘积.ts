/**
 * https://leetcode.cn/problems/product-of-the-last-k-numbers/
 * 维护一个前缀积数组，第一项为1，遇到0，则前面的数的乘积都为0，可以重置前缀积为[1]（可以理解为重新开始）
 * 因此 当前缀积数组的长度小于k时，肯定后 k 个数中存在 0，返回0
 * 否则 前缀积数组最后一位除以倒数第k个数的前缀积，即为后k个数的乘积
 * 注意，不存在0的时候，前缀积数组的长度为输入数字的长度 +1，因为多了初始化第一位的[1]
 */

// 暴力法
// class ProductOfNumbers {
//   numArr: number[] = [];

//   constructor() {}

//   add(num: number): void {
//     this.numArr.push(num);
//   }

//   getProduct(k: number): number {
//     const len = this.numArr.length;
//     let prod = 1;
//     for (let i = len - k; i < len; i++) {
//       prod *= this.numArr[i];
//     }

//     return prod;
//   }
// }

// 前缀积
class ProductOfNumbers {
  productArr: number[] = [1];
  constructor() {}

  add(num: number): void {
    if (num === 0) {
      this.productArr = [1];
    } else {
      this.productArr.push(this.productArr[this.productArr.length - 1] * num);
    }
  }

  getProduct(k: number): number {
    const len = this.productArr.length;
    if (len <= k) {
      return 0;
    } else {
      return this.productArr[len - 1] / this.productArr[len - k - 1];
    }
  }
}

// const nums = [3, 2, 2, 5, 4];
// const productArr = [1, 3, 6, 12, 60, 240];

// const nums = [3, 2, 2, 0, 5, 4];
// const productArr1 = [1, 3, 6, 12, 0];
// 遇到零重置为[1];
// const productArr2 = [1, 5, 20];
