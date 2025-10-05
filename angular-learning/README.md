# Angular 全栈学习项目

面向希望系统掌握 Angular 的前端工程师，构建了包含 20 节课的全链路学习体验。首页借鉴 `modern-javascript-learning/` 的卡片式布局，提供阶段进度、推荐下一课与课程亮点；每节课拆分为独立详情页，集中呈现核心知识、项目实践、验收标准与扩展资源。

## 🚀 快速开始

```bash
pnpm install      # 安装依赖
pnpm dev          # 启动本地开发服务器（默认端口 4200）
pnpm build        # 生产环境构建
pnpm test         # 执行单元测试（Chrome Headless）
```

> 💡 推荐使用 Node.js 18+ 与 pnpm 8+，首轮启动会自动安装 Angular CLI。

## 📚 20 节课的学习蓝图

课程划分为四个阶段，兼顾基础巩固、进阶突破与企业级项目交付：

| 阶段 | 课时范围 | 能力定位 | 核心焦点 |
|------|----------|----------|----------|
| S0 启动阶段 | S1-S3 | 建立 Angular 工具链与 Standalone 架构思维 | 环境搭建、TypeScript、组件分层 |
| S1 核心能力 | S4-S10 | 夯实模板、通信、表单、HttpClient 与 Signals | 数据绑定、依赖注入、状态驱动界面 |
| S2 进阶提升 | S11-S16 | 打造生产级可维护性与性能 | RxJS、可访问性、测试、性能优化 |
| S3 项目实战 | S17-S20 | 企业级学习平台端到端交付 | PRD 拆解、CI/CD、功能迭代、部署监控 |

每节课都配有：

- **核心知识点**：对照官方文档编排的理论要点与最佳实践。
- **项目实践任务**：给出具体交付物、验收标准与代码片段建议。
- **学习产出**：明确完成后应该掌握的技能或可交付成果。
- **扩展资源**：精选官方与社区文章，便于深挖重点主题。

## 🧭 网页结构与导航

- **首页 `/`**：
  - 展示总进度、总时长与下一步推荐实践。
  - 阶段卡片列出前三节课程并显示预计投入时长与完成度。
  - 学习亮点卡片总结阶段化规划、工程化能力与项目驱动特色。
- **课程详情 `/lessons/:lessonId`**：
  - 独立页面包含课程摘要、核心知识点、项目实践、预期产出与资源链接。
  - 支持标记完成、上一课/下一课导航以及返回首页。
- **状态持久化**：通过 `LearningProgressService` 将完成状态写入浏览器 `localStorage`，多次访问仍能继承进度。

> 示例：`/lessons/s3-project-feature-delivery` 展示 S3 第三课的敏捷迭代实践蓝图与验收标准。

## 🛠️ 技术栈

- **框架**：Angular 17 Standalone + Signals
- **构建工具**：Angular CLI + pnpm
- **样式**：SCSS + 定制化渐变卡片布局
- **状态管理**：`signal` + 本地存储持久化
- **质量保障**：Jasmine/Karma 单元测试、ESLint、Prettier


