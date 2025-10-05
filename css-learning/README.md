# 现代 CSS 学习项目

> 基于《现代 CSS 规范系统学习 · 教学计划表》构建的互动式课程应用，覆盖 30 个课时与 6 个模块，结合规范阅读、项目实战与 CSS Playground 实验室，帮助你从基础语法到前沿特性系统进阶。

## 🚀 快速开始

```bash
pnpm install
pnpm dev
```

更多命令：

```bash
# 生产构建
pnpm build

# 运行单元测试
pnpm test

# 仅类型检查
pnpm typecheck

# 代码格式化
pnpm format
```

运行 `pnpm dev` 后可访问交互式网页：

- 首页：展示 30 课时学习卡片、模块亮点、进度仪表盘与学习资源
- 课时详情：每课包含知识点、项目演练、实践任务、验收标准与进阶资料
- CSS Playground：左侧实时编辑 HTML/CSS，右侧沙箱预览，便于练习布局、色彩、动效

## 🧭 学习路径亮点

- **规范驱动**：紧贴 W3C 标准与 MDN 文档，培养阅读原始规范的能力
- **项目导向**：每课配套项目演练与交付物，强调真实场景落地
- **工程化视角**：强调命名体系、层叠层、性能优化与渐进增强策略
- **互动练习**：CSS Playground 支持变量、容器查询等现代特性即时验证

## 📚 模块与课时概览

### 模块一｜CSS 原理与规范体系（L1-L4）

| 课时 | 主题 | 核心知识 | 项目演练 |
|------|------|----------|----------|
| L1 | CSS 的历史与规范体系 | CSSWG、WHATWG、CSS Levels、CSSOM | 规范寻踪笔记与 Flexbox 草案阅读 |
| L2 | CSS 语法与值体系 | 规则集、单位、颜色函数、语法树 | 语法规范样式表与设计 Token |
| L3 | 层叠与继承机制 | specificity、`!important`、`inherit`/`revert` | 层叠冲突可视化实验室 |
| L4 | 浏览器渲染流程 | DOM → CSSOM → Render Tree、重排重绘、合成层 | Chrome DevTools 渲染追踪报告 |

### 模块二｜选择器与变量机制（L5-L9）

| 课时 | 主题 | 核心知识 | 项目演练 |
|------|------|----------|----------|
| L5 | 基础选择器与组合器 | 类型/类/ID 选择器、组合器、语义命名 | 层级菜单样式库 |
| L6 | 属性选择器与结构伪类 | `[attr]`、`:nth-*`、`:is()`、`:where()` | 数据表格美化方案 |
| L7 | 动态伪类与状态 | `:hover`、`:focus-visible`、`:checked` | 纯 CSS 切换开关 |
| L8 | Cascade Layers 层叠层 | `@layer`、层叠顺序、命名层 | Reset/Base/Theme 三层体系 |
| L9 | CSS 变量与 `@property` | 自定义属性、作用域、类型注册 | 可配置主题控制台 |

### 模块三｜盒模型与布局体系（L10-L15）

| 课时 | 主题 | 核心知识 | 项目演练 |
|------|------|----------|----------|
| L10 | 盒模型与尺寸计算 | content-box、border-box、margin 折叠 | 盒模型可视化演练 |
| L11 | Display 与 Formatting Context | BFC/IFC、浮动、`flow-root` | BFC 布局实验 |
| L12 | 定位机制 | 包含块、粘性定位、z-index | 粘性导航与浮动卡片 |
| L13 | Flexbox 布局 | 主轴/交叉轴、伸缩因子、对齐策略 | 响应式导航栏 |
| L14 | Grid 布局 | 行列定义、`fr`、`auto-fit`、区域命名 | 响应式图像画廊 |
| L15 | 多列与流式布局 | multi-column、`writing-mode`、`flow-root` | 杂志式排版页面 |

### 模块四｜视觉与绘制层（L16-L19）

| 课时 | 主题 | 核心知识 | 项目演练 |
|------|------|----------|----------|
| L16 | 背景与边框 | 多背景、`border-radius`、`clip-path` | 多背景主题卡片 |
| L17 | 阴影与滤镜 | `box-shadow`、`filter`、`backdrop-filter` | 毛玻璃导航栏 |
| L18 | 渐变与混合模式 | `linear-gradient`、`mix-blend-mode` | 炫彩按钮动效 |
| L19 | 层叠上下文与 z-index | stacking context、合成层调试 | 浮动卡片矩阵 |

