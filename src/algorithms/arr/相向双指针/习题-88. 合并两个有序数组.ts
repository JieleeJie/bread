/**
 https://leetcode.cn/problems/merge-sorted-array/
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // 库方法
  // nums1.splice(m, n, ...nums2);
  // nums1.sort((a, b) => a - b);
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1;
  while (p2 >= 0) {
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1];
      p1--;
      p--;
    } else {
      nums1[p] = nums2[p2];
      p2--;
      p--;
    }
  }
}