## 🤝 贡献指南
=======
  @Component({
    standalone: true,
    selector: 'ui-course-card',
    templateUrl: './course-card.component.html',
    styleUrl: './course-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
      class: 'token-surface',
      '[attr.data-level]': 'course.level',
      role: 'article',
    },
  })
  export class CourseCardComponent {
    @Input({ required: true }) course!: CourseCard
  }
  ```
  ```html
  <!-- course-card.component.html -->
  <header>
    <h3>{{ course.title }}</h3>
    <span class="token-badge">{{ course.level | titlecase }}</span>
  </header>
  <p>预计 {{ course.duration }} 小时</p>
  <ul class="tag-list" aria-label="课程标签">
    <li *ngFor="let tag of course.tags">#{{ tag }}</li>
  </ul>
  ```
  ```scss
  // course-card.component.scss
  @use 'design-tokens' as *;

  :host {
    border-radius: var(--radius-lg);
    padding: var(--space-4);
    background: var(--color-surface);
    box-shadow: var(--shadow-sm);
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-2px);
    }
  }

  :host([data-level='advanced']) {
    border-inline-start: 4px solid var(--color-accent);
  }
  ```
  通过样式令牌文件统一主题，课程中演示如何在 Storybook 中生成文档页并自动化视觉回归。
- **课堂演示**：演示 `pnpm dlx storybook init` 集成文档站，配置 `@storybook/addon-interactions` 与 `Angular CDK` 的 `FocusMonitor` 校验键盘导航。
- **课后挑战**：扩展卡片组件支持 Skeleton Loading、收藏按钮与 slots，自定义主题切换（亮/暗）。

#### 课时 13 · RxJS 与异步流管理
- **知识重点**：
  - 依照 [RxJS in Angular 指南](https://angular.dev/guide/rxjs) 深入讲解 `switchMap`、`exhaustMap`、`concatLatestFrom` 等高阶映射策略。
  - 说明 Signals 与 RxJS 的协同，演示 `toSignal`、`fromSignal` 在组件内构建派生状态的模式。
  - 强调可共享的查询服务需要缓存策略，结合 `shareReplay({ bufferSize: 1, refCount: true })` 与暂停/恢复机制。
- **完整案例：实时学习看板数据流**
  ```ts
  // src/app/features/progress/data/progress.facade.ts
  import { inject, Injectable, Signal, computed } from '@angular/core'
  import { toSignal } from '@angular/core/rxjs-interop'
  import { HttpClient } from '@angular/common/http'
  import { map, retry, shareReplay, switchMap, timer } from 'rxjs'

  interface ProgressResponse {
    completed: number
    total: number
    velocity: number
  }

  @Injectable({ providedIn: 'root' })
  export class ProgressFacade {
    private readonly http = inject(HttpClient)

    private readonly refresh$ = timer(0, 30_000)
    private readonly progress$ = this.refresh$.pipe(
      switchMap(() =>
        this.http
          .get<ProgressResponse>('/api/progress')
          .pipe(retry({ count: 2 })),
      ),
      shareReplay({ bufferSize: 1, refCount: true }),
    )

    readonly progress: Signal<ProgressResponse | null> = toSignal(
      this.progress$,
      { initialValue: null },
    )

    readonly completionRate = computed(() => {
      const snapshot = this.progress()
      return snapshot ? snapshot.completed / snapshot.total : 0
    })
  }
  ```
  案例串联轮询、错误重试、共享缓存与 Signal 派生，课堂上配合 Chrome DevTools Network 观察流量，并通过 `takeUntilDestroyed` 管理组件订阅。
- **课堂演示**：借助 `marble testing` 工具（如 `rxjs-marbles`）可视化验证流组合逻辑，实践在组件中使用 `@let` 解构信号。
- **课后挑战**：实现一个「乐观更新」场景：提交学习反馈前先更新 UI，失败时回滚并显示 Toast。

#### 课时 14 · 测试体系与质量保障
- **知识重点**：
  - 对照官方 [测试指南](https://angular.dev/guide/testing) 梳理单元测试、组件测试、端到端测试的职责与边界。
  - 比较 Jest、Vitest 与 Jasmine/Karma 的差异，演示如何使用 `@angular/core/testing` 的 `TestBed` 配置 Standalone 组件。
  - 引入 Playwright/Cypress 等现代 E2E 工具，配合 `@angular-devkit/build-angular` 的 `builder` 进行 CI 集成。
- **完整案例：组件 + 服务双测试覆盖**
  ```ts
  // src/app/features/progress/ui/progress-ring.component.spec.ts
  import { render, screen } from '@testing-library/angular'
  import { ProgressRingComponent } from './progress-ring.component'

  describe('ProgressRingComponent', () => {
    it('renders percentage text', async () => {
      await render(ProgressRingComponent, {
        componentInputs: { value: 0.75 },
      })

      expect(screen.getByText('75%')).toBeInTheDocument()
    })
  })
  ```
  ```ts
  // src/app/features/progress/data/progress.facade.spec.ts
  import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
  import { TestBed } from '@angular/core/testing'
  import { ProgressFacade } from './progress.facade'

  describe('ProgressFacade', () => {
    let facade: ProgressFacade
    let httpMock: HttpTestingController

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ProgressFacade],
      })

      facade = TestBed.inject(ProgressFacade)
      httpMock = TestBed.inject(HttpTestingController)
    })

    it('hydrates progress from API', () => {
      facade.progress()
      const req = httpMock.expectOne('/api/progress')
      req.flush({ completed: 6, total: 8, velocity: 1.2 })

      expect(facade.completionRate()).toBeCloseTo(0.75)
    })
  })
  ```
  课堂展示「金字塔」测试结构，集成 GitHub Actions 运行 `pnpm test`, `pnpm lint`, `pnpm e2e`，并在 PR 模板中强制附带测试截图。
- **课堂演示**：配置 Playwright 脚本访问 `http://localhost:4200/learning-dashboard`，断言课程卡片可见；介绍 `mockServiceWorker` 模拟后端。
- **课后挑战**：为 Progress 流程写一份可复用的测试工具函数（如 `createProgressFixture`），并集成覆盖率门槛（80%+）。

