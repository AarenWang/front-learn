# 现代 JavaScript 学习项目

这是一个专为现代 JavaScript 学习打造的互动式学习项目，与 `react-ts-learning/` 平级。项目提供 16 个循序渐进的课时，涵盖语言基础、工程化能力与项目实战，帮助你从入门到交付完整的现代前端应用。

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

> 若启动时报错 “The package "@esbuild/<platform>" could not be found”，通常是可选的 esbuild 二进制未被拉取。请删除 `node_modules` 后执行 `pnpm install --force`，并允许 pnpm 运行 esbuild 的构建脚本，完成后再重试 `pnpm dev`。

### 构建项目

```bash
pnpm build
```

### 运行测试

```bash
pnpm test
```

### 代码格式化

```bash
pnpm format
```

## 📚 16 课时学习蓝图

每个课时同时包含 **基础知识** 与 **项目实战** 两部分，并提供实践任务、验收标准与进阶资源，确保学练结合。

| 课时 | 主题 | 基础知识 | 项目实战 | 核心交付物 |
|------|------|----------|----------|------------|
| L1 | 现代 JavaScript 起航 | ECMAScript 演进、Node.js vs 浏览器、pnpm 工具链 | 开发环境体检脚本 | 环境检测 CLI、规范化配置 |
| L2 | 语法基础与数据类型 | let/const、解构、类型转换 | 旅行账单计算器 | 账单统计脚本、类型工具函数 |
| L3 | 函数、作用域与闭包 | 函数提升、this 绑定、闭包 | 函数式工具库 | compose/pipe、节流与防抖实现 |
| L4 | 对象、原型与类 | 原型链、class、Proxy | 插件化日志系统 | 多适配器日志服务、Proxy 监控 |
| L5 | 数组与可迭代对象 | Array API、迭代器、不可变数据 | 数据可视化准备器 | 数据清洗管道、生成器批量输出 |
| L6 | 模块化与包管理 | ES Modules、CommonJS、pnpm workspace | 模块化工具集合 | 私有包拆分与发布脚本 |
| L7 | DOM、事件与组件化 | DOM 操作、事件模型、Web Components | 无框架组件库雏形 | Button/Tabs 组件、可访问性支持 |
| L8 | 异步编程基础 | 事件循环、Promise 组合 | API 稳定器 | 重试与并发控制模块 |
| L9 | Async/Await 与数据流 | async/await、AbortController、Streaming | 数据同步服务 | 取消机制、并发队列、进度反馈 |
| L10 | 错误处理与调试 | Error 类型、调试技巧、Source Map | 浏览器调试助手 | 日志级别过滤、性能面板 |
| L11 | 浏览器存储与状态保持 | IndexedDB、Service Worker、安全策略 | 离线阅读器 | 数据持久化与缓存同步 |
| L12 | 构建工具与 Vite | Vite/ESBuild、环境变量、打包优化 | Vite 企业脚手架 | 多环境配置、bundle 分析、部署脚本 |
| L13 | 质量保障 | ESLint、Prettier、TypeScript 渐进式接入 | 质量基线工程 | Git Hooks、CI 检查管线 |
| L14 | 自动化测试与覆盖率 | Vitest、Testing Library、覆盖率策略 | 测试蓝图 | 单元/集成/E2E 测试方案 |
| L15 | 性能优化与监控 | Core Web Vitals、懒加载、监控指标 | 性能体检实验室 | 性能面板、懒加载策略、报警通道 |
| L16 | 终极实战 | 项目规划、CI/CD、可观测性 | 现代知识管理应用 | 单页应用交付、监控闭环 |

### 建议的 8 周学习节奏

| 周次 | 目标课时 | 重点收获 |
|------|----------|-----------|
| 第 1 周 | L1-L2 | 完成环境搭建与语法基础巩固 |
| 第 2 周 | L3-L4 | 熟悉函数式与面向对象双重范式 |
| 第 3 周 | L5-L6 | 理解数据结构与模块化工程能力 |
| 第 4 周 | L7-L8 | 强化 DOM 实战与异步编程基础 |
| 第 5 周 | L9-L10 | 构建稳定可靠的数据层与调试能力 |
| 第 6 周 | L11-L12 | 打通离线能力与现代构建工具链 |
| 第 7 周 | L13-L14 | 建立质量保障与测试体系 |
| 第 8 周 | L15-L16 | 聚焦性能优化并完成终极实战项目 |

## 🧭 交互式学习网页

运行 `pnpm dev` 后可以访问交互式学习网页：

- 首页展示 16 个课时卡片、学习进度与教学特点
- 每个课时页面提供基础知识、项目交付物、实践任务、验收标准与进阶资源
- 支持暗色模式与响应式布局，便于在不同设备上学习

## 🛠️ 技术栈

- **框架**: React 19 + TypeScript
- **构建工具**: Vite + pnpm
- **样式**: Tailwind CSS
- **测试**: Vitest + Testing Library
- **代码质量**: ESLint + Prettier

## 🤝 贡献指南

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feat/amazing-lesson`)
3. 提交更改 (`git commit -m "feat: add amazing lesson"`)
4. 推送到远程 (`git push origin feat/amazing-lesson`)
5. 发起 Pull Request

## 📄 许可证

本项目默认遵循仓库根目录的开源许可协议。

---

准备好，开始你的现代 JavaScript 探险之旅吧！🚀
