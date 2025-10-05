# 前端学习项目部署指南

本项目包含四个前端学习工程，每个工程都有独立的部署配置。

## 项目结构

```
front-learn/
├── css-learning/                    # 现代 CSS 学习项目
├── angular-learning/                # Angular 学习项目
├── modern-javascript-learning/      # 现代 JavaScript 学习项目
├── modern-typescript-learning/      # 现代 TypeScript 学习项目
├── react-ts-learning/              # React + TypeScript 学习项目
└── .github/workflows/              # GitHub Actions 工作流配置
```

## 部署配置

### GitHub Actions 工作流

每个项目都有独立的 GitHub Actions 工作流：

- `deploy-css-learning.yml` - CSS 学习项目部署
- `deploy-angular-learning.yml` - Angular 学习项目部署
- `deploy-modern-javascript-learning.yml` - JavaScript 学习项目部署
- `deploy-modern-typescript-learning.yml` - TypeScript 学习项目部署
- `deploy-react-ts-learning.yml` - React TypeScript 学习项目部署

### Vercel 配置

每个项目都有独立的 `vercel.json` 配置文件，包含：

- 构建命令和输出目录
- 框架类型识别
- 路由重写规则
- 安全头配置
- 缓存策略

## 环境变量配置

在 GitHub 仓库的 Secrets 中需要配置以下环境变量：

### 必需的环境变量

- `VERCEL_TOKEN` - Vercel API Token
- `VERCEL_ORG_ID` - Vercel 组织 ID

### 项目特定的环境变量

- `VERCEL_CSS_PROJECT_ID` - CSS 学习项目的 Vercel 项目 ID
- `VERCEL_ANGULAR_PROJECT_ID` - Angular 学习项目的 Vercel 项目 ID
- `VERCEL_JS_PROJECT_ID` - JavaScript 学习项目的 Vercel 项目 ID
- `VERCEL_TS_PROJECT_ID` - TypeScript 学习项目的 Vercel 项目 ID
- `VERCEL_REACT_TS_PROJECT_ID` - React TypeScript 学习项目的 Vercel 项目 ID

## 部署流程

### 自动部署

1. 当代码推送到 `main` 或 `master` 分支时，会自动触发对应项目的部署流程
2. 每个工作流包含以下步骤：
   - 安装依赖
   - 运行类型检查
   - 运行代码检查
   - 运行测试
   - 构建项目
   - 部署到 Vercel

### 手动部署

可以通过 GitHub Actions 的 `workflow_dispatch` 手动触发部署。

### 本地部署

每个项目都支持本地部署命令：

```bash
# 进入项目目录
cd <project-name>

# 安装依赖
pnpm install

# 构建项目
pnpm build

# 部署到 Vercel
pnpm deploy
```

## 项目特定配置

### CSS Learning
- 框架：Vite + React
- 构建工具：TypeScript + Vite
- 样式：Tailwind CSS

### Angular Learning
- 框架：Angular 17
- 构建工具：Angular CLI
- 测试：Karma + Jasmine

### Modern JavaScript Learning
- 框架：Vite + React
- 构建工具：TypeScript + Vite
- 样式：Tailwind CSS

### Modern TypeScript Learning
- 框架：Vite + React
- 构建工具：TypeScript + Vite
- 状态管理：Zustand
- 数据获取：React Query
- 表单：React Hook Form

### React TypeScript Learning
- 框架：Vite + React
- 构建工具：TypeScript + Vite
- 状态管理：Zustand
- 数据获取：React Query
- 表单：React Hook Form

## 故障排除

### 常见问题

1. **构建失败**
   - 检查 Node.js 版本（需要 20.x）
   - 检查依赖是否正确安装
   - 检查 TypeScript 类型错误

2. **部署失败**
   - 检查 Vercel 环境变量配置
   - 检查项目 ID 是否正确
   - 检查构建输出目录

3. **测试失败**
   - 检查测试环境配置
   - 检查测试文件语法
   - 检查依赖版本兼容性

### 日志查看

- GitHub Actions 日志：在仓库的 Actions 标签页查看
- Vercel 部署日志：在 Vercel 控制台查看

## 更新和维护

### 依赖更新

定期更新项目依赖：

```bash
# 更新依赖
pnpm update

# 检查过时的依赖
pnpm outdated
```

### 配置更新

当需要更新部署配置时：

1. 修改对应的 `vercel.json` 文件
2. 更新 GitHub Actions 工作流文件
3. 测试配置更改
4. 提交并推送更改

## 监控和性能

### 性能监控

- 使用 Vercel Analytics 监控性能
- 定期检查构建时间和包大小
- 监控 Core Web Vitals 指标

### 安全监控

- 定期更新依赖以修复安全漏洞
- 使用 Dependabot 自动更新依赖
- 监控安全头配置