#### 课时 15 · 性能优化与可观测性
- **知识重点**：
  - 结合 [性能调优指南](https://angular.dev/guide/performance) 深入变更检测策略、信号派生、`trackBy`、延迟加载组件等手段。
  - 解释路由分区、`importProvidersFrom`、`PreloadAllModules`/自定义预加载策略对首屏的影响，并引入 `ngx-quicklink` 等社区方案。
  - 介绍浏览器性能监控与前端可观测性（Web Vitals、Sentry、OpenTelemetry），建立错误/性能仪表盘。
- **完整案例：自定义预加载与性能日志埋点**
  ```ts
  // src/app/app.routes.ts
  import { Route } from '@angular/router'
  import { LearningDashboardComponent } from './pages/learning-dashboard/learning-dashboard.component'
  import { selectivePreloading } from './shared/infrastructure/selective-preloading.strategy'

  export const appRoutes: Route[] = [
    {
      path: '',
      component: LearningDashboardComponent,
      providers: [selectivePreloading({ include: ['progress'] })],
    },
    {
      path: 'progress',
      loadComponent: () => import('./features/progress/progress.page'),
      data: { preload: true },
    },
  ]
  ```
  ```ts
  // src/app/shared/infrastructure/selective-preloading.strategy.ts
  import { PreloadingStrategy, Route } from '@angular/router'
  import { Observable, of } from 'rxjs'

  export function selectivePreloading(options: { include: string[] }): PreloadingStrategy {
    return {
      preload(route: Route, load: () => Observable<unknown>) {
        return route.data?.['preload'] && options.include.includes(route.path!)
          ? load()
          : of(null)
      },
    }
  }
  ```
  课堂结合 Angular DevTools Profiler、Chrome Performance 面板与 Lighthouse，量化优化前后的差异，并演示 `@angular/platform-browser` 的 `TransferState` 降低 SSR 重复请求。
- **课堂演示**：集成 `@angular/google-analytics` 或自建 `fetch('/telemetry')` 上报，展示如何通过自定义指令记录交互耗时。
- **课后挑战**：设置性能预算（`angular.json > budgets`），并在 CI 中结合 `lhci` 检查关键指标。

#### 课时 16 · 无障碍与国际化
- **知识重点**：
  - 遵循官方 [可访问性指南](https://angular.dev/guide/accessibility) 与 WAI-ARIA 规范，确保组件支持键盘导航、语义结构、对比度。
  - 学习 [Angular 国际化](https://angular.dev/guide/i18n) 流程，使用 `ng extract-i18n`、`localize` 包构建多语言包。
  - 讨论日期/数字货币的本地化策略，强调动态内容（如 Toast、Dialog）的无障碍友好写法。
- **完整案例：国际化 + 可访问的命令面板**
  ```ts
  // src/app/features/command-palette/command-palette.component.ts
  import { Component, EventEmitter, Input, Output } from '@angular/core'
  import { NgIf, NgFor } from '@angular/common'

  export interface CommandOption {
    id: string
    label: string
    shortcut?: string
  }

  @Component({
    standalone: true,
    selector: 'app-command-palette',
    imports: [NgIf, NgFor],
    templateUrl: './command-palette.component.html',
    styleUrl: './command-palette.component.css',
    host: {
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': $localize`:@@commandPalette:Command palette`,
    },
  })
  export class CommandPaletteComponent {
    @Input() options: CommandOption[] = []
    @Input() isOpen = false
    @Output() readonly execute = new EventEmitter<CommandOption>()

    protected activeIndex = 0

    onKeydown(event: KeyboardEvent) {
      if (!this.isOpen) return
      if (event.key === 'ArrowDown') {
        this.activeIndex = (this.activeIndex + 1) % this.options.length
        event.preventDefault()
      } else if (event.key === 'ArrowUp') {
        this.activeIndex = (this.activeIndex - 1 + this.options.length) % this.options.length
        event.preventDefault()
      } else if (event.key === 'Enter') {
        this.execute.emit(this.options[this.activeIndex])
        event.preventDefault()
      }
    }
  }
  ```
  ```html
  <!-- command-palette.component.html -->
  <section *ngIf="isOpen" tabindex="-1" (keydown)="onKeydown($event)">
    <header>
      <h2 i18n="@@commandPaletteTitle">全局命令</h2>
      <p class="sr-only" i18n="@@commandPaletteHint">使用上下箭头选择，回车执行</p>
    </header>
    <ul role="listbox" [attr.aria-activedescendant]="options[activeIndex]?.id">
      <li
        *ngFor="let option of options; let i = index"
        [id]="option.id"
        role="option"
        [attr.aria-selected]="i === activeIndex"
      >
        {{ option.label }}
        <span class="shortcut" *ngIf="option.shortcut">{{ option.shortcut }}</span>
      </li>
    </ul>
  </section>
  ```
  案例展示 `$localize` 提取翻译、键盘交互处理与屏幕阅读器提示，课堂配合 NVDA/VoiceOver 实测，并演示生成 `messages.xlf`、引入英文翻译包。
- **课堂演示**：配置 `pnpm ng extract-i18n --format xlf`, 使用 `@ngx-translate/core` 实现运行时切换；借助 `axe DevTools` 生成 A11y 报告。
- **课后挑战**：为应用添加「高对比度模式」开关与 `prefers-reduced-motion` 动画降级，同时完成至少两种语言的翻译校对。

### S3 项目实战（4 课时）

17. **项目立项与需求拆解** — 编写 PRD、用户旅程与信息架构。
18. **项目基础设施搭建** — 配置工程化脚手架、代码规范与 CI/CD。
19. **核心功能迭代与集成** — 通过敏捷迭代交付课程管理、进度追踪等模块。
20. **部署、监控与持续优化** — 完成上线、监控接入与回滚策略制定。

> ✅ 实战：交付一个可部署的学习管理平台，具备端到端的交付闭环。

#### 课时 17 · 项目立项与需求拆解
- **知识重点**：
  - 结合 [Angular 官方项目规划建议](https://angular.dev/tools/roadmap) 与 [设计思维流程](https://www.nngroup.com/articles/design-thinking/) 拆分业务目标，明确 MVP 边界与成功指标。
  - 使用用户旅程（Journey Map）与服务蓝图梳理学习者、讲师、管理员三类角色的痛点与触点，推导必需功能。
  - 借助领域建模（Event Storming、Context Mapping）将需求映射到 Angular 模块边界，规划 `courses`、`progress`、`evaluation` 等领域上下文。
- **完整案例：学习管理平台 PRD 速写**
  ```text
  目标：为企业培训打造课程学习与反馈闭环，4 周内交付最小可行产品。
  关键指标：课程完成率 ≥ 70%、满意度问卷响应率 ≥ 60%。
  用户画像：
    - 学习者：需要快速了解课程安排、跟踪进度、提交反馈。
    - 讲师：需要发布课程、查看学习数据、管理作业。
    - 管理员：需要配置学习计划、导出报表、处理异常。 
  用户旅程阶段（以学习者为例）：
    1. 接收课程任务 → 2. 预约/报名 → 3. 完成学习 → 4. 填写反馈 → 5. 查看证书。
  功能优先级（MoSCoW）：
    - Must：课程目录、进度追踪、反馈问卷、通知中心。
    - Should：积分体系、排行榜。
    - Could：学习推荐、课程分享。
    - Won't：线下签到（未来迭代）。
  ```
  PRD 输出配套信息架构图（IA）与页面流（Page Flow），确保导航结构与角色需求对齐。
- **课堂演示**：使用 FigJam/Miro 演练事件风暴，实时拆解用户旅程；在 Jira/Linear 中创建史诗（Epic）与用户故事，建立优先级看板。
- **课后挑战**：以自己的项目为例撰写 PRD 与验收标准（DoD），并绘制 `features` → `routes` → `components` 的依赖草图。

#### 课时 18 · 项目基础设施搭建
- **知识重点**：
  - 参考 [Angular 工作区配置文档](https://angular.dev/guide/workspace-config) 理解 CLI、环境文件与构建目标的关系，确定开发/预发布/生产环境策略。
  - 对比 Angular CLI、Nx、Monorepo 的差异，制定组织结构（例如 `apps/lms-web` + `libs/shared/ui`）。
  - 建立代码规范：ESLint + Prettier + Stylelint + Commitlint，配合 Husky、Lint-staged 实现提交前校验；CI 侧通过 GitHub Actions/Vercel 构建自动化流程。
- **完整案例：工程化脚手架 Blueprint**
  ```bash
  # 1. 初始化项目与必要库
  pnpm dlx @angular/cli@18 new lms --standalone --style=scss
  pnpm add -D @angular-eslint/schematics husky lint-staged commitlint @commitlint/config-conventional

  # 2. 生成领域模块骨架
  pnpm ng g feature courses/list --standalone --module=app --route=courses
  pnpm ng g feature progress/dashboard --standalone --route=progress

  # 3. 配置 Husky 与 lint-staged
  pnpm dlx husky-init && pnpm exec husky set .husky/pre-commit "pnpm lint"
  ```
  ```jsonc
  // package.json（片段）
  {
    "scripts": {
      "lint": "ng lint && stylelint 'src/**/*.scss'",
      "test": "ng test --watch=false",
      "ci": "pnpm lint && pnpm test && pnpm build"
    },
    "lint-staged": {
      "*.{ts,js}": "pnpm ng lint --fix",
      "src/**/*.scss": "stylelint --fix",
      "*.{md,json}": "prettier --write"
    }
  }
  ```
  ```yaml
  # .github/workflows/ci.yml
  name: CI
  on:
    pull_request:
    push:
      branches: [main]
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: pnpm/action-setup@v2
          with:
            version: 9
        - uses: actions/setup-node@v4
          with:
            node-version: 20
            cache: pnpm
        - run: pnpm install --frozen-lockfile
        - run: pnpm ci
  ```
- **课堂演示**：展示 Nx Graph/VS Code Workspace Diagram 观察依赖，配置 `environments/environment.staging.ts`，并通过 GitHub Actions + Vercel 预览环境实现「PR → 自动部署」。
- **课后挑战**：扩展 CI 流水线加入 Cypress 端到端测试、Bundle 分析（`ng build --stats-json` + `webpack-bundle-analyzer`），撰写团队协作文档。

#### 课时 19 · 核心功能迭代与集成
- **知识重点**：
  - 采用 Scrum/Kanban 管理迭代，拆分史诗 → 用户故事 → 任务，配合 Definition of Ready/Done 管控范围。
  - 利用 [Angular Router](https://angular.dev/guide/router) 的 Standalone API、[Signals](https://angular.dev/guide/signals) 与 RxJS 建立可观察状态；通过 `provideState` 与 Facade 模式隔离数据访问层。
  - 结合契约测试（Contract Test）或 Mock Service Worker，确保前后端协作与接口稳定性。
- **完整案例：课程目录 + 进度看板迭代**
  ```ts
  // src/app/features/courses/data/course.api.ts
  import { inject, Injectable } from '@angular/core'
  import { HttpClient } from '@angular/common/http'
  import { shareReplay } from 'rxjs'

  export interface CourseSummary {
    id: string
    title: string
    level: 'starter' | 'advanced'
    duration: number
    tags: string[]
  }

  @Injectable({ providedIn: 'root' })
  export class CourseApi {
    private readonly http = inject(HttpClient)
    private readonly baseUrl = '/api/courses'

    list$ = this.http
      .get<CourseSummary[]>(this.baseUrl)
      .pipe(shareReplay({ refCount: true, bufferSize: 1 }))

    find(id: string) {
      return this.http.get<CourseSummary>(`${this.baseUrl}/${id}`)
    }
  }
  ```
  ```ts
  // src/app/features/courses/data/course.facade.ts
  import { Injectable, computed, inject, signal } from '@angular/core'
  import { CourseApi } from './course.api'
  import { toSignal } from '@angular/core/rxjs-interop'

  @Injectable({ providedIn: 'root' })
  export class CourseFacade {
    private readonly api = inject(CourseApi)
    private readonly filter = signal<'all' | 'starter' | 'advanced'>('all')

    private readonly list = toSignal(this.api.list$, { initialValue: [] })

    readonly courses = computed(() => {
      const value = this.list()
      const scope = this.filter()
      return scope === 'all' ? value : value.filter(item => item.level === scope)
    })

    setFilter(level: 'all' | 'starter' | 'advanced') {
      this.filter.set(level)
    }
  }
  ```
  ```ts
  // src/app/features/progress/feature/progress.routes.ts
  import { Routes } from '@angular/router'
  import { inject } from '@angular/core'
  import { provideHttpClient, withFetch } from '@angular/common/http'
  import { ProgressDashboardComponent } from './progress-dashboard.component'
  import { ProgressSnapshotService } from '../data/progress-snapshot.service'

  export const PROGRESS_ROUTES: Routes = [
    {
      path: '',
      providers: [provideHttpClient(withFetch()), ProgressSnapshotService],
      loadComponent: () => ProgressDashboardComponent,
      resolve: {
        snapshot: () => inject(ProgressSnapshotService).loadSnapshot(),
      },
    },
  ]
  ```
  ```ts
  // src/app/features/progress/data/progress-snapshot.service.ts
  import { inject, Injectable } from '@angular/core'
  import { HttpClient } from '@angular/common/http'
  import { firstValueFrom } from 'rxjs'

  export interface ProgressSnapshot {
    completed: number
    total: number
    satisfaction: number
  }

  @Injectable()
  export class ProgressSnapshotService {
    private readonly http = inject(HttpClient)

    loadSnapshot() {
      return firstValueFrom(
        this.http.get<ProgressSnapshot>('/api/progress/snapshot'),
      )
    }
  }
  ```
  在迭代评审会上演示课程列表、进度仪表板、反馈表单的串联，覆盖单元测试（Jest/Vitest）、组件测试（Testing Library）与 Cypress 场景测试。
- **课堂演示**：现场拆解一个用户故事（“学习者可以过滤课程并查看完成率”），演示从 `Feature` 目录布局到 Facade/Signals/Tailwind 样式的集成流程。
- **课后挑战**：为课程列表补充离线缓存（IndexedDB + `@ngx-pwa/local-storage`），实现 `Optimistic Update` 并编写契约测试校验 API 兼容性。

#### 课时 20 · 部署、监控与持续优化
- **知识重点**：
  - 阅读 [Angular 部署指南](https://angular.dev/guide/deployment) 了解静态托管（Vercel、Firebase Hosting）、Server-Side Rendering（Angular Universal）、边缘渲染的差异与选择标准。
  - 接入性能监控（Web Vitals、Core Web Vitals 采集）与错误追踪（Sentry、OpenTelemetry），建立 SLA/SLI 监控看板。
  - 制定蓝绿/灰度发布策略、回滚流程与事后复盘（Postmortem）模板。
- **完整案例：从构建到观测的上线流水线**
  ```bash
  # 1. 构建生产包
  pnpm ng build --configuration=production --base-href=/lms/

  # 2. SSR/预渲染（可选）
  pnpm ng add @angular/ssr
  pnpm ng run lms:prerender
  ```
  ```ts
  // src/app/core/monitoring/sentry.provider.ts
  import { APP_INITIALIZER, Provider } from '@angular/core'
  import * as Sentry from '@sentry/angular-ivy'

  export function provideSentry(dsn: string): Provider {
    return {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: () => () =>
        Sentry.init({
          dsn,
          integrations: [new Sentry.BrowserTracing()],
          tracesSampleRate: 0.2,
        }),
    }
  }
  ```
  ```ts
  // src/app/app.config.ts（片段）
  import { provideSentry } from './core/monitoring/sentry.provider'

  export const appConfig: ApplicationConfig = {
    providers: [
      provideSentry(import.meta.env.NG_APP_SENTRY_DSN ?? ''),
      // ...其他 provider
    ],
  }
  ```
  ```yaml
  # vercel.json（片段）
  {
    "rewrites": [{ "source": "/api/(.*)", "destination": "https://api.example.com/$1" }],
    "headers": [
      {
        "source": "/(.*)",
        "headers": [
          { "key": "Strict-Transport-Security", "value": "max-age=63072000; includeSubDomains" },
          { "key": "Content-Security-Policy", "value": "default-src 'self'; img-src https://cdn.example.com" }
        ]
      }
    ]
  }
  ```
  演示上线后的 SLO 监控看板，包含 Lighthouse CI、Sentry Issue、Logtail/ELK 日志聚合，以及 Feature Flag（Unleash/LaunchDarkly）控制回滚。
- **课堂演示**：演练「预发布 → 生产」发布流程，触发故障注入（模拟 API 错误）并通过监控报警定位问题；展示如何使用 `ng deploy` 集成 Firebase Hosting。
- **课后挑战**：搭建自动回滚脚本（利用 GitHub Actions + Vercel API），并撰写一次模拟上线的 Postmortem，记录时间线、根因与行动项。

## 🖥️ 交互式学习站点亮点

- **数据驱动的课程导航**：基于 `LESSONS` 配置自动渲染课程列表，支持阶段筛选、标签过滤与关键字搜索。
- **学习进度追踪**：内置 `LearningProgressService` 使用 Angular Signals 管理完成进度，自动同步到 LocalStorage。
- **项目实践建议**：针对未完成课程生成下一步实战提示，帮助在基础理论后迅速进入动手环节。
- **自适应暗色界面**：采用自定义 SCSS 主题，响应式布局覆盖桌面与移动端。

运行应用后访问 `http://localhost:4200`，即可体验完整交互功能。

## 🧱 代码结构速览

```text
src/
└── app/
    ├── data/                 # LESSONS 与阶段配置
    ├── models/               # 课程、练习、资源类型定义
    ├── pages/
    │   └── learning-dashboard/  # 交互式学习页面
    └── services/             # 学习进度信号服务
```


1. Fork 本项目并创建特性分支：`git checkout -b feat/new-lesson`
2. 提交更改：`git commit -m "feat: add lesson"`
3. 推送到远程：`git push origin feat/new-lesson`
4. 在 GitHub 发起 Pull Request，描述改动与测试情况。

## 📄 许可证

本项目遵循仓库根目录的开源许可协议。欢迎在遵循协议的前提下引用或复用课程内容与代码示例。
