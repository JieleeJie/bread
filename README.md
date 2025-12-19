# LeetCode 算法练习项目 (TypeScript)

这是一个用于练习 LeetCode 算法题的 TypeScript 项目，配置了完整的开发环境，包括 ESLint 和 Prettier。

## 🚀 快速开始

### 安装依赖
```bash
npm install
```

### 运行项目
```bash
# 开发模式运行（推荐）
npm run dev

# 编译后运行
npm run build
npm start
```

## 📁 项目结构

```
├── src/
│   ├── algorithms/          # 算法实现
│   │   └── two-sum.ts      # 两数之和示例
│   ├── data-structures/     # 数据结构实现
│   ├── utils/              # 工具函数
│   └── index.ts            # 主入口文件
├── dist/                   # 编译输出目录
├── .eslintrc.js           # ESLint 配置
├── .prettierrc            # Prettier 配置
├── tsconfig.json          # TypeScript 配置
└── package.json           # 项目配置
```

## 🛠️ 可用脚本

| 命令 | 说明 |
|------|------|
| `npm run dev` | 开发模式运行项目 |
| `npm run build` | 编译 TypeScript 代码 |
| `npm start` | 运行编译后的代码 |
| `npm run lint` | 检查代码规范 |
| `npm run lint:fix` | 自动修复代码规范问题 |
| `npm run format` | 格式化代码 |
| `npm run format:check` | 检查代码格式 |
| `npm run clean` | 清理编译输出 |
| `npm run watch` | 监听模式编译 |

## 💡 使用指南

### 1. 创建新的算法文件

在 `src/algorithms/` 目录下创建新的 `.ts` 文件，例如：

```typescript
/**
 * LeetCode XXX. 题目名称
 * 题目描述...
 */

function solutionName(params: ParamType[]): ReturnType {
  // 实现算法逻辑
  return result;
}

// 测试用例
function testSolutionName(): void {
  console.log('=== 题目名称 测试 ===');
  
  const testCases = [
    { input: [], expected: [] },
    // 更多测试用例...
  ];
  
  testCases.forEach((testCase, index) => {
    const result = solutionName(testCase.input);
    console.log(`测试用例 ${index + 1}:`);
    console.log(`输入: ${JSON.stringify(testCase.input)}`);
    console.log(`输出: ${JSON.stringify(result)}`);
    console.log(`期望: ${JSON.stringify(testCase.expected)}`);
    console.log('---');
  });
}

export { solutionName, testSolutionName };
```

### 2. 在主文件中导入并运行

在 `src/index.ts` 中导入你的测试函数：

```typescript
import { testSolutionName } from './algorithms/your-algorithm';

function main(): void {
  console.log('🚀 欢迎使用 LeetCode 算法练习项目！');
  console.log('=====================================\n');
  
  // 运行你的测试
  testSolutionName();
  
  console.log('\n✅ 所有测试完成！');
}
```

### 3. 运行和调试

```bash
# 运行项目
npm run dev

# 检查代码规范
npm run lint

# 格式化代码
npm run format
```

## 🔧 开发工具配置

### VSCode 推荐扩展
- TypeScript Importer
- ESLint
- Prettier - Code formatter
- TypeScript Hero

### ESLint 规则
- 使用 TypeScript 推荐规则
- 集成 Prettier 格式化
- 允许 console.log（用于算法调试）
- 严格的类型检查

### Prettier 配置
- 使用单引号
- 添加分号
- 行宽 80 字符
- 2 空格缩进

## 📝 代码规范

1. **函数命名**: 使用驼峰命名法，函数名应该清晰表达功能
2. **类型注解**: 为所有函数参数和返回值添加类型注解
3. **注释**: 为每个算法添加详细的注释，包括时间复杂度和空间复杂度
4. **测试**: 为每个算法编写测试用例

## 🎯 示例

项目已包含一个完整的示例：**两数之和**（`src/algorithms/two-sum.ts`），展示了：
- 多种解法实现
- 完整的类型注解
- 详细的注释说明
- 完整的测试用例

## 📚 学习资源

- [LeetCode 官网](https://leetcode.com/)
- [TypeScript 官方文档](https://www.typescriptlang.org/)
- [算法与数据结构可视化](https://visualgo.net/)

---

Happy Coding! 🎉