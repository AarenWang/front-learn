export const lessons = [
  {
    slug: 'lesson-1-hello-react',
    title: 'Lesson 1 · Hello React',
    summary: '认识 React 组件、JSX 与开发环境。',
    content: `React 通过组件化的方式帮助我们构建用户界面。\n\n这一课建议你先尝试：\n- 修改 \`LessonPage\` 中 lesson map 里的内容；\n- 在页面里添加更多的 UI 元素，比如按钮或列表。`
  },
  {
    slug: 'lesson-2-components-and-state',
    title: 'Lesson 2 · 组件与状态',
    summary: '理解 props、state 以及它们如何驱动 UI。',
    content: `State 是 React 的核心概念，它让组件拥有可变的数据。\n\n可以尝试：\n1. 在 lesson 定义里添加一个示例 state；\n2. 使用 React Hooks（如 useState）来驱动交互。`
  },
  {
    slug: 'lesson-3-routing-basics',
    title: 'Lesson 3 · 前端路由基础',
    summary: '学习如何用 react-router-dom 管理 SPA 路由。',
    content: `本示例项目已经配置好了 Router。\n\n你可以继续扩展：\n- 在 \`src/router.jsx\` 中添加新的 lesson；\n- 或者引入嵌套路由，拆分出更复杂的布局。`
  }
];
