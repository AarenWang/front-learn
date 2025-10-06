import type { LearningStage, StageModuleMeta } from './index'

const modules: Record<string, StageModuleMeta> = {
  foundations: {
    id: 'module-1',
    title: '模块一｜CSS 原理与规范体系',
    summary: '夯实规范结构、语法体系与浏览器渲染原理'
  },
  selectors: {
    id: 'module-2',
    title: '模块二｜选择器与变量机制',
    summary: '构建可维护的选择器策略与层叠管理能力'
  },
  layout: {
    id: 'module-3',
    title: '模块三｜盒模型与布局体系',
    summary: '掌握盒模型、Flex/Grid 等布局与定位方案'
  },
  visuals: {
    id: 'module-4',
    title: '模块四｜视觉与绘制层',
    summary: '理解图层、滤镜、渐变等视觉表现形式'
  },
  responsive: {
    id: 'module-5',
    title: '模块五｜交互、动画与响应式',
    summary: '打造动效体系与渐进式响应式体验'
  },
  frontier: {
    id: 'module-6',
    title: '模块六｜现代特性与规范前沿',
    summary: '跟进新规范，构建国际化与可编程样式能力'
  }
}

export const learningStages: LearningStage[] = [
  {
    id: 'l1',
    title: 'L1｜CSS 的历史与规范体系',
    description: '梳理 CSS 的诞生、标准化流程与规范组织，明确如何追踪最新规范草案。',
    duration: '约 1 小时',
    module: modules.foundations,
    foundationTopics: ['W3C 与 CSS 工作组角色', 'WHATWG 与 HTML/CSS 协作', 'CSS Levels 迭代思路', 'CSSOM 与渲染接口'],
    project: {
      name: '规范寻踪笔记',
      description: '搭建一份包含官方链接与历史里程碑的规范索引页，帮助后续查阅标准。',
      deliverables: [
        '整理 CSS 规范组织关系图',
        '收集 Flexbox 草案链接并提炼要点',
        '输出带时间线的 Markdown 读书笔记'
      ]
    },
    practiceTasks: [
      '总结 CSS 规范由谁制定、Level 代表什么含义',
      '提取三个常用规范模块的最新状态',
      '在团队知识库分享规范追踪方法'
    ],
    acceptanceCriteria: [
      '笔记中至少包含 3 个权威规范链接',
      'Flexbox 阅读笔记覆盖导言和第一章核心条款',
      '输出的关系图能够解释 CSSWG 与 WHATWG 职责差异'
    ],
    resources: [
      { label: 'W3C CSS Standards', url: 'https://www.w3.org/TR/css/' },
      { label: 'MDN - CSS reference', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }
    ],
    teachingSections: [
      {
        id: 'l1-intro',
        type: 'theory',
        title: '课程导入｜CSS 的诞生与演进时间线',
        duration: '15 分钟',
        description: '通过时间线故事梳理 CSS 的出现动因，建立规范演进的整体框架。',
        focus: '理解 CSS 作为 Web 表现层标准的历史脉络',
        items: [
          {
            title: '表现与结构分离的背景',
            detail:
              '回顾 1994 年 Håkon Wium Lie 在 CERN 发布《Cascading HTML style sheets — a proposal》的原始动机，列出 HTML 3.2 时代内联样式与 <font> 标签导致的维护痛点。\n引用 CSS1 规范导言（https://www.w3.org/TR/REC-CSS1/）中对 cascade 的描述，引导学员理解“表现与结构分离”的术语如何影响浏览器实现。'
          },
          {
            title: 'CSS Level 演进里程碑',
            detail:
              '绘制包含 CSS1（1996）、CSS2.1（2011）与模块化 CSS3 的时间轴，结合官方状态页标注 Recommendation、Candidate Recommendation 与 Working Draft 的差异。\n补充 CSS4 并非单一规范而是一组模块的现实案例，帮助学员理解为何需要模块化并行迭代。'
          },
          {
            title: '浏览器大战与标准化',
            detail:
              '以 1998 年“浏览器大战”为背景，展示 IE5、Netscape 4 在 CSS1 实现差异造成的兼容性问题，并引用 Acid1/Acid2 测试的出现。\n说明厂商加入 W3C CSSWG、WHATWG 的协同机制如何改善标准落地，强调测试套件对规范推进的价值。'
          }
        ],
        tools: ['MDN CSS Timeline', 'W3C Archive'],
        outcome: '掌握 CSS 发展关键节点，并能口头描述 CSS Level 与模块化的差异。'
      },
      {
        id: 'l1-organizations',
        type: 'theory',
        title: '规范组织与协作机制',
        duration: '20 分钟',
        description: '拆解参与 CSS 标准制定的组织角色，明确不同草案的权威性。',
        focus: '学会辨识规范来源与跟踪路径',
        items: [
          {
            title: 'W3C 架构与 CSSWG 职责',
            detail:
              '拆解 W3C 结构中 Advisory Committee、Technical Architecture Group 与 CSS Working Group 的分工，明确规范从 Working Draft 到 Proposed Recommendation 的投票流程。\n结合 CSSWG Charter 说明 Editors Draft 如何通过 GitHub 管理 issue、更新 Change Log。'
          },
          {
            title: 'WHATWG 与 HTML 协作',
            detail:
              '对比 WHATWG HTML Living Standard 与 W3C HTML Recommendation 的协作方式，强调通过「Bikeshed + Shepherd」生成规范文档。\n展示 CSS 与 HTML 合作的典型接口（如 <link rel="stylesheet"> 与 Constructable Stylesheets）及其提案来源。'
          },
          {
            title: '跨规范协同生态',
            detail:
              '列举与 CSS 密切相关的工作组：TC39、SVG Working Group、Web Platform Tests 社区，并说明它们在统一 API 体验中的角色。\n以 WPT 测试套件为例，讲解如何通过 pr builds 验证新属性的互操作性。'
          }
        ],
        tools: ['W3C TR', 'CSSWG GitHub', 'WHATWG Standards']
      },
      {
        id: 'l1-spec-research',
        type: 'activity',
        title: '规范阅读方法与 CSSOM',
        duration: '15 分钟',
        description: '示范如何定位最新草案、理解文档结构，并快速提炼要点。',
        focus: '掌握规范查阅与记录的动作路径',
        items: [
          {
            title: 'TR 与 Editors Draft 的区别',
            detail:
              '演示在 https://www.w3.org/TR/css/ 下查找 Flexbox 规范的 TR 链接，并与 https://drafts.csswg.org/css-flexbox/ 的 Editors Draft 做逐段对比。\n重点拆解「Status of This Document」与「Changes」章节，说明为何实际实现应以 Editors Draft 为准。'
          },
          {
            title: 'CSSOM 接口速览',
            detail:
              '通过 Chrome DevTools 的 Sources → Page 面板查看 document.styleSheets，映射到 CSSOM 中的 StyleSheetList、CSSRuleList、CSSStyleRule 等接口。\n结合 MDN（https://developer.mozilla.org/docs/Web/API/CSS_Object_Model）说明这些接口在样式计算阶段的作用。'
          },
          {
            title: 'Issue 追踪与会议纪要',
            detail:
              '打开 https://github.com/w3c/csswg-drafts/issues 的 label:flexbox 议题，提炼 issue 模板中「Specification」「Summary」等字段。\n配合 CSSWG 会议纪要（https://lists.w3.org/Archives/Public/www-style/）练习记录讨论时间、决议与后续行动人。'
          }
        ],
        tools: ['Chrome DevTools', 'CSSWG Minutes'],
        outcome: '能够使用权威资源定位任意 CSS 模块的最新状态并做笔记。'
      },
      {
        id: 'l1-project',
        type: 'project',
        title: '项目实战｜规范寻踪笔记搭建',
        duration: '30 分钟',
        description: '引导学员搭建一份可持续维护的规范索引，连接历史与最新草案。',
        focus: '训练信息整合、结构设计与洞察输出',
        items: [
          {
            title: '信息架构规划',
            detail:
              '列出笔记的三大结构：组织关系图（W3C ↔ WHATWG ↔ CSSWG）、里程碑时间线、模块化索引，并为每个部分预留链接区域。\n示范在 Notion/Markdown 中插入折叠目录与外部链接引用，确保后续可持续维护。'
          },
          {
            title: '资料采集与标注',
            detail:
              '从 https://www.w3.org/TR/css/ 抽取至少五个核心模块（如 Color、Cascade、Selectors），记录最新状态、发布日期、编辑者名单。\n同步在 CSSWG GitHub 中引用对应该模块的 issue/PR，并在笔记中使用 tag 标记“待跟进”。'
          },
          {
            title: 'Flexbox 草案拆读',
            detail:
              '聚焦 Flexbox 规范的「Abstract」「Terminology」「Flex Formatting Context」章节，标注关键术语（flex container、main axis、flex base size）。\n结合 MDN 指南核对术语翻译，并写下自己的理解或尚存疑问，形成可复盘的读书笔记。'
          }
        ],
        tools: ['Notion 或 Obsidian', 'diagrams.net', 'MDN Spec Index'],
        outcome: '完成一份可复用的 CSS 规范索引页，并配套 Flexbox 草案导读笔记。'
      }
    ],
    route: '/lessons/css-history-and-standards',
    completed: false
  },
  {
    id: 'l2',
    title: 'L2｜CSS 语法与值体系',
    description: '掌握规则集、声明、类型化值以及颜色函数，编写规范的样式表。',
    duration: '约 1.2 小时',
    module: modules.foundations,
    foundationTopics: ['规则集与声明块结构', '单位体系：px / em / rem / vh', 'CSS 颜色函数与色彩表示', 'CSS 语法树 (CSS Syntax)'],
    project: {
      name: '语法规范样式表',
      description: '为示例网站编写包含注释、变量与颜色系统的基础样式表。',
      deliverables: [
        '建立 :root 级别的变量与注释规范',
        '使用 HSL、LAB 等颜色函数定义主题色',
        '编写 typography.css 覆盖标题、正文、代码块'
      ]
    },
    practiceTasks: [
      '通过示例解释 em 与 rem 的差异及使用场景',
      '配置 Stylelint 或 ESLint Style 插件校验语法',
      '编写一份单位换算速查表'
    ],
    acceptanceCriteria: [
      '样式表通过 lint 检查且无语法错误',
      '变量命名遵循 BEM/Design Token 约定并附注释',
      '提供 demo 页面展示颜色与排版效果'
    ],
    resources: [
      { label: 'MDN - CSS Syntax', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax' },
      { label: 'MDN - CSS Values and Units', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units' }
    ],
    teachingSections: [
      {
        id: 'l2-syntax-basics',
        type: 'theory',
        title: '语法剖析与解析规则',
        duration: '20 分钟',
        description: '拆解 CSS Syntax Level 3 的核心术语，理解浏览器如何解析样式表。',
        focus: '掌握规则集、声明块与 at-rule 的语法结构',
        items: [
          {
            title: '规则集与声明块剖析',
            detail:
              '结合 CSS Syntax Level 3 中的正式定义，拆解选择器、声明、属性名、冒号、值与分号之间的必需结构。\n演示如何通过语法高亮识别无效 token，并强调注释、空白字符不会改变声明块含义但影响可读性。',
            codeExample: {
              title: '合法的规则集结构示例',
              language: 'css',
              content:
                '@layer components {\n  article.card[data-state="active"] {\n    --card-shadow: 0 18px 40px -24px hsl(220 40% 30% / 0.45);\n    background: var(--surface-1);\n    transition: box-shadow 200ms ease;\n  }\n}'
            }
          },
          {
            title: 'At-rule 分类与嵌套',
            detail:
              '解释 at-rule 按照 “语句型（statement）” 与 “块级（block）” 的分类方式，说明哪些规则允许嵌套。\n逐条比较 @import、@media、@supports、@layer 在 CSS Syntax 规范中的 BNF 结构，展示条件规则如何与自定义属性组合。',
            codeExample: {
              title: '条件 at-rule 组合范式',
              language: 'css',
              content:
                '@import url("open-props") layer(design-tokens);\n\n@layer design-tokens {\n  :root {\n    --brand-hue: 220;\n    --brand-sat: 88%;\n  }\n}\n\n@layer components {\n  @media (min-width: 48rem) and (prefers-reduced-motion: no-preference) {\n    @supports (animation-timeline: view()) {\n      .hero {\n        animation: fade-in 600ms ease-out;\n      }\n    }\n  }\n}'
            }
          },
          {
            title: '语法容错机制',
            detail:
              '引用 CSS2.1 4.2 节说明 UA 如何在遇到未知属性或值时跳过整条声明，并强调错误不会阻塞后续解析。\n通过现场演示展示多个错误并确认 DevTools 中的「invalid property value」提示，引出使用 lint 保证一致性的必要。',
            codeExample: {
              title: '容错策略对比',
              language: 'css',
              content:
                '.button {\n  background-colr: #4f46e5; /* 拼写错误，浏览器会忽略 */\n  background-color: hsl(244 92% 60%);\n  padding: clamp(0.625rem, 2vw, 1rem);\n}'
            }
          }
        ],
        tools: ['MDN CSS Syntax', 'CodePen']
      },
      {
        id: 'l2-values-system',
        type: 'theory',
        title: '类型化值与单位体系',
        duration: '25 分钟',
        description: '掌握 CSS Values & Units 规范中的长度、颜色与函数值，构建可靠的设计 Token。',
        focus: '搭建统一的数值与色彩表达方式',
        items: [
          {
            title: '绝对与相对长度计算',
            detail:
              '对照 CSS Values & Units Level 4 中的长度定义，分辨 px、rem、em、vw、vh、vi 的基准值与缩放方式。\n演示通过调整根字体与视口宽度观察 rem/em 的换算，记录常见误区如「嵌套 em 累积效应」。',
            codeExample: {
              title: '长度单位换算示例',
              language: 'css',
              content:
                ':root {\n  font-size: 16px;\n}\n\n.card {\n  padding-inline: clamp(1.25rem, 4vw, 2.5rem);\n  min-height: calc(18rem + 4vh);\n}'
            }
          },
          {
            title: '颜色函数与色域比较',
            detail:
              '引用 CSS Color Module Level 4 的色彩模型章节，比较 sRGB、HSL、LAB/LCH 的色域覆盖范围与可读性。\n使用 Chrome DevTools「Color Picker」展示不同模型的预览，补充 Safari/Chromium 对 display-p3 支持现状。',
            codeExample: {
              title: '现代颜色函数写法',
              language: 'css',
              content:
                ':root {\n  --brand: color(display-p3 0.4 0.35 0.92);\n  --brand-muted: lch(62% 24 280);\n}\n\n.button-primary {\n  background: var(--brand);\n  color: oklch(98% 0.04 240);\n}'
            }
          },
          {
            title: '函数值与 calc 组合',
            detail:
              '拆解 calc()/min()/max() 在规范中的解析顺序，强调单位需兼容、运算会在 computed value 阶段执行。\n展示自定义属性与函数组合时需提供回退值的写法，避免变量为空导致计算失败。',
            codeExample: {
              title: 'calc 与 CSS 变量协同',
              language: 'css',
              content:
                ':root {\n  --column-gap: 1.5rem;\n}\n\n.grid-auto {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(min(22ch, 100%), 1fr));\n  gap: max(var(--column-gap), 1.25rem);\n}'
            }
          }
        ],
        tools: ['Chrome DevTools Colors', 'Color.js Playground']
      },
      {
        id: 'l2-quality-guard',
        type: 'activity',
        title: '工程实践与质量保障',
        duration: '15 分钟',
        description: '将语法规范转化为团队可执行的工程守则，避免样式漂移。',
        focus: '让样式表具备可维护、可协作特性',
        items: [
          {
            title: 'Lint 规则与自动化',
            detail:
              '在 Stylelint 官方配置（https://stylelint.io/user-guide/rules）中挑选针对语法正确性的核心规则，如 declaration-block-trailing-semicolon、no-duplicate-selectors。\n演示如何在 CI 中运行 stylelint --max-warnings=0 并结合 Prettier/EditorConfig 保持一致格式。',
            codeExample: {
              title: 'stylelint.config.js 片段',
              language: 'javascript',
              content:
                'export default {\n  extends: ["stylelint-config-standard"],\n  rules: {\n    "color-no-invalid-hex": true,\n    "block-no-empty": true,\n    "selector-max-id": 0\n  }\n}'
            }
          },
          {
            title: 'Design Token 命名',
            detail:
              '遵循 W3C Design Tokens Community Group 推荐的 token 命名模式，拆分 brand、surface、state 等语义域。\n示范 :root 中通过 @layer reset/base/theme 划分作用域，并用注释标注 token 来源与可访问性指标。',
            codeExample: {
              title: ':root Token 示例',
              language: 'css',
              content:
                '@layer tokens {\n  :root {\n    /* Brand identity */\n    --color-brand-600: oklch(54% 0.22 264);\n    --color-brand-foreground: oklch(98% 0.02 260);\n    /* Elevation */\n    --shadow-lg: 0 24px 48px -24px hsl(234 70% 15% / 0.32);\n  }\n}'
            }
          },
          {
            title: '多人协作文件结构',
            detail:
              '结合 ITCSS/BEM 架构划分 base、objects、components、utilities 层级，说明每层的命名约定与约束。\n讨论在 Vite/React 项目中使用 @layer、@import 或 CSS Modules 的组织方式，制定导入顺序与变更评审清单。'
          }
        ],
        tools: ['Stylelint', 'VS Code', 'Design Token 工具']
      },
      {
        id: 'l2-project',
        type: 'project',
        title: '项目实战｜语法规范样式表',
        duration: '30 分钟',
        description: '动手编写模块化基础样式表，将变量、颜色与排版系统落地。',
        focus: '将语法规范转化为团队可复用的样式资产',
        items: [
          {
            title: '搭建文件骨架',
            detail:
              '规划 tokens、base、components 三个层级的入口文件，并确认在 Vite 中的导入顺序与缓存策略。\n演示如何使用 @layer 或 PostCSS import 插件管理依赖，确保构建产物层叠关系可控。',
            codeExample: {
              title: 'main.css 入口结构',
              language: 'css',
              content:
                '@import url("./styles/tokens.css") layer(tokens);\n@import url("./styles/base.css") layer(base);\n@import url("./styles/typography.css") layer(components);'
            }
          },
          {
            title: '主题色与对比度校验',
            detail:
              '依据 WCAG 2.2 AA 标准，使用工具测量按钮/文本对比度大于 4.5:1。\n在 prefers-color-scheme 媒体查询内提供暗色主题的对比色，并记录 fallback 机制（如强制 light 主题时的备用色）。',
            codeExample: {
              title: '主题色与暗色回退',
              language: 'css',
              content:
                ':root {\n  --color-primary: oklch(63% 0.21 270);\n  --color-on-primary: oklch(98% 0.02 260);\n}\n\n@media (prefers-color-scheme: dark) {\n  :root {\n    --color-primary: oklch(72% 0.18 264);\n    --color-on-primary: oklch(20% 0.02 260);\n  }\n}\n\n.button-primary {\n  background: var(--color-primary);\n  color: var(--color-on-primary);\n}'
            }
          },
          {
            title: '排版模块验证',
            detail:
              '编写 typography.css 覆盖 heading、正文、代码块与引用，确保字体栈、行高、字距符合阅读体验。\n在示例页面加载模块并通过 DevTools Inspect 验证层叠顺序、对比度与多语言字符覆盖。',
            codeExample: {
              title: 'typography.css 节选',
              language: 'css',
              content:
                '@layer components.typography {\n  h1, h2, h3 {\n    font-family: "Inter var", system-ui, -apple-system, BlinkMacSystemFont, sans-serif;\n    line-height: 1.15;\n    letter-spacing: -0.01em;\n  }\n\n  pre, code {\n    font-family: "JetBrains Mono", SFMono-Regular, Consolas, monospace;\n    font-size: clamp(0.85rem, 0.8rem + 0.3vw, 0.95rem);\n    background: color-mix(in srgb, var(--color-primary) 8%, white);\n  }\n}'
            }
          }
        ],
        tools: ['Stylelint CLI', 'VS Code Live Server', 'Polypane'],
        outcome: '交付一份通过 lint 的基础样式库，作为团队设计 Token 模板。'
      }
    ],
    route: '/lessons/css-syntax-and-values',
    completed: false
  },
  {
    id: 'l3',
    title: 'L3｜层叠与继承机制',
    description: '深入理解 cascade、继承与优先级，处理复杂样式冲突。',
    duration: '约 1 小时',
    module: modules.foundations,
    foundationTopics: ['选择器优先级计算', '!important 与权重调和', 'inherit / initial / revert 的差异', '层叠顺序与来源'],
    project: {
      name: '层叠冲突实验室',
      description: '构建一组嵌套组件模拟冲突，展示最终样式由何处决定。',
      deliverables: [
        '准备包含嵌套组件与多层选择器的示例页面',
        '记录每个样式来源及最终计算结果',
        '提供避免 !important 的替代策略'
      ]
    },
    practiceTasks: [
      '列出三个不同 specificity 的选择器并手动计算权重',
      '演示 revert-layer 与 revert 的差别',
      '总结常见层叠问题的调试流程'
    ],
    acceptanceCriteria: [
      '示例页面包含至少三类冲突场景',
      '文档中明确每条规则的来源和覆盖理由',
      '提供避免滥用 !important 的落地方案'
    ],
    resources: [
      { label: 'MDN - Cascade and inheritance', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade' },
      { label: 'web.dev - Managing CSS cascade layers', url: 'https://web.dev/articles/cascade-layers' }
    ],
    teachingSections: [
      {
        id: 'l3-cascade-basics',
        type: 'theory',
        title: '层叠基础复盘',
        duration: '20 分钟',
        description: '回顾 cascade 三要素与权重模型，建立样式冲突分析的心智模型。',
        focus: '理解来源、重要性与 specificity 的协同作用',
        items: [
          {
            title: '样式来源与重要性层级',
            detail:
              '引用 Cascade Level 5 第 6 章，梳理 User-Agent、User、Author 三类来源以及 normal/important 的排序，并补充 Transition、Animation 两个特殊来源。\n通过表格对比不同来源叠加时的取舍，提醒团队在组件库中保留用户样式入口。'
          },
          {
            title: 'Specificity 计算模型',
            detail:
              '拆解 CSS Selectors Level 4 中的 specificity 定义，将权重向量 (a,b,c,d) 对应到 inline style、ID、class/属性/伪类、类型选择器。\n手算多组示例并引导学员使用 Specificity Calculator 交叉验证，理解 :where()/:is() 的权重特性。',
            codeExample: {
              title: 'Specificity 权重示例',
              language: 'css',
              content:
                '/* 权重 (0,1,1,1) */\n.card.hero[data-state="active"] > h2::first-line {\n  color: var(--color-primary);\n}\n\n/* :where() 不增加权重 */\n.where-example :where(.cta-button.is-primary) {\n  background: var(--color-primary);\n}'
            }
          },
          {
            title: 'DevTools 层叠演示',
            detail:
              '使用 Chrome DevTools Styles → Cascade 面板，演练如何定位被覆盖的规则、查看来源（User Agent / Author）。\n教会学员使用「Show all matching rules」与「Toggle :hover」功能，并截图记录冲突解决前后的状态。',
            codeExample: {
              title: '对比层叠的演示代码',
              language: 'css',
              content:
                '@layer base {\n  button {\n    background: var(--surface-muted);\n  }\n}\n\n@layer components {\n  button.primary {\n    background: var(--color-primary);\n  }\n}\n\n@layer overrides {\n  button.primary {\n    background: var(--color-alert); /* 在 DevTools 中展示覆盖 */\n  }\n}'
            }
          }
        ],
        tools: ['Chrome DevTools Styles', 'Specificity Calculator']
      },
      {
        id: 'l3-inheritance',
        type: 'theory',
        title: '继承机制与关键字',
        duration: '15 分钟',
        description: '深入掌握继承属性、初始值以及 revert 系列关键字的差异。',
        focus: '控制继承范围，减少意外覆盖',
        items: [
          {
            title: '继承属性清单',
            detail:
              '基于 Cascade Level 5 附录 A 的表格列出常见可继承属性（color、font-family、line-height、text-align 等）与非继承属性，并解释 computed value 与 inherited value 的区别。\n结合 DevTools Computed 面板验证继承链，记录组件需要显式重置的属性。'
          },
          {
            title: 'initial/inherit/unset/revert',
            detail:
              '对比 initial（回到规范默认值）、inherit（继承父级）、unset（因属性是否继承而定）与 revert（回退至上一层 cascade）的作用。\n实操演示在 @layer 体系中使用 revert-layer 快速撤销覆盖，强调与 revert 的差别。',
            codeExample: {
              title: '继承控制关键词',
              language: 'css',
              content:
                '.prose a {\n  color: var(--color-primary);\n  text-decoration: underline;\n}\n\n.prose.dark a {\n  color: inherit; /* 继承父级颜色 */\n}\n\n@layer overrides {\n  .prose a {\n    color: revert-layer;\n  }\n}'
            }
          },
          {
            title: '现代 Reset 策略',
            detail:
              '比较 normalize.css、modern-css-reset、Andy Bell 的「CUBE CSS」reset 在可访问性与可维护性上的差异，明确各自适合的项目规模。\n示范使用 @layer reset 隔离重置层，并记录需要保留的浏览器默认样式（如 :focus 可访问描边）。',
            codeExample: {
              title: '分层 Reset 模板',
              language: 'css',
              content:
                '@layer reset {\n  *, *::before, *::after {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, sans-serif;\n  }\n\n  :focus-visible {\n    outline: 3px solid var(--color-primary);\n    outline-offset: 3px;\n  }\n}'
            }
          }
        ],
        tools: ['MDN Cascade', 'DevTools Computed 面板']
      },
      {
        id: 'l3-governance',
        type: 'activity',
        title: '层叠治理策略',
        duration: '15 分钟',
        description: '把层叠理论转化为可执行的团队治理策略，提升调试效率。',
        focus: '建立可复制的冲突排查流程',
        items: [
          {
            title: '层叠层与命名空间',
            detail:
              '设计 reset → tokens → base → components → utilities → overrides 的层叠层顺序，并将 BEM 命名空间映射到相应层级。\n强调 @layer 的声明顺序决定权重，要求学员在项目模板中固定导入顺序并记录在贡献指南。',
            codeExample: {
              title: '层叠层规范',
              language: 'css',
              content:
                '@layer reset, tokens, base, components, utilities, overrides;\n\n@layer components {\n  .c-card {\n    padding: var(--space-m);\n  }\n}\n\n@layer utilities {\n  .u-text-center {\n    text-align: center;\n  }\n}'
            }
          },
          {
            title: '调试诊断流程',
            detail:
              '总结定位冲突的五步法：定位 DOM→查看 Styles 面板→切换 cascade 层→使用 :hover/:focus 强制状态→对比 Computed 面板数值。\n演示「force state」「scroll into view」「layout shift regions」等工具如何协助排查。'
          },
          {
            title: '!important 替代方案',
            detail:
              '从架构角度拆解为何滥用 !important 会破坏可维护性，提出变量重构、组件属性透传、@layer overrides、数据属性 hooks 等替代策略。\n列出团队审批流程：新增 !important 必须附带场景描述、替代方案评估与回滚计划。',
            codeExample: {
              title: '通过数据属性替代 !important',
              language: 'css',
              content:
                '.modal[data-variant="danger"] .modal__primary-action {\n  background: var(--color-danger-600);\n}\n\n.modal.is-emergency .modal__primary-action {\n  background: var(--color-danger-700);\n  box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-danger-700) 45%, transparent);\n}'
            }
          }
        ],
        tools: ['Chrome DevTools', 'Stylelint Order 插件']
      },
      {
        id: 'l3-project',
        type: 'project',
        title: '项目实战｜层叠冲突实验室',
        duration: '35 分钟',
        description: '构建一组具代表性的冲突场景，输出治理指南。',
        focus: '通过可视化实验理解并解决层叠问题',
        items: [
          {
            title: '场景搭建',
            detail:
              '构建含导航、模态、卡片、表单的页面，并刻意安排行内样式、ID、BEM 类、属性选择器的混合，制造冲突。\n要求每个组件至少包含一个 @layer overrides 与主题切换数据属性，为后续分析提供案例。',
            codeExample: {
              title: '冲突示例 DOM 片段',
              language: 'html',
              content:
                '<div class="layout" data-theme="dark">\n  <aside id="dashboard-nav">...</aside>\n  <main>\n    <article class="card card--featured" style="border-color: #6366f1">\n      <button class="card__cta" data-variant="primary">提交</button>\n    </article>\n  </main>\n</div>'
            }
          },
          {
            title: '冲突记录矩阵',
            detail:
              '在 Notion/Google Sheet 创建“选择器、来源、权重、最终应用、备注”字段，记录每次覆盖的发生原因。\n要求附上 DevTools 截图或代码片段，确保后续复盘可追溯。'
          },
          {
            title: '改进策略总结',
            detail:
              '根据矩阵中的问题归纳命名空间、层叠层、变量抽象、组件 API 控制等改进策略，并写入团队样式指南。\n输出 checklist：新增规则需标注层叠层、引入 overrides 必须评审、需要时为组件暴露自定义属性钩子。'
          }
        ],
        tools: ['Notion 表格', 'Chrome DevTools Recorder'],
        outcome: '产出层叠冲突案例库与治理清单，支撑团队知识库分享。'
      }
    ],
    route: '/lessons/css-cascade-and-inheritance',
    completed: false
  },
  {
    id: 'l4',
    title: 'L4｜浏览器渲染流程',
    description: '理解 DOM、CSSOM、渲染树与合成层，优化样式变更带来的性能影响。',
    duration: '约 1.3 小时',
    module: modules.foundations,
    foundationTopics: ['DOM → CSSOM → Render Tree 流程', '重排 (Reflow) 与重绘 (Repaint)', '合成层与 GPU 合成', 'DevTools 性能面板'],
    project: {
      name: '渲染追踪报告',
      description: '借助 Chrome DevTools 分析页面样式调整的性能表现并提出优化建议。',
      deliverables: [
        '记录改变不同属性触发的渲染阶段',
        '总结避免频繁 reflow 的样式策略',
        '绘制渲染流程示意图'
      ]
    },
    practiceTasks: [
      '解释为何频繁修改 width 性能较差并提供替代方案',
      '使用 DevTools Layers 面板截取层级结构',
      '整理常见 CSS 性能陷阱清单'
    ],
    acceptanceCriteria: [
      '报告中包含至少两种属性修改的性能对比',
      '明确列出引发合成层的属性与代价',
      '提供可执行的样式性能优化建议'
    ],
    resources: [
      { label: 'MDN - Rendering performance', url: 'https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work' },
      { label: 'Chrome DevTools - Rendering performance', url: 'https://developer.chrome.com/docs/devtools/rendering' }
    ],
    teachingSections: [
      {
        id: 'l4-pipeline',
        type: 'theory',
        title: '浏览器渲染流程总览',
        duration: '20 分钟',
        description: '拆解浏览器从解析到绘制的每个阶段，建立性能调优的底层模型。',
        focus: '理解 DOM、CSSOM 与 Render Tree 的协作关系',
        items: [
          {
            title: 'DOM 与 CSSOM 构建',
            detail: '说明解析器如何构建 DOM 与 CSSOM，解释样式计算的触发时机。'
          },
          {
            title: '布局、绘制与合成',
            detail: '阐释 Layout、Paint、Composite 各阶段的职责，并关联浏览器帧生成流程。'
          },
          {
            title: '现代引擎多线程架构',
            detail: '以 Blink 为例介绍主线程、合成线程与栅格化进程，理解 CSS 如何参与其中。'
          }
        ],
        tools: ['Inside look at modern web browser 指南']
      },
      {
        id: 'l4-cost',
        type: 'theory',
        title: '重排、重绘与合成成本',
        duration: '15 分钟',
        description: '理解不同 CSS 属性对渲染 pipeline 的影响，选择更优的样式策略。',
        focus: '掌握属性触发的代价与优化思路',
        items: [
          {
            title: '触发重排的典型属性',
            detail: '列出 width、height、position、font-size 等属性的影响，解释为何会导致 Layout。'
          },
          {
            title: '重绘与合成的差异',
            detail: '比较背景、阴影等仅触发 Paint 的属性与 transform、opacity 等直接进入合成的属性。'
          },
          {
            title: '避免 Layout Thrashing',
            detail: '说明同步测量 API（如 offsetWidth）导致的性能问题，并提供批量读写策略。'
          }
        ],
        tools: ['CSS Triggers', 'Performance Timeline']
      },
      {
        id: 'l4-devtools',
        type: 'activity',
        title: 'DevTools 渲染调试实战',
        duration: '20 分钟',
        description: '掌握 Chrome DevTools 中的性能面板与层叠工具，学会收集量化证据。',
        focus: '用数据验证样式改动的性能影响',
        items: [
          {
            title: 'Performance 面板录制',
            detail: '演示如何录制交互，分析 Summary、Bottom-Up 与 Frame Chart，识别 Layout/Update Layer Tree。'
          },
          {
            title: 'Layers 与 Rendering 设置',
            detail: '展示 Layers 面板查看合成层结构，并使用 Paint Flashing 辅助定位重绘区域。'
          },
          {
            title: '指标与工具链',
            detail: '介绍 Lighthouse、WebPageTest 等指标体系，并说明如何与 CSS 优化关联。'
          }
        ],
        tools: ['Chrome DevTools', 'Lighthouse', 'WebPageTest']
      },
      {
        id: 'l4-project',
        type: 'project',
        title: '项目实战｜渲染追踪报告',
        duration: '35 分钟',
        description: '引导完成一次完整的性能录制、对比与优化建议输出。',
        focus: '以数据驱动样式性能决策',
        items: [
          {
            title: '测试脚本设计',
            detail: '选定页面交互（如展开侧边栏、切换主题），规划对比测试与录制步骤。'
          },
          {
            title: '数据采集与对比',
            detail: '分别修改 layout 属性与 transform 属性，记录两次 Performance 报告差异。'
          },
          {
            title: '优化建议落地',
            detail: '根据数据输出避免频繁重排、利用合成层、延迟渲染等可执行建议。'
          }
        ],
        tools: ['Chrome DevTools', 'Lighthouse 报告', 'Notion 模板'],
        outcome: '形成包含截图、指标与建议的渲染性能报告，为团队评审提供依据。'
      }
    ],
    route: '/lessons/css-rendering-pipeline',
    completed: false
  },
  {
    id: 'l5',
    title: 'L5｜基础选择器与组合器',
    description: '掌握类型、类、ID 以及组合器规则，构建语义化选择器体系。',
    duration: '约 1 小时',
    module: modules.selectors,
    foundationTopics: ['类型、类、ID 选择器', '通配与属性选择器基础', '后代、子代、相邻、兄弟组合器', '语义化命名与 BEM 初识'],
    project: {
      name: '层级菜单样式库',
      description: '为嵌套菜单与面包屑导航编写选择器策略，确保结构清晰可维护。',
      deliverables: [
        '实现多级菜单 hover 与选中状态',
        '使用组合器精准选中特定层级',
        '提供命名约定与注释说明'
      ]
    },
    practiceTasks: [
      '比较 A + B 与 A ~ B 在匹配范围上的区别',
      '尝试使用 :not() 限制选择器命中范围',
      '为现有项目梳理类型与类选择器覆盖面'
    ],
    acceptanceCriteria: [
      '菜单在键盘导航下表现一致',
      '选择器复杂度控制在可维护范围并配有命名规范',
      '交付示例覆盖桌面与移动布局'
    ],
    resources: [
      { label: 'MDN - CSS Selectors', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors' },
      { label: 'BEM 约定', url: 'https://getbem.com/introduction/' }
    ],
    route: '/lessons/css-basic-selectors',
    completed: false
  },
  {
    id: 'l6',
    title: 'L6｜属性选择器与结构伪类',
    description: '灵活运用属性选择器与结构伪类处理表格、列表等复杂结构。',
    duration: '约 1.1 小时',
    module: modules.selectors,
    foundationTopics: ['属性选择器语法与模糊匹配', ':nth-child 与 :nth-of-type 模式', ':is() / :where() 优先级特点', ':not() 组合策略'],
    project: {
      name: '数据表格美化方案',
      description: '使用结构伪类与属性选择器构建无类名表格的高亮与筛选效果。',
      deliverables: [
        '实现奇偶行、首尾列的差异化样式',
        '通过属性选择器高亮状态列',
        '输出伪类组合的可视化说明'
      ]
    },
    practiceTasks: [
      '对比 :is() 与 :where() 的 specificity 影响',
      '编写分页器的 :nth-child() 高亮逻辑',
      '给出避免选择器过度依赖 DOM 结构的建议'
    ],
    acceptanceCriteria: [
      '表格样式兼容暗色模式并具备可访问性对比度',
      '伪类组合在现代浏览器表现一致并提供降级方案',
      '交付文档描述结构伪类的匹配范围'
    ],
    resources: [
      { label: 'MDN - Structural pseudo-classes', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes' },
      { label: 'Web.dev - :is() and :where()', url: 'https://web.dev/articles/css-is-and-where' }
    ],
    route: '/lessons/css-attribute-and-structural-pseudo',
    completed: false
  },
  {
    id: 'l7',
    title: 'L7｜动态伪类与状态管理',
    description: '掌握交互状态伪类，构建具备可访问性的纯 CSS 交互组件。',
    duration: '约 1.1 小时',
    module: modules.selectors,
    foundationTopics: [':hover / :focus / :focus-visible', ':checked 与表单状态', ':focus-within 与交互容器', '无障碍与键盘导航要求'],
    project: {
      name: '纯 CSS 切换开关',
      description: '实现带动画与可访问性的开关组件，支持键盘与屏幕阅读器。',
      deliverables: [
        '构建 toggle 元素并使用 :checked 控制状态',
        '提供 :focus-visible 样式提示',
        '补充 ARIA 标签与键盘说明'
      ]
    },
    practiceTasks: [
      '对比 focus 与 focus-visible 的触发差异',
      '为卡片组件加上 :focus-within 边框提示',
      '测试交互组件在键盘与触屏下的表现'
    ],
    acceptanceCriteria: [
      '开关组件通过键盘 Space/Enter 操控',
      '满足 WCAG 对比度要求并提供 ARIA 属性',
      '交互状态切换拥有平滑过渡且无抖动'
    ],
    resources: [
      { label: 'MDN - Interactive pseudo-classes', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#user_action_pseudo-classes' },
      { label: 'Inclusive Components - Toggle', url: 'https://inclusive-components.design/toggle-button/' }
    ],
    route: '/lessons/css-interactive-pseudo-classes',
    completed: false
  },
  {
    id: 'l8',
    title: 'L8｜Cascade Layers 层叠层',
    description: '理解 @layer 的优先级模型，管理大型样式库的层叠结构。',
    duration: '约 1 小时',
    module: modules.selectors,
    foundationTopics: ['@layer 语法与命名', '默认层次与导入顺序', '层叠层与 specificity 关系', 'reset/base/theme 模式'],
    project: {
      name: '三层主题体系',
      description: '基于 @layer 构建 reset、base、theme 三层样式，确保主题覆盖可控。',
      deliverables: [
        '创建 layer reset/base/theme 并演示覆盖关系',
        '提供 theme 层的暗色/亮色切换方案',
        '编写 README 说明层叠策略'
      ]
    },
    practiceTasks: [
      '展示如何让 reset 层不被主题覆盖',
      '尝试将第三方组件库放入单独 layer 中',
      '总结 @layer 与传统命名空间方案的优劣'
    ],
    acceptanceCriteria: [
      '三层样式在开发工具中可区分来源',
      '主题切换时核心 reset 样式保持稳定',
      '文档包含 layer 引入顺序与冲突排查步骤'
    ],
    resources: [
      { label: 'MDN - @layer', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@layer' },
      { label: 'web.dev - Manage CSS Cascade Layers', url: 'https://web.dev/articles/cascade-layers' }
    ],
    route: '/lessons/css-cascade-layers',
    completed: false
  },
  {
    id: 'l9',
    title: 'L9｜CSS 变量与 @property',
    description: '掌握 CSS 自定义属性与 @property 注册，让主题与动效可配置。',
    duration: '约 1.1 小时',
    module: modules.selectors,
    foundationTopics: ['CSS 自定义属性作用域', 'var() 计算规则与回退值', '@property 注册类型', '与预处理器变量的区别'],
    project: {
      name: '可配置主题控制台',
      description: '实现一个可调节主题色与渐变的控制面板，实时更新页面样式。',
      deliverables: [
        '建立支持 HSL 计算的主题变量体系',
        '使用 @property 注册动画用自定义属性',
        '通过 JavaScript 或纯 CSS 控制变量更新'
      ]
    },
    practiceTasks: [
      '解释 CSS 变量可参与计算而 Sass 变量不行的原因',
      '配置 prefers-color-scheme 与 CSS 变量联动',
      '封装变量命名规范与使用指南'
    ],
    acceptanceCriteria: [
      '主题控制台支持实时更新并平滑过渡',
      '变量命名与作用域清晰，避免无意义覆盖',
      '文档说明 @property 的兼容策略与降级方案'
    ],
    resources: [
      { label: 'MDN - Using CSS custom properties', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties' },
      { label: 'web.dev - Houdini and @property', url: 'https://web.dev/articles/at-property' }
    ],
    route: '/lessons/css-custom-properties',
    completed: false
  },
  {
    id: 'l10',
    title: 'L10｜盒模型与尺寸计算',
    description: '掌握盒模型、边距折叠与滚动条占位，计算准确的布局尺寸。',
    duration: '约 1 小时',
    module: modules.layout,
    foundationTopics: ['content-box vs border-box', 'margin 折叠规则', 'overflow 与滚动条占位', '盒子尺寸计算公式'],
    project: {
      name: '盒模型可视化演练',
      description: '通过嵌套盒子展示 margin、padding、border 对布局的影响。',
      deliverables: [
        '绘制三个嵌套盒演示 margin 折叠',
        '提供切换 box-sizing 的按钮与比较表',
        '记录滚动条出现时的布局变化'
      ]
    },
    practiceTasks: [
      '分析为什么 border-box 更易维护组件尺寸',
      '整理常见 margin 折叠场景与解决方案',
      '使用 DevTools Inspect 验证盒模型尺寸'
    ],
    acceptanceCriteria: [
      '示例页面中 margin 折叠现象可视化呈现',
      'box-sizing 切换时组件宽高保持预期',
      '附带尺寸计算表格与说明文档'
    ],
    resources: [
      { label: 'MDN - Box model', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model' },
      { label: 'web.dev - Box-sizing', url: 'https://web.dev/articles/box-sizing' }
    ],
    route: '/lessons/css-box-model',
    completed: false
  },
  {
    id: 'l11',
    title: 'L11｜Display 与 Formatting Context',
    description: '理解显示类型与 BFC/IFC 等格式化上下文，掌握清除浮动与文档流控制。',
    duration: '约 1.2 小时',
    module: modules.layout,
    foundationTopics: ['display 模型与流体布局', 'Block Formatting Context 触发条件', '浮动与清除策略', 'overflow 与 flow-root'],
    project: {
      name: 'BFC 布局实验',
      description: '构建多种浮动与清除案例，展示 BFC 在布局稳定性上的作用。',
      deliverables: [
        '实现浮动布局与 BFC 清除示例',
        '比较 overflow 与 clearfix 方案',
        '提供 flow-root 带来的新布局效果'
      ]
    },
    practiceTasks: [
      '列举可触发 BFC 的属性并验证',
      '说明浮动布局的历史背景与现代替代方案',
      '将传统布局迁移至 flex/grid 并比较差异'
    ],
    acceptanceCriteria: [
      '案例覆盖至少三种 BFC 触发方式',
      '浮动示例在不同宽度下保持稳定',
      '附带迁移建议与注意事项'
    ],
    resources: [
      { label: 'MDN - Visual formatting model', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model' },
      { label: 'CSS-Tricks - BFC', url: 'https://css-tricks.com/block-formatting-contexts/' }
    ],
    route: '/lessons/css-formatting-contexts',
    completed: false
  },
  {
    id: 'l12',
    title: 'L12｜定位机制',
    description: '熟悉静态、相对、绝对、固定与粘性定位，理解包含块与堆叠上下文。',
    duration: '约 1 小时',
    module: modules.layout,
    foundationTopics: ['position: static/relative/absolute/sticky', '包含块计算规则', 'z-index 与定位上下文', '粘性定位应用场景'],
    project: {
      name: '粘性导航与浮动卡片',
      description: '实现带粘性导航栏和悬浮提示卡片的页面，展示定位上下文使用。',
      deliverables: [
        '实现顶部粘性导航及高亮状态',
        '在滚动区域内创建 absolute 浮层并保持基准正确',
        '总结定位元素的调试技巧'
      ]
    },
    practiceTasks: [
      '说明 absolute 元素的基准参考点',
      '演示 sticky 在不同容器下的表现',
      '通过 DevTools 查看定位元素的包含块'
    ],
    acceptanceCriteria: [
      '粘性导航在各主流浏览器保持平滑',
      'absolute 元素随父容器滚动且不越界',
      '附带定位上下文示意图与解释'
    ],
    resources: [
      { label: 'MDN - Positioning', url: 'https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning' },
      { label: 'web.dev - Sticky positioning', url: 'https://web.dev/articles/css-position-sticky' }
    ],
    route: '/lessons/css-positioning',
    completed: false
  },
  {
    id: 'l13',
    title: 'L13｜Flexbox 布局',
    description: '掌握弹性布局主轴、交叉轴与对齐规则，构建响应式组件。',
    duration: '约 1.2 小时',
    module: modules.layout,
    foundationTopics: ['flex-direction 与主轴设置', 'flex-basis / flex-grow / flex-shrink', '对齐与分布属性', 'Flexbox 调试技巧'],
    project: {
      name: '响应式导航栏',
      description: '使用 Flexbox 构建可自适应的导航栏与按钮组，支持伸缩与排列变化。',
      deliverables: [
        '实现桌面与移动端不同布局',
        '提供溢出处理与图标对齐方案',
        '撰写 flex 速查表'
      ]
    },
    practiceTasks: [
      '解释 flex: 1 等价于哪些属性组合',
      '使用 gap 与 margin 构建灵活间距',
      '比较 Flexbox 与 Grid 在组件布局上的差异'
    ],
    acceptanceCriteria: [
      '导航栏在 320px-1440px 范围内表现稳定',
      '伸缩规则覆盖主轴与交叉轴对齐',
      '附带调试截图与关键属性说明'
    ],
    resources: [
      { label: 'MDN - Flexbox', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout' },
      { label: 'Flexbox Froggy', url: 'https://flexboxfroggy.com/' }
    ],
    route: '/lessons/css-flexbox',
    completed: false
  },
  {
    id: 'l14',
    title: 'L14｜Grid 布局',
    description: '学习 Grid 行列定义、区域命名与自动布局，构建多维栅格。',
    duration: '约 1.3 小时',
    module: modules.layout,
    foundationTopics: ['grid-template-rows/columns', 'fr 单位与 minmax', 'auto-fit 与 auto-fill', 'grid area 命名与布局'],
    project: {
      name: '响应式图像画廊',
      description: '通过 Grid 实现自适应图片墙，包含不同尺寸区块与说明文案。',
      deliverables: [
        '配置 repeat 与 minmax 实现自适应列数',
        '使用 grid-area 定义重点区域',
        '支持窄屏堆叠与宽屏瀑布布局'
      ]
    },
    practiceTasks: [
      '比较 auto-fit 与 auto-fill 的布局差异',
      '使用 grid-template-areas 描述页面结构',
      '结合 Subgrid 探索嵌套布局可行性'
    ],
    acceptanceCriteria: [
      '画廊在多种屏幕宽度下保持均衡间距',
      '提供图片加载占位与内容对齐策略',
      '文档记录列模板与断点设计理由'
    ],
    resources: [
      { label: 'MDN - Grid layout', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout' },
      { label: 'Grid Garden 游戏', url: 'https://cssgridgarden.com/' }
    ],
    route: '/lessons/css-grid',
    completed: false
  },
  {
    id: 'l15',
    title: 'L15｜多列与流式布局',
    description: '探索 multi-column、writing-mode 与 flow-root，打造复杂排版。',
    duration: '约 1 小时',
    module: modules.layout,
    foundationTopics: ['multi-column 属性', 'column-gap 与 column-span', 'writing-mode 与竖排布局', 'flow-root 创建独立格式化上下文'],
    project: {
      name: '杂志式排版',
      description: '设计具备多列排版与多语言支持的文章页面，展示流式布局。',
      deliverables: [
        '实现多列正文与跨列标题',
        '应用 writing-mode 支持纵向排版',
        '使用 flow-root 解决包裹问题'
      ]
    },
    practiceTasks: [
      '解释 flow-root 的作用与使用场景',
      '测试多列布局在窄屏下的降级方案',
      '组合 logical properties 构建国际化样式'
    ],
    acceptanceCriteria: [
      '杂志页面在中英文下排版合理',
      '多列布局具备明确的可阅读断点',
      '附带国际化样式注意事项'
    ],
    resources: [
      { label: 'MDN - Multi-column layout', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_multicol_layout' },
      { label: 'MDN - Writing modes', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/writing-mode' }
    ],
    route: '/lessons/css-multi-column-flow',
    completed: false
  },
  {
    id: 'l16',
    title: 'L16｜背景与边框',
    description: '理解背景层绘制顺序、圆角与裁剪，打造多层次卡片效果。',
    duration: '约 1 小时',
    module: modules.visuals,
    foundationTopics: ['background-position/background-size', '多重背景叠加', 'border-radius 与圆角细节', 'clip-path 基础'],
    project: {
      name: '多背景主题卡片',
      description: '为产品卡片设计多层背景、渐变边框与裁剪效果，突出视觉层级。',
      deliverables: [
        '实现至少三层背景叠加并支持暗色模式',
        '使用 clip-path 构建装饰元素',
        '提供边框 radius 适配移动端的策略'
      ]
    },
    practiceTasks: [
      '解释 background-origin 与 background-clip 的区别',
      '设计不同圆角组合的组件库规范',
      '比较图片背景与渐变背景的性能差异'
    ],
    acceptanceCriteria: [
      '卡片组件在不同尺寸下保持圆角与背景一致',
      'clip-path 的 SVG 路径提供编辑说明',
      '文档中包含背景层次与命名规范'
    ],
    resources: [
      { label: 'MDN - Backgrounds and borders', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_backgrounds_and_borders' },
      { label: 'CSS-Tricks - Multiple backgrounds', url: 'https://css-tricks.com/multiple-backgrounds/' }
    ],
    route: '/lessons/css-backgrounds-and-borders',
    completed: false
  },
  {
    id: 'l17',
    title: 'L17｜阴影与滤镜',
    description: '掌握阴影与滤镜的渲染机制，打造质感与景深。',
    duration: '约 1 小时',
    module: modules.visuals,
    foundationTopics: ['box-shadow 多层阴影', 'filter 与 backdrop-filter', 'drop-shadow 与 SVG 滤镜', '性能注意事项'],
    project: {
      name: '毛玻璃导航栏',
      description: '实现带模糊玻璃效果的导航栏，兼顾清晰度与性能。',
      deliverables: [
        '使用 backdrop-filter 构建毛玻璃背景',
        '设计多层阴影突出悬浮感',
        '提供降级方案与性能对比'
      ]
    },
    practiceTasks: [
      '对比 box-shadow 与 filter: drop-shadow() 的适用场景',
      '测试 backdrop-filter 在不同浏览器的兼容性',
      '记录 GPU 加速对滤镜效果的影响'
    ],
    acceptanceCriteria: [
      '导航栏在滚动与 hover 状态下表现顺滑',
      '提供无 backdrop-filter 时的 fallback 样式',
      '文档包含性能基准与优化建议'
    ],
    resources: [
      { label: 'MDN - CSS Filters', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/filter' },
      { label: 'web.dev - Backdrop filter', url: 'https://web.dev/articles/backdrop-filter' }
    ],
    route: '/lessons/css-shadows-and-filters',
    completed: false
  },
  {
    id: 'l18',
    title: 'L18｜渐变与混合模式',
    description: '掌握线性、径向渐变与混合模式，实现高阶背景与叠加效果。',
    duration: '约 1.1 小时',
    module: modules.visuals,
    foundationTopics: ['linear-gradient / radial-gradient', 'conic-gradient 基础', 'mix-blend-mode 与 background-blend-mode', '渐变可维护性策略'],
    project: {
      name: '炫彩按钮动效',
      description: '设计带渐变背景与混合模式的按钮 hover 动效，突出视觉反馈。',
      deliverables: [
        '使用多重渐变构建按钮背景',
        '结合 mix-blend-mode 创建叠加效果',
        '提供动效状态的色彩对比评估'
      ]
    },
    practiceTasks: [
      '说明 multiply 与 overlay 混合模式的区别',
      '设计渐变命名与复用策略',
      '探索 conic-gradient 在仪表盘中的应用'
    ],
    acceptanceCriteria: [
      '按钮动效在高对比度模式下仍可用',
      '渐变配置可通过 CSS 变量调节',
      '输出混合模式兼容性与性能注意事项'
    ],
    resources: [
      { label: 'MDN - Gradients', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/gradient' },
      { label: 'web.dev - Blend modes', url: 'https://web.dev/articles/blend-modes' }
    ],
    route: '/lessons/css-gradients-and-blend',
    completed: false
  },
  {
    id: 'l19',
    title: 'L19｜层叠上下文与 z-index',
    description: '掌握 stacking context 形成规则，管理复杂界面的视觉层级。',
    duration: '约 1 小时',
    module: modules.visuals,
    foundationTopics: ['z-index 与定位关系', '创建新 stacking context 的属性', 'transform/opacity/filters 影响', '调试层级问题的方法'],
    project: {
      name: '浮动卡片矩阵',
      description: '构建多层卡片与浮层，展示不同 stacking context 对显示顺序的影响。',
      deliverables: [
        '实现包含 tooltip、modal 的多层页面',
        '使用 DevTools Layers 检查上下文',
        '总结层级管理规范'
      ]
    },
    practiceTasks: [
      '列出会创建新 stacking context 的 6 个属性',
      '演示 transform 导致层级变化的案例',
      '制定团队统一的 z-index token 体系'
    ],
    acceptanceCriteria: [
      '所有浮层层级按设计预期显示',
      '提供层级冲突的排查步骤',
      '文档中附带 z-index 命名规范与 token 表'
    ],
    resources: [
      { label: 'MDN - Understanding z-index', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_positioned_layout/Understanding_z-index' },
      { label: 'CSS-Tricks - Stacking contexts', url: 'https://css-tricks.com/stacking-contexts/' }
    ],
    route: '/lessons/css-stacking-context',
    completed: false
  },
  {
    id: 'l20',
    title: 'L20｜过渡与动画基础',
    description: '掌握 transition 与 animation 的语法、时序函数与动效节奏。',
    duration: '约 1.1 小时',
    module: modules.responsive,
    foundationTopics: ['transition 属性组合', '@keyframes 关键帧语法', '缓动函数与自定义 cubic-bezier', '动画可访问性原则'],
    project: {
      name: '按钮渐变动效库',
      description: '为按钮组件设计 hover、active、loading 三类动效，兼顾性能与体验。',
      deliverables: [
        '编写可复用的 transition token',
        '使用 @keyframes 实现循环 loading 动画',
        '提供动效设计说明与可访问性策略'
      ]
    },
    practiceTasks: [
      '分析 transition: all 带来的性能风险',
      '使用 cubic-bezier.com 调整缓动曲线',
      '为 prefers-reduced-motion 提供降级方案'
    ],
    acceptanceCriteria: [
      '按钮动效在不同状态下保持一致的节奏',
      '动画可通过 CSS 变量或类名快速启停',
      '文档记录动效时长与可访问性考虑'
    ],
    resources: [
      { label: 'MDN - Using CSS transitions', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions' },
      { label: 'MDN - Using CSS animations', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations' }
    ],
    route: '/lessons/css-transitions-animations',
    completed: false
  },
  {
    id: 'l21',
    title: 'L21｜动画性能优化',
    description: '理解 GPU 合成层原理，优化动画执行效率与流畅度。',
    duration: '约 1 小时',
    module: modules.responsive,
    foundationTopics: ['transform 与 opacity 动画', 'will-change 的使用时机', '合成层与硬件加速', '动画调试与性能指标'],
    project: {
      name: '动效性能体检',
      description: '优化上一课的按钮动效，避免不必要的重排与抖动。',
      deliverables: [
        '使用 transform 替代 top/left 等布局属性',
        '通过 DevTools Performance 分析帧率',
        '编写动画性能检查清单'
      ]
    },
    practiceTasks: [
      '解释 translateZ(0) 触发 GPU 的原理',
      '记录 will-change 的风险与释放时机',
      '比较 requestAnimationFrame 与 CSS 动画的差异'
    ],
    acceptanceCriteria: [
      '动效在 60fps 基准下保持稳定',
      '性能报告包含帧图与合成层截图',
      '提供清晰的优化前后对比数据'
    ],
    resources: [
      { label: 'web.dev - CSS animation performance', url: 'https://web.dev/articles/animations-guide' },
      { label: 'MDN - will-change', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/will-change' }
    ],
    route: '/lessons/css-animation-performance',
    completed: false
  },
  {
    id: 'l22',
    title: 'L22｜媒体查询实战',
    description: '掌握媒体查询语法与 Level 4 特性，构建响应式布局。',
    duration: '约 1 小时',
    module: modules.responsive,
    foundationTopics: ['min-width 与 max-width 模式', 'prefers-color-scheme / prefers-reduced-motion', 'pointer 与 hover 媒体特性', '流式断点策略'],
    project: {
      name: '响应式两栏布局',
      description: '构建跨设备的内容布局，结合系统偏好设置提供个性化体验。',
      deliverables: [
        '实现桌面两栏、移动单列的自适应布局',
        '根据 prefers-reduced-motion 关闭复杂动效',
        '提供明暗模式主题切换'
      ]
    },
    practiceTasks: [
      '说明 prefers-reduced-motion 的意义并给出示例',
      '设计适用于大屏与小屏的断点策略',
      '利用 hover/pointer 查询优化交互提示'
    ],
    acceptanceCriteria: [
      '布局在 320px 到 1440px 范围内无溢出',
      '媒体查询覆盖系统偏好与交互方式',
      '提供响应式断点设计说明'
    ],
    resources: [
      { label: 'MDN - Media queries', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries' },
      { label: 'web.dev - Modern responsive design', url: 'https://web.dev/articles/responsive-web-design-basics' }
    ],
    route: '/lessons/css-media-queries',
    completed: false
  },
  {
    id: 'l23',
    title: 'L23｜容器查询',
    description: '理解 @container 语法与局部响应式理念，实现组件级适配。',
    duration: '约 1.2 小时',
    module: modules.responsive,
    foundationTopics: ['container-type 与 container-name', '@container 查询语法', '尺寸与样式容器', '组件级响应式策略'],
    project: {
      name: '响应式卡片系统',
      description: '构建可在不同父容器下独立响应的卡片组件，实现真正的模块化布局。',
      deliverables: [
        '定义 container-type: inline-size 的容器',
        '根据容器宽度调整卡片布局与排版',
        '提供容器查询与媒体查询的协同方案'
      ]
    },
    practiceTasks: [
      '解释 @media 与 @container 的根本区别',
      '测试容器查询的浏览器兼容与降级策略',
      '将现有组件改造为容器驱动的响应式'
    ],
    acceptanceCriteria: [
      '卡片组件在不同网格下自动适配',
      '容器查询提供 graceful fallback 方案',
      '文档包含容器命名与组织建议'
    ],
    resources: [
      { label: 'MDN - CSS Container Queries', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries' },
      { label: 'web.dev - Container queries', url: 'https://web.dev/articles/new-responsive' }
    ],
    route: '/lessons/css-container-queries',
    completed: false
  },
  {
    id: 'l24',
    title: 'L24｜支持查询与渐进增强',
    description: '学习 @supports 与特性检测策略，构建可靠的渐进增强体验。',
    duration: '约 1 小时',
    module: modules.responsive,
    foundationTopics: ['@supports 语法与逻辑操作符', '@supports selector()', 'CSS 特性检测与降级', '渐进增强 vs 优雅降级'],
    project: {
      name: '兼容性控制面板',
      description: '为页面编写兼容旧浏览器的样式方案，提供特性开关与降级提示。',
      deliverables: [
        '使用 @supports 包裹实验特性样式',
        '提供不支持时的替代样式或提示',
        '记录兼容性矩阵与测试结果'
      ]
    },
    practiceTasks: [
      '编写检测浏览器是否支持 grid 的方案',
      '尝试使用 @supports selector() 检查伪类',
      '总结渐进增强的设计原则'
    ],
    acceptanceCriteria: [
      '关键页面在不支持特性时仍可访问',
      '兼容性文档列出测试设备与结果',
      '提供自动化脚本或工具辅助检测'
    ],
    resources: [
      { label: 'MDN - @supports', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/@supports' },
      { label: 'web.dev - Progressive enhancement', url: 'https://web.dev/articles/progressive-web-apps' }
    ],
    route: '/lessons/css-supports-and-enhancement',
    completed: false
  },
  {
    id: 'l25',
    title: 'L25｜纯 CSS 交互技巧',
    description: '利用 :checked、:focus-within 等伪类实现无需 JavaScript 的交互组件。',
    duration: '约 1.2 小时',
    module: modules.responsive,
    foundationTopics: [':checked 驱动状态', ':focus-within 与父级响应', 'checkbox/radio hack', 'CSS-only 动效与限制'],
    project: {
      name: '纯 CSS 折叠与下拉',
      description: '实现折叠面板、手风琴与下拉菜单等交互组件，仅依赖 CSS 伪类控制。',
      deliverables: [
        '使用 :checked 切换折叠面板',
        '利用 :focus-within 提供键盘焦点提示',
        '记录纯 CSS 实现的局限与注意事项'
      ]
    },
    practiceTasks: [
      '解释 checkbox hack 的原理与风险',
      '在移动端测试纯 CSS 菜单的可用性',
      '为组件补充 aria-controls/expanded 属性'
    ],
    acceptanceCriteria: [
      '交互组件在无 JS 环境下可用',
      '键盘操作体验与鼠标一致',
      '提供替代方案应对复杂逻辑'
    ],
    resources: [
      { label: 'MDN - :checked', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/:checked' },
      { label: 'Modern CSS Solutions', url: 'https://moderncss.dev/' }
    ],
    route: '/lessons/css-pure-interactions',
    completed: false
  },
  {
    id: 'l26',
    title: 'L26｜Typography 字体与排版',
    description: '理解字体加载、基线与排版度量，打造高可读性文本系统。',
    duration: '约 1.2 小时',
    module: modules.frontier,
    foundationTopics: ['font-family 与字体回退', 'line-height 与基线对齐', 'font-variant 与 OpenType 特性', '变量字体与性能'],
    project: {
      name: '博客排版系统',
      description: '设计一套文章页面排版规则，兼顾中英文混排与代码高亮。',
      deliverables: [
        '配置全局字体栈与回退策略',
        '设计标题、正文、引用等排版等级',
        '优化首屏字体加载与 FOUT/FOIT'
      ]
    },
    practiceTasks: [
      '解释 line-height 与字体度量之间的关系',
      '引入变量字体并测试自适应权重',
      '编写字体加载状态的 CSS 动画提示'
    ],
    acceptanceCriteria: [
      '排版系统在桌面与移动端保持舒适阅读',
      '字体加载策略避免闪烁并可渐进增强',
      '附带排版规范文档与示例'
    ],
    resources: [
      { label: 'MDN - Font families', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/font-family' },
      { label: 'web.dev - Variable fonts', url: 'https://web.dev/articles/variable-fonts' }
    ],
    route: '/lessons/css-typography',
    completed: false
  },
  {
    id: 'l27',
    title: 'L27｜尺寸函数与新单位',
    description: '掌握 clamp()/min()/max() 与动态视口单位，打造流式尺寸系统。',
    duration: '约 1 小时',
    module: modules.frontier,
    foundationTopics: ['clamp/min/max 函数', 'vh/vw 与动态视口单位 (lvh/svh/dvh)', 'vmin/vmax 使用场景', '流式排版策略'],
    project: {
      name: '流式字体系统',
      description: '构建基于 clamp() 的响应式字体与空间系统，适配多终端。',
      deliverables: [
        '使用 clamp() 定义标题与正文字号曲线',
        '结合视口单位与 rem 实现弹性间距',
        '提供断点对比与可视化示例'
      ]
    },
    practiceTasks: [
      '阐述 clamp() 三个参数的含义',
      '实验新的动态视口单位解决移动浏览器跳动',
      '为设计团队提供尺寸 token 表'
    ],
    acceptanceCriteria: [
      '字体系统在不同设备上保持连贯',
      '尺寸函数配合 CSS 变量易于调节',
      '附带示例说明旧浏览器降级策略'
    ],
    resources: [
      { label: 'MDN - CSS Functions clamp()', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/clamp' },
      { label: 'web.dev - Fluid typography', url: 'https://web.dev/articles/fluid-typography' }
    ],
    route: '/lessons/css-size-functions',
    completed: false
  },
  {
    id: 'l28',
    title: 'L28｜逻辑属性与国际化布局',
    description: '掌握逻辑属性、书写方向与国际化布局，支持 RTL/LTR 切换。',
    duration: '约 1 小时',
    module: modules.frontier,
    foundationTopics: ['margin/padding-inline & block', 'writing-mode 与 direction', 'RTL/LTR 布局差异', '国际化排版策略'],
    project: {
      name: '多语言支持页面',
      description: '为现有页面接入逻辑属性，确保在阿拉伯语等 RTL 语言下布局正确。',
      deliverables: [
        '使用 logical properties 替换物理方向属性',
        '实现语言切换按钮并测试布局',
        '记录国际化样式规范'
      ]
    },
    practiceTasks: [
      '解释 margin-left 与 margin-inline-start 的区别',
      '测试 writing-mode: vertical-rl 下的排版',
      '总结多语言图标与文本对齐注意事项'
    ],
    acceptanceCriteria: [
      '页面在 RTL 模式下无需额外 CSS 即可阅读',
      '逻辑属性使用配合自动化测试验证',
      '提供国际化布局最佳实践清单'
    ],
    resources: [
      { label: 'MDN - Logical properties', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_logical_properties_and_values' },
      { label: 'W3C - Internationalization techniques', url: 'https://www.w3.org/International/techniques/authoring-html-and-css' }
    ],
    route: '/lessons/css-logical-properties',
    completed: false
  },
  {
    id: 'l29',
    title: 'L29｜CSS Houdini 与 Typed OM',
    description: '了解 CSS Houdini API 与 Typed OM，探索可编程样式扩展能力。',
    duration: '约 1.1 小时',
    module: modules.frontier,
    foundationTopics: ['CSS Paint API 基础', 'registerProperty 与自定义属性动画', 'Typed OM 数值类型', 'Houdini 性能优势'],
    project: {
      name: '渐变背景绘制器',
      description: '通过 Paint API 自定义渐变背景，实现可调节的品牌纹理效果。',
      deliverables: [
        '注册自定义属性控制渐变参数',
        '使用 Paint Worklet 绘制背景并注入页面',
        '提供兼容性降级与回退样式'
      ]
    },
    practiceTasks: [
      '解释 Houdini 为什么能提升性能',
      '尝试 Typed OM 操作长度与颜色值',
      '记录 Worklet 的注册与调试流程'
    ],
    acceptanceCriteria: [
      '渐变绘制器可通过 CSS 变量调整主题',
      '提供无 Houdini 浏览器的备用样式',
      '附带代码注释与性能观察'
    ],
    resources: [
      { label: 'MDN - CSS Painting API', url: 'https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API' },
      { label: 'web.dev - Houdini', url: 'https://web.dev/articles/houdini' }
    ],
    route: '/lessons/css-houdini-typed-om',
    completed: false
  },
  {
    id: 'l30',
    title: 'L30｜规范阅读与未来趋势',
    description: '学习阅读规范草案的方法，关注 CSS 新提案与趋势，形成终身学习能力。',
    duration: '约 1 小时',
    module: modules.frontier,
    foundationTopics: ['Selectors Level 5 概览', 'CSS Nesting 与 Scope', 'Color Level 5 新特性', '规范阅读技巧与提案追踪'],
    project: {
      name: 'CSS 前沿观察报告',
      description: '查阅 CSS Nesting Module 草案，整理未来特性清单并输出学习计划。',
      deliverables: [
        '总结 Nesting 草案核心语法与注意事项',
        '列举至少两个正在提案的新特性',
        '制定跟进规范更新的流程'
      ]
    },
    practiceTasks: [
      '编写阅读规范的步骤与工具清单',
      '关注 CSSWG GitHub Issues 并记录讨论要点',
      '订阅变更日志并在团队分享前沿趋势'
    ],
    acceptanceCriteria: [
      '报告包含规范原文引用与链接',
      '总结不少于 2 页（或 800 字）并提出行动计划',
      '提供持续跟踪 CSS 新特性的渠道列表'
    ],
    resources: [
      { label: 'W3C - CSS Nesting Module Draft', url: 'https://www.w3.org/TR/css-nesting-1/' },
      { label: 'CSSWG GitHub', url: 'https://github.com/w3c/csswg-drafts' }
    ],
    route: '/lessons/css-spec-reading',
    completed: false
  }
]
