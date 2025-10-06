import type { LearningStage } from './index'

export const learningStages: LearningStage[] = [
  {
    id: 'l0',
    title: 'L0 TypeScript 起源与现代生态',
    description: '追溯 TypeScript 的诞生动机与现代生态版图，理解它为何成为大型团队的首选语言。',
    background:
      '2010 年前后，微软为了解决 JavaScript 在大型项目中的可维护性问题，由 Anders Hejlsberg 带队设计 TypeScript。它通过静态类型和结构化工具链，让团队可以提前发现缺陷并共享契约。',
    objectives: ['认识 TypeScript 的设计目标', '理解与 ECMAScript 的关系', '熟悉社区、版本节奏与 RFC 流程'],
    tasks: ['整理 3 个使用 TypeScript 的成功案例', '绘制 TypeScript 与 TC39 合作的流程图'],
    acceptanceCriteria: [
      '能够解释 TypeScript 如何补全 JavaScript 的短板',
      '掌握 LTS、Beta、Nightly 渠道的适用场景'
    ],
    route: '/lesson/l0',
    completed: false,
    spotlight: {
      label: '为什么 TypeScript 必不可少？',
      points: [
        '类型系统的早期错误发现能力，将问题前置到 IDE 阶段',
        '增强的 IntelliSense 与重构体验，降低跨团队沟通成本',
        '渐进式引入，保留对现有 JavaScript 资产的兼容'
      ]
    },
    tooling: ['TypeScript Roadmap', 'TypeScript Compiler API', 'TC39 Stage 流程'],
    courseContent: {
      summary:
        '通过官方 Handbook 与核心团队分享，梳理 TypeScript 的诞生动机、演进节奏以及围绕语言形成的生态网络。',
      sections: [
        {
          title: '语言诞生与设计目标',
          description:
            '理解 TypeScript 如何在不破坏既有 JavaScript 资产的前提下，引入类型系统与现代工程能力。',
          bullets: [
            '2012 年由微软公布，Anders Hejlsberg 领衔设计，目标是为大型 JavaScript 应用提供可选的静态类型。',
            '官方「TypeScript for JavaScript Programmers」指出语言是 ECMAScript 的严格超集，所有 JavaScript 代码都是有效的 TypeScript。',
            '语言服务（Language Service）与编译器协作，提供即时诊断、重构与自动补全能力。'
          ]
        },
        {
          title: '与 ECMAScript 的协作机制',
          description: '掌握 TypeScript 与 TC39 标准化流程的互动方式，理解语法提案如何落地到发行版本。',
          bullets: [
            '编译器将最新语法转换为目标 ECMAScript 版本，使团队可以在旧版运行时部署现代特性。',
            '官方发布节奏包含 Stable、Beta 与 Nightly 渠道，快速验证 Stage 3+ 提案并收集反馈。',
            '声明文件（.d.ts）覆盖 DOM、Node.js 等环境 API，为 JavaScript 平台提供一致的类型契约。'
          ]
        },
        {
          title: '生态系统关键支柱',
          description: '梳理围绕 TypeScript 的社区与工具，理解它如何形成正向循环。',
          bullets: [
            'DefinitelyTyped 社区维护超 20,000 个库的类型声明，成为第三方生态的基础设施。',
            'TypeScript-ESLint、Prettier、Babel、SWC 等工具链提供检查、格式化与降级能力。',
            'VS Code、WebStorm 等主流 IDE 默认集成 TypeScript 语言服务，降低团队迁移成本。'
          ]
        }
      ]
    },
    resources: [
      'TypeScript 设计目标文档',
      'Anders Hejlsberg 在 Build 大会的演讲',
      'State of JS 近三年报告中的 TypeScript 章节'
    ],
    project: {
      title: '团队现状调研报告',
      description: '站在团队工程视角，评估引入 TypeScript 的收益与风险。',
      milestones: [
        '识别业务中的关键痛点（协作、测试、重构）',
        '调研当前工具链对 TypeScript 的支持度',
        '形成可落地的演进路线图'
      ]
    },
    codeDemo: {
      title: '类型信息如何驱动 IDE 体验',
      description: '对比纯 JavaScript 与 TypeScript，在编辑器中可获得的提示差异。',
      ts: `const users: Array<{ id: number; name: string }> = [
  { id: 1, name: 'Ada' },
  { id: 2, name: 'Linus' }
]

users.map(user => user.name.toUpperCase())`,
      js: `const users = [
  { id: 1, name: 'Ada' },
  { id: 2, name: 'Linus' }
]

users.map(user => user.name.toUpperCase()) // 缺少静态约束`
    }
  },
  {
    id: 'l1',
    title: 'L1 从 TypeScript 到 JavaScript：编译工具链',
    description: '掌握 tsc 命令与 tsconfig 核心配置，理解源码到产物的转换流程。',
    background:
      'TypeScript 编译器负责类型检查与降级输出。通过 tsconfig 可以控制目标运行时（target）、模块系统（module）以及增量编译等特性。',
    objectives: ['熟悉 tsc CLI', '理解常见 tsconfig 选项', '掌握编译产物结构'],
    tasks: ['配置自定义 tsconfig 并输出不同 target 的产物', '比较 ESNext 与 ES2017 产物差异'],
    acceptanceCriteria: [
      '能够解释 sourceMap、declaration、moduleResolution 等配置的作用',
      '清楚增量编译与 project references 的使用场景'
    ],
    route: '/lesson/l1',
    completed: false,
    spotlight: {
      label: '编译阶段关注点',
      points: [
        '类型检查与发射（emit）可以分离执行',
        '借助 project references 管理多包仓库',
        '了解 Babel、swc 与 tsc 的职责划分'
      ]
    },
    tooling: ['tsc', 'ts-node', 'tsx'],
    courseContent: {
      summary: '围绕 tsc CLI 与 tsconfig，剖析 TypeScript 从源码到 JavaScript 的编译生命周期以及工程化配置。',
      sections: [
        {
          title: '编译器工作流',
          description: '掌握 tsc 的基础命令与工作阶段，理解类型检查与代码发射的关系。',
          bullets: [
            '`tsc --init` 可生成基础 tsconfig，辅助团队快速建立编译配置骨架。',
            '`tsc --watch`、`--noEmit` 支持持续类型检查或纯诊断流程。',
            '编译流程经历解析、绑定、类型检查、发射四个阶段，对应 Language Service 的核心能力。'
          ]
        },
        {
          title: 'tsconfig 核心维度',
          description: '聚焦常用编译选项，掌握如何针对运行时和工程要求做出取舍。',
          bullets: [
            '`target` 控制输出 JavaScript 版本，ES5、ES2017、ESNext 常用于适配不同运行时。',
            '`module` 与 `moduleResolution` 决定模块格式及解析策略，可选择 NodeNext、Bundler 等模式。',
            '`strict` 家族开关（strictNullChecks、noImplicitAny 等）帮助确保类型系统的完整性。'
          ],
          examples: [
            {
              title: '基础 tsconfig 示例',
              content: `使用 \`tsc --init\` 生成的配置可以按需精简：
\`\`\`json
{
  "compilerOptions": {
    "target": "ES2017",
    "module": "NodeNext",
    "strict": true,
    "outDir": "dist"
  },
  "include": ["src"]
}
\`\`\`
利用不同的 tsconfig.*.json 可以覆盖部分选项，构建多产物。`
            }
          ]
        },
        {
          title: '多目标与多包工程',
          description: '面向真实项目，规划多入口、多产物的编译策略。',
          bullets: [
            '`composite`、`declaration` 组合生成可发布的 .d.ts 类型产物。',
            'Project References 将大型代码库拆分为可增量编译的子工程，提升构建速度。',
            '结合 `outDir`、`module` 与 `moduleResolution`，可以输出 ESM/CJS 双产物结构。'
          ]
        }
      ]
    },
    resources: ['tsconfig 官方文档', 'TypeScript Deep Dive - tsconfig 章节'],
    project: {
      title: '多目标输出脚手架',
      description: '为一个工具库搭建同时支持 ESM/CJS 的编译配置。',
      milestones: [
        '创建基础 tsconfig 并拆分子配置',
        '引入构建脚本生成双份产物',
        '通过 npm 包结构验证导入效果'
      ]
    },
    codeDemo: {
      title: '编译目标差异示例',
      description: '查看 async/await 在不同目标下的输出差异。',
      ts: `async function fetchData() {
  const res = await fetch('/api')
  return res.json()
}`,
      js: `"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
function fetchData() {
  return __awaiter(this, void 0, void 0, function* () {
    const res = yield fetch('/api');
    return res.json();
  });
}`
    }
  },
  {
    id: 'l2',
    title: 'L2 基础类型与类型推断',
    description: '深入理解原始类型、字面量类型与类型推断，让类型系统成为开发助手。',
    background:
      'TypeScript 采用结构类型系统，默认通过上下文推断类型。严格模式下，隐式 any 会被禁止，促使我们写出更安全的代码。',
    objectives: ['掌握基础类型', '理解类型推断', '熟悉严格模式'],
    tasks: ['重构原有 JavaScript 校验逻辑为 TypeScript', '配置 noImplicitAny 并修复报错'],
    acceptanceCriteria: [
      '所有变量具备明确的类型或可靠的推断',
      '能够解释 let 与 const 在类型推断上的差异'
    ],
    route: '/lesson/l2',
    completed: false,
    spotlight: {
      label: '推断的力量',
      points: [
        '上下文类型让事件监听更安全',
        '字面量类型配合联合类型提供精确提示',
        '善用 as const 固定推断结果'
      ]
    },
    tooling: ['TypeScript Language Service', 'tsc --noEmit'],
    courseContent: {
      summary: '围绕基础类型体系与推断机制，帮助学习者在严格模式下构建安全、表达力强的 TypeScript 代码。',
      sections: [
        {
          title: '基础类型全景',
          description: '熟悉常见原始类型与结构化类型，建立清晰的类型语义。',
          bullets: [
            '掌握 boolean、number、string、bigint、symbol、null 与 undefined 等原始类型。',
            '理解数组、元组、枚举与 `unknown`、`any`、`never` 等特殊类型的适用场景。',
            '利用字面量类型与联合类型，表达状态机或受限取值集合。'
          ]
        },
        {
          title: '类型推断策略',
          description: '拆解 TypeScript 的推断机制，在项目中减少冗余注解。',
          bullets: [
            '局部推断：根据初始化表达式得出变量与返回值的类型。',
            '上下文类型：事件处理、回调参数会从调用点自动推断签名。',
            '`as const`、模板字面量类型帮助保留精确的字面量信息，提升 IDE 提示质量。'
          ]
        },
        {
          title: '严格模式守护',
          description: '通过启用严格选项让类型系统成为防御层，减少运行时风险。',
          bullets: [
            '`noImplicitAny` 与 `strictNullChecks` 阻止隐式 any 和潜在空值访问。',
            '`--exactOptionalPropertyTypes` 让可选属性的语义与运行时保持一致。',
            '`--noUncheckedIndexedAccess` 与 `--useUnknownInCatchVariables` 支持更稳健的防御式编程。'
          ]
        }
      ]
    },
    resources: ['Handbook - Basic Types', 'TypeScript for JS Programmers'],
    project: {
      title: '智能表单校验库',
      description: '将一段原生 JS 表单校验脚本迁移到 TypeScript，并添加自动完成提示。',
      milestones: [
        '定义输入字段与错误信息的类型模型',
        '实现严格的校验函数返回值类型',
        '在 IDE 中验证推断效果'
      ]
    },
    codeDemo: {
      title: '字面量类型的校验优势',
      description: '通过 as const 与联合类型，限制函数可用参数。',
      ts: `const statusMap = {
  draft: '草稿',
  published: '已发布',
  archived: '归档'
} as const

type Status = keyof typeof statusMap

function setStatus(status: Status) {
  console.log(statusMap[status])
}

setStatus('draft')
// setStatus('deleted') // ❌ 编译期报错`,
      js: `const statusMap = {
  draft: '草稿',
  published: '已发布',
  archived: '归档'
};

function setStatus(status) {
  console.log(statusMap[status]);
}

setStatus('draft');
setStatus('deleted'); // 运行时才会暴露问题`
    }
  },
  {
    id: 'l3',
    title: 'L3 函数类型与 this 绑定',
    description: '学习函数类型、重载与 this 参数，打造安全的工具函数。',
    background:
      '函数是 JavaScript 的一等公民，TypeScript 通过类型签名约束入参与返回值，同时允许使用重载表达复杂调用方式。',
    objectives: ['编写函数类型签名', '理解 this 参数与上下文类型', '掌握函数重载'],
    tasks: ['为事件委托工具函数编写类型', '封装带重载的查询函数'],
    acceptanceCriteria: [
      '所有函数的 this 使用显式声明或箭头函数',
      '重载实现与声明保持一致'
    ],
    route: '/lesson/l3',
    completed: false,
    spotlight: {
      label: '易错点速记',
      points: [
        '重载实现体只写一次，包含联合类型分支',
        'this 参数必须是第一个形参且不计入调用签名',
        '函数类型可复用类型别名提升可读性'
      ]
    },
    tooling: ['tsc --watch', 'eslint typescript-eslint plugin'],
    courseContent: {
      summary:
        '本课围绕函数类型的建模策略展开，从基础的函数签名、上下文 this 到重载与异步回调，帮助你把 JavaScript 的一等公民提升为可维护、易推断的 TypeScript 资产。我们会通过 IDE 体验、ESLint 约束与真实场景案例展示如何让函数类型承担契约角色，并在工具库、DOM 事件以及业务服务层中保持一致的语义。',
      sections: [
        {
          title: '函数签名与参数约束的全面复习',
          description:
            'TypeScript 为函数提供精确的参数与返回值描述能力，除了一般的 (x: number) => number 形式，还可以通过类型别名、接口或内联对象来表达具名函数。我们强调以领域语义命名函数类型别名，并展示如何通过 readonly 与可选参数保持契约的清晰度。',
          bullets: [
            '结合 type CompareFn = (a: number, b: number) => number 的示例说明：函数类型别名既能作为变量的类型约束，也可以被其它接口复用。',
            '讲解可选参数与默认值的关系，示例 function format(input: string, locale = "zh-CN" )，说明默认值不会降低类型信息的精度。',
            '分析剩余参数 (...args: string[]) => void 与元组类型的交互，展示 function log(...entries: [string, number]) 如何带来更严格的校验。',
            '阐述返回值类型推断的原则，并通过 const tasks = ["build", "test"] as const 与 tasks.map(task => task.toUpperCase()) 的代码段说明推断对结果集合的影响。'
          ]
        },
        {
          title: '上下文 this、绑定与箭头函数',
          description:
            'JavaScript 的 this 随调用方式变化，TypeScript 提供了 this 参数显式声明语法来弥补歧义。我们会通过 DOM 事件处理与类方法封装演示如何避免 this 漂移，并对比箭头函数与 bind、call 的类型行为差异。',
          bullets: [
            '展示 function mouseTracker(this: HTMLElement, event: MouseEvent) { /* ... */ } 的写法，强调第一个参数声明 this 只用于类型检查，不会出现在运行时代码中。',
            '结合 element.addEventListener("click", mouseTracker.bind(button)) 说明若未声明 this，TypeScript 会推断为 any 导致隐患。',
            '解释箭头函数 const handler = (event: MouseEvent) => { console.log(this) } 的 this 取自词法环境，在 TypeScript 中无需额外声明。',
            '提供 ESLint 规则 @typescript-eslint/unbound-method 的配置片段，提醒团队在 class 成员中保持 this 绑定一致性。'
          ]
        },
        {
          title: '函数重载与调用签名调度',
          description:
            '函数重载允许为同一个实现提供多种调用方式，本节总结书写顺序、实现体联合类型处理技巧，并强调保持重载数量可控。通过查询函数、网络请求包装器与表单解析案例，展示如何用类型来表达业务分支。',
          bullets: [
            '讲解重载声明应从最具体到最宽泛排序，示例 function fetchUser(id: number): User 与 function fetchUser(id: number, full: true): DetailedUser。',
            '在实现体中使用类型保护：if (options && options.full) { ... }，保证返回值符合对应重载签名。',
            '通过 type QueryResult<T> = T extends true ? HTMLElement[] : HTMLElement | null 的范例，引导用条件类型简化多重重载。',
            '比较重载与联合类型的适用场景，给出 function parse(input: string | string[]) 的代码，说明当返回值不会随入参变化时联合类型更易维护。'
          ],
          examples: [
            {
              title: '查询工具函数的重载实现',
              content: `通过两个签名描述不同的返回值，并在实现体中利用类型保护：
\`\`\`ts
interface UserSummary {
  id: number
  name: string
}

interface UserDetail extends UserSummary {
  email: string
}

function fetchUser(id: number): UserSummary
function fetchUser(id: number, full: true): UserDetail
function fetchUser(id: number, full?: true) {
  const endpoint = full ? '/detail' : '/summary'
  const result = request(endpoint, { id })
  if (full) {
    return result as UserDetail
  }
  return result as UserSummary
}
\`\`\`
重载实现体仅出现一次，利用条件分支确保返回值满足对应的签名。`
            }
          ]
        },
        {
          title: '回调、泛型与高阶函数实践',
          description:
            '大量函数会接受其他函数作为参数，TypeScript 的泛型、约束与上下文类型能确保高阶函数安全执行。本节结合数组工具、Promise 链式处理以及事件委托封装，展示在 IDE 中获得推断带来的生产力提升。',
          bullets: [
            '解析 function mapValues<T, R>(source: T[], iteratee: (item: T, index: number) => R): R[] 的签名，指出泛型如何让回调参数与返回值保持一致。',
            '演示 function once<T extends (...args: any[]) => any>(fn: T): T 的实现，强调返回函数需继承原始签名以保持调用体验。',
            '在 Promise 链条中加入泛型：async function withRetry<T>(task: () => Promise<T>): Promise<T>，示例中通过 try/catch 结合重试计数维持类型不变。',
            '提供事件委托案例 delegate(container, "button", "click", event => event.currentTarget.dataset.id )，说明回调参数可利用 HTMLElementTagNameMap 获得特定元素类型。'
          ]
        },
        {
          title: '异步函数、错误处理与可测试性',
          description:
            '现代前端函数大多涉及异步流程，TypeScript 需要描述返回 Promise 的函数、错误分支以及测试桩。本节通过 async/await、never 返回与断言函数演示如何在异常场景下保持类型完整性。',
          bullets: [
            '强调 async function loadUser(): Promise<User> 的返回值一定是 Promise，结合 Awaited<UserPromise> 的示例帮助团队理解类型展开。',
            '展示断言函数 function assertUser(user: User | undefined): asserts user is User 的写法，让调用者在异常之后获得收窄类型。',
            '讲解自定义错误类型 class HttpError extends Error { constructor(public status: number, message: string) { super(message) } } 与函数签名 function isHttpError(error: unknown): error is HttpError。',
            '提供测试桩代码：const fetchMock: jest.MockedFunction<typeof fetchUser>，说明在单测中使用类型别名保持桩函数与真实函数一致。'
          ]
        }
      ]
    },
    resources: ['Handbook - Functions', 'Effective TypeScript 第 3 章'],
    project: {
      title: '事件委托工具库',
      description: '实现一个支持多事件签名的委托工具，兼容不同元素类型。',
      milestones: [
        '定义事件类型映射（如 HTMLElementEventMap）',
        '实现 addDelegate 函数并提供重载签名',
        '编写示例验证不同事件的类型安全'
      ]
    },
    codeDemo: {
      title: '函数重载的约束',
      description: '对比使用重载与联合类型的差异。',
      ts: `function query(selector: string): Element | null
function query(selector: string, all: true): NodeListOf<Element>
function query(selector: string, all?: boolean) {
  return all ? document.querySelectorAll(selector) : document.querySelector(selector)
}

const single = query('#root')
const list = query('.item', true)
// query('.item', 'all') // ❌ 类型不匹配`,
      js: `function query(selector, all) {
  return all ? document.querySelectorAll(selector) : document.querySelector(selector);
}

const single = query('#root')
const list = query('.item', true)
query('.item', 'all') // 运行时才会抛错`
    }
  },
  {
    id: 'l4',
    title: 'L4 接口、类型别名与结构类型',
    description: '比较 interface 与 type，实践交叉类型与结构化兼容。',
    background:
      'TypeScript 基于结构类型系统（Structural Typing），只关注成员形状。接口与类型别名在表达复杂类型时各有优势。',
    objectives: ['理解 interface 与 type 的差异', '运用交叉类型建模', '掌握结构类型兼容原则'],
    tasks: ['设计统一的领域模型类型', '实现类型安全的 DTO 转换函数'],
    acceptanceCriteria: [
      '接口扩展链条清晰，无循环引用',
      'DTO 转换函数能保障属性完备性'
    ],
    route: '/lesson/l4',
    completed: false,
    spotlight: {
      label: '结构类型的优势',
      points: [
        '无需显式继承即可兼容相同形状',
        '交叉类型帮助组合多种能力',
        '通过映射类型可批量修改属性修饰符'
      ]
    },
    tooling: ['tsc --traceResolution', 'tsserver log'],
    courseContent: {
      summary:
        '本课聚焦接口与类型别名在结构化建模中的协作方式。我们将以真实领域模型为主线，比较 interface 与 type 的语义差异，解释交叉类型、映射类型与结构兼容的运行机制，并辅以 DTO 转换、配置对象校验以及工具类型的综合实践。通过大量对比示例，让你理解何时选择 interface、何时采用 type，以及如何使用 satisfies 和模板字面量构建稳定的契约。',
      sections: [
        {
          title: '接口与类型别名的定位差异',
          description:
            'Interface 提供声明合并、继承扩展等能力，而类型别名支持联合、交叉与条件类型的表达。本节通过对比语法、编译输出与社区惯例帮助学习者建立选择框架。',
          bullets: [
            '展示 interface User { id: string; name: string } 与 type User = { id: string; name: string } 的等价性，并说明 interface 可以被多次声明自动合并。',
            '通过 interface Admin extends User { permissions: string[] } 与 type Admin = User & { permissions: string[] } 的示例比较扩展写法，强调交叉类型可能触发属性冲突需要手动排查。',
            '说明 interface 不能直接表达联合类型，而 type UserState = "active" | "suspended" | "deleted" 能简洁描述有限集合。',
            '提供约束库 API 的建议：对外暴露的公共模型优先使用 interface，以便第三方透过声明合并扩展属性。'
          ]
        },
        {
          title: '结构类型系统与兼容规则',
          description:
            'TypeScript 采用结构化兼容，只要对象形状相同即可赋值。本节解读赋值兼容的方向、成员可选性以及函数参数的双变原则，并提示可能的陷阱。',
          bullets: [
            '通过 const profile: User = { id: "1", name: "Ada", email: "ada@example.com" } 的代码说明超集赋值合法，但建议配合 satisfies 检查额外属性。',
            '解析函数参数的双变特性，并结合 type EventHandler = (event: MouseEvent | KeyboardEvent) => void 指出 KeyboardEvent 的子类型可赋值，展示开启 strictFunctionTypes 后的变化。',
            '讨论可选属性在结构兼容中的行为：interface DraftUser { id: string; name?: string } 可以赋值给 User 吗？演示编译器如何处理缺失的可选字段。',
            '给出 const dto = { id: "1", name: "Ada", extra: true } satisfies User 的示例，让 IDE 在保留额外属性的同时验证必要字段。'
          ]
        },
        {
          title: '交叉类型、映射类型与工具类型协同',
          description:
            '交叉类型可以组合多个能力，映射类型则让我们批量修改属性修饰符；配合内置工具类型可以构建灵活的模型转换。本节将 DTO 转换、权限合并和配置校验穿插在一起，展示从接口到最终产物的每一步。',
          bullets: [
            '演示 type WithTimestamps<T> = T & { createdAt: Date; updatedAt: Date }，并在服务层 type PersistedUser = WithTimestamps<User> 中应用。',
            '解释 type ReadonlyProps<T> = { readonly [K in keyof T]: T[K] } 与内置 Readonly<T> 的等价性，帮助理解映射类型的语法。',
            '给出 type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>> 的代码，说明如何通过工具类型组合控制字段的可选性。',
            '结合配置对象：const config = { theme: "dark", features: { audit: true } } satisfies DeepPartial<AppConfig>，强调映射类型在深层结构中的价值。'
          ]
        },
        {
          title: '领域模型到 DTO 的转化流程',
          description:
            '现实项目需要在领域模型与接口层之间转换数据。本节以用户实体到 HTTP 响应 DTO 为例，拆解从 interface 定义、类型安全转换函数到单元测试的完整链路。',
          bullets: [
            '定义实体接口 interface UserEntity { id: string; name: string; passwordHash: string; roles: Role[] } 与 DTO interface UserDTO { id: string; name: string; roles: string[] }，并说明隐藏敏感字段的原因。',
            '实现 function toUserDTO(entity: UserEntity): UserDTO { return { id: entity.id, name: entity.name, roles: entity.roles.map(role => role.name) } }，强调返回值类型让 IDE 自动提示缺失字段。',
            '利用交叉类型组合额外元信息：type UserResponse = UserDTO & { permissions: string[] }，提示在响应层扩展数据的策略。',
            '在测试中使用 expectTypeOf(toUserDTO(entity)).toEqualTypeOf<UserDTO>()，确保转换函数与定义同步。'
          ],
          examples: [
            {
              title: '实体到 DTO 的类型安全映射',
              content: `领域模型与响应对象分离可以避免泄漏内部实现：
\`\`\`ts
interface Role {
  id: string
  name: string
}

interface UserEntity {
  id: string
  name: string
  passwordHash: string
  roles: Role[]
}

interface UserDTO {
  id: string
  name: string
  roles: string[]
}

function toUserDTO(entity: UserEntity): UserDTO {
  return {
    id: entity.id,
    name: entity.name,
    roles: entity.roles.map((role) => role.name)
  }
}
\`\`\`
配合单元测试断言 toUserDTO 的返回值类型，可以防止字段遗漏或扩散敏感信息。`
            }
          ]
        },
        {
          title: '高级技巧：模板字面量、索引签名与约束',
          description:
            '当业务模型涉及动态键名或 API 版本化时，需要模板字面量与索引签名协作。我们会以权限枚举、配置键与国际化资源为例，展示如何保持类型安全并减少魔法字符串。',
          bullets: [
            '编写 type PermissionKey = `user:${"create" | "read" | "update" | "delete"}`，并通过 Record<PermissionKey, boolean> 管理权限开关。',
            '解析 interface TranslationMap { [key: `${Locale}.${string}`]: string } 的写法，强调索引签名需要与命名空间约定结合使用。',
            '使用 type ApiVersioned<T extends string> = `v1/${T}` | `v2/${T}` 的例子控制接口路径，避免拼写错误。',
            '展示 function getConfig<K extends keyof AppConfig>(key: K): AppConfig[K] 的实现，让调用者根据 key 获得对应的值类型。'
          ]
        }
      ]
    },
    resources: ['Handbook - Interfaces', 'TypeScript Deep Dive - Type System'],
    project: {
      title: '用户领域模型建模',
      description: '为用户、角色、权限等实体建立类型体系，确保 API 输入输出一致。',
      milestones: [
        '绘制实体关系与字段定义',
        '实现 Entity -> DTO 的映射函数',
        '补充 Partial、Readonly 等工具类型的应用'
      ]
    }
  },
  {
    id: 'l5',
    title: 'L5 面向对象与装饰器提案',
    description: '掌握 TypeScript 中的类特性、访问修饰符与实验性装饰器。',
    background:
      'TypeScript 在类上提供 public、private、protected 以及抽象类等特性，同时支持最新的 ECMAScript 装饰器提案以实现元数据能力。',
    objectives: ['熟悉类成员修饰符', '理解抽象类与接口协作', '掌握装饰器使用注意事项'],
    tasks: ['封装请求层类并加入装饰器日志', '设计抽象仓储类与具体实现'],
    acceptanceCriteria: [
      '所有类成员具备明确访问控制',
      '装饰器启用 experimentalDecorators 并避免滥用'
    ],
    route: '/lesson/l5',
    completed: false,
    spotlight: {
      label: '装饰器常见场景',
      points: ['依赖注入容器', '日志埋点', '权限校验']
    },
    tooling: ['tsconfig experimentalDecorators', 'reflect-metadata'],
    courseContent: {
      summary:
        '本课聚焦 TypeScript 在面向对象范式中的扩展能力，涵盖类成员修饰符、抽象类与接口的协同、最新 ECMAScript 装饰器提案以及与依赖注入、日志埋点相关的工程实践。我们将通过请求客户端、仓储层以及装饰器工厂三个案例构建从设计到测试的完整闭环，帮助你理解装饰器的运行时开销与类型声明方式，确保团队在启用实验特性时仍保持可读性与安全性。',
      sections: [
        {
          title: '类与访问修饰符的深度解析',
          description:
            'TypeScript 在类上提供 public、private、protected、readonly 以及参数属性语法，本节通过示例说明这些修饰符对封装性与可测试性的影响，并对比 ECMAScript 私有字段。',
          bullets: [
            '示例 class Logger { private buffer: string[] = []; public write(message: string) { this.buffer.push(message) } }，说明私有成员只能在类内部访问。',
            '解释参数属性 constructor(private http: HttpClient) 的简洁写法，并展示等价的手写属性声明形式。',
            '对比 private 与 #secret 的差异，指出前者在编译后仍可通过索引访问，后者是真正的运行时私有字段。',
            '讨论 readonly 对不可变性的帮助，并结合 readonly config: AppConfig 的代码，建议在构造函数中进行深拷贝以避免外部修改。'
          ]
        },
        {
          title: '继承、抽象类与接口协作模式',
          description:
            '面向对象设计强调抽象与复用，TypeScript 支持抽象类定义模板方法，同时借助接口描述能力。本节通过请求客户端与仓储类的例子讲解如何用抽象类约束流程，用接口描述外部能力。',
          bullets: [
            '构建 abstract class BaseRepository<T>，包含抽象方法 abstract findById(id: string): Promise<T | null>，强调子类必须实现核心数据访问逻辑。',
            '实现 class UserRepository extends BaseRepository<User> 并注入数据源，结合 protected mapToEntity(record: Record<string, unknown>): User 展示模板方法模式。',
            '借助接口 interface Cacheable { getCacheKey(): string } 与 class CachedRepository<T extends Cacheable> 的代码，说明类型约束如何保证实体具备缓存能力。',
            '补充组合替代继承的策略：type RepositoryPlugin<T> = { beforeSave?(entity: T): void }，通过交叉类型为仓储添加可选插件。'
          ]
        },
        {
          title: '装饰器提案的语法与最佳实践',
          description:
            'ECMAScript 新版装饰器采用工厂函数返回初始化逻辑，TypeScript 需开启 experimentalDecorators 与 emitDecoratorMetadata 才能使用。本节拆解类装饰器、方法装饰器与访问器装饰器的类型定义，讨论与反射库协作时的注意事项。',
          bullets: [
            '提供类装饰器范例：function Controller(path: string) { return target => { Reflect.defineMetadata("path", path, target) } }，说明工厂函数返回的装饰器如何被调用。',
            '展示方法装饰器 function Log()，类型签名 (value: ClassMethodDecoratorContext) => void，并在实现中记录 context.name 与 context.kind。',
            '解释访问器装饰器 function CoerceNumber(): ClassAccessorDecoratorResult<number> { return { get(value) { return Number(value) } } } 的行为。',
            '强调装饰器执行顺序与运行时成本，建议在性能敏感场景中使用编译期代码生成替代。'
          ]
        },
        {
          title: '请求客户端案例：从设计到实现',
          description:
            '结合上一节的抽象类与装饰器，我们实现一个带审计日志的 HTTP 客户端。重点展示如何设计请求生命周期、注入依赖以及利用装饰器收集信息。',
          bullets: [
            '定义基础抽象类 abstract class HttpClient { constructor(protected baseUrl: string) {} abstract request<T>(config: RequestConfig): Promise<T> }。',
            '在子类 class FetchClient extends HttpClient 中实现 async request<T>(config) { const res = await fetch(this.baseUrl + config.path); return res.json() as Promise<T> }。',
            '编写装饰器 function Audit(action: string) { return (_: unknown, context: ClassMethodDecoratorContext) => { return async function (this: any, ...args: unknown[]) { console.time(action); const result = await context.access!.apply(this, args); console.timeEnd(action); return result } } }，展示如何记录执行时间。',
            '使用 @Audit("fetch-user") 标记仓储方法，并在单测中通过 jest.spyOn(console, "time") 验证日志调用次数。'
          ]
        },
        {
          title: '测试、元数据与团队协作',
          description:
            '引入装饰器后需要关注编译配置、测试工具与团队约定。本节总结如何在 tsconfig 中启用实验特性、如何利用 reflect-metadata 获取类型信息，以及如何通过 linter 与文档保持一致。',
          bullets: [
            '在 tsconfig 中配置 "experimentalDecorators": true, "emitDecoratorMetadata": true，并解释只在需要反射时开启后者以减少输出体积。',
            '演示在入口文件 import "reflect-metadata" 的必要性，以及如何在 Vitest 中通过 setupFiles 确保装饰器元数据可用。',
            '提供约束文档模板，要求团队在 README 中记录每个装饰器的运行时副作用与依赖关系。',
            '展示 class Service { constructor(@Inject("Logger") private logger: Logger) {} } 的构造器注入写法，并提醒结合 IoC 容器时要补充声明合并确保符号常量具有类型提示。'
          ]
        }
      ]
    },
    resources: ['Handbook - Classes', 'TC39 Decorators 提案'],
    project: {
      title: '可审计的请求客户端',
      description: '封装一个具备重试与审计日志的 HTTP 客户端类。',
      milestones: [
        '定义抽象基类与模板方法',
        '实现具体子类封装 axios 调用',
        '使用装饰器为方法添加日志'
      ]
    },
    codeDemo: {
      title: '类装饰器的编译产物',
      description: '展示启用实验性装饰器后的输出代码。',
      ts: `@log()
class ApiClient {
  constructor(private baseUrl: string) {}

  fetch(path: string) {
    return fetch(this.baseUrl + path)
  }
}`,
      js: `let ApiClient = class ApiClient {
  baseUrl;
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }
  fetch(path) {
    return fetch(this.baseUrl + path);
  }
};
ApiClient = __decorate([
  log()
], ApiClient);`
    }
  },
  {
    id: 'l6',
    title: 'L6 泛型基础',
    description: '通过泛型函数与接口复用类型逻辑，构建灵活的工具库。',
    background:
      '泛型让类型与逻辑同步抽象，可在编译期根据实际参数推导出精确类型，避免重复声明。',
    objectives: ['编写泛型函数', '为接口添加泛型约束', '设置默认类型'],
    tasks: ['为仓储工具库设计泛型 CRUD API', '实现类型安全的缓存封装'],
    acceptanceCriteria: [
      '泛型符号命名语义化（如 TEntity）',
      '约束确保泛型满足必要字段'
    ],
    route: '/lesson/l6',
    completed: false,
    spotlight: {
      label: '泛型命名最佳实践',
      points: ['以领域含义命名而非单字母', '使用 extends 约束结构', '适度使用默认类型降低调用成本']
    },
    tooling: ['tsc --noUnusedParameters', 'ts playground'],
    courseContent: {
      summary: `泛型的核心价值是让类型参数随着调用场景而变化，从而避免复制粘贴式的类型别名。在官方 Handbook 中反复强调“类型与值一起工作”的概念：当我们声明 function identity<T>(value: T) 时，调用方传入的实际参数会让编译器自动推导出 T 的具体形态。课程伊始会带领你复习这一推断机制，并结合编辑器的提示演示泛型如何把 IDE 的补全从“宽松提示”转化为“精准契约”。

当我们把泛型放入接口、类型别名或类中时，便可以通过 extends 建立约束关系，限定调用方必须提供某些字段或满足某种结构。例如仓储层往往会约束实体具备 id 字段，分页响应则需要具备 items 与 total。本课程将结合真实的 CRUD 场景，展示如何通过泛型接口延续约束、如何在 React Hook 中透出由泛型驱动的返回值类型，以及如何借助类型参数提升组合函数的复用能力。

最后一部分聚焦于默认类型、条件类型与工具类型之间的协作。通过设置默认类型，我们可以让常见场景开箱即用，而高级用户仍然可以传入更细粒度的类型参数。课程会演示如何为缓存客户端提供默认的键值序列化策略、如何使用条件类型推导返回 Promise 的泛型函数、以及在单元测试中使用 satisfies 保障泛型接口的实现符合约束。`,
      sections: [
        {
          title: '泛型函数与自动推断',
          description: `理解编译器在泛型函数上的推断行为，是写出类型安全工具函数的基础。通过阅读 tsserver 的日志可以发现，TypeScript 会根据参数位置、返回值与上下文类型联合作用得出最终类型。本节聚焦函数签名设计、可选参数对推断的影响，以及如何搭配箭头函数与函数重载。`,
          bullets: [
            `在业务代码中，泛型函数可以把一次实现复用到多个实体类型上，例如封装一个查找工具：

\`\`\`ts
function identity<T>(value: T): T {
  return value
}

const result = identity({ id: 1, name: 'dashboard' })
// result 推断为 { id: number; name: string }
\`\`\`
TypeScript 会把字面量类型保留下来，配合 const 断言还能获得更细致的推断。`,
            `当泛型函数拥有多个参数时，类型变量之间往往需要建立关联。可以通过第二个泛型参数刻画键类型，让返回值与参数保持同步：

\`\`\`ts
function pickValue<TEntity extends Record<string, unknown>, TKey extends keyof TEntity>(
  entity: TEntity,
  key: TKey
): TEntity[TKey] {
  return entity[key]
}

const userName = pickValue({ id: 'u1', name: 'Ada', active: true }, 'name')
// userName 自动推断为 string
\`\`\`
这种写法确保了传入的 key 总是存在于对象中，避免了运行时访问不存在属性的错误。`,
            `与异步 API 结合时，泛型还能描述返回值的 Promise 包装，让调用者获得自动的 await 提示：

\`\`\`ts
async function fetchEntity<TResponse>(input: RequestInfo, init?: RequestInit): Promise<TResponse> {
  const response = await fetch(input, init)
  return (await response.json()) as TResponse
}

const project = await fetchEntity<{ id: string; name: string }>('/api/projects/1')
\`\`\`
通过泛型参数，API 调用方可以精准地拿到响应模型，结合错误类型还能进一步扩展。`
          ],
          examples: [
            {
              title: '泛型工具函数的配套类型测试',
              content: `在团队中可以使用类型断言工具（如 expectTypeOf）验证推断是否符合预期：

\`\`\`ts
import { expectTypeOf } from 'vitest'

const createTuple = <TFirst, TSecond>(first: TFirst, second: TSecond) => [first, second] as const

const tuple = createTuple(1, 'next-step')
expectTypeOf(tuple).toEqualTypeOf<[1, 'next-step']>()
\`\`\`
这种类型级测试能够在 refactor 时及时捕捉泛型推断的回退。`
            }
          ]
        },
        {
          title: '接口与类中的泛型约束',
          description: `仓储、缓存、表单等场景需要我们把泛型参数放入接口或类，利用 extends、keyof、in 组合约束字段。通过限定实体必须包含主键、通过映射类型生成 DTO，可以让运行时代码与类型契约同步演进。`,
          bullets: [
            `在接口中引入泛型约束时，应明确说明实体必须包含哪些属性。例如一个最小的仓储接口可以这样书写：

\`\`\`ts
interface EntityBase {
  id: string
  updatedAt: Date
}

interface Repository<TEntity extends EntityBase> {
  findById(id: string): Promise<TEntity | null>
  save(entity: TEntity): Promise<void>
}
\`\`\`
通过 extends EntityBase，我们强制实体类型拥有 id 与 updatedAt 字段。`,
            `类的泛型参数也可以通过默认值提升可读性，还能和依赖注入一起使用：

\`\`\`ts
interface HttpClient {
  get<T>(url: string): Promise<T>
}

class CollectionService<TEntity extends { id: string }, TList extends TEntity[] = TEntity[]> {
  constructor(private http: HttpClient, private resource: string) {}

  async list(): Promise<TList> {
    return this.http.get<TList>(\`/\${this.resource}\`)
  }
}
\`\`\`
这里的默认类型让常规列表返回 TEntity[]，也允许调用者传入自定义的分页结构。`,
            `结合映射类型可以批量生成派生模型，避免重复声明：

\`\`\`ts
type MutationPayload<TEntity> = {
  [TKey in keyof TEntity]?: TEntity[TKey]
}

const payload: MutationPayload<{ id: string; title: string; published: boolean }> = {
  title: 'New Title'
}
\`\`\`
这种模式会在表单、Patch 请求中频繁出现，配合 satisfies 可以确保字段名不会写错。`
          ],
          examples: [
            {
              title: '带泛型的表单 Hook',
              content: `为了让 Hook 保留表单模型类型，可以把泛型参数透出到返回值中：

\`\`\`ts
function useFormModel<TModel extends Record<string, unknown>>(initialValue: TModel) {
  const [value, setValue] = useState<TModel>(initialValue)

  function update<K extends keyof TModel>(key: K, next: TModel[K]) {
    setValue((prev) => ({ ...prev, [key]: next }))
  }

  return { value, update }
}

const { value, update } = useFormModel({ title: '', published: false })
update('published', true)
\`\`\`
返回值中的 update 会继承泛型约束，避免传入不存在的字段。`
            }
          ]
        },
        {
          title: '默认类型与条件类型策略',
          description: `泛型的可维护性很大程度取决于默认类型与条件类型的搭配。通过为常见场景设定默认参数，我们可以保持调用端简洁；而借助条件类型，我们可以根据泛型参数在类型级进行分支判断，构建灵活的 API。`,
          bullets: [
            `默认类型应该与使用频率最高的场景保持一致。例如缓存客户端可以把序列化函数定义为泛型参数并提供默认实现：

\`\`\`ts
type Serializer<T> = {
  serialize(value: T): string
  deserialize(payload: string): T
}

class CacheStore<TKey, TValue, TSerializer extends Serializer<TValue> = Serializer<TValue>> {
  constructor(private serializer: TSerializer) {}

  toCache(value: TValue) {
    return this.serializer.serialize(value)
  }
}
\`\`\`
默认的 Serializer 让调用方可以按需传入更复杂的序列化策略。`,
            `条件类型让我们可以根据泛型参数返回不同的类型别名。比如推导 API 返回值时，将错误响应与成功响应拆开：

\`\`\`ts
type ApiResult<TData> = {
  ok: true
  data: TData
} | {
  ok: false
  error: string
}

type ExtractData<T> = T extends { ok: true; data: infer U } ? U : never

function handleResult<T extends ApiResult<unknown>>(result: T): ExtractData<T> | null {
  return result.ok ? result.data : null
}
\`\`\`
通过 infer 关键字，我们把联合类型的特定分支提取出来供后续使用。`,
            `泛型还可以借助模板字面量类型生成更具表达力的键。例如根据实体名称自动推导事件名称：

\`\`\`ts
type EventName<TEntity extends string, TAction extends string> = \`\${TEntity}:\${TAction}\`

const event: EventName<'user', 'updated'> = 'user:updated'
\`\`\`
这类约束保证了事件字符串总是符合统一规范，避免魔法字符串带来的维护难题。`
          ],
          examples: [
            {
              title: '结合 satisfies 校验默认类型',
              content: `在配置对象上使用 satisfies，可以确保泛型默认值仍然符合约束：

\`\`\`ts
type ModuleOption<TConfig extends { baseUrl: string; timeout?: number }> = TConfig

const option = { baseUrl: '/api', timeout: 5000 } satisfies ModuleOption<{ baseUrl: string; timeout?: number }>
\`\`\`
这样即便未来新增字段，也能在编译期捕获未更新的默认对象。`
            }
          ]
        }
      ]
    },
    resources: ['Handbook - Generics', 'TypeScript Deep Dive - Generics'],
    project: {
      title: '泛型仓储层',
      description: '为 REST API 封装一个泛型仓储，实现类型安全的 CRUD 操作。',
      milestones: [
        '定义基础实体接口（带 id）',
        '实现 getOne/getList/create/update/delete 泛型方法',
        '结合 Axios 返回 Promise<DTO>'
      ]
    }
  },
  {
    id: 'l7',
    title: 'L7 条件类型与工具类型进阶',
    description: '掌握条件类型、映射类型与内置工具类型，提升类型表达力。',
    background:
      '条件类型让我们可以根据类型关系返回不同结果，配合 infer 可从复杂类型中提取信息，是类型级编程的核心能力。',
    objectives: ['编写条件类型', '使用 infer 提取类型', '掌握内置工具类型的实现原理'],
    tasks: ['实现 API 响应类型提取器', '使用 Partial/Required 重构模型'],
    acceptanceCriteria: [
      '条件类型避免滥用 any，保持分支覆盖',
      '对工具类型的源码实现有清晰理解'
    ],
    route: '/lesson/l7',
    completed: false,
    spotlight: {
      label: '类型级编程技巧',
      points: ['配合 extends 判断类型关系', '使用 never 精准排除不可用类型', '通过模板字面量类型拼接字符串']
    },

        tooling: ['tsc --generateTrace types'],
        courseContent: {
          summary: `条件类型让我们得以在类型世界中写出 if/else 一样的分支逻辑。TypeScript 官方文档指出，T extends U ? X : Y 会基于类型关系返回不同的结果，而当传入的是联合类型时，还会触发分布式条件类型的特性。本课将从这些规则出发，解释为什么条件类型是类型级编程的基石，并用 TypeScript Playground 展示编译器如何一步步展开类型。

在真实业务中，条件类型通常与 infer、映射类型、模板字面量类型一起使用。我们会讲解如何从 API 响应中提取出成功或失败的结构、如何通过 infer 抽取 Promise 的内部值、如何基于键名生成新的字符串字面量类型。通过拆解内置工具类型（如 Exclude、ReturnType、Awaited）的源码，你将学会把这些模式运用到自己的工具库中。

最后一部分聚焦类型调试与可视化。借助 tsc --generateTrace types、ts-toolbelt 和类型测试工具，我们可以调试条件类型的推断过程，定位 never 或 any 的来源。本节也会讨论常见的性能陷阱，例如递归条件类型深度过大导致的编译器发散问题，以及如何通过“中断”技巧（增加辅助类型）来改善可读性与性能。`,
          sections: [
            {
              title: '掌握条件类型的执行模型',
              description: `条件类型在编译阶段执行，它首先比较左侧类型是否可赋值给右侧类型，再决定返回结果。本节将通过图示说明 extends 判断的顺序、何时触发分布式条件类型，以及如何避免条件类型返回 any。`,
              bullets: [
                `基本的条件类型可以用来实现常见的工具类型，例如过滤联合类型中的某个分支：

\`\`\`ts
type ExcludeNullish<T> = T extends null | undefined ? never : T

const value: ExcludeNullish<string | undefined> = 'hello'
\`\`\`
当传入联合类型时，TypeScript 会分别计算每个成员，再把结果合并为新的联合。`,
                `infer 关键字可以帮助我们从复杂类型中提取结构。在处理 Promise 或函数时尤其常见：

\`\`\`ts
type UnwrapPromise<T> = T extends Promise<infer U> ? U : T

async function useService<T>(task: () => Promise<T>): Promise<UnwrapPromise<ReturnType<typeof task>>> {
  return task()
}
\`\`\`
这里我们通过 ReturnType 获取 task 的返回类型，再通过 UnwrapPromise 提取内部值。`,
                `模板字面量类型与条件类型结合后，可以构造出更具表现力的字符串类型。如下所示的 API 事件名称推导：

\`\`\`ts
type EventTopic<TModule extends string, TAction extends string> = \`\${Lowercase<TModule>}/\${TAction}\`

function createTopic<TModule extends string, TAction extends string>(module: TModule, action: TAction) {
  return \`\${module.toLowerCase()}/\${action}\` as EventTopic<TModule, TAction>
}
\`\`\`
通过 Lowercase，我们还能在类型层对字符串进行转换，保证 topic 始终遵循约定。`
              ],
              examples: [
                {
                  title: '拆解内置工具类型 Awaited',
                  content: `阅读 TypeScript 源码可以帮助我们理解条件类型的组合方式：

\`\`\`ts
type Awaited<T> = T extends null | undefined
  ? T
  : T extends { then(onfulfilled: infer F, ...args: infer _): any }
  ? F extends (value: infer V, ...args: infer _) => any
    ? Awaited<V>
    : never
  : T
\`\`\`
这个实现利用多层条件类型与 infer，从 thenable 对象中递归地取出最终值。`
                }
              ]
            },
            {
              title: '构建自定义工具类型',
              description: `掌握了条件类型的基础后，我们可以编写属于自己的工具类型库，用于校验配置、管理 API 响应或处理组件 props。构建工具类型时要注意保持协变/逆变位置的正确性，并提供充足的类型测试以防回归。`,
              bullets: [
                `围绕 API 响应，我们可以构造一个同时提取成功与错误数据的工具类型：

\`\`\`ts
type ApiResponse<TData, TError = { message: string }> =
  | { status: 'ok'; data: TData }
  | { status: 'error'; error: TError }

export type ExtractError<T> = T extends { status: 'error'; error: infer U } ? U : never
export type ExtractSuccess<T> = T extends { status: 'ok'; data: infer U } ? U : never

function handleApi<T extends ApiResponse<unknown, unknown>>(payload: T): ExtractSuccess<T> | null {
  return payload.status === 'ok' ? payload.data : null
}
\`\`\`
通过泛型参数，我们允许调用方自定义错误结构，同时保持提取逻辑通用。`,
                `针对组件 props，可以用条件类型过滤掉事件回调，让属性更聚焦：

\`\`\`ts
type RemoveEvents<TProps> = {
  [TKey in keyof TProps as TKey extends \`on\${string}\` ? never : TKey]: TProps[TKey]
}

interface ButtonProps {
  onClick(): void
  variant: 'primary' | 'secondary'
  disabled?: boolean
}

type ButtonDataProps = RemoveEvents<ButtonProps>
\`\`\`
这在将组件属性导出到 CMS 或配置文件时非常有用。`,
                `借助递归条件类型，我们可以把嵌套对象的路径展开为字符串字面量，方便类型安全地访问深层字段：

\`\`\`ts
type DotPath<T, TPrefix extends string = ''> = {
  [TKey in keyof T]: T[TKey] extends Record<string, unknown>
    ? DotPath<T[TKey], \`\${TPrefix}\${Extract<TKey, string>}.\`>
    : \`\${TPrefix}\${Extract<TKey, string>}\`
}[keyof T]

type Paths = DotPath<{ meta: { owner: { name: string } }; stats: { views: number } }>
// 推断为 "meta.owner.name" | "stats.views"
\`\`\`
递归条件类型要注意设置出口条件，避免出现无限递归导致的编译性能问题。`
              ],
              examples: [
                {
                  title: '使用类型测试守护工具类型',
                  content: `类型测试可以通过 dtslint、tsd 或 vitest 的 expectTypeOf 完成：

\`\`\`ts
import { expectTypeOf } from 'vitest'

type OnlyStrings<T> = T extends string ? T : never

expectTypeOf<OnlyStrings<'a' | 1 | 'b'>>().toEqualTypeOf<'a' | 'b'>()
\`\`\`
将类型测试纳入 CI，可以防止 refactor 时条件类型退化为 any。`
                }
              ]
            },
            {
              title: '调试与性能优化',
              description: `随着条件类型数量增长，调试难度也随之增加。本节会介绍如何阅读编译器的类型跟踪日志、如何借助辅助类型打印中间结果、以及如何避免复杂类型引发的性能瓶颈。`,
              bullets: [
                `借助 tsc --generateTrace types 可以输出类型推断的详细日志：

\`\`\`bash
$ npx tsc --generateTrace trace-log --project tsconfig.json
\`\`\`
生成的 log 可以在 VS Code Trace Viewer 中查看，帮助我们定位某个条件类型为何返回了 never。`,
                `可以通过辅助类型打印中间结果，了解条件类型的每一步：

\`\`\`ts
type Debug<T> = T extends infer U ? U : never

type Result = Debug<DotPath<{ foo: { bar: string } }>>
\`\`\`
借助 Debug，我们可以在 IDE 中查看 Result 的真实展开形式，快速定位问题。`,
                `在编写递归条件类型时，务必限制递归深度或提供兜底分支。例如针对 JSON Schema 的类型推断，可以增加层级计数器：

\`\`\`ts
type Decrement<N extends number> = [...Array<N>] extends [infer _, ...infer Rest] ? Rest['length'] : 0

type ResolveSchema<TSchema, TDepth extends number = 5> = TDepth extends 0
  ? never
  : TSchema extends { type: 'array'; items: infer U }
  ? ResolveSchema<U, Decrement<TDepth>>[]
  : TSchema extends { type: 'string' }
  ? string
  : never
\`\`\`
通过深度计数器，我们避免了无限递归导致的“Type instantiation is excessively deep”报错。`
              ],
              examples: [
                {
                  title: 'Trace Viewer 的使用要点',
                  content: `Trace Viewer 可以直观显示类型推断路径：

\`\`\`text
Step 0: Check assignability Source=Promise<T> Target=Promise<infer U>
Step 1: Inferring type parameter U with candidates [T]
Step 2: Resolving conditional branch T extends Promise<infer U> ? ...
\`\`\`
通过这些日志，我们能快速定位是哪个条件类型分支导致了推断失败。`
                }
              ]
            }
          ]
        },
        resources: ['Handbook - Conditional Types', 'Type Challenges'],

    project: {
      title: 'API 响应类型推导器',
      description: '根据接口响应结构自动推导成功与失败的类型定义。',
      milestones: [
        '实现 ExtractSuccess<Type>',
        '实现 ExtractError<Type>',
        '在真实接口类型上验证结果'
      ]
    },
    codeDemo: {
      title: '条件类型推导示例',
      description: '提取 Promise 内部值类型。',
      ts: `type UnwrapPromise<T> = T extends Promise<infer U> ? U : T

function useData<T>(promise: Promise<T>): Promise<UnwrapPromise<Promise<T>>> {
  return promise
}`,
      js: `function useData(promise) {
  return promise;
}`
    }
  },
  {
    id: 'l8',
    title: 'L8 模块化与声明组织',
    description: '理解模块解析策略、路径别名与声明文件的组织方式。',
    background:
      '大型项目需要合理的模块划分。TypeScript 支持基于 Node、Bundler 的多种解析策略，并可通过声明合并与三斜线指令组织类型。',
    objectives: ['掌握模块解析策略', '配置路径别名', '规划类型声明目录'],
    tasks: ['配置 baseUrl 与 paths', '拆分公共类型包并发布'],
    acceptanceCriteria: ['路径别名在 tsc 与打包工具中表现一致', '公共类型包具备声明与测试用例'],
    route: '/lesson/l8',
    completed: false,
    spotlight: {
      label: '模块组织关键点',
      points: ['统一 tsconfig 与 bundler 配置', '为公共类型创建 barrel 文件', '避免循环依赖导致类型发散']
    },

        tooling: ['pnpm workspaces', 'tsconfig paths'],
        courseContent: {
          summary: `模块化设计不仅关乎目录结构，更与 tsconfig 的配置、打包工具的解析策略以及声明文件的组织方式紧密相连。官方 Module Resolution 文档指出，TypeScript 会根据编译选项在多种解析策略之间切换，例如 Node、NodeNext、Bundler 等，每一种策略都对应不同的查找顺序。本课首先回顾这些解析策略，并通过调试日志演示编译器是如何在多层目录中寻找目标模块的。

第二部分聚焦路径别名与共享类型的拆分。现代项目通常使用 monorepo 或多包架构，因此需要在 tsconfig 中配置 baseUrl、paths，并同步到 Vite、Webpack、tsup 等工具。在这个过程中，我们会讲解如何通过 references 管理多项目依赖、如何在 pnpm workspace 下保持声明文件的生成一致，以及如何利用 barrel 文件（index.ts）暴露稳定 API。

最后，课程将引导你规划类型声明的目录与发布策略。对于需要对外发布的类型包，我们会演示如何将源文件与声明输出分离、如何在 package.json 中配置 typesVersions 兼容不同编译目标、以及如何在 README 中记录声明的使用方式。通过案例分析，你会看到在未妥善组织模块时如何导致循环依赖、类型发散或打包失败，并掌握排查思路。`,
          sections: [
            {
              title: '理解模块解析策略',
              description: `TypeScript 支持多种模块解析策略。选择合适的策略能确保编译器与运行时一致。我们会比较 Node、NodeNext 与 Bundler 策略的差异，并通过 traceResolution 日志观察解析顺序。`,
              bullets: [
                `启用 NodeNext 策略时，TypeScript 会优先读取 package.json 中的 exports 字段：

\`\`\`json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext"
  }
}
\`\`\`
当依赖的包使用 ESM/CJS 双入口时，NodeNext 能够根据导入语句智能选择合适的产物。`,
                `使用 traceResolution 参数可以调试模块查找过程：

\`\`\`bash
$ npx tsc --traceResolution --project tsconfig.json
\`\`\`
输出的日志会显示每个候选路径的命中情况，帮助我们诊断为何某个别名未被识别。`,
                `对于本地包或共享模块，建议搭配 project references，保证编译顺序：

\`\`\`json
{
  "files": [],
  "references": [{ "path": "../shared-types" }]
}
\`\`\`
这样 tsc 会在构建当前项目之前先构建 shared-types，确保声明文件可用。`
              ],
              examples: [
                {
                  title: '阅读 traceResolution 日志',
                  content: `traceResolution 日志格式清晰地展示了查找顺序：

\`\`\`text
======== Resolving module '@core/ui' from '/app/src/pages/dashboard.tsx'. ========
Module resolution kind is bundler.
Loading module as file / folder, candidate module location '/app/src/pages/@core/ui'.
Found package.json at /app/packages/core/package.json.
\`\`\`
根据这些信息，可以快速判断路径别名是否指向了正确的目录。`
                }
              ]
            },
            {
              title: '路径别名与多包协作',
              description: `当项目采用 workspace 架构时，路径别名需要在 tsconfig 与打包工具中保持一致。本节通过示例展示如何在 pnpm workspace 中共享 tsconfig.base.json、如何生成声明文件、以及如何避免循环依赖。`,
              bullets: [
                `基础配置通常会在根目录创建 tsconfig.base.json，并在子包中继承：

\`\`\`json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@core/*": ["packages/core/src/*"],
      "@shared/*": ["packages/shared/src/*"]
    ]
  }
}
\`\`\`
继承该配置的子包只需关注自身编译选项，即可获得统一的别名。`,
                `确保打包工具同步别名配置，例如在 Vite 中：

\`\`\`ts
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths()]
})
\`\`\`
借助插件可以自动读取 tsconfig 中的 paths，避免重复维护。`,
                `当类型包需要发布到 npm 时，可以使用 typesVersions 匹配不同的消费环境：

\`\`\`json
{
  "typesVersions": {
    "<5.0": { "*": ["dist/legacy/*"] },
    "*": { "*": ["dist/types/*"] }
  }
}
\`\`\`
这样老版本的 TypeScript 仍能正确引用声明，兼容性得到保障。`
              ],
              examples: [
                {
                  title: '生成声明文件并校验路径',
                  content: `可以通过 tsc -b 命令一次性构建所有引用项目：

\`\`\`bash
$ npx tsc -b packages/core packages/shared --verbose
\`\`\`
结合生成的 dist 结构检查别名是否落在正确目录。`
                }
              ]
            },
            {
              title: '声明组织与发布策略',
              description: `对于对外暴露的模块，需要规划清晰的声明出口与文档。本节会讨论 barrel 文件、模块补丁、全局声明的组织方式，并给出发布类型包的 checklist。`,
              bullets: [
                `barrel 文件可以集中导出内部模块，保持对外 API 稳定：

\`\`\`ts
// packages/core/src/index.ts
export * from './theme'
export * from './layout'
\`\`\`
配合严格的 lint 规则（如禁止循环依赖）可以避免导出结构混乱。`,
                `当需要对第三方库补充类型时，可以在 types 目录中新增声明：

\`\`\`ts
// types/third-party.d.ts
declare module 'legacy-chart' {
  export interface LegacyChartOption {
    title: string
  }
}
\`\`\`
随后在 tsconfig 中通过 typeRoots 引入该目录，确保编译器能找到声明。`,
                `发布类型包时应同步输出声明与 README：

\`\`\`md
## 安装

\`\`\`
npm install @org/types
\`\`\`

## 使用

\`\`\`
import type { ThemeToken } from '@org/types'
\`\`\`
\`\`\`
详尽的文档能帮助团队成员理解模块职责与依赖。`
              ],
              examples: [
                {
                  title: '发布前的自动化检查',
                  content: `在 CI 中串联类型检查与声明测试：

\`\`\`bash
$ pnpm lint && pnpm test && pnpm build
\`\`\`
确保生成的声明通过 tsd 或 expectTypeOf 校验，再发布到 npm。`
                }
              ]
            }
          ]
        },
        resources: ['Module Resolution 文档', 'TypeScript Handbook - Modules'],

    project: {
      title: '类型基座包',
      description: '将多个项目共享的类型抽离为独立包，提供统一出口。',
      milestones: ['设计包的导出结构', '实现类型测试用例', '发布本地 npm 包并在示例项目中验证']
    }
  },
  {
    id: 'l9',
    title: 'L9 类型守卫与控制流分析',
    description: '通过类型守卫、控制流分析保障复杂分支逻辑的类型安全。',
    background:
      'TypeScript 在控制流中会收窄类型。编写类型守卫可以帮助编译器理解运行时分支，提高联合类型的可用性。',
    objectives: ['实现类型守卫函数', '利用可辨识联合收窄类型', '阅读控制流分析结果'],
    tasks: ['为状态机编写守卫函数', '使用 satisfies 验证配置对象'],
    acceptanceCriteria: ['所有分支都能推断到最精确类型', '不存在 any 与 unknown 的滥用'],
    route: '/lesson/l9',
    completed: false,
    spotlight: {
      label: '守卫编写技巧',
      points: ['使用 in 判定属性存在性', '结合断言函数处理异常分支', '利用 satisfies 辅助断言配置结构']
    },
    tooling: ['tsc --explainFiles', 'TS Playground Control Flow Graph'],
    resources: ['Handbook - Narrowing', 'TypeScript 5.x satisfies 介绍'],
    project: {
      title: '类型安全的表单状态机',
      description: '用联合类型表达状态，并通过守卫确保每个分支的安全性。',
      milestones: ['定义状态联合类型', '实现 isSubmitting/isError 守卫', '在组件中消费状态并获得智能提示']
    }
  },
  {
    id: 'l10',
    title: 'L10 异步与并发类型设计',
    description: '处理 Promise、async/await 以及任务调度场景的类型设计。',
    background:
      '异步操作在现代前后端中无处不在。TypeScript 提供 Awaited 等工具类型，帮助我们描述复杂的异步流程。',
    objectives: ['掌握 Promise 类型', '使用 Awaited 与 ReturnType', '建模任务队列'],
    tasks: ['实现批处理任务调度器类型', '构建带并发限制的请求池'],
    acceptanceCriteria: ['所有异步函数返回 Promise 包装类型', '调度器任务类型自动推断'],
    route: '/lesson/l10',
    completed: false,
    spotlight: {
      label: '异步类型三件套',
      points: ['Awaited<T> 提取 Promise 结果', 'ReturnType 获取函数返回类型', '泛型参数约束任务签名']
    },
    tooling: ['p-limit', 'vitest'],
    resources: ['Handbook - Generics with Promises', 'Effective TypeScript - Item 50'],
    project: {
      title: '类型安全的任务调度器',
      description: '设计一个可配置并发数、支持重试的任务队列，并提供完整类型定义。',
      milestones: ['定义任务函数签名', '实现调度器核心逻辑', '编写类型测试确保推断正确']
    }
  },
  {
    id: 'l11',
    title: 'L11 声明文件与第三方库集成',
    description: '学习编写 d.ts 文件，为未提供类型的库补全声明并回馈社区。',
    background:
      '大量第三方库依赖 DefinitelyTyped 社区维护的类型声明。掌握声明文件语法有助于你自定义全局变量、模块补丁。',
    objectives: ['编写模块声明', '理解全局声明与命名空间', '掌握声明合并'],
    tasks: ['为第三方 SDK 补全类型声明', '将声明发布到 @types 仓库（模拟流程）'],
    acceptanceCriteria: ['声明文件通过 tsc 检查', '对外暴露的 API 拥有准确签名'],
    route: '/lesson/l11',
    completed: false,
    spotlight: {
      label: '声明文件结构',
      points: ['使用 declare module 为无类型包补丁', '通过 namespace 定义全局变量', '使用 export = 兼容 CommonJS']
    },
    tooling: ['dts-gen', 'tsd'],
    resources: ['Handbook - Declaration Files', 'DefinitelyTyped 贡献指南'],
    project: {
      title: 'SDK 类型补全计划',
      description: '为内部使用的第三方 SDK 补充类型声明，并提供示例。',
      milestones: ['识别 SDK API', '编写并测试声明文件', '在项目中验证智能提示']
    }
  },
  {
    id: 'l12',
    title: 'L12 React + TypeScript 组件模式',
    description: '在 React 中运用 TypeScript，构建类型友好的组件与 Hook。',
    background:
      'React 生态中 TypeScript 已成为事实标准。通过泛型 props、ForwardRef 与事件类型可以获得完善的组件体验。',
    objectives: ['编写函数组件类型', '运用泛型 props 与默认值', '掌握常见事件类型'],
    tasks: ['实现响应式仪表盘组件', '为自定义 Hook 定义返回值类型'],
    acceptanceCriteria: ['组件 Props 类型对外透出公共 API', 'Hook 输出包含精确推断'],
    route: '/lesson/l12',
    completed: false,
    spotlight: {
      label: 'React + TS 常见问题',
      points: ['正确定义 ReactNode 与元素类型', '处理 forwardRef 与泛型组件', '借助 Discriminated Union 管理组件状态']
    },
    tooling: ['React TypeScript Cheatsheets', 'Storybook'],
    resources: ['React 官方 TypeScript 文档', 'React TypeScript Cheatsheets'],
    project: {
      title: '仪表盘组件库',
      description: '实现一组统计卡片与图表组件，支持主题与响应式。',
      milestones: ['定义 CardProps 泛型接口', '实现 useDashboardData Hook', '编写 Storybook 文档验证类型']
    }
  },
  {
    id: 'l13',
    title: 'L13 Node.js 与后端类型实践',
    description: '在 Node.js 服务端使用 TypeScript，实现类型安全的接口层。',
    background:
      '借助 TypeScript + zod 等工具，可以构建类型安全的后端服务，确保接口契约与实现同步。',
    objectives: ['配置 Node.js 项目', '使用 zod 构建类型与校验', '利用依赖注入提升可测试性'],
    tasks: ['定义 REST API 契约', '实现服务层并编写单元测试'],
    acceptanceCriteria: ['请求/响应模型共享类型', '测试覆盖关键业务逻辑'],
    route: '/lesson/l13',
    completed: false,
    spotlight: {
      label: '后端类型策略',
      points: ['统一 DTO 与数据库模型', '使用 zod 推导 TypeScript 类型', '通过 ts-node-dev 优化开发体验']
    },
    tooling: ['tsup', 'zod', 'ts-node-dev'],
    resources: ['Node + TS 最佳实践指南', 'Zod 官方文档'],
    project: {
      title: '订单服务原型',
      description: '实现一个订单管理 API，覆盖创建、查询与状态更新。',
      milestones: ['定义订单实体与请求体类型', '使用 zod 校验请求', '编写 Vitest 测试覆盖 service 层']
    }
  },
  {
    id: 'l14',
    title: 'L14 构建工具与工程集成',
    description: '整合 ESLint、Prettier、tsup/esbuild 等工具，打造高质量工程基础设施。',
    background:
      'TypeScript 项目需要完整的工程化支撑，确保代码质量、构建效率与一致的开发体验。',
    objectives: ['配置 ESLint + TypeScript', '使用 tsup/esbuild 构建', '管理路径别名'],
    tasks: ['搭建 monorepo 的共享配置', '输出 ESM/CJS 双版本包'],
    acceptanceCriteria: ['lint/test/build 命令串联无误', '产物具备类型声明与 source map'],
    route: '/lesson/l14',
    completed: false,
    spotlight: {
      label: '工程化要点',
      points: ['统一 editorconfig 与 prettier 配置', '借助 lint-staged 保证提交质量', '在 CI 中运行 tsc --noEmit 检查类型']
    },
    tooling: ['eslint-config-modern', 'tsup', 'changesets'],
    resources: ['TypeScript + ESLint 官方指南', 'tsup 文档'],
    project: {
      title: '工程化模板仓库',
      description: '搭建一个开箱即用的 TypeScript 模板，内置测试、构建、格式化流程。',
      milestones: ['配置 lint/format 脚本', '集成 tsup 构建', '编写 CI 流水线脚本']
    }
  },
  {
    id: 'l15',
    title: 'L15 Capstone：类型驱动的产品迭代',
    description: '综合运用前 15 课所学，完成一次端到端的产品迭代并通过 CI 验收。',
    background:
      '将 TypeScript 视作团队协作契约，在真实项目中落地类型驱动开发（TDD + Type Driven Design）。',
    objectives: ['制定类型优先的需求拆解', '实现前后端共享类型', '配置 CI 保障质量'],
    tasks: ['设计完整的需求规格', '实现功能并提交 PR', '通过自动化测试与类型检查'],
    acceptanceCriteria: ['PR 包含类型变更说明', 'CI 覆盖 lint/test/build/type check', '用户故事验收通过'],
    route: '/lesson/l15',
    completed: false,
    spotlight: {
      label: '落地 checklist',
      points: ['需求拆解时优先定义类型', '保持类型、实现、测试同步演进', '通过 PR 模板记录风险与回滚方案']
    },
    tooling: ['GitHub Actions', 'pnpm workspaces', 'Vitest'],
    resources: ['Type-Driven Development 实践文章', 'Refactoring UI for TypeScript 团队协作经验'],
    project: {
      title: '迷你产品冲刺',
      description: '围绕真实业务场景，完成一次类型驱动的迭代并输出复盘报告。',
      milestones: ['编写共享类型包与 API 契约', '实现前端页面与后端服务', '整理复盘文档，记录类型系统带来的收益']
    }
  }
]
