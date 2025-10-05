# 现代 TypeScript 16 课系统课程

欢迎加入现代 TypeScript 学习计划！本项目基于 Vite + React + TypeScript 构建，提供 16 个循序渐进的课时，结合基础理论与项目实战，帮助你从零掌握 TypeScript 并将其应用到真实业务中。

## 🔍 课程理念
- **理解背景**：从 TypeScript 的诞生缘由、核心理念与生态发展入手，建立正确的学习心智模型。
- **扎实类型系统**：通过类型推断、泛型、类型操控等专题全面理解 TypeScript 类型系统的设计哲学与落地方式。
- **聚焦工程化**：系统掌握编译配置、工具链、与 JavaScript 的互操作，以及在框架与后端场景下的最佳实践。
- **项目驱动**：每课配有实践任务与进阶挑战，帮助你在真实业务语境中消化所学内容。

## 🗺️ 16 课时规划
| 课时 | 主题 | 核心知识点 | 实战与作业 |
|------|------|------------|------------|
| L0 | TypeScript 起源与现代生态 | 微软创建背景、JS 痛点、TS 的定位与演进路线 | 阅读官方路线图，整理 TS 解决的团队协作痛点 |
| L1 | 从 TS 到 JS：工具链初体验 | tsc CLI、tsconfig.json、编译产物结构、ESNext 目标 | 构建首个 `Hello TS`，输出编译日志并解释关键配置 |
| L2 | 基础类型与类型推断 | 基本类型、类型推断、字面量类型、严格模式 | 重构 JavaScript 表单校验脚本，增加类型标注与推断 |
| L3 | 函数与 this 的类型系统 | 函数签名、可选参数、重载、this 参数 | 为事件委托工具函数编写类型，验证重载的调用安全 |
| L4 | 接口、类型别名与结构类型 | interface vs type、交叉类型、结构化类型系统 | 建模一个用户领域模型并实现风格统一的类型导出 |
| L5 | 面向对象与类装饰 | class 成员修饰符、继承、抽象类、装饰器提案 | 使用类封装请求层，比较 TS 与 JS 写法差异 |
| L6 | 泛型基础 | 泛型函数、约束、默认值、泛型接口 | 为一个仓储（Repository）工具库设计泛型接口 |
| L7 | 泛型进阶与工具类型 | 条件类型、映射类型、keyof、infer、内置工具类型 | 用条件类型实现 API 响应类型提取工具 |
| L8 | 模块化与命名空间 | ES 模块、模块解析策略、声明文件组织 | 规划大型项目的类型目录结构，提炼公共类型包 |
| L9 | 类型守卫与控制流分析 | 类型谓词、in/instanceof、自定义守卫、可辨识联合 | 在表单状态机中编写类型守卫，消除 `any` |
| L10 | 异步与并发类型 | Promise、async/await、Awaited、基于泛型的流式类型 | 为批处理任务调度器定义严格的异步返回值 |
| L11 | 声明文件与第三方库 | DefinitelyTyped、编写 d.ts、全局变量声明 | 为未提供类型的 SDK 编写声明文件并在项目中应用 |
| L12 | React + TS 组件模式 | 函数组件类型、props 泛型、事件类型、Hook 类型 | 完成一个响应式面板组件，聚焦类型推导 |
| L13 | Node.js 与后端类型实战 | 类型安全的接口定义、zod + ts、依赖注入 | 构建简单的 REST API 类型契约与服务实现 |
| L14 | 构建工具与工程集成 | ESLint + TypeScript、tsup/esbuild、路径别名 | 配置统一的构建脚本并输出 ESM/CJS 双版本 |
| L15 | Capstone：类型驱动的产品迭代 | 综合演练、类型驱动开发、CI 校验、覆盖率 | 完成端到端的小型产品迭代，提交 PR 并通过 CI |

## 📚 学习资源建议
- 《Programming TypeScript》第二版
- TypeScript 官方文档与 Handbook
- Basarat 的《TypeScript Deep Dive》开源电子书
- Microsoft Learn：TypeScript 学习路径

## 🛠️ 技术栈
- **框架**：React 19 + TypeScript
- **构建工具**：Vite
- **样式**：Tailwind CSS
- **状态管理**：Zustand
- **数据层**：TanStack Query 示例
- **验证工具**：Zod
- **测试**：Vitest + React Testing Library

## 🚀 快速开始
```bash
pnpm install
pnpm dev
```

更多命令（构建、测试、部署等）与 `react-ts-learning` 项目一致，可参考根目录下的 `DEPLOYMENT.md`、`DEPLOY_CHECKLIST.md`。

---

准备好开始现代 TypeScript 之旅了吗？立即运行项目，探索交互式学习体验吧！
