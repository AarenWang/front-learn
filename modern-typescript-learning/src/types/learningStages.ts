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
