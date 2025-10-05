import { Lesson, LessonSection } from '../models/lesson.model'

export const LESSON_SECTIONS: LessonSection[] = [
  {
    id: 's0',
    name: 'S0 启动阶段',
    description: '搭建开发环境、理解 Angular 架构与 TypeScript 基础，为后续学习奠定基石。',
    targetLevel: 'foundation',
  },
  {
    id: 's1',
    name: 'S1 核心能力',
    description: '深入掌握组件、模板、依赖注入、路由与表单等 Angular 核心特性。',
    targetLevel: 'foundation',
  },
  {
    id: 's2',
    name: 'S2 进阶提升',
    description: '围绕性能、状态管理、可测试性与可维护性展开，打造生产级质量。',
    targetLevel: 'advanced',
  },
  {
    id: 's3',
    name: 'S3 项目实战',
    description: '通过端到端的项目实战巩固知识，涵盖设计、集成、部署与优化。',
    targetLevel: 'project',
  },
]

export const LESSONS: Lesson[] = [
  {
    id: 's0-environment-setup',
    order: 1,
    title: 'Angular 开发环境与工作流',
    section: 'S0 启动阶段',
    estimatedHours: 2,
    level: 'foundation',
    summary:
      '了解 Angular CLI、项目结构以及常见开发工具链，完成环境搭建、首个组件生成并对照官方示例掌握基本工作流。',
    coreConcepts: [
      'Node.js LTS、pnpm、Angular CLI 的版本选择与安装校验流程',
      '工作区结构、angular.json 与 tsconfig.* 的核心字段解读',
      '开发服务器、代码生成命令、测试命令与热更新机制',
      'Angular DevTools、VS Code Angular Language Service、ESLint/Prettier 协同',
    ],
    prerequisites: ['现代 JavaScript 基础', '终端与 Git 基础操作'],
    projectPractices: [
      {
        title: '环境验证清单',
        description: '创建第一个 Angular 应用、生成 Standalone 组件并梳理脚本输出日志。',
        deliverables: [
          '运行 `pnpm ng new angular-learning-demo --standalone` 并截图版本信息',
          '补全 `AppComponent` 列表案例，提交运行截图与代码片段',
          '整理常见 CLI 命令（serve/build/test/generate）及其用途',
        ],
      },
    ],
    outcomes: [
      {
        title: '掌握基础工具链',
        details: '能够在本地安装并配置 Angular CLI、VS Code 插件与常见调试工具。',
      },
      {
        title: '理解项目结构',
        details: '熟悉 src、app、assets 等目录以及主要配置文件的作用。',
      },
    ],
    resources: [
      { label: 'Angular CLI 文档', url: 'https://angular.dev/tools/cli' },
      { label: '本地开发环境搭建', url: 'https://angular.dev/tools/setup-local' },
      { label: 'Tour of Heroes 官方教程', url: 'https://angular.dev/tutorials/first-app' },
      { label: 'Angular DevTools 指南', url: 'https://angular.dev/tools/devtools' },
      { label: 'VS Code Angular 扩展', url: 'https://marketplace.visualstudio.com/items?itemName=Angular.ng-template' },
    ],
    tags: ['CLI', '工作流', '环境搭建'],
  },
  {
    id: 's0-typescript-essentials',
    order: 2,
    title: 'Angular 中的 TypeScript 精要',
    section: 'S0 启动阶段',
    estimatedHours: 2,
    level: 'foundation',
    summary: '回顾 Angular 所依赖的 TypeScript 特性并通过小练习理解类型系统与装饰器。',
    coreConcepts: [
      '接口、类型别名、枚举在课程数据建模中的取舍与组合',
      '泛型函数、泛型组件输入输出的编写方式与约束技巧',
      '装饰器收集元数据、反射与 Angular 依赖注入关系',
      '类型守卫、类型谓词、satisfies 运算符与工具类型实战',
    ],
    prerequisites: ['前一课环境搭建完成'],
    projectPractices: [
      {
        title: '类型守卫实战',
        description: '编写 `assertLesson` 与 `isLessonArray` 类型守卫，为 API 响应提供双层校验。',
        deliverables: [
          '实现守卫并在 `LearningPlanService` 中落地使用',
          '以 Vitest/Jest 编写正常值、异常值、边界值三类测试',
          '使用 `HttpClient.get<Lesson>()` 泛型签名并记录类型推断结果',
        ],
      },
    ],
    outcomes: [
      {
        title: '类型驱动思维',
        details: '能够基于 TypeScript 的类型系统设计接口与可复用的泛型工具。',
      },
      {
        title: '理解装饰器语义',
        details: '知道类装饰器在 Angular 中如何携带元数据。',
      },
    ],
    resources: [
      { label: 'TypeScript Handbook', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' },
      { label: 'TypeScript for Angular', url: 'https://angular.dev/typescript' },
      { label: 'Angular 装饰器指南', url: 'https://angular.dev/reference/decorators' },
      { label: '依赖注入元数据 API', url: 'https://angular.dev/reference/di/decorators/Injectable' },
    ],
    tags: ['TypeScript', '装饰器', '类型系统'],
  },
  {
    id: 's0-architecture-overview',
    order: 3,
    title: 'Angular 架构与组件化思维',
    section: 'S0 启动阶段',
    estimatedHours: 3,
    level: 'foundation',
    summary:
      '理解模块化设计、Standalone 组件与应用引导流程，熟悉依赖注入树与变更检测策略，能够设计合理的组件分层。',
    coreConcepts: [
      'Standalone 组件、bootstrapApplication 与应用启动流程解读',
      '依赖注入树、提供者作用域、层级注入与多实例策略',
      '默认 / OnPush 变更检测策略与信号驱动变更',
      '容器组件、展示组件职责划分与组件树建模方法',
    ],
    prerequisites: ['完成 TypeScript 精要'],
    projectPractices: [
      {
        title: '信息面板拆分',
        description: '绘制课程仪表盘组件树并实现容器/展示双层结构，验证变更检测策略差异。',
        deliverables: [
          '输出组件树草图并标注每个组件的 Inputs/Outputs/Signals',
          '基于 CLI 生成三个 Standalone 组件并配置 `ChangeDetectionStrategy.OnPush`',
          '使用 Angular DevTools Profiler 捕获一次渲染轨迹并总结观察',
        ],
      },
    ],
    outcomes: [
      { title: '理解组件生命周期', details: '掌握 Angular 组件的创建、变更和销毁流程。' },
      { title: '掌握依赖注入基础', details: '能够解释提供者作用域与注入层级。' },
    ],
    resources: [
      { label: 'Angular 架构介绍', url: 'https://angular.dev/guide/architecture' },
      { label: 'Standalone API', url: 'https://angular.dev/guide/standalone-components' },
      { label: '依赖注入概览', url: 'https://angular.dev/guide/di' },
      { label: '变更检测机制', url: 'https://angular.dev/guide/change-detection' },
    ],
    tags: ['架构', '组件设计'],
  },
  {
    id: 's1-template-data-binding',
    order: 4,
    title: '模板语法与数据绑定',
    section: 'S1 核心能力',
    estimatedHours: 2,
    level: 'foundation',
    summary: '掌握插值、属性绑定、事件绑定与双向绑定，编写响应式的 UI 交互。',
    coreConcepts: [
      '模板插值、属性/事件绑定、双向绑定与绑定语法解析流程',
      '结构型指令 *ngFor/*ngIf/@if/@for 的差异与 trackBy 性能优化',
      '内置/自定义管道、模板引用变量、ngTemplateOutlet 的组合应用',
    ],
    prerequisites: ['掌握组件化思维'],
    projectPractices: [
      {
        title: '课程列表组件',
        description: '基于学习计划数据渲染课程列表，支持搜索、阶段筛选与状态高亮。',
        deliverables: [
          '实现 `[(ngModel)]` 搜索输入与 `@for`/`@if` 组合渲染',
          '封装 `trackBy` 提升渲染性能，并使用 Chrome DevTools 对比差异',
          '创建自定义管道格式化课程时长并在模板中调用',
        ],
      },
    ],
    outcomes: [
      { title: '灵活使用结构指令', details: '熟悉 *ngFor、*ngIf、ng-container 的组合用法。' },
      { title: '实现表单双向绑定', details: '能够使用 ngModel 创建基础表单交互。' },
    ],
    resources: [
      { label: '模板语法官方指南', url: 'https://angular.dev/guide/templates' },
      { label: 'Angular 模板参考', url: 'https://angular.dev/reference/syntax' },
      { label: '结构指令示例', url: 'https://angular.dev/guide/structural-directives' },
      { label: '内置管道列表', url: 'https://angular.dev/guide/pipes' },
      { label: 'Angular 表单输入绑定', url: 'https://angular.dev/guide/forms/input-binding' },
    ],
    tags: ['模板', '数据绑定'],
  },
  {
    id: 's1-component-communication',
    order: 5,
    title: '组件通信与生命周期钩子',
    section: 'S1 核心能力',
    estimatedHours: 2,
    level: 'foundation',
    summary:
      '探索 Input/Output、ViewChild 与生命周期钩子，构建可维护的协作组件并掌握资源释放策略。',
    coreConcepts: [
      'Input/Output 装饰器、事件发射器与父子通信设计',
      'ViewChild/ContentChild、内容投影与模板引用协同',
      '生命周期钩子、DestroyRef/takeUntilDestroyed 的资源释放策略',
    ],
    prerequisites: ['模板语法与数据绑定'],
    projectPractices: [
      {
        title: '学习计划侧边栏',
        description: '实现课程列表与详情面板之间的通信，并记录生命周期钩子触发顺序。',
        deliverables: [
          '利用 `@Input` 传递选中课程并在 `ngOnChanges` 中重置内部状态',
          '通过 `@Output` 通知父组件更新选择，附带 payload 类型声明',
          '在子组件中使用 `DestroyRef` 或 `takeUntilDestroyed` 清理定时器/订阅',
        ],
      },
    ],
    outcomes: [
      { title: '掌握组件交互模式', details: '熟悉父子组件之间的数据流与事件流。' },
      { title: '生命周期调试能力', details: '能够利用钩子定位渲染顺序与资源释放问题。' },
    ],
    resources: [
      { label: '组件交互指南', url: 'https://angular.dev/guide/components/inputs-outputs' },
      { label: '内容投影教程', url: 'https://angular.dev/guide/components/content-projection' },
      { label: '生命周期钩子', url: 'https://angular.dev/guide/components/lifecycle' },
      { label: 'DestroyRef API', url: 'https://angular.dev/api/core/DestroyRef' },
      { label: 'Angular DevTools 生命周期调试', url: 'https://angular.dev/tools/devtools#component-timeline' },
    ],
    tags: ['组件通信', '生命周期'],
  },
  {
    id: 's1-dependency-injection',
    order: 6,
    title: '依赖注入与服务设计',
    section: 'S1 核心能力',
    estimatedHours: 2,
    level: 'foundation',
    summary: '通过服务封装业务逻辑，理解提供者作用域与多级注入策略。',
    coreConcepts: ['Injectable 服务', '提供者作用域', '多实例策略'],
    prerequisites: ['组件通信基础'],
    projectPractices: [
      {
        title: '学习进度服务',
        description: '构建课程完成度服务，提供标记完成与计算统计的方法。',
        deliverables: ['实现进度服务并注入到多个组件', '使用信号或 RxJS 暴露数据流'],
      },
    ],
    outcomes: [
      { title: '模块化业务逻辑', details: '能够通过服务统一管理状态与 API 调用。' },
      { title: '理解 provider 层级', details: '知道如何控制服务实例的作用域与生命周期。' },
    ],
    resources: [
      { label: '依赖注入详解', url: 'https://angular.dev/guide/di' },
      { label: '基于信号的服务', url: 'https://angular.dev/guide/signals/service' },
    ],
    tags: ['依赖注入', '服务设计'],
  },
  {
    id: 's1-routing-basics',
    order: 7,
    title: '路由系统与导航体验',
    section: 'S1 核心能力',
    estimatedHours: 2,
    level: 'foundation',
    summary: '掌握 Router 配置、参数解析与守卫，实现多页面导航体验。',
    coreConcepts: ['路由配置', '导航守卫', '懒加载组件'],
    prerequisites: ['依赖注入与服务设计'],
    projectPractices: [
      {
        title: '课程详情路由',
        description: '为学习计划添加路由，支持链接分享与浏览器历史记录。',
        deliverables: ['配置带参数的路由', '实现默认路由与 404 兜底'],
      },
    ],
    outcomes: [
      { title: '构建可导航体验', details: '能够通过 RouterLink 与导航事件实现切换。' },
      { title: '掌握懒加载策略', details: '理解 loadComponent、loadChildren 的区别与适用场景。' },
    ],
    resources: [
      { label: 'Angular 路由指南', url: 'https://angular.dev/guide/router' },
      { label: '守卫与解析器', url: 'https://angular.dev/guide/router/guards' },
    ],
    tags: ['路由', '懒加载'],
  },
  {
    id: 's1-forms-overview',
    order: 8,
    title: '表单体系与响应式表单',
    section: 'S1 核心能力',
    estimatedHours: 2,
    level: 'foundation',
    summary: '对比模板驱动与响应式表单，构建复杂表单并实现实时验证。',
    coreConcepts: ['FormControl / FormGroup', '表单验证器', '错误状态展示'],
    prerequisites: ['模板语法与数据绑定'],
    projectPractices: [
      {
        title: '学习目标表单',
        description: '提供一个表单让学习者定制每日学习目标并存储本地。',
        deliverables: ['实现动态表单数组', '提供错误提示与提交反馈'],
      },
    ],
    outcomes: [
      { title: '掌握响应式表单', details: '能使用 FormBuilder 构建复合表单结构。' },
      { title: '理解验证流程', details: '根据业务需求编写同步与异步验证器。' },
    ],
    resources: [
      { label: '响应式表单文档', url: 'https://angular.dev/guide/forms/reactive-forms' },
      { label: '表单验证模式', url: 'https://angular.dev/guide/forms/form-validation' },
    ],
    tags: ['表单', '验证'],
  },
  {
    id: 's1-http-client',
    order: 9,
    title: 'HttpClient 与数据交互',
    section: 'S1 核心能力',
    estimatedHours: 2,
    level: 'foundation',
    summary: '掌握 HttpClient 发起请求、拦截器与错误处理，模拟真实 API 场景。',
    coreConcepts: ['HttpClient', '拦截器', '错误处理策略'],
    prerequisites: ['依赖注入与服务设计'],
    projectPractices: [
      {
        title: '资源列表 API 集成',
        description: '为课程资源构建模拟 API，演示 loading/error 状态与缓存。',
        deliverables: ['实现拦截器注入 Token', '封装重试与错误提示逻辑'],
      },
    ],
    outcomes: [
      { title: '可靠的数据请求', details: '能够封装 API 服务并处理不同的响应状态。' },
      { title: '理解拦截器链路', details: '通过多个拦截器组合完成鉴权、日志、错误上报。' },
    ],
    resources: [
      { label: 'HttpClient 指南', url: 'https://angular.dev/guide/http' },
      { label: 'Angular In-Memory Web API', url: 'https://github.com/angular/in-memory-web-api' },
    ],
    tags: ['HttpClient', '拦截器'],
  },
  {
    id: 's1-state-management-intro',
    order: 10,
    title: '信号与轻量状态管理',
    section: 'S1 核心能力',
    estimatedHours: 2,
    level: 'foundation',
    summary: '通过 Angular Signals 管理组件状态，比较与 RxJS、NgRx 的差异。',
    coreConcepts: ['Signal、Computed、Effect', '组件状态管理模式'],
    prerequisites: ['组件通信与依赖注入'],
    projectPractices: [
      {
        title: '进度仪表盘',
        description: '利用 Signals 构建学习进度统计、筛选与收藏功能。',
        deliverables: ['实现 computed 派生数据', '使用 effect 同步 LocalStorage'],
      },
    ],
    outcomes: [
      { title: '掌握信号 API', details: '能够在服务中创建信号并在组件中消费。' },
      { title: '了解状态管理路径', details: '清楚在何时需要引入更完整的 NgRx 方案。' },
    ],
    resources: [
      { label: 'Angular Signals 指南', url: 'https://angular.dev/guide/signals' },
      { label: '状态管理对比', url: 'https://ngrx.io/guide/signal-store/compare' },
    ],
    tags: ['Signals', '状态管理'],
  },
  {
    id: 's2-architecture-patterns',
    order: 11,
    title: '大型应用架构模式',
    section: 'S2 进阶提升',
    estimatedHours: 3,
    level: 'advanced',
    summary: '探索智能/哑组件、特性模块化、领域驱动设计等架构思路。',
    coreConcepts: ['特性模块切分', 'Smart/Dumb Components', '领域驱动设计'],
    prerequisites: ['掌握基础状态管理'],
    projectPractices: [
      {
        title: '学习平台模块化重构',
        description: '为课程页面规划 feature 模块与共享库，梳理依赖关系。',
        deliverables: ['绘制模块依赖图', '实现至少一个共享 UI 模块'],
      },
    ],
    outcomes: [
      { title: '合理规划模块', details: '能够根据业务边界划分 Feature、Shared、Core。' },
      { title: '提升可维护性', details: '学会通过接口约束、公共约定降低耦合。' },
    ],
    resources: [
      { label: 'Angular 模块模式', url: 'https://angular.dev/guide/feature-modules' },
      { label: '企业级架构实践', url: 'https://nx.dev/concepts/mental-model' },
    ],
    tags: ['架构', '模块化'],
  },
  {
    id: 's2-component-design-system',
    order: 12,
    title: '设计系统与可复用组件',
    section: 'S2 进阶提升',
    estimatedHours: 2,
    level: 'advanced',
    summary: '构建设计系统基石，编写可主题化的 UI 组件与 Storybook 文档。',
    coreConcepts: ['样式隔离策略', '可配置组件', 'Storybook 集成'],
    prerequisites: ['模板语法与架构模式'],
    projectPractices: [
      {
        title: '课程卡片组件库',
        description: '开发课程卡片、Tag、统计面板等 UI 组件并在 Storybook 中展示变体。',
        deliverables: ['实现具有输入属性的复用组件', '为组件添加主题切换支持'],
      },
    ],
    outcomes: [
      { title: '掌握样式策略', details: '能够在 Shadow DOM、全局样式与 CSS 变量间做出选择。' },
      { title: '建立文档体系', details: '通过 Storybook 或 Docs 工具记录组件使用方式。' },
    ],
    resources: [
      { label: 'Angular 样式指南', url: 'https://angular.dev/guide/components/styling' },
      { label: 'Storybook for Angular', url: 'https://storybook.js.org/docs/angular/get-started/introduction' },
    ],
    tags: ['设计系统', '组件库'],
  },
  {
    id: 's2-rxjs-mastery',
    order: 13,
    title: 'RxJS 与异步流管理',
    section: 'S2 进阶提升',
    estimatedHours: 3,
    level: 'advanced',
    summary: '深度掌握 RxJS 操作符组合、错误恢复与多播策略，提升异步能力。',
    coreConcepts: ['高阶映射', 'Subject 与共享', '错误恢复'],
    prerequisites: ['HttpClient 与状态管理基础'],
    projectPractices: [
      {
        title: '实时学习看板',
        description: '结合 RxJS 构建实时数据流，展示课程参与度与反馈。',
        deliverables: ['实现节流/防抖的搜索输入', '通过 switchMap 处理 API 请求'],
      },
    ],
    outcomes: [
      { title: '熟练使用操作符', details: '理解 mergeMap、switchMap、concatMap 的使用差异。' },
      { title: '掌握共享策略', details: '能够根据场景选择 shareReplay、publish/Connectable 等模式。' },
    ],
    resources: [
      { label: 'RxJS 文档', url: 'https://rxjs.dev/guide/overview' },
      { label: 'RxJS Marbles', url: 'https://rxmarbles.com/' },
    ],
    tags: ['RxJS', '异步流'],
  },
  {
    id: 's2-testing-strategy',
    order: 14,
    title: '测试体系与质量保障',
    section: 'S2 进阶提升',
    estimatedHours: 2,
    level: 'advanced',
    summary: '搭建单元、组件与端到端测试流程，掌握 TestBed 与 Cypress 基础。',
    coreConcepts: ['Jasmine/Karma', 'TestBed 配置', 'Cypress E2E 流程'],
    prerequisites: ['完成核心功能开发'],
    projectPractices: [
      {
        title: '课程页面测试覆盖',
        description: '为关键组件编写测试用例，确保交互流程可靠。',
        deliverables: ['编写至少 3 个组件测试', '使用 Cypress 录制一个端到端场景'],
      },
    ],
    outcomes: [
      { title: '构建可测试组件', details: '知道如何依赖注入测试替身并隔离外部依赖。' },
      { title: '端到端质量保证', details: '掌握基础的 E2E 测试脚本编写与调试。' },
    ],
    resources: [
      { label: 'Angular 测试指南', url: 'https://angular.dev/guide/testing' },
      { label: 'Cypress 官方文档', url: 'https://docs.cypress.io/' },
    ],
    tags: ['测试', '质量保障'],
  },
  {
    id: 's2-performance-optimization',
    order: 15,
    title: '性能优化与可观测性',
    section: 'S2 进阶提升',
    estimatedHours: 2,
    level: 'advanced',
    summary: '分析变更检测、懒加载、SSR、预渲染等策略，并结合性能监控工具。',
    coreConcepts: ['OnPush 策略', '预加载与懒加载', 'Performance Profiler'],
    prerequisites: ['掌握组件通信与路由'],
    projectPractices: [
      {
        title: '性能诊断任务',
        description: '识别学习平台的性能瓶颈并给出优化方案。',
        deliverables: ['使用 Angular DevTools 采集数据', '基于数据输出优化清单'],
      },
    ],
    outcomes: [
      { title: '优化渲染流程', details: '能合理使用 OnPush、TrackBy、Signals 减少无效渲染。' },
      { title: '建立监控意识', details: '熟悉 Web Vitals 与可观测性指标。' },
    ],
    resources: [
      { label: 'Angular 性能最佳实践', url: 'https://angular.dev/guide/performance' },
      { label: 'Angular DevTools', url: 'https://angular.dev/tools/devtools' },
    ],
    tags: ['性能', '监控'],
  },
  {
    id: 's2-accessibility-internationalization',
    order: 16,
    title: '无障碍与国际化',
    section: 'S2 进阶提升',
    estimatedHours: 2,
    level: 'advanced',
    summary: '理解可访问性标准与 i18n 管线，打造面向全球用户的体验。',
    coreConcepts: ['ARIA 语义', 'Angular i18n', '多语言切换'],
    prerequisites: ['掌握模板语法与组件样式'],
    projectPractices: [
      {
        title: '多语言课程导航',
        description: '为学习平台添加中英文切换与键盘可访问性支持。',
        deliverables: ['实现翻译文件加载', '完成键盘导航与焦点管理'],
      },
    ],
    outcomes: [
      { title: '增强可访问性', details: '掌握 ARIA 标签、焦点管理、对比度测试。' },
      { title: '国际化策略', details: '能够配置 i18n、使用翻译文件并处理日期/货币格式。' },
    ],
    resources: [
      { label: 'Angular 无障碍指南', url: 'https://angular.dev/guide/accessibility' },
      { label: 'Angular 国际化', url: 'https://angular.dev/guide/i18n' },
    ],
    tags: ['A11y', 'i18n'],
  },
  {
    id: 's3-project-design',
    order: 17,
    title: '项目立项与需求拆解',
    section: 'S3 项目实战',
    estimatedHours: 2,
    level: 'project',
    summary: '从零开始梳理一个学习管理平台的业务目标、角色与功能清单。',
    coreConcepts: ['需求拆解', '用户画像', '用例映射'],
    prerequisites: ['完成进阶阶段学习'],
    projectPractices: [
      {
        title: '需求文档编写',
        description: '产出 PRD、信息架构与页面原型，明确 MVP 范围。',
        deliverables: ['PRD 与用户旅程图', 'Figma 低保真原型'],
      },
    ],
    outcomes: [
      { title: '结构化需求分析', details: '能提炼功能优先级与验收标准。' },
      { title: '界面信息架构', details: '理解导航体系、内容层级与交互流程。' },
    ],
    resources: [
      { label: '产品需求文档模板', url: 'https://www.productplan.com/glossary/prd/' },
      { label: '用户旅程设计', url: 'https://www.nngroup.com/articles/journey-mapping-101/' },
    ],
    tags: ['需求分析', '产品设计'],
  },
  {
    id: 's3-project-foundation',
    order: 18,
    title: '项目基础设施搭建',
    section: 'S3 项目实战',
    estimatedHours: 3,
    level: 'project',
    summary: '搭建项目脚手架、统一代码规范，接入持续集成与自动化检查。',
    coreConcepts: ['Monorepo / Nx 选型', 'CI/CD 管线', '代码规范与 Lint'],
    prerequisites: ['完成项目立项'],
    projectPractices: [
      {
        title: '工程化落地',
        description: '配置 Husky、Lint-staged、Prettier 与 GitHub Actions，保障代码质量。',
        deliverables: ['编写 CI pipeline', '输出团队协作规范'],
      },
    ],
    outcomes: [
      { title: '工程体系搭建', details: '能够落地代码规范、提交检查与构建命令。' },
      { title: '自动化思维', details: '理解持续集成、测试、部署的衔接方式。' },
    ],
    resources: [
      { label: 'Angular CLI 工作区配置', url: 'https://angular.dev/guide/workspace-config' },
      { label: 'GitHub Actions 教程', url: 'https://docs.github.com/actions' },
    ],
    tags: ['工程化', 'CI/CD'],
  },
  {
    id: 's3-project-feature-delivery',
    order: 19,
    title: '核心功能迭代与集成',
    section: 'S3 项目实战',
    estimatedHours: 4,
    level: 'project',
    summary: '基于敏捷迭代交付课程管理、学习计划与评估反馈等核心模块。',
    coreConcepts: ['敏捷迭代', '模块集成', '可观察状态'],
    prerequisites: ['完成基础设施搭建'],
    projectPractices: [
      {
        title: '里程碑功能交付',
        description: '以 Sprint 形式交付课程列表、进度跟踪与反馈表单等关键功能。',
        deliverables: ['拆分用户故事并创建任务看板', '每次迭代输出可演示成果'],
      },
    ],
    outcomes: [
      { title: '端到端交付能力', details: '掌握从需求到上线的完整交付闭环。' },
      { title: '跨团队协作', details: '学会与设计、后端协同确认接口与验收标准。' },
    ],
    resources: [
      { label: '敏捷开发实践', url: 'https://www.scrum.org/resources/what-is-scrum' },
      { label: 'Angular 模块懒加载', url: 'https://angular.dev/guide/lazy-loading' },
    ],
    tags: ['敏捷', '集成'],
  },
  {
    id: 's3-project-deployment-optimization',
    order: 20,
    title: '部署、监控与持续优化',
    section: 'S3 项目实战',
    estimatedHours: 3,
    level: 'project',
    summary: '完成生产部署、性能监控、错误追踪与反馈收集，形成闭环优化机制。',
    coreConcepts: ['部署策略', '监控与日志', 'A/B 测试'],
    prerequisites: ['核心功能迭代完成'],
    projectPractices: [
      {
        title: '上线回归流程',
        description: '选择部署平台（如 Vercel、Netlify、Azure），配置监控并制定回滚策略。',
        deliverables: ['完成一次完整部署', '配置错误追踪与性能报警'],
      },
    ],
    outcomes: [
      { title: '掌握部署流程', details: '了解静态托管、容器化与边缘部署的差异。' },
      { title: '建立持续优化机制', details: '能够基于监控指标制定优化计划并跟踪效果。' },
    ],
    resources: [
      { label: 'Angular 部署指南', url: 'https://angular.dev/guide/deployment' },
      { label: '前端监控方案', url: 'https://sentry.io/for/angular/' },
    ],
    tags: ['部署', '监控'],
  },
]

export const TOTAL_ESTIMATED_HOURS = LESSONS.reduce((sum, lesson) => sum + lesson.estimatedHours, 0)
