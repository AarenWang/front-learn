# 🎓 《现代 CSS 规范系统学习 · 教学计划表》

> 总计 30 课时 · 6 个模块  
> 目标：系统掌握 CSS 规范核心原理、现代语法、布局与渲染机制，并具备规范阅读与工程实践能力。  
> 建议时长：每课 1～1.5 小时，每周 5 课，6 周完成。

---

## 🧱 模块一：CSS 原理与规范体系（4 课时）

### 课时 1｜CSS 的历史与规范体系
**🎯 目标**：理解 CSS 的发展脉络与规范组织结构。  
**📘 知识点**：W3C、CSSWG、WHATWG、CSS Levels、CSSOM。  
**🧩 任务**：在 MDN 查找 CSS Flexbox 的规范链接，并阅读前两节。  
**🧠 练习**：写一段总结：CSS 规范是谁制定的？Level 代表什么？  
**📚 资料**：[W3C CSS Standards](https://www.w3.org/TR/css/)、[MDN - CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS)

---

### 课时 2｜CSS 语法与值体系
**🎯 目标**：掌握规则集、选择器、声明块、单位与数据类型。  
**📘 知识点**：语法树、数值单位（px、em、rem、vh）、颜色函数。  
**🧩 任务**：编写一份完整样式表（含注释、变量、颜色函数）。  
**🧠 练习**：解释 `em` 与 `rem` 的区别。  
**📚 资料**：[MDN - CSS Syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax)

---

### 课时 3｜层叠与继承机制
**🎯 目标**：理解样式优先级、继承链与 cascade。  
**📘 知识点**：specificity、`!important`、inherit / initial / revert。  
**🧩 任务**：通过嵌套选择器创建样式冲突，分析最终渲染规则。  
**🧠 练习**：写出三个不同 specificity 的选择器比较。  

---

### 课时 4｜浏览器渲染流程
**🎯 目标**：掌握从 DOM → CSSOM → Render Tree 的流程。  
**📘 知识点**：重排(Reflow)、重绘(Repaint)、复合层。  
**🧩 任务**：用 Chrome DevTools 查看渲染层与合成层。  
**🧠 练习**：解释为什么频繁更改 `width` 性能较差。  

---

## 🎨 模块二：选择器与变量机制（5 课时）

### 课时 5｜基础选择器与组合器
**🎯 目标**：掌握基本选择器与组合逻辑。  
**📘 知识点**：类型、类、ID、通配、后代、兄弟、子代组合器。  
**🧩 任务**：在 HTML 中实现一个嵌套菜单并用组合器选中特定项。  
**🧠 练习**：比较 `A + B` 与 `A ~ B` 的区别。  

---

### 课时 6｜属性选择器与结构伪类
**🎯 目标**：灵活使用 `[attr=value]` 与 `:nth-*` 系列。  
**📘 知识点**：`:nth-child()`、`:not()`、`:is()`、`:where()`。  
**🧩 任务**：美化表格奇偶行，使用 `:nth-child` 与 `:not` 组合。  
**🧠 练习**：`:is()` 与 `:where()` 在优先级上有什么不同？  

---

### 课时 7｜动态伪类与状态
**🎯 目标**：掌握交互伪类 `:hover`、`:focus-visible`、`:checked`。  
**📘 知识点**：伪类触发条件、辅助无障碍状态。  
**🧩 任务**：构建一个纯 CSS 的切换开关按钮。  
**🧠 练习**：`focus` 与 `focus-visible` 的差异？  

---

### 课时 8｜Cascade Layers 层叠层
**🎯 目标**：理解 `@layer` 的语法与层次优先级。  
**📘 知识点**：命名层、默认层次、层叠顺序。  
**🧩 任务**：创建三个层 `@layer reset, base, theme` 控制覆盖顺序。  
**🧠 练习**：写出如何让 reset 层样式不被主题层覆盖。  

---

### 课时 9｜CSS 变量与 @property
**🎯 目标**：掌握变量定义、作用域与计算机制。  
**📘 知识点**：`--var`、`var()`、`@property` 注册类型。  
**🧩 任务**：创建可动态调节主题色的按钮。  
**🧠 练习**：为什么 CSS 变量可以参与计算，而 Sass 变量不行？  

---

## 📐 模块三：盒模型与布局体系（6 课时）

### 课时 10｜盒模型与尺寸计算
**🎯 目标**：掌握 content-box 与 border-box 差异。  
**📘 知识点**：margin collapsing、overflow、scrollbar 占位。  
**🧩 任务**：绘制三个嵌套盒子，演示 margin 折叠。  
**🧠 练习**：为什么 `box-sizing: border-box` 更易维护？  

---

### 课时 11｜Display 与 Formatting Context
**🎯 目标**：理解 BFC / IFC 概念与作用。  
**📘 知识点**：display 模型、float、clear、overflow 触发 BFC。  
**🧩 任务**：用 BFC 清除浮动。  
**🧠 练习**：哪些 CSS 属性能创建 BFC？  

---

### 课时 12｜定位机制
**🎯 目标**：掌握 static、relative、absolute、sticky 的定位关系。  
**📘 知识点**：包含块、定位上下文、z-index 参与。  
**🧩 任务**：实现粘性导航栏。  
**🧠 练习**：absolute 元素的基准参考点是什么？  

---

### 课时 13｜Flexbox 布局
**🎯 目标**：掌握主轴、交叉轴、对齐规则。  
**📘 知识点**：`flex-basis`、`flex-grow`、`justify-content`。  
**🧩 任务**：构建一个自适应导航栏。  
**🧠 练习**：`flex: 1` 等价于哪些属性？  

---

### 课时 14｜Grid 布局
**🎯 目标**：掌握 Grid 的行列定义与区域布局。  
**📘 知识点**：`grid-template`、`auto-fit`、`fr` 单位、grid area。  
**🧩 任务**：实现响应式图片画廊。  
**🧠 练习**：`auto-fit` 与 `auto-fill` 有何区别？  

---

### 课时 15｜多列与流式布局
**🎯 目标**：理解多列（multi-column）与流式布局。  
**📘 知识点**：`column-count`、`column-gap`、`flow-root`、`writing-mode`。  
**🧩 任务**：排版杂志式布局。  
**🧠 练习**：`flow-root` 的作用是什么？  

---

## 🧩 模块四：视觉与绘制层（4 课时）

### 课时 16｜背景与边框
**🎯 目标**：理解背景层的绘制过程。  
**📘 知识点**：`background-position`、`border-radius`、`clip-path`。  
**🧩 任务**：实现多背景叠加的卡片。  
**🧠 练习**：`background-origin` 控制了什么？  

---

### 课时 17｜阴影与滤镜
**🎯 目标**：掌握视觉特效的渲染原理。  
**📘 知识点**：`box-shadow`、`filter: blur()`、`backdrop-filter`。  
**🧩 任务**：制作毛玻璃导航栏。  
**🧠 练习**：`box-shadow` 与 `filter: drop-shadow()` 有何区别？  

---

### 课时 18｜渐变与混合模式
**🎯 目标**：掌握渐变、叠加与混合。  
**📘 知识点**：`linear-gradient`、`mix-blend-mode`。  
**🧩 任务**：制作炫彩按钮 hover 动效。  
**🧠 练习**：混合模式 `multiply` 与 `overlay` 的区别？  

---

### 课时 19｜层叠上下文与 z-index
**🎯 目标**：理解 stacking context 规则。  
**📘 知识点**：z-index、transform、opacity、position。  
**🧩 任务**：构建多层浮动卡片，调整显示顺序。  
**🧠 练习**：哪些属性会创建新的 stacking context？  

---

## 💬 模块五：交互、动画与响应式（6 课时）

### 课时 20｜过渡与动画
**🎯 目标**：掌握 transition 与 animation 的基本用法。  
**📘 知识点**：`transition-delay`、`@keyframes`、ease 函数。  
**🧩 任务**：制作按钮 hover 渐变动画。  
**🧠 练习**：`transition: all` 的性能问题是什么？  

---

### 课时 21｜动画性能优化
**🎯 目标**：理解 GPU 合成层与性能优化。  
**📘 知识点**：`transform`、`opacity`、`will-change`。  
**🧩 任务**：优化上节动画，减少重排。  
**🧠 练习**：为什么 `translateZ(0)` 能触发 GPU？  

---

### 课时 22｜媒体查询
**🎯 目标**：掌握 Media Queries Level 4 特性。  
**📘 知识点**：`min-width`、`prefers-color-scheme`。  
**🧩 任务**：实现响应式两栏布局。  
**🧠 练习**：`prefers-reduced-motion` 的意义？  

---

### 课时 23｜容器查询
**🎯 目标**：理解 `@container` 的概念与语法。  
**📘 知识点**：`container-type`、`container-name`、局部响应式。  
**🧩 任务**：构建可独立响应的卡片组件。  
**🧠 练习**：`@media` 与 `@container` 的根本区别？  

---

### 课时 24｜支持查询与渐进增强
**🎯 目标**：掌握 `@supports` 检测与降级策略。  
**📘 知识点**：`@supports selector()`、特性检测。  
**🧩 任务**：编写兼容旧浏览器的渐进增强样式。  
**🧠 练习**：如何检测浏览器是否支持 `grid`？  

---

### 课时 25｜纯 CSS 交互技巧
**🎯 目标**：探索无需 JS 的交互。  
**📘 知识点**：`:checked`、`:focus-within`、checkbox hack。  
**🧩 任务**：实现纯 CSS 折叠面板与下拉菜单。  
**🧠 练习**：解释 “checkbox hack” 的原理。  

---

## 🧠 模块六：现代特性与规范前沿（5 课时）

### 课时 26｜Typography 字体与排版
**🎯 目标**：理解文字渲染机制。  
**📘 知识点**：`font-family`、`line-height`、`font-variant`。  
**🧩 任务**：创建一份可读性良好的博客排版样式。  
**🧠 练习**：`line-height` 与字体度量的关系？  

---

### 课时 27｜尺寸函数与新单位
**🎯 目标**：掌握 `clamp()`、`min()`、`max()`。  
**📘 知识点**：`vh/vw`、`vmin/vmax`、动态视口单位。  
**🧩 任务**：构建响应式字体系统。  
**🧠 练习**：`clamp()` 的三个参数分别含义是什么？  

---

### 课时 28｜逻辑属性与国际化布局
**🎯 目标**：理解 `margin-inline` 等逻辑属性。  
**📘 知识点**：RTL/LTR 布局、书写方向。  
**🧩 任务**：让网页支持阿拉伯语方向。  
**🧠 练习**：`margin-left` 与 `margin-inline-start` 的区别？  

---

### 课时 29｜CSS Houdini 与 Typed OM
**🎯 目标**：了解 CSS 可编程接口。  
**📘 知识点**：Paint API、`registerProperty`。  
**🧩 任务**：自定义一个渐变背景绘制器（概念演示）。  
**🧠 练习**：Houdini 为什么能提升性能？  

---

### 课时 30｜规范阅读与未来趋势
**🎯 目标**：具备阅读 CSS 规范与跟进特性的能力。  
**📘 知识点**：Selectors 5、Color 5、Scope、Nest。  
**🧩 任务**：在 W3C 查阅 “CSS Nesting Module” 草案并总结要点。  
**🧠 练习**：列举两个 CSS 正在提案的新特性。  

---

## 🧾 阶段成果与复盘

| 模块 | 阶段成果 | 评估方式 |
|------|------------|-----------|
| 模块 1–2 | 理解规范语法与层叠 | 小测 + 选择器练习 |
| 模块 3 | 能独立实现布局 | Flex/Grid 实战 |
| 模块 4 | 控制视觉层级 | 图层实验报告 |
| 模块 5 | 动画与响应式 | 交互动效作品 |
| 模块 6 | 掌握新特性与规范 | 阅读报告 + 设计展示 |

---

## 📚 推荐资源汇总

- **官方标准**：[W3C CSS Working Group Drafts](https://www.w3.org/TR/css/)
- **教程与手册**：
  - [MDN CSS Docs](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
  - [web.dev/learn/css](https://web.dev/learn/css/)
  - [CSS Tricks Guide](https://css-tricks.com/)
- **视频课程**：
  - Kevin Powell: [Modern CSS](https://www.youtube.com/kepowob)
  - Fireship: [CSS in 100 Seconds](https://www.youtube.com/c/Fireship)
- **进阶阅读**：
  - 《CSS Secrets》by Lea Verou  
  - 《CSS: The Definitive Guide》by Eric Meyer  

---

> ✅ **总结**  
> 本课程以 W3C 规范为主线，结合实践任务，  
> 从语法 → 布局 → 动画 → 现代特性 → 规范阅读，  
> 让你从“写样式的人”成长为“懂 CSS 渲染机制的工程师”。

