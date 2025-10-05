# front-learn
基于AI Vibing Code的前端学习记录仓库



---

````markdown
# React + TypeScript 学习路线与项目实战手册

> 🧭 这是一份 **可直接落地的学习路线与实战手册**。  
> 按章节一步步完成，你将从 0 到 1 构建 React + TypeScript 项目，并掌握周边关键能力（路由、表单、数据请求、状态管理、测试、样式、性能与部署）。  
>  
> 适合：已经会基本 JavaScript/HTML/CSS，想系统学习 **React + TS** 的前端工程师 / 全栈开发者。

---

## 📘 目录

- [1. 学习目标与完成标准](#1-学习目标与完成标准)
- [2. 环境准备](#2-环境准备)
- [3. 项目初始化（Vite + React + TS）](#3-项目初始化vite--react--ts)
- [4. 目录结构建议](#4-目录结构建议)
- [5. 学习路线（任务清单 + 验收标准）](#5-学习路线任务清单--验收标准)
- [6. TypeScript 在 React 中的必修点](#6-typescript-在-react-中的必修点)
- [7. 常见问题（FAQ）](#7-常见问题faq)
- [8. 每日学习节奏建议](#8-每日学习节奏建议)
- [9. 参考资料（长期常备）](#9-参考资料长期常备)
- [10. 工程模板与配置文件示例](#10-工程模板与配置文件示例)
- [11. Capstone 项目模板（最终作品）](#11-capstone-项目模板最终作品)
- [12. 学习延伸与社区方向](#12-学习延伸与社区方向)
- [13. 进阶挑战任务（可选）](#13-进阶挑战任务可选)
- [14. 学习建议总结](#14-学习建议总结)
- [15. 项目完成后导出成果](#15-项目完成后导出成果)

---

## 1. 学习目标与完成标准

**你将能：**

- 用 **Vite + React + TypeScript** 初始化并组织一个可维护的前端项目；
- 熟练使用 **函数组件 + Hooks**，并理解 **单向数据流** 与组件通信；
- 掌握 **表单处理、数据请求缓存、全局状态管理**；
- 使用 **TypeScript** 为组件、Hooks、Context 与 API 定义类型；
- 建立 **样式体系**（CSS Modules / Tailwind / Shadcn 任一主线）；
- 具备 **单元/组件测试** 意识与实践能力；
- 进行 **性能优化**、**可访问性（a11y）** 基线治理；
- 能把项目 **构建、预览、部署** 到线上（Vercel/Netlify/静态服务器）；
- 了解 **Next.js / SSR / Server Components** 的迁移与升级路径。

**结业作品（Capstone）**

完成一个「**SaaS 风格 Dashboard**」：
- 登录 (mock)
- 侧边导航
- 列表分页筛选
- 详情编辑
- 表单校验
- 缓存与失效
- 深色模式
- 基本测试
- 线上部署

---

## 2. 环境准备

```bash
# 推荐：使用 nvm 管理 Node 版本
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

# 安装 Node LTS（示例）
nvm install --lts
nvm use --lts

# 包管理器任选：npm / pnpm / yarn
# 推荐 pnpm
corepack enable
corepack prepare pnpm@latest --activate
````

---

## 3. 项目初始化（Vite + React + TS）

```bash
# 使用 npm
npm create vite@latest my-react-ts -- --template react-ts
cd my-react-ts
npm i
npm run dev

# 或使用 pnpm
pnpm create vite my-react-ts --template react-ts
cd my-react-ts
pnpm i
pnpm dev
```

### 代码规范与格式化

```bash
pnpm add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin \
eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks prettier
```

**推荐 `tsconfig.json` 配置：**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["DOM", "ES2022"],
    "jsx": "react-jsx",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": { "@/*": ["src/*"] }
  }
}
```

---

## 4. 目录结构建议

```
src/
  app/
  components/
  features/
  hooks/
  pages/
  services/
  store/
  styles/
  types/
  utils/
  test/
```

---

## 5. 学习路线（任务清单 + 验收标准）

### S0 基础起步

**掌握：** JSX、组件、Props/State、单向数据流
**任务：** Counter + TodoList
**验收：**

* 使用函数组件；
* 列表渲染正确；
* Props、State 定义了 TS 类型。

---

### S1 Hooks 核心

**掌握：** `useState`、`useEffect`、`useRef`、`useMemo`、`useCallback`
**任务：** 搜索防抖 + 上次输入比较
**验收：**

* 理解副作用依赖；
* 正确使用 memo 化函数。

---

### S2 事件与表单

**掌握：** `ChangeEvent`、受控组件
**任务：** 登录表单 + 校验
**验收：**

* 事件类型声明正确；
* 输入受控、可提交。

---

### S3 路由

**掌握：** React Router 路由配置、嵌套、懒加载
**任务：** Dashboard + Users + Settings
**验收：**

* 动态路由生效；
* 实现 404 与登录守卫。

---

### S4 数据获取

**掌握：** Axios + React Query
**任务：** 用户列表 + 分页 + 更新
**验收：**

* React Query 缓存工作；
* 成功刷新后更新 UI。

---

### S5 全局状态（Context / Zustand / Redux）

**掌握：** Provider、全局状态封装
**任务：** 主题 + 用户信息共享
**验收：**

* 状态结构清晰；
* 模块解耦。

---

### S6 表单进阶

**掌握：** React Hook Form + Zod
**任务：** 用户编辑页
**验收：**

* Zod Schema 推导类型；
* 表单状态完整覆盖。

---

### S7 样式体系

**选择一条主线：**

* CSS Modules
* Tailwind
* Shadcn UI

**任务：** 响应式布局 + 主题切换
**验收：**

* 样式体系统一；
* 支持明暗模式。

---

### S8 测试

**掌握：** Vitest + RTL
**任务：** Button / Form / List 测试
**验收：**

* 6 条以上测试；
* 覆盖关键交互。

---

### S9 性能与可访问性

**掌握：** Lazy / Suspense / memo / a11y
**任务：** 虚拟滚动表格 + ARIA 改进
**验收：**

* 首屏体积受控；
* 支持键盘操作。

---

### S10 部署与 CI

**掌握：** Vercel 部署 + GitHub Actions
**任务：** 部署 Capstone 项目
**验收：**

* 线上可访问；
* CI 自动执行测试。

---

### S11 进阶路线（可选）

**掌握：** Next.js / App Router / SSR / RSC
**任务：** Dashboard SSR 版本
**验收：**

* 完整数据渲染；
* 类型安全无警告。

---

## 6. TypeScript 在 React 中的必修点

### 核心语法

* 基本类型、函数类型、联合类型、接口、可选属性；
* 模块导入导出；
* 泛型 `<T>`；
* Utility Types（`Partial`、`Pick`、`Omit`、`Record`）；
* 条件类型与推断。

### React 特有

* `React.FC<Props>`
* `PropsWithChildren<P>`
* `ReactNode`, `JSX.Element`
* `ChangeEvent`, `MouseEvent`
* `useState<T>()`, `useRef<HTMLDivElement>()`

### 示例

```tsx
type ButtonProps = React.PropsWithChildren<{
  variant?: 'primary' | 'secondary'
  onClick?: () => void
}>

export function Button({ variant = 'primary', children, onClick }: ButtonProps) {
  return (
    <button data-variant={variant} onClick={onClick}>
      {children}
    </button>
  )
}
```

---

## 7. 常见问题（FAQ）

**Q：要不要全局安装 create-react-app？**
A：不用，直接用 `npx create-react-app` 或 `pnpm create vite`。

**Q：Hooks 的依赖数组为什么会报错？**
A：React 18 的 ESLint 插件会提示“闭包陷阱”，你要确保依赖声明完整。

**Q：Context 会不会性能差？**
A：有大规模状态更新需求时，用 Zustand / Redux 替代。

---

## 8. 每日学习节奏建议

* 热身（20–30min）：复盘前一天；
* 主线（1–2h）：推进当前阶段；
* 复盘（15min）：写笔记；
* 每周一次整合：合并 demo，整理进度。

---

## 9. 参考资料（长期常备）

* React 官方文档：[https://react.dev](https://react.dev)
* TypeScript 官方文档：[https://www.typescriptlang.org/docs/](https://www.typescriptlang.org/docs/)
* React TS Cheatsheet：[https://react-typescript-cheatsheet.netlify.app/](https://react-typescript-cheatsheet.netlify.app/)
* React Router：[https://reactrouter.com/](https://reactrouter.com/)
* TanStack Query：[https://tanstack.com/query/latest](https://tanstack.com/query/latest)
* React Hook Form：[https://react-hook-form.com/](https://react-hook-form.com/)
* Zod：[https://zod.dev/](https://zod.dev/)
* Vite：[https://vitejs.dev/](https://vitejs.dev/)

---

## 10. 工程模板与配置文件示例

### package.json

```json
{
  "name": "react-typescript-learning",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx",
    "format": "prettier --write .",
    "test": "vitest run --coverage",
    "test:watch": "vitest watch"
  }
}
```

### ESLint

```js
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
  rules: { 'react/react-in-jsx-scope': 'off' }
}
```

### Prettier

```json
{
  "singleQuote": true,
  "semi": false,
  "trailingComma": "none",
  "printWidth": 100
}
```

---

## 11. Capstone 项目模板（最终作品）

### 功能清单

* 登录页 (mock)
* Dashboard
* 用户列表 + 搜索
* 用户编辑 + 表单校验
* 全局主题 + 用户状态
* 数据请求缓存
* 单元测试
* 部署上线

### 示例目录

```
src/
  app/
  features/
  components/
  hooks/
  store/
  styles/
```

---

## 12. 学习延伸与社区方向

| 主题              | 推荐资料                                                                   |
| --------------- | ---------------------------------------------------------------------- |
| Next.js         | [https://nextjs.org/docs](https://nextjs.org/docs)                     |
| React Query     | [https://tanstack.com/query/latest](https://tanstack.com/query/latest) |
| Shadcn UI       | [https://ui.shadcn.com](https://ui.shadcn.com)                         |
| Testing Library | [https://testing-library.com](https://testing-library.com)             |
| React DevTools  | [https://react.dev/tools](https://react.dev/tools)                     |

---

## 13. 进阶挑战任务（可选）

| 难度  | 挑战任务                  |
| --- | --------------------- |
| ⭐   | 重构为 Next.js 版本        |
| ⭐⭐  | 使用 Zustand/Redux 重建状态 |
| ⭐⭐  | 实现多语言与主题切换            |
| ⭐⭐⭐ | 自制组件库并发布 npm          |
| 🔥  | 实现 PWA 离线应用           |

---

## 14. 学习建议总结

1. 不求快，求稳。每阶段写总结；
2. 多看类型定义文件；
3. Debug 类型错误是成长；
4. 善用 VS Code 插件与 DevTools；
5. 坚持写文档与日志。

---

## 15. 项目完成后导出成果

* 📦 代码仓库（GitHub / GitLab）
* 📝 README（项目说明 + 技术栈）
* 🌐 线上演示（Vercel / Netlify）
* 🧠 学习报告（心得总结）

---

> ✅ **一句话总结：**
> React 让你用组件思维构建 UI，
> TypeScript 让你在构建 UI 的同时拥有“类型即文档”的安全保障。
>
> 先让项目跑起来，再让类型守护它。

```

---

是否希望我 **下一步生成对应的可运行项目模板结构（src 文件、配置文件、组件示例）**？  
我可以直接输出一份最小可运行的 React + TypeScript 工程骨架。
```
