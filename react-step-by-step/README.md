# React Step-by-Step

一个极简的 React 学习脚手架，方便以 Lesson 为单位逐步积累练习。它基于 [Vite](https://vitejs.dev/) + React + React Router，专注于「快速添加页面、马上验证效果」。

## 快速开始

```bash
cd react-step-by-step
npm install    # 已经由脚本执行过，如需重新安装可以再次运行
npm run dev
```

访问终端输出的地址（默认是 http://localhost:5173 ）。

## Lesson 路由结构

- 首页会列出 `src/data/lessons.js` 中的所有 Lesson 配置。
- 每一项 Lesson 会生成 `/lesson-slug` 这样的路由，同时导航栏也会同步更新。
- 在 `lessons` 数组里新增一个对象即可创建新的主题页面：

```js
export const lessons = [
  {
    slug: 'lesson-4-state-management',
    title: 'Lesson 4 · 状态管理',
    summary: '一句话介绍',
    content: '多行字符串，会在 Lesson 页面里按照段落渲染。'
  }
];
```

> 你也可以在 `src/router.jsx` 中引入更多自定义路由，例如 `/labs`, `/about` 等，来扩展整个学习空间。

## Playground 区域

每个 Lesson 页面右侧都包含一个简单的「实验区」，支持：

- 使用计数按钮快速练习 `useState` 等基础 API；
- 向列表追加关键字，验证受控表单的行为；
- 通过 `lessonSlug` 属性，知道当前 Lesson 的上下文，方便做条件渲染。

Playground 完全可以按需替换为你喜欢的组件库、图表或任何练习内容。

## 调整样式

所有样式都放在各自组件旁的 `.css` 文件里，或 `src/index.css` 这种全局样式中。配色主要是浅色 + 暗色卡片，适合做简洁的笔记式界面，欢迎按自己的喜好修改。
