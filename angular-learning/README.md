# Angular 全栈学习路径（20 课时）

> 面向希望系统掌握 Angular 的前端工程师，结合基础知识与项目实战打造的 20 课时学习目录。配套的交互式学习站点位于 `src/app/pages/learning-dashboard`，在本地运行即可获得课程导航、进度跟踪与实践建议。

## 🚀 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器（默认端口 4200）
pnpm start

# 生产构建
pnpm build

# 单元测试
pnpm test
```

> 💡 提示：首次运行会自动安装 Angular CLI，建议使用 Node.js 18+ 与 pnpm 8+。

## 🧭 学习路径概览

本路线共 20 课时，分为四个阶段：

| 阶段 | 课时范围 | 核心目标 | 产出 | 实战聚焦 |
|------|-----------|----------|------|-----------|
| S0 启动阶段 | S1-S3 | 熟悉工具链与架构理念 | 独立搭建 Angular 开发环境 | CLI、TypeScript、组件化思维 |
| S1 核心能力 | S4-S10 | 打牢组件、模板、路由、表单、状态基础 | 构建数据驱动的学习计划页面 | 组件通信、Signals、HttpClient |
| S2 进阶提升 | S11-S16 | 提升架构、可维护性与质量保障 | 建立设计系统与性能优化方案 | 模块化、RxJS、测试、性能、A11y |
| S3 项目实战 | S17-S20 | 端到端交付企业级项目 | 完成立项、工程化、部署闭环 | PRD、CI/CD、迭代、监控 |

总计预计学习时长约 **40 小时**，建议按照「2 节基础课 + 1 次实战输出」的节奏推进。

## 📚 详细课程安排

### S0 启动阶段（3 课时）

1. **Angular 开发环境与工作流** — 搭建 CLI、熟悉工作区结构，完成首个组件生成与运行。
2. **Angular 中的 TypeScript 精要** — 复盘接口、泛型、装饰器，用类型守卫保障课程数据安全。
3. **Angular 架构与组件化思维** — 理解 Standalone 组件、依赖注入树与变更检测策略。

> ✅ 实战：完成「学习计划信息面板」组件拆分并搭建基础页面骨架。

### S1 核心能力（7 课时）

4. **模板语法与数据绑定** — 熟练运用插值、属性/事件绑定与结构指令构建动态视图。
5. **组件通信与生命周期钩子** — 通过 Input/Output、ViewChild 与钩子串联父子组件。
6. **依赖注入与服务设计** — 封装学习进度服务，掌握提供者作用域管理。
7. **路由系统与导航体验** — 配置多页面导航，支持参数路由与懒加载。
8. **表单体系与响应式表单** — 实现目标设定表单与实时验证反馈。
9. **HttpClient 与数据交互** — 构建资源 API、拦截器与错误处理策略。
10. **信号与轻量状态管理** — 使用 Signals 构建学习进度仪表盘，理解派生状态。

> ✅ 实战：完成交互式课程导航，具备筛选、收藏、进度标记与数据请求模拟。

### 📘 前五课详解（S1-S5）

#### 课时 1 · Angular 开发环境与工作流
- **知识纲要**：
  1. 跟随官方 [本地开发环境搭建指南](https://angular.dev/tools/setup-local) 完成 Node.js、pnpm、Angular CLI 安装，并演示 `ng version` 校验环境。
  2. 结合 [工作区配置文档](https://angular.dev/guide/workspace-config) 拆解 `angular.json`、`tsconfig.json` 与 `package.json` 中脚本、生成器、构建目标的职责。
  3. 引导学员认识 `src/main.ts` 中 `bootstrapApplication` 的启动流程，对比 Standalone 与 NgModule 两种启动模式。
- **完整案例：首个 Standalone 组件**
  ```ts
  // src/app/app.component.ts
  import { Component } from '@angular/core'

  interface LessonSummary {
    title: string
    duration: string
  }

  @Component({
    selector: 'app-root',
    standalone: true,
    template: `
      <h1 class="title">Angular 学习计划</h1>
      <ul>
        <li *ngFor="let lesson of lessons">
          {{ lesson.title }} · {{ lesson.duration }}
        </li>
      </ul>
    `,
    styles: [
      '.title { font-size: 24px; margin-bottom: 12px; font-weight: 600; }',
    ],
  })
  export class AppComponent {
    lessons: LessonSummary[] = [
      { title: '环境搭建', duration: '2h' },
      { title: 'TypeScript 精要', duration: '2h' },
    ]
  }
  ```
  案例覆盖组件创建、模板语法、样式隔离，展示 CLI 生成结果如何落地到实际文件中。
- **课堂演示**：从零创建 `angular-learning-demo` 项目，演示 `pnpm ng serve` 热更新流程、ESLint/Prettier 自动修复、Angular DevTools 检查组件树，并对比 VS Code Angular Language Service 的提示效果。
- **课后挑战**：整理一份「开发环境核对清单」，写出常用 CLI 命令、首个组件截图、常见错误与排查步骤。

#### 课时 2 · Angular 中的 TypeScript 精要
- **知识重点**：
  - 对照 [TypeScript for Angular](https://angular.dev/typescript) 梳理接口、类型别名、枚举、泛型在数据建模中的差异，并结合 `strict` 选项解释类型推断。
  - 通过 [依赖注入装饰器文档](https://angular.dev/reference/di/decorators/Injectable) 展示装饰器如何在运行时附带元数据，进而驱动 Angular 的依赖注入与变更检测。
  - 讲解 `satisfies`、`ReturnType`、`Partial`、`Record` 等现代语法在组件输入约束、配置映射中的典型用法。
- **完整案例：类型守卫保障课程数据**
  ```ts
  // src/app/models/lesson.model.ts
  export interface Lesson {
    id: string
    title: string
    estimatedHours: number
  }

  export function assertLesson(value: unknown): asserts value is Lesson {
    if (
      typeof value !== 'object' ||
      value === null ||
      typeof (value as Lesson).id !== 'string' ||
      typeof (value as Lesson).title !== 'string' ||
      typeof (value as Lesson).estimatedHours !== 'number'
    ) {
      throw new TypeError('Invalid lesson payload received from API')
    }
  }
  ```
  随后在服务层结合 `try/catch` 捕获错误并记录遥测日志，展示类型系统如何保障运行时安全。
- **课堂演示**：利用 `vitest` 编写单元测试覆盖 `assertLesson` 的正常与异常场景，并通过泛型 `HttpClient.get<Lesson>()` 讲解类型参数如何强化 API 使用体验。
- **课后挑战**：对比 `interface` 与 `type` 的合并行为差异，为课程实体补充可选字段与默认值策略，并记录设计取舍。

#### 课时 3 · Angular 架构与组件化思维
- **课堂结构**：
  1. 结合官方 [Angular 架构概览](https://angular.dev/guide/architecture) 分析应用引导、依赖注入、模板编译三条主线，梳理每条主线在 Standalone 模式下的入口。
  2. 使用 `ng g component learning-dashboard --standalone --change-detection OnPush` 演示变更检测策略差异，并解释 `ChangeDetectionStrategy.OnPush` 如何配合不可变数据提升性能。
  3. 绘制学习平台的组件树，区分「容器组件」负责数据获取、「展示组件」专注 UI 呈现，介绍 Inputs/Outputs、Signals 在层级间的使用策略。
- **完整案例：容器组件 + 展示组件分层**
  ```ts
  // src/app/pages/learning-dashboard/learning-dashboard.component.ts
  import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
  import { LessonListComponent } from './lesson-list.component'
  import { LessonDetailsComponent } from './lesson-details.component'

  @Component({
    standalone: true,
    selector: 'app-learning-dashboard',
    template: `
      <app-lesson-list
        [lessons]="lessons()"
        (selectLesson)="onSelect($event)"
      />
      <app-lesson-details [lesson]="selectedLesson()" />
    `,
    imports: [LessonListComponent, LessonDetailsComponent],
    changeDetection: ChangeDetectionStrategy.OnPush,
  })
  export class LearningDashboardComponent {
    private readonly lessons = signal([
      { id: 's1', title: '模板语法', estimatedHours: 2 },
      { id: 's2', title: '组件通信', estimatedHours: 2 },
    ])
    protected readonly selectedLesson = signal(this.lessons()[0])

    protected onSelect(lesson: { id: string; title: string }) {
      this.selectedLesson.set(lesson)
    }
  }
  ```
  示例强化「容器负责状态、展示组件无状态」的思路，配合 DevTools Profiler 观察信号驱动的变更检测。
- **课堂演示**：拆解 `main.ts` 中的 `bootstrapApplication`、`provideRouter`、`provideHttpClient` 调用，讨论依赖注入树如何根据提供者位置生成实例；使用 Angular DevTools 标记变更来源。
- **课后挑战**：为课程页面输出完整组件草图，列出每个组件的输入/输出、信号状态与服务依赖，提交 PR 或设计文档。

#### 课时 4 · 模板语法与数据绑定
- **知识重点**：
  - 遵循 [模板语法指南](https://angular.dev/guide/templates) 讲解插值、属性绑定、事件绑定、双向绑定（`[(ngModel)]`）的写法与运行机制。
  - 深入 [结构指令示例](https://angular.dev/guide/structural-directives)，对比 `*ngIf`/`@if`、`*ngFor`/`@for` 的语法差异，并说明 `trackBy` 如何降低 DOM 重建成本。
  - 演示 `ngClass`、`ngStyle`、管道、模板引用变量、`@switch` 组合出复杂的 UI 状态管理。
- **完整案例：动态课程列表组件**
  ```ts
  // src/app/components/lesson-list.component.ts
  import { Component, EventEmitter, Input, Output } from '@angular/core'
  import { FormsModule } from '@angular/forms'

  export interface LessonListItem {
    id: string
    title: string
    section: string
    completed: boolean
  }

  @Component({
    standalone: true,
    selector: 'app-lesson-list',
    imports: [FormsModule],
    template: `
      <input
        type="search"
        class="search"
        placeholder="搜索课程"
        [(ngModel)]="keyword"
      />

      <ul>
        <li
          *ngFor="let lesson of filteredLessons(); trackBy: trackById"
          (click)="selectLesson.emit(lesson)"
          [ngClass]="{ completed: lesson.completed }"
        >
          <span>{{ lesson.title }}</span>
          <small>@if (lesson.completed) { 已完成 } @else { 待学习 }</small>
        </li>
      </ul>
    `,
    styles: [
      '.search { width: 100%; padding: 8px; margin-bottom: 12px; }',
      'li { cursor: pointer; display: flex; justify-content: space-between; }',
      'li.completed { color: #16a34a; }',
    ],
  })
  export class LessonListComponent {
    @Input({ required: true }) lessons: LessonListItem[] = []
    @Output() readonly selectLesson = new EventEmitter<LessonListItem>()

    protected keyword = ''

    protected filteredLessons() {
      return this.lessons.filter((lesson) =>
        lesson.title.toLowerCase().includes(this.keyword.toLowerCase()),
      )
    }

    protected trackById(_: number, lesson: LessonListItem) {
      return lesson.id
    }
  }
  ```
  通过完整组件演示结构指令、`ngModel` 双向绑定、事件绑定与样式切换的协同。
- **课堂演示**：使用 Chrome DevTools 观察模板重绘，演示 `@for (lesson of lessons; track lesson.id)` 与传统 `*ngFor` 的性能差异；拓展 `ngTemplateOutlet` 复用模板片段。
- **课后挑战**：编写一个「课程时长格式化」自定义管道，将分钟数转换为「1h 30m」形式，并在模板中应用。

#### 课时 5 · 组件通信与生命周期钩子
- **知识重点**：
  - 依照 [组件交互指南](https://angular.dev/guide/components/inputs-outputs) 展示父子通信、内容投影、`ViewChild` 引用本地模板变量的实践模式。
  - 对照 [生命周期钩子文档](https://angular.dev/guide/components/lifecycle) 解释 `ngOnInit`、`ngOnChanges`、`ngAfterViewInit`、`ngOnDestroy` 的调用时机，并在 DevTools 中观察触发顺序。
  - 引入 `DestroyRef`、`takeUntilDestroyed` 等 v16+ API，讲解订阅、计时器、DOM 监听的统一释放策略。
- **完整案例：父子组件通信与生命周期调试**
  ```ts
  // src/app/components/lesson-details.component.ts
  import {
    Component,
    DestroyRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    inject,
  } from '@angular/core'
  import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
  import { interval, tap } from 'rxjs'

  export interface LessonDetail {
    id: string
    title: string
    description: string
  }

  @Component({
    standalone: true,
    selector: 'app-lesson-details',
    template: `
      <section *ngIf="lesson as item; else empty">
        <h2>{{ item.title }}</h2>
        <p>{{ item.description }}</p>
        <p>已浏览 {{ tick }} 秒</p>
      </section>
      <ng-template #empty>请选择一节课程查看详情</ng-template>
    `,
  })
  export class LessonDetailsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() lesson: LessonDetail | null = null

    protected tick = 0
    private readonly destroyRef = inject(DestroyRef)

    ngOnInit() {
      interval(1000)
        .pipe(
          tap(() => (this.tick += 1)),
          takeUntilDestroyed(this.destroyRef),
        )
        .subscribe()
    }

    ngOnChanges(changes: SimpleChanges) {
      if (changes['lesson']) {
        this.tick = 0
      }
    }

    ngOnDestroy() {
      console.log('LessonDetailsComponent destroyed')
    }
  }
  ```
  搭配父组件监听 `selectLesson` 事件，演示 `ngOnChanges` 的变更日志、`DestroyRef` 自动清理订阅。
- **课堂演示**：使用 `ViewChild` 捕获子组件公开方法，演练内容投影与 `ng-content`；结合 Jasmine/Vitest `fakeAsync` 编写生命周期测试，验证定时器重置逻辑。
- **课后挑战**：为组件补充 `EffectRef` 或 RxJS `Subject` 的清理方案，提交对比笔记总结不同钩子的应用场景。

### S2 进阶提升（6 课时）

11. **大型应用架构模式** — 规划 Feature/Shared/Core 模块与依赖关系。
12. **设计系统与可复用组件** — 打造课程卡片、标签等 UI 组件并引入主题机制。
13. **RxJS 与异步流管理** — 通过高阶映射、共享策略实现实时学习看板。
14. **测试体系与质量保障** — 覆盖单元、组件与端到端测试流程。
15. **性能优化与可观测性** — 使用 OnPush、懒加载与 DevTools 诊断性能瓶颈。
16. **无障碍与国际化** — 提升可访问性，接入多语言切换。

> ✅ 实战：建立组件文档、性能监控与 A11y 检查清单，确保可维护与可靠性。

#### 课时 11 · 大型应用架构模式
- **知识纲要**：
  1. 参考官方 [应用结构指南](https://angular.dev/guide/structure) 将项目划分为 `core`、`shared`、`features` 与 `infrastructure` 等层次，强调单向依赖与公共约束。
  2. 引入 [Standalone 组合式架构](https://angular.dev/guide/standalone-components) 的特性，说明 `provideRouter`、`provideHttpClient` 在 `app.config.ts` 中集中配置的好处。
  3. 借鉴社区对大型仓库（如 Nx、Angular 官方项目）的实践，演示如何通过「域驱动」划分边界，利用 `Route` 层懒加载隔离 Feature。
- **完整案例：学习平台模块分层草图**
  ```ts
  // src/app/app.config.ts
  import { ApplicationConfig, provideHttpClient } from '@angular/core'
  import { provideRouter, withComponentInputBinding } from '@angular/router'
  import { appRoutes } from './app.routes'
  import { provideState, provideEffects } from '@ngrx/effects'
  import { progressFeature } from './features/progress/data/progress.feature'

  export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(appRoutes, withComponentInputBinding()),
      provideHttpClient(),
      provideState(progressFeature),
      provideEffects(),
    ],
  }
  ```
  配套的目录结构图强调 `features/<domain>` 存放页面与 Facade，`shared/ui` 只导出无状态组件；在课堂上讨论依赖反转与公共工具的放置原则。
- **课堂演示**：使用 VS Code Workspace Diagram 或 Nx Graph 查看依赖关系，实践 `eslint-plugin-boundaries` 配置禁止跨域引用，演练一次「新建学习计划 Feature」的完整流程。
- **课后挑战**：为自己的项目绘制模块依赖图，识别潜在的循环依赖并提交重构方案。

#### 课时 12 · 设计系统与可复用组件
- **知识重点**：
  - 对照 [Angular 样式与主题文档](https://angular.dev/guide/components/styles) 和 [Angular Material Theming](https://material.angular.io/guide/theming) 提炼令牌化的设计系统理念。
  - 结合 CSS 变量、Tailwind、Angular CDK Overlay 等方案，讲解「设计 Tokens → 组件 → 模式」的层级关系。
  - 强调可访问的 UI 组件需要考虑焦点轮廓、ARIA 属性、键盘操作，配合 Storybook/DocsPage 形成设计资产。
- **完整案例：课程卡片组件 + 设计令牌**
  ```ts
  // src/app/shared/ui/course-card/course-card.component.ts
  import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

  export interface CourseCard {
    title: string
    level: 'starter' | 'advanced'
    duration: number
    tags: string[]
  }

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

## 📌 推荐学习节奏

1. **每周 2~3 课时**：保证消化与输出时间，配合小结或博客记录。
2. **课堂 → 实战 → 复盘**：完成知识输入后立刻动手，通过 PR 或分享进行复盘。
3. **阶段总结**：每个阶段结束产出 Checklist，校验核心能力是否达到预期。

祝学习顺利，享受构建现代 Angular 应用的旅程！