### 模块五｜交互、动画与响应式（L20-L25）

| 课时 | 主题 | 核心知识 | 项目演练 |
|------|------|----------|----------|
| L20 | 过渡与动画基础 | `transition`、`@keyframes`、缓动函数 | 按钮渐变动效库 |
| L21 | 动画性能优化 | `transform`、`opacity`、`will-change` | 动效性能体检 |
| L22 | 媒体查询实战 | Media Queries Level 4、系统偏好 | 响应式两栏布局 |
| L23 | 容器查询 | `container-type/name`、局部响应式 | 响应式卡片系统 |
| L24 | 支持查询与渐进增强 | `@supports`、特性检测、降级策略 | 兼容性控制面板 |
| L25 | 纯 CSS 交互技巧 | `:checked`、`:focus-within`、checkbox hack | 纯 CSS 折叠与下拉 |

### 模块六｜现代特性与规范前沿（L26-L30）

| 课时 | 主题 | 核心知识 | 项目演练 |
|------|------|----------|----------|
| L26 | Typography 字体与排版 | 字体栈、`line-height`、变量字体 | 博客排版系统 |
| L27 | 尺寸函数与新单位 | `clamp()`、动态视口单位 | 流式字体系统 |
| L28 | 逻辑属性与国际化布局 | 逻辑属性、RTL/LTR、书写方向 | 多语言支持页面 |
| L29 | CSS Houdini 与 Typed OM | Paint API、`registerProperty`、Typed OM | 渐变背景绘制器 |
| L30 | 规范阅读与未来趋势 | Selectors 5、CSS Nesting、Scope | CSS 前沿观察报告 |

## 🧪 CSS Playground 玩法

- 左侧提供 HTML/CSS 双编辑器，支持 `:root` 变量、`@layer`、容器查询等现代语法
- 右侧 `iframe` 沙箱实时渲染，隔离环境便于调试视觉效果
- 提供一键重置示例、渐变按钮、流式排版等初始代码
- 实战提示引导你尝试变量体系、尺寸函数与特性检测

## 🗓 建议学习节奏（6 周）

| 周次 | 推荐课时 | 重点收获 |
|------|----------|-----------|
| 第 1 周 | L1-L5 | 搭建规范认知 + 选择器基础 |
| 第 2 周 | L6-L10 | 层叠管理 + 盒模型与尺寸体系 |
| 第 3 周 | L11-L15 | 布局核心：Flex/Grid/定位/流式排版 |
| 第 4 周 | L16-L20 | 视觉层与动效基础 |
| 第 5 周 | L21-L25 | 性能优化、响应式与纯 CSS 交互 |
| 第 6 周 | L26-L30 | 字体排版、国际化、Houdini 与规范追踪 |

阶段评估建议：

| 模块 | 阶段成果 | 评估方式 |
|------|------------|-----------|
| 模块 1–2 | 理解规范语法与层叠 | 小测 + 选择器实操 |
| 模块 3 | 独立搭建复杂布局 | Flex/Grid 项目验收 |
| 模块 4 | 控制视觉层级与特效 | 图层实验报告 |
| 模块 5 | 动画与响应式体验 | 交互动效作品集 |
| 模块 6 | 跟进新特性并形成方法论 | 规范阅读报告 + 分享 |

## 📚 推荐资源

- **官方标准**：[W3C CSS Working Group Drafts](https://www.w3.org/TR/css/)
- **教程与手册**：
  - [MDN CSS Docs](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
  - [web.dev/learn/css](https://web.dev/learn/css/)
  - [CSS-Tricks Guide](https://css-tricks.com/)
- **视频课程**：
  - Kevin Powell: [Modern CSS](https://www.youtube.com/kepowob)
  - Fireship: [CSS in 100 Seconds](https://www.youtube.com/c/Fireship)
- **进阶阅读**：
  - 《CSS Secrets》— Lea Verou
  - 《CSS: The Definitive Guide》— Eric A. Meyer

## 🤝 贡献指南

1. Fork 项目并创建特性分支 `git checkout -b feat/amazing-css-lesson`
2. 完成更改后执行 `pnpm lint && pnpm test`
3. 提交 PR 前请附上学习路径或 Playground 的更新说明

尽情探索 CSS 的层叠宇宙，祝你学习愉快！
