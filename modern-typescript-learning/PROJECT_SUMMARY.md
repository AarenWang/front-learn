# 现代 TypeScript 交互式学习项目概览

本项目提供一个以 16 个课时为主线的现代 TypeScript 学习平台，涵盖语言起源、类型系统与工程化实践。

## ✅ 已完成能力

### 1. 学习体验
- 首页展示课程进度、核心亮点与 16 个课时卡片。
- 每个课时页面支持任务勾选、项目里程碑切换与 TS ⇆ JS 代码对照。
- 重点内容围绕 TypeScript 起源、类型系统进阶与编译工具链。

### 2. 技术栈
- Vite + React + TypeScript
- Tailwind CSS 深浅色主题
- React Router v7 路由
- Zustand、TanStack Query、React Hook Form、Zod（示例可扩展）
- Vitest + Testing Library 测试脚手架

### 3. 目录结构
```
src/
├── app/               # 路由与应用入口
├── components/        # UI 组件（按钮、卡片、主题切换等）
├── pages/             # 首页与课时详情页
├── styles/            # 全局样式
├── types/             # 类型定义与课时数据
├── hooks/             # 示例数据 Hook
└── services/          # API 调用示例
```

## 🚀 快速开始
```bash
pnpm install
pnpm dev
```
访问 `http://localhost:5173` 即可体验交互式课程。

## 🗺️ 下一步建议
1. 根据团队需求补充真实案例代码或视频链接。
2. 在 `codeDemo` 中新增更多 TypeScript → JavaScript 对照示例。
3. 集成登录态与学习进度同步，实现多人协作。
4. 扩展测试覆盖率，确保核心组件与数据流稳定。

---

**准备好，用类型系统驱动下一次产品迭代吧！**
