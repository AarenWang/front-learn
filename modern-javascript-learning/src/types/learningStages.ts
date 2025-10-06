import type { LearningStage } from './index'

export const learningStages: LearningStage[] = [
  {
    id: 'l1',
    title: 'L1 现代 JavaScript 起航',
    description: '了解现代 JavaScript 生态、运行时和常用工具链，完成开发环境搭建。',
    duration: '2 小时',
    foundationTopics: ['ECMAScript 演进', 'Node.js 与浏览器运行时差异', 'pnpm 与 npm 对比', 'ESLint/Prettier 基本配置'],
    courseContent: [
      'JavaScript 历史回顾：从 ES5 到 ES2023 的重要里程碑。JavaScript 诞生于 1995 年，最初是为了在浏览器中实现动态交互而设计的脚本语言。经过近 30 年的发展，JavaScript 已经从一门简单的脚本语言演变为现代 Web 开发的核心技术。ES5（2009年）引入了严格模式、JSON 支持、数组方法等基础功能；ES6/ES2015 带来了箭头函数、类、模块、Promise 等革命性特性；ES2017 引入 async/await 让异步编程更加优雅；ES2020 的可选链和空值合并操作符进一步提升了代码的安全性；ES2023 的顶层 await 和数组查找方法让开发体验更加完善。了解这些历史演进有助于我们理解现代 JavaScript 的设计理念和最佳实践。',
      
      '现代 JavaScript 特性概览：箭头函数、模板字符串、解构赋值、async/await 等核心语法。箭头函数不仅简化了函数语法，更重要的是改变了 this 的绑定规则，使得函数式编程更加自然。模板字符串通过反引号和 ${} 语法，让字符串拼接变得直观且支持多行文本。解构赋值允许我们优雅地提取数组或对象中的值，大大减少了重复代码。async/await 语法让异步编程看起来像同步代码，显著提升了代码的可读性。这些特性共同构成了现代 JavaScript 的基础语法体系，掌握它们对于编写高质量的现代 JavaScript 代码至关重要。',
      
      'Node.js 运行时环境：V8 引擎、事件循环、模块系统。Node.js 基于 Chrome 的 V8 JavaScript 引擎构建，让我们能够在服务器端运行 JavaScript。V8 引擎通过即时编译（JIT）技术将 JavaScript 代码转换为高效的机器码，提供了出色的性能表现。事件循环是 Node.js 的核心机制，它采用单线程事件驱动模型，通过事件队列处理异步操作，避免了传统多线程编程的复杂性。Node.js 的模块系统经历了从 CommonJS 到 ES Modules 的演进，现在支持两种模块标准，为开发者提供了更大的灵活性。理解这些底层机制有助于我们编写更高效的 Node.js 应用。',
      
      '包管理器对比：npm、yarn、pnpm 的优缺点分析。npm 是 Node.js 的默认包管理器，拥有最大的生态系统和最丰富的包资源，但其依赖管理存在一些问题，如幽灵依赖和重复安装。yarn 通过并行安装和确定性依赖解决了 npm 的许多问题，还引入了 yarn.lock 文件确保依赖版本的一致性。pnpm 则采用了独特的硬链接机制，通过全局存储和符号链接大幅减少了磁盘空间占用，同时保持了严格的依赖隔离。在实际项目中，选择哪个包管理器需要考虑团队规模、项目复杂度、CI/CD 环境等因素。现代前端项目通常推荐使用 pnpm，它在性能和依赖管理方面都有明显优势。',
      
      '开发工具链搭建：VSCode 配置、ESLint 规则设置、Prettier 格式化。VSCode 作为最受欢迎的前端开发工具，通过丰富的插件生态提供了强大的开发体验。配置 VSCode 包括安装必要插件（如 JavaScript、TypeScript、ESLint、Prettier）、设置代码片段、配置调试环境等。ESLint 是 JavaScript 代码质量检查工具，通过规则配置可以捕获潜在的错误和不规范的代码风格。Prettier 是代码格式化工具，能够自动统一代码风格，减少团队协作中的格式争议。合理配置这些工具能够显著提升开发效率和代码质量。',
      
      '项目初始化最佳实践：package.json 配置、scripts 脚本、依赖管理。package.json 是 Node.js 项目的核心配置文件，包含了项目元信息、依赖声明、脚本命令等重要内容。合理配置 package.json 包括设置正确的项目信息、选择合适的许可证、定义清晰的依赖版本范围、配置有用的 scripts 脚本。scripts 脚本是项目自动化的重要工具，常见的脚本包括 dev（开发）、build（构建）、test（测试）、lint（代码检查）等。依赖管理需要区分 dependencies（生产依赖）和 devDependencies（开发依赖），合理使用语义化版本控制，定期更新依赖以获取安全补丁和新功能。',
      
      'Git 工作流基础：仓库初始化、提交规范、分支策略。Git 是现代软件开发中不可或缺的版本控制工具，掌握其基本概念和工作流程是每个开发者的必备技能。仓库初始化包括创建本地仓库、添加远程仓库、配置用户信息等基础操作。提交规范是团队协作的重要约定，常见的规范包括 Conventional Commits，通过统一的提交信息格式提高代码历史的可读性。分支策略定义了代码的协作模式，常见的策略包括 Git Flow、GitHub Flow 等，选择合适的策略能够提高团队协作效率，减少合并冲突。掌握这些 Git 基础知识是参与现代软件开发的基础。',
      
      '环境变量管理与配置文件：.env、.editorconfig、.gitignore 等项目管理文件。环境变量是配置管理的重要手段，通过 .env 文件可以在不同环境中使用不同的配置值，避免将敏感信息硬编码到代码中。.editorconfig 文件统一了团队成员的编辑器配置，确保代码风格的一致性。.gitignore 文件定义了 Git 应该忽略的文件和目录，防止不必要的文件被提交到版本控制中。这些配置文件虽然看似简单，但对项目的可维护性和团队协作效率有着重要影响。合理配置这些文件是建立高质量项目的基础工作。'
    ],
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
    courseContent: [
      '变量声明进阶：var/let/const 的作用域差异与提升行为。var 声明的变量存在函数作用域提升，可以在声明之前使用，但值为 undefined，这经常导致意外的错误。let 和 const 引入了块级作用域，解决了 var 的作用域问题，同时不存在提升行为，必须先声明后使用。const 声明的变量不可重新赋值，但如果变量是对象或数组，其内容仍然可以修改。在实际开发中，应该优先使用 const，需要重新赋值时使用 let，避免使用 var。理解这些差异有助于避免常见的变量作用域陷阱，编写更可预测的代码。',
      
      '模板字符串深入：标签模板、嵌套模板、性能优化技巧。模板字符串使用反引号定义，支持多行文本和表达式插值。标签模板是一种高级用法，允许自定义字符串处理函数，常用于国际化、样式化文本、SQL 查询构建等场景。嵌套模板字符串可以在模板字符串内部使用另一个模板字符串，但需要注意引号的正确使用。在性能方面，简单的字符串拼接使用模板字符串通常比传统拼接方式更高效，但在循环中大量使用时应考虑性能影响。掌握模板字符串的高级用法能够显著提升代码的表达能力和开发效率。',
      
      '解构赋值全攻略：数组解构、对象解构、嵌套解构、默认值设置。解构赋值是 ES6 引入的强大语法，允许从数组或对象中提取值并赋值给变量。数组解构按照位置顺序提取，可以使用剩余运算符收集剩余元素，还可以跳过某些元素。对象解构按照属性名匹配，可以重命名变量，也可以设置默认值。嵌套解构允许从嵌套的数组或对象中提取值，这在处理复杂数据结构时非常有用。默认值设置确保在解构的值不存在时使用预设值，提高了代码的健壮性。解构赋值不仅简化了代码，还使数据提取更加直观和可读。',
      
      '展开运算符应用：数组展开、对象展开、函数参数展开。展开运算符（...）是 ES6 引入的重要语法，具有多种用途。在数组中使用时，可以将数组元素展开为独立的参数，常用于数组拼接、函数调用等场景。在对象中使用时，可以将对象属性展开到另一个对象中，这是对象合并和克隆的常用方式。在函数参数中使用时，可以将剩余参数收集为数组，提供了更灵活的函数定义方式。展开运算符与解构赋值结合使用，能够实现更复杂的数据操作。需要注意的是，展开运算符执行的是浅拷贝，对于嵌套对象需要特别处理。',
      
      'JavaScript 数据类型详解：原始类型与引用类型的区别。JavaScript 有七种基本数据类型：undefined、null、boolean、number、string、symbol、bigint，以及一种引用类型 object。原始类型直接存储在栈内存中，按值传递，比较时比较值是否相等。引用类型存储在堆内存中，变量存储的是内存地址，按引用传递，比较时比较引用是否相同。这种差异导致了赋值、比较、传参等操作的不同行为。理解这些差异对于避免常见的数据操作错误至关重要，特别是在进行对象克隆、比较、作为函数参数传递时。',
      
      '类型转换机制：显式转换 vs 隐式转换、转换规则与最佳实践。JavaScript 是弱类型语言，具有自动类型转换的能力。隐式转换发生在运算符操作、比较、逻辑判断等场景中，虽然方便但经常导致意外的结果。显式转换通过 Number()、String()、Boolean() 等函数进行，结果更加可预测。类型转换遵循特定的规则：falsy 值（false、0、""、null、undefined、NaN）转换为布尔值时都是 false；字符串转数字时，空字符串转为 0，非数字字符串转为 NaN；对象转基本类型时会调用 valueOf() 和 toString() 方法。最佳实践是尽量使用显式转换，避免依赖隐式转换，使用严格相等（===）进行比较。',
      
      '可选链操作符：安全访问深层属性、与空值合并的配合使用。可选链操作符（?.）是 ES2020 引入的安全属性访问语法，可以避免在访问 undefined 或 null 的属性时抛出错误。它可以用于属性访问、方法调用、数组索引访问等场景，当任何中间值为 null 或 undefined 时，整个表达式返回 undefined。空值合并操作符（??）提供默认值，只有当左侧为 null 或 undefined 时才使用右侧的值，与 || 操作符的区别在于它不会将 falsy 值（如 0、false、""）视为需要替换的值。这两个操作符结合使用，可以编写更安全、更简洁的代码，避免大量的条件判断和错误处理。',
      
      'Symbol 类型入门：唯一标识符、内置 Symbol、私有属性模拟。Symbol 是 ES6 引入的原始数据类型，每个 Symbol 值都是唯一的，即使描述相同也不相等。Symbol 常用于创建对象的唯一属性键，避免属性名冲突。JavaScript 提供了一些内置的 Symbol，如 Symbol.iterator 用于定义迭代器，Symbol.toStringTag 用于自定义对象的字符串表示。Symbol 还可以用于模拟私有属性，通过 Symbol 作为属性键可以创建外部无法直接访问的属性。虽然 Symbol 的使用场景相对有限，但在某些高级编程模式中非常有用，特别是在创建库和框架时。',
      
      'BigInt 大数处理：精度问题解决方案、运算注意事项。BigInt 是 ES2020 引入的原始数据类型，用于表示任意精度的整数。JavaScript 的 Number 类型基于 IEEE 754 双精度浮点数标准，只能安全表示 -2^53 到 2^53 之间的整数，超出这个范围就会失去精度。BigInt 解决了这个问题，可以表示任意大小的整数。BigInt 字面量以 n 结尾，也可以通过 BigInt() 构造函数创建。需要注意的是，BigInt 不能与 Number 类型直接运算，需要先进行类型转换。BigInt 在金融计算、密码学、大数据处理等需要高精度计算的场景中非常重要。',
      
      '类型检测方法：typeof、instanceof、Object.prototype.toString 的适用场景。typeof 操作符用于检测基本数据类型，但对于 null 会返回 "object"，对于数组和对象都返回 "object"，局限性较大。instanceof 操作符用于检测对象是否为特定构造函数的实例，可以检测自定义类型和内置类型，但无法检测基本类型。Object.prototype.toString 是最可靠的类型检测方法，通过调用对象的 toString 方法可以准确识别所有内置类型，包括基本类型和引用类型。在实际开发中，应该根据具体需求选择合适的类型检测方法，或者结合多种方法实现更准确的类型检测。理解这些方法的差异和适用场景对于编写健壮的类型检测代码至关重要。'
    ],
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
    courseContent: ['函数声明与表达式：提升机制、作用域差异、最佳实践'],
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
    courseContent: ['原型链机制：__proto__ 与 prototype 的关系', 'class 语法糖：构造函数、静态方法、私有字段'],
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
    courseContent: ['数组方法进阶：forEach、map、filter、reduce 的深度应用', 'Set/Map 数据结构：性能特点与使用场景'],
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
    courseContent: ['ES Modules 基础：import/export 语法、默认导出与命名导出', '模块打包原理：Tree Shaking 优化机制'],
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
    courseContent: ['DOM 操作进阶：节点遍历、属性操作、样式管理', '事件系统：捕获与冒泡机制、事件委托模式'],
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
    courseContent: ['异步编程基础：回调地狱、Promise 解决机制', '事件循环详解：调用栈、任务队列、微任务队列'],
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
    courseContent: ['async/await 语法糖：错误处理、并发控制', '请求取消机制：AbortController 的使用场景'],
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
    courseContent: ['错误类型分类：Error、TypeError、ReferenceError 等', '调试技巧：断点调试、console 方法、性能分析'],
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
    courseContent: ['存储方案对比：Cookie、LocalStorage、SessionStorage、IndexedDB', '数据序列化：JSON、二进制数据、压缩策略'],
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
    courseContent: ['Vite 核心原理：ESBuild、HMR 热更新机制', '构建优化：代码分割、懒加载、Tree Shaking'],
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
    courseContent: ['代码质量工具链：ESLint 规则配置、Prettier 格式化', 'Git Hooks 集成：提交前检查、代码风格统一'],
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
    courseContent: ['测试框架选择：Vitest vs Jest、配置与插件', '测试策略：单元测试、集成测试、E2E 测试'],
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
    courseContent: ['性能指标详解：Core Web Vitals、用户体验指标', '优化策略：资源压缩、缓存策略、网络优化'],
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
    courseContent: ['项目架构设计：模块拆分、依赖管理、状态管理', 'CI/CD 流水线：自动化测试、部署、监控'],
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
