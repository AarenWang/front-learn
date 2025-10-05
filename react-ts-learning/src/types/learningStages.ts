import type { LearningStage } from './index'

export const learningStages: LearningStage[] = [
  {
    id: 's0',
    title: 'S0 基础起步',
    description: '掌握 JSX、组件、Props/State、单向数据流',
    objectives: ['JSX 语法', '函数组件', 'Props 和 State', '单向数据流'],
    tasks: ['Counter 组件', 'TodoList 组件'],
    acceptanceCriteria: [
      '使用函数组件',
      '列表渲染正确',
      'Props、State 定义了 TS 类型'
    ],
    route: '/s0-basics',
    completed: false
  },
  {
    id: 's1',
    title: 'S1 Hooks 核心',
    description: '掌握 useState、useEffect、useRef、useMemo、useCallback',
    objectives: ['useState', 'useEffect', 'useRef', 'useMemo', 'useCallback'],
    tasks: ['搜索防抖', '上次输入比较'],
    acceptanceCriteria: [
      '理解副作用依赖',
      '正确使用 memo 化函数'
    ],
    route: '/s1-hooks',
    completed: false
  },
  {
    id: 's2',
    title: 'S2 事件与表单',
    description: '掌握 ChangeEvent、受控组件',
    objectives: ['事件处理', '受控组件', '表单验证'],
    tasks: ['登录表单', '表单校验'],
    acceptanceCriteria: [
      '事件类型声明正确',
      '输入受控、可提交'
    ],
    route: '/s2-events-forms',
    completed: false
  },
  {
    id: 's3',
    title: 'S3 路由',
    description: '掌握 React Router 路由配置、嵌套、懒加载',
    objectives: ['路由配置', '嵌套路由', '懒加载', '路由守卫'],
    tasks: ['Dashboard', 'Users', 'Settings'],
    acceptanceCriteria: [
      '动态路由生效',
      '实现 404 与登录守卫'
    ],
    route: '/s3-routing',
    completed: false
  },
  {
    id: 's4',
    title: 'S4 数据获取',
    description: '掌握 Axios + React Query',
    objectives: ['HTTP 请求', '数据缓存', '状态管理'],
    tasks: ['用户列表', '分页', '更新'],
    acceptanceCriteria: [
      'React Query 缓存工作',
      '成功刷新后更新 UI'
    ],
    route: '/s4-data-fetching',
    completed: false
  },
  {
    id: 's5',
    title: 'S5 全局状态',
    description: '掌握 Context / Zustand / Redux',
    objectives: ['Context API', 'Zustand', '状态管理'],
    tasks: ['主题切换', '用户信息共享'],
    acceptanceCriteria: [
      '状态结构清晰',
      '模块解耦'
    ],
    route: '/s5-global-state',
    completed: false
  },
  {
    id: 's6',
    title: 'S6 表单进阶',
    description: '掌握 React Hook Form + Zod',
    objectives: ['React Hook Form', 'Zod 验证', '类型推导'],
    tasks: ['用户编辑页'],
    acceptanceCriteria: [
      'Zod Schema 推导类型',
      '表单状态完整覆盖'
    ],
    route: '/s6-advanced-forms',
    completed: false
  },
  {
    id: 's7',
    title: 'S7 样式体系',
    description: '掌握 CSS Modules / Tailwind / Shadcn',
    objectives: ['样式方案', '响应式设计', '主题系统'],
    tasks: ['响应式布局', '主题切换'],
    acceptanceCriteria: [
      '样式体系统一',
      '支持明暗模式'
    ],
    route: '/s7-styling',
    completed: false
  },
  {
    id: 's8',
    title: 'S8 测试',
    description: '掌握 Vitest + RTL',
    objectives: ['单元测试', '组件测试', '集成测试'],
    tasks: ['Button 测试', 'Form 测试', 'List 测试'],
    acceptanceCriteria: [
      '6 条以上测试',
      '覆盖关键交互'
    ],
    route: '/s8-testing',
    completed: false
  },
  {
    id: 's9',
    title: 'S9 性能与可访问性',
    description: '掌握 Lazy / Suspense / memo / a11y',
    objectives: ['性能优化', '懒加载', '可访问性'],
    tasks: ['虚拟滚动表格', 'ARIA 改进'],
    acceptanceCriteria: [
      '首屏体积受控',
      '支持键盘操作'
    ],
    route: '/s9-performance-a11y',
    completed: false
  },
  {
    id: 's10',
    title: 'S10 部署与 CI',
    description: '掌握 Vercel 部署 + GitHub Actions',
    objectives: ['项目构建', '自动化部署', 'CI/CD'],
    tasks: ['部署 Capstone 项目'],
    acceptanceCriteria: [
      '线上可访问',
      'CI 自动执行测试'
    ],
    route: '/s10-deployment',
    completed: false
  },
  {
    id: 's11',
    title: 'S11 进阶路线',
    description: '掌握 Next.js / App Router / SSR / RSC',
    objectives: ['Next.js', 'SSR', 'Server Components'],
    tasks: ['Dashboard SSR 版本'],
    acceptanceCriteria: [
      '完整数据渲染',
      '类型安全无警告'
    ],
    route: '/s11-nextjs',
    completed: false
  }
]
