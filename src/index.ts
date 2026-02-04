import { testTwoSum } from './algorithms/two-sum';

/**
 * LeetCode 算法练习项目
 * 主入口文件
 */

function main(): void {
  console.log('🚀 欢迎使用 LeetCode 算法练习项目！');
  console.log('=====================================\n');

  // 运行两数之和测试
  testTwoSum();

  console.log('\n✅ 所有测试完成！');
}

// 如果直接运行此文件，则执行主函数
if (require.main === module) {
  main();
}

export { main };
