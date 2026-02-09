/**
 * https://leetcode.cn/problems/watering-plants-ii/description/
 * 双向指针，同时维护两个水罐的剩余水容量
 * 当剩余水容量大于等于当前植物所需要的浇水量时，直接浇水 capA -= plants[i];
 * 当剩余水容量小于当前植物所需要的浇水量时，先装满水罐，result++;  capA = capacityA 再浇水，capA = capacityA - plants[i];
 * 最后指针相等时再比对一次
 */
function minimumRefill(plants: number[], capacityA: number, capacityB: number): number {
  // 当前 A 水罐的剩余容量
  let capA = capacityA;
  // 当前 B 水罐的剩余容量
  let capB = capacityB;
  let result = 0;
  let i = 0;
  let j = plants.length - 1;
  while (i < j) {
    if (capA >= plants[i]) {
      capA -= plants[i];
    } else {
      result++;
      capA = capacityA - plants[i];
    }
    i++;
    if (capB >= plants[j]) {
      capB -= plants[j];
    } else {
      result++;
      capB = capacityB - plants[j];
    }
    j--;
  }
  if (i === j && Math.max(capA, capB) < plants[i]) {
    result++;
  }
  return result;
}
