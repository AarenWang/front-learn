# 现代 CSS 学习项目概览

## 🎉 项目亮点

- 基于《现代 CSS 规范系统学习 · 教学计划表》构建的 React + TypeScript 互动课程
- 30 课时、6 大模块，涵盖规范、布局、视觉、响应式、现代特性
- 内置 CSS Playground，支持实时编辑 HTML/CSS 并预览效果

## ✅ 已完成的功能

### 1. 工程化基座
- ✅ 使用 Vite + React 19 + TypeScript 搭建教学门户
- ✅ 配置 pnpm、ESLint、Prettier、Tailwind CSS 与路径别名 `@/*`
- ✅ 集成 Vitest + Testing Library 测试环境

### 2. 信息架构
```
src/
├── app/                 # 路由入口与整体布局
├── components/          # 通用组件 (Button/Card/ThemeToggle 等)
├── pages/               # 页面（首页、课时详情、Playground、404）
├── styles/              # 全局样式与 Tailwind 配置
├── types/               # 类型定义与 30 课时数据
└── test/                # 测试初始化
```

### 3. 课程体验
- ✅ 首页展示模块亮点、学习进度仪表盘与 30 课时卡片
- ✅ `/lessons/:lessonSlug` 提供知识点、项目演练、实践任务、验收标准、资源链接
- ✅ `/playground` 提供双栏编辑器 + iframe 沙箱的 CSS 实验室
- ✅ 支持暗色模式、响应式布局与渐变视觉风格

### 4. 数据与内容
- ✅ 根据教学大纲为每课设计基础知识、项目交付物与练习题
- ✅ 引入模块元数据，便于展示分组与统计信息
- ✅ 完整整合 W3C、MDN、web.dev 等权威资料链接

## 🚀 体验方式

```bash
cd css-learning
pnpm install
pnpm dev
```
访问 `http://localhost:5173` 浏览学习门户与 CSS Playground。

## 📈 学习收获

- **规范意识**：熟悉 CSSWG 工作流、层叠层、@property 等现代标准
- **布局能力**：掌握盒模型、Flex/Grid、容器查询与国际化布局
- **视觉表现**：构建渐变、滤镜、阴影、层叠上下文等高级效果
- **响应式与动效**：兼顾媒体查询、动画性能、渐进增强与纯 CSS 交互
- **前沿跟进**：探索 Houdini、Typed OM、CSS Nesting 等未来趋势

## 🔮 后续可拓展方向

1. 为每课补充代码示例与 Playground 预设模板
2. 增加学习进度持久化与自评体系
3. 扩展多语言/国际化支持
4. 接入在线部署示例与更多动效案例

---

**欢迎在 Playground 中自由实验，迈向 CSS 专家之路！**
