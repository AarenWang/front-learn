import type { LearningStage } from './index'

export const learningStages: LearningStage[] = [
  {
    id: 'l1',
    title: 'L1 现代 JavaScript 起航',
    description: '了解现代 JavaScript 生态、运行时和常用工具链，完成开发环境搭建。',
    duration: '2 小时',
    foundationTopics: ['ECMAScript 演进', 'Node.js 与浏览器运行时差异', 'pnpm 与 npm 对比', 'ESLint/Prettier 基本配置'],
    project: {
      name: '开发环境体检脚本',
      description: '构建一个 CLI 脚本检测并报告本地开发环境的关键依赖版本。',
      deliverables: ['使用 Node.js 读取系统信息', '输出彩色终端表格', '为脚本配置 package.json 命令']
    },
    practiceTasks: ['安装 Node.js LTS 与 pnpm', '初始化 Git 仓库并添加基础规范配置', '编写 README 记录环境搭建步骤'],
    acceptanceCriteria: ['脚本可在命令行运行且输出格式规范', '仓库具备 .editorconfig、.gitignore 等基础文件', 'README 描述环境搭建与脚本使用'],
    resources: [
      { label: 'pnpm 官方文档', url: 'https://pnpm.io/zh/' },
      { label: 'ESLint 入门指南', url: 'https://eslint.org/docs/latest/use/getting-started' }
    ],
    route: '/lessons/modern-js-foundations',
    completed: false
  },
  {
    id: 'l2',
    title: 'L2 语法基础与数据类型',
    description: '掌握 let/const、模板字符串、解构、数据类型与类型转换。',
    duration: '3 小时',
    foundationTopics: ['变量声明模式', '基本与引用类型', '可选链和空值合并', '解构与展开运算符'],
    project: {
      name: '旅行账单计算器',
      description: '编写一个可配置的消费统计脚本，支持不同类型的账单与折扣。',
      deliverables: ['使用解构读取配置', '运用模板字符串输出汇总', '实现类型安全的转换函数']
    },
    practiceTasks: ['实现多币种金额格式化函数', '封装一个判断类型的工具库', '为账单脚本添加单元测试覆盖核心逻辑'],
    acceptanceCriteria: ['账单计算覆盖常见类型', '边界输入能够妥善处理', '单元测试全部通过'],
    resources: [
      { label: 'MDN - JavaScript 数据类型', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Data_structures' },
      { label: 'Understanding ECMAScript 6（中文）', url: 'https://es6.ruanyifeng.com/' }
    ],
    route: '/lessons/syntax-and-types',
    completed: false
  },
  {
    id: 'l3',
    title: 'L3 函数、作用域与闭包',
    description: '深入理解函数声明、箭头函数、作用域链、闭包与高阶函数。',
    duration: '3 小时',
    foundationTopics: ['函数提升与表达式', 'this 绑定与 call/apply/bind', '闭包与内存管理', '函数式工具链(map/filter/reduce)'],
    project: {
      name: '可配置的函数式工具库',
      description: '构建一个轻量级函数式工具库，提供组合、柯里化等能力。',
      deliverables: ['实现 compose 与 pipe', '提供节流与防抖实现', '编写示例展示闭包缓存']
    },
    practiceTasks: ['利用闭包实现访问计数器', '封装可配置的事件节流器', '编写高阶函数生成日志器'],
    acceptanceCriteria: ['工具库提供类型说明与示例', '函数式操作可串联调用', '节流/防抖函数覆盖关键场景'],
    resources: [
      { label: 'MDN - 闭包', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures' },
      { label: 'JavaScript Info - 高级函数', url: 'https://javascript.info/advanced-functions' }
    ],
    route: '/lessons/functions-and-closures',
    completed: false
  },
  {
    id: 'l4',
    title: 'L4 对象、原型与类',
    description: '掌握对象字面量、原型链、class 语法以及面向对象模式。',
    duration: '2.5 小时',
    foundationTopics: ['原型链查找规则', 'class 与继承语法', 'Object.* 实用方法', 'Symbol 与元编程'],
    project: {
      name: '插件化日志系统',
      description: '实现一个可扩展的日志系统，支持不同输出适配器。',
      deliverables: ['使用 class 组织核心逻辑', '通过原型扩展适配器能力', '实现自定义 Symbol.iterator 输出']
    },
    practiceTasks: ['封装对象深拷贝函数', '实现链式调用配置类', '利用 Proxy 监控属性访问'],
    acceptanceCriteria: ['日志系统支持控制台和文件两种输出', '适配器可热插拔', 'Proxy 监控可输出访问报告'],
    resources: [
      { label: 'MDN - 原型与继承', url: 'https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_prototypes' },
      { label: 'JavaScript Info - 类', url: 'https://javascript.info/class' }
    ],
    route: '/lessons/objects-and-prototypes',
    completed: false
  },
  {
    id: 'l5',
    title: 'L5 数组、可迭代对象与不可变数据',
    description: '掌握数组方法、可迭代协议、Set/Map 以及不可变数据模式。',
    duration: '2 小时',
    foundationTopics: ['数组高阶操作', 'Set/Map 与 WeakMap', '迭代器与生成器', '不可变更新模式'],
    project: {
      name: '数据可视化准备器',
      description: '为可视化需求准备数据清洗与转换管道。',
      deliverables: ['实现通用分组与聚合函数', '构建迭代器按批次输出数据', '利用 Map/Set 实现唯一性检查']
    },
    practiceTasks: ['封装链式数组处理工具', '使用生成器实现无限序列', '实现不可变的状态更新助手'],
    acceptanceCriteria: ['数据转换函数具备单元测试', '生成器支持暂停与恢复', '不可变更新适用于嵌套结构'],
    resources: [
      { label: 'MDN - 迭代器与生成器', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators' },
      { label: 'Immutable JS 指南', url: 'https://immutable-js.com/docs/v4.0.0/' }
    ],
    route: '/lessons/iterables-and-immutability',
    completed: false
  },
  {
    id: 'l6',
    title: 'L6 模块化与包管理',
    description: '掌握 ES Modules、CommonJS、模块打包与依赖管理。',
    duration: '2 小时',
    foundationTopics: ['ESM 导入导出模式', 'CommonJS 与 ESM 互操作', 'Tree Shaking 原理', 'package.json 字段解析'],
    project: {
      name: '模块化工具集合',
      description: '将前面实现的工具拆分为独立模块并发布为私有包。',
      deliverables: ['拆分功能模块并合理命名', '配置 pnpm workspace 管理包', '使用 npm script 发布到私有 Registry']
    },
    practiceTasks: ['为项目配置路径别名', '对比打包前后的 bundle 体积', '编写脚本检测重复依赖'],
    acceptanceCriteria: ['模块可独立安装使用', 'workspace 内模块相互引用正常', '包发布流程文档齐全'],
    resources: [
      { label: 'MDN - JavaScript 模块', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Modules' },
      { label: 'pnpm workspace 手册', url: 'https://pnpm.io/zh/workspaces' }
    ],
    route: '/lessons/modules-and-packages',
    completed: false
  },
  {
    id: 'l7',
    title: 'L7 DOM、事件与组件化思维',
    description: '掌握 DOM 查询、事件模型、Shadow DOM 以及组件化设计理念。',
    duration: '3 小时',
    foundationTopics: ['DOM 树与节点操作', '事件捕获与冒泡', '自定义元素与 Shadow DOM', '组件状态与模板拆分'],
    project: {
      name: '无框架组件库雏形',
      description: '实现一组原生 Web Components，涵盖按钮、标签页与通知条。',
      deliverables: ['封装 Button 自定义元素', '实现 Tabs 状态管理', '提供示例页面演示交互']
    },
    practiceTasks: ['封装通用事件代理工具', '实现可访问性的焦点管理', '为组件编写 Storybook 文档'],
    acceptanceCriteria: ['组件通过无障碍审查', '事件系统支持键盘交互', '文档演示覆盖所有状态'],
    resources: [
      { label: 'MDN - Web Components 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/Web_Components' },
      { label: 'Open Web Components', url: 'https://open-wc.org/' }
    ],
    route: '/lessons/dom-and-components',
    completed: false
  },
  {
    id: 'l8',
    title: 'L8 异步编程基础',
    description: '从回调到 Promise，掌握事件循环与异步执行模型。',
    duration: '2.5 小时',
    foundationTopics: ['事件循环与任务队列', 'Promise 状态流转', '微任务与宏任务', 'Promise 组合方法'],
    project: {
      name: 'API 稳定器',
      description: '为不稳定的第三方 API 编写重试与超时控制模块。',
      deliverables: ['封装 fetch 重试逻辑', '实现并发请求控制器', '通过日志记录重试情况']
    },
    practiceTasks: ['绘制事件循环执行序列图', '封装 promisify 工具', '实现 Promise.allSettled polyfill'],
    acceptanceCriteria: ['重试策略支持退避算法', '超时机制可配置', 'polyfill 通过单元测试验证'],
    resources: [
      { label: 'Jake Archibald - Tasks, microtasks, queues and schedules', url: 'https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/' },
      { label: 'MDN - Promise', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises' }
    ],
    route: '/lessons/async-basics',
    completed: false
  },
  {
    id: 'l9',
    title: 'L9 Async/Await 与数据流管理',
    description: '使用 async/await、生成器与可取消任务构建稳定的数据请求层。',
    duration: '2 小时',
    foundationTopics: ['async/await 语法', 'AbortController 取消请求', '并发限制与队列', 'Streaming API'],
    project: {
      name: '数据同步服务',
      description: '构建一个数据同步模块，支持增量同步、取消与进度回调。',
      deliverables: ['使用 AbortController 控制请求', '实现并发队列调度', '提供进度事件与 UI 回调']
    },
    practiceTasks: ['为同步服务编写单元测试', '实现可恢复的下载任务', '封装统一的错误处理器'],
    acceptanceCriteria: ['取消操作立即生效', '进度回调可准确反馈状态', '错误处理器对调用方透明'],
    resources: [
      { label: 'MDN - async function', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function' },
      { label: 'Fetch API 指南', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API' }
    ],
    route: '/lessons/async-await-and-data',
    completed: false
  },
  {
    id: 'l10',
    title: 'L10 错误处理、调试与日志',
    description: '掌握错误分类、调试技巧、Source Map 与结构化日志。',
    duration: '2 小时',
    foundationTopics: ['Error 类型体系', 'try/catch 与错误传播', '调试工具与断点', 'Source Map 使用'],
    project: {
      name: '浏览器调试助手',
      description: '构建一个可视化调试工具栏，集成日志、性能与网络监控。',
      deliverables: ['封装日志级别过滤器', '集成 Performance API', '提供错误重现链接生成']
    },
    practiceTasks: ['编写统一错误边界处理器', '配置 Source Map 并验证定位', '将日志发送到远程服务'],
    acceptanceCriteria: ['错误日志包含上下文信息', 'Source Map 定位准确', '调试工具栏具备开关与权限控制'],
    resources: [
      { label: 'MDN - 错误处理', url: 'https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch' },
      { label: 'Chrome DevTools 指南', url: 'https://developer.chrome.com/docs/devtools/' }
    ],
    route: '/lessons/error-handling-and-debug',
    completed: false
  },
  {
    id: 'l11',
    title: 'L11 浏览器存储与状态保持',
    description: '掌握 Cookie、LocalStorage、IndexedDB 以及持久化策略。',
    duration: '2.5 小时',
    foundationTopics: ['浏览器存储对比', 'IndexedDB 事务模型', '序列化策略', '安全与隐私注意事项'],
    project: {
      name: '离线阅读器',
      description: '实现一个可离线访问的阅读器，支持缓存文章与阅读进度。',
      deliverables: ['封装 IndexedDB 数据层', '实现 Service Worker 缓存', '同步跨设备阅读进度']
    },
    practiceTasks: ['设计数据同步策略', '为存储层编写单元测试', '实现数据加密与过期清理'],
    acceptanceCriteria: ['离线模式可正常浏览内容', '数据同步冲突可解决', '安全策略满足隐私要求'],
    resources: [
      { label: 'MDN - IndexedDB', url: 'https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API' },
      { label: 'Workbox 指南', url: 'https://developer.chrome.com/docs/workbox/' }
    ],
    route: '/lessons/browser-storage',
    completed: false
  },
  {
    id: 'l12',
    title: 'L12 构建工具与 Vite 实战',
    description: '认识现代构建流程，掌握 Vite、ESBuild 与常见插件体系。',
    duration: '3 小时',
    foundationTopics: ['Vite 架构与热更新', 'ESBuild 与 Rollup 角色', '环境变量管理', '打包优化策略'],
    project: {
      name: 'Vite 企业脚手架',
      description: '搭建企业级 Vite 模板，内置别名、代理、分析与部署脚本。',
      deliverables: ['配置多环境构建脚本', '集成 bundle 分析工具', '编写部署前检查任务']
    },
    practiceTasks: ['定制 Vite 插件注入元信息', '配置 Proxy 解决跨域', '输出打包性能报告'],
    acceptanceCriteria: ['脚手架支持多入口与 SSR 预设', '分析报告可视化呈现', '部署前检查覆盖 lint、test、build'],
    resources: [
      { label: 'Vite 官方文档', url: 'https://cn.vitejs.dev/' },
      { label: 'Rollup 插件指南', url: 'https://rollupjs.org/plugin-development/' }
    ],
    route: '/lessons/vite-and-build-tools',
    completed: false
  },
  {
    id: 'l13',
    title: 'L13 质量保障：Lint、格式化与类型检查',
    description: '建立统一的代码风格、静态检查与增量类型覆盖策略。',
    duration: '2 小时',
    foundationTopics: ['ESLint 进阶规则', 'Prettier 集成策略', 'TypeScript 渐进式接入', 'Husky + lint-staged'],
    project: {
      name: '质量基线工程',
      description: '为团队项目搭建质量保障流水线，实现提交前自动检查。',
      deliverables: ['配置 ESLint + Prettier 联合使用', '接入 TypeScript 检查核心模块', '设置 Git Hooks 自动执行'],
    },
    practiceTasks: ['自定义 ESLint 插件或规则', '制定代码规范手册', '配置 CI 自动执行 lint 与 type-check'],
    acceptanceCriteria: ['提交前自动阻止不合规代码', 'lint 规则覆盖团队约定', 'CI 报告清晰明了'],
    resources: [
      { label: 'ESLint + Prettier 最佳实践', url: 'https://prettier.io/docs/en/integrating-with-linters.html' },
      { label: 'TypeScript 手册', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' }
    ],
    route: '/lessons/code-quality',
    completed: false
  },
  {
    id: 'l14',
    title: 'L14 自动化测试与覆盖率',
    description: '掌握 Vitest、Testing Library、端到端测试与覆盖率分析。',
    duration: '2.5 小时',
    foundationTopics: ['Vitest 配置与断言', 'Testing Library 原则', 'Mock 与假数据策略', '覆盖率指标解读'],
    project: {
      name: '测试蓝图',
      description: '为前期项目补齐单元、集成与端到端测试蓝图。',
      deliverables: ['配置 Vitest + jsdom 环境', '为关键模块编写行为驱动测试', '集成 Playwright 脚本执行冒烟测试']
    },
    practiceTasks: ['构建测试数据工厂', '编写覆盖率阈值策略', '在 CI 中分布式执行测试'],
    acceptanceCriteria: ['测试覆盖率达到预设目标', 'CI 报告输出明确', '测试文档说明运行方式与排错指引'],
    resources: [
      { label: 'Vitest 官方文档', url: 'https://vitest.dev/' },
      { label: 'Testing Library 指南', url: 'https://testing-library.com/docs/' }
    ],
    route: '/lessons/testing-strategy',
    completed: false
  },
  {
    id: 'l15',
    title: 'L15 性能优化与前端监控',
    description: '聚焦性能指标、懒加载、网络优化与前端监控方案。',
    duration: '2 小时',
    foundationTopics: ['关键性能指标 (TTI/LCP/FID)', '代码分割与懒加载', '图片与网络优化策略', '性能监控与报警'],
    project: {
      name: '性能体检实验室',
      description: '为示例应用构建性能分析与优化看板。',
      deliverables: ['接入 PerformanceObserver 收集指标', '实现资源懒加载策略', '构建性能数据可视化面板']
    },
    practiceTasks: ['使用 Lighthouse 审查页面', '实现动态导入拆分模块', '配置性能报警通知渠道'],
    acceptanceCriteria: ['性能优化前后指标对比明显', '性能面板可展示历史记录', '报警策略可测试'],
    resources: [
      { label: 'web.dev - Core Web Vitals', url: 'https://web.dev/vitals/' },
      { label: 'Lighthouse 文档', url: 'https://developer.chrome.com/docs/lighthouse/overview/' }
    ],
    route: '/lessons/performance-and-monitoring',
    completed: false
  },
  {
    id: 'l16',
    title: 'L16 终极实战：现代 JavaScript 应用交付',
    description: '整合所学，交付一套具备 CI/CD、文档与监控的现代 JavaScript 应用。',
    duration: '4 小时',
    foundationTopics: ['项目规划与模块拆分', '持续集成与部署策略', '可观测性基线', '最佳实践复盘'],
    project: {
      name: '现代知识管理应用',
      description: '构建一个包含笔记、任务与仪表盘的单页应用，整合前 15 课成果。',
      deliverables: ['实现多页面路由与状态管理', '集成质量、测试、性能工具链', '部署到 Vercel 并配置监控']
    },
    practiceTasks: ['撰写项目 README 与架构图', '配置 GitHub Actions 自动化流程', '准备演示脚本并录制 Demo'],
    acceptanceCriteria: ['应用部署可稳定访问', 'CI/CD 全流程绿色通过', '交付文档覆盖安装、运行、监控'],
    resources: [
      { label: 'Vercel 部署指南', url: 'https://vercel.com/docs' },
      { label: 'Twelve-Factor App', url: 'https://12factor.net/' }
    ],
    route: '/lessons/final-capstone',
    completed: false
  }
]
