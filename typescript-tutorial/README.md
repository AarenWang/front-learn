# TypeScript 详细自学教程

> 基于 modern-typescript-learning 项目的 TypeScript 16 课详细自学教程

## 📚 课程概述

本教程以 TypeScript 类型系统为核心，结合 React 组件、后端类型、安全约束与构建工具，帮助开发者掌握类型驱动的工程实践。

## 🎯 学习目标

- 掌握 TypeScript 核心类型系统和高级特性
- 学会在 React 项目中有效使用 TypeScript
- 理解 Node.js 后端开发的类型安全实践
- 掌握工程化工具链的配置和集成
- 培养类型驱动开发的思维模式

## 📖 课程大纲

### 基础阶段 (L0-L5)

| 课时 | 主题 | 核心知识点 | 实战/作业 |
| --- | --- | --- | --- |
| [L0](./L0-TypeScript起源与生态.md) | TypeScript 起源与生态 | TS 背景、路线图、痛点分析 | 梳理团队痛点与官方路线图 |
| [L1](./L1-工具链初体验.md) | 工具链初体验 | `tsc`、`tsconfig`、编译目标 | 初始化 `Hello TS` 与编译日志 |
| [L2](./L2-基础类型与推断.md) | 基础类型与推断 | 基本类型、字面量类型、严格模式 | 重构表单校验脚本 |
| [L3](./L3-函数与this.md) | 函数与 this | 函数签名、重载、`this` 参数 | 事件委托工具函数类型设计 |
| [L4](./L4-接口与类型别名.md) | 接口与类型别名 | interface vs type、交叉类型 | 建模用户领域模型 |
| [L5](./L5-面向对象与装饰器.md) | 面向对象与装饰器 | 类成员修饰、抽象类、装饰器提案 | 封装请求层服务 |

### 进阶阶段 (L6-L10)

| 课时 | 主题 | 核心知识点 | 实战/作业 |
| --- | --- | --- | --- |
| [L6](./L6-泛型基础.md) | 泛型基础 | 泛型函数、约束、默认值 | 仓储工具库接口设计 |
| [L7](./L7-泛型进阶.md) | 泛型进阶 | 条件类型、映射类型、`infer` | API 响应类型提取工具 |
| [L8](./L8-模块化与声明组织.md) | 模块化与声明组织 | ES 模块、模块解析、类型目录规划 | 拆分公共类型包 |
| [L9](./L9-类型守卫与控制流.md) | 类型守卫与控制流 | 类型谓词、可辨识联合、控制流分析 | 表单状态机类型守卫 |
| [L10](./L10-异步与并发类型.md) | 异步与并发类型 | Promise、`Awaited`、流式类型 | 批处理调度器类型定义 |

### 实战阶段 (L11-L15)

| 课时 | 主题 | 核心知识点 | 实战/作业 |
| --- | --- | --- | --- |
| [L11](./L11-声明文件与第三方库.md) | 声明文件与第三方库 | DefinitelyTyped、`d.ts` 编写 | 为未提供类型的 SDK 写声明 |
| [L12](./L12-React+TS组件模式.md) | React + TS 组件模式 | Props 泛型、事件类型、Hook 类型 | 响应式面板组件 |
| [L13](./L13-Node.js与后端类型.md) | Node.js 与后端类型 | 接口契约、Zod + TS、依赖注入 | REST API 类型契约与服务 |
| [L14](./L14-构建工具与工程集成.md) | 构建工具与工程集成 | ESLint、tsup、路径别名 | 输出 ESM/CJS 双版本包 |
| [L15](./L15-Capstone类型驱动迭代.md) | Capstone 类型驱动迭代 | 类型驱动开发、CI 校验 | 完成端到端小型产品迭代 |

## 🚀 快速开始

1. 确保已安装 Node.js (推荐 v18+)
2. 克隆或下载本教程
3. 按照课时顺序学习，每课都包含理论讲解和实践练习

## 📝 学习建议

- **循序渐进**：按课时顺序学习，不要跳跃
- **实践为主**：每个课时都有对应的练习，务必动手实践
- **举一反三**：在理解基础上尝试扩展和优化
- **总结思考**：记录学习笔记，形成知识体系

## 🛠️ 环境准备

```bash
# 安装 TypeScript
npm install -g typescript

# 安装常用工具
npm install -g ts-node nodemon

# 查看版本
tsc --version
```

## 📖 学习资源

- [TypeScript 官方文档](https://www.typescriptlang.org/docs/)
- [TypeScript GitHub 仓库](https://github.com/microsoft/TypeScript)
- [DefinitelyTyped](https://definitelytyped.org/)

---

开始你的 TypeScript 学习之旅吧！从 [L0 - TypeScript 起源与生态](./L0-TypeScript起源与生态.md) 开始。