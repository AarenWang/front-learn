# 部署指南

本项目支持多种部署方式，推荐使用 Vercel 进行快速部署。

## 🚀 Vercel 部署

### 方式一：通过 Vercel CLI 部署

1. **安装 Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **登录 Vercel**
   ```bash
   vercel login
   ```

3. **部署项目**
   ```bash
   # 预览部署
   pnpm deploy:preview
   
   # 生产部署
   pnpm deploy
   ```

### 方式二：通过 Vercel 网站部署

1. **连接 GitHub 仓库**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "New Project"
   - 选择你的 GitHub 仓库

2. **配置项目**
   - Framework Preset: `Vite`
   - Root Directory: `./` (默认)
   - Build Command: `pnpm build`
   - Output Directory: `dist`
   - Install Command: `pnpm install`

3. **环境变量（如需要）**
   ```
   NODE_ENV=production
   ```

### 方式三：通过 GitHub Actions 自动部署

1. **配置 GitHub Secrets**
   在 GitHub 仓库设置中添加以下 Secrets：
   ```
   VERCEL_TOKEN=your_vercel_token
   VERCEL_ORG_ID=your_org_id
   VERCEL_PROJECT_ID=your_project_id
   ```

2. **获取 Vercel 凭据**
   ```bash
   vercel link
   cat .vercel/project.json
   ```

3. **推送代码**
   推送代码到 `main` 或 `master` 分支即可自动部署

## 📦 构建优化

### 构建命令
```bash
# 标准构建
pnpm build

# 构建并分析包大小
pnpm build:analyze
```

### 构建配置
- **代码分割**: 自动分割 vendor、router、query 等模块
- **压缩优化**: 使用 Terser 进行代码压缩
- **资源优化**: 静态资源长期缓存
- **类型检查**: 构建前进行 TypeScript 类型检查

## 🔧 部署配置

### Vercel 配置 (vercel.json)
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### 构建输出
- **输出目录**: `dist/`
- **静态资源**: `dist/assets/`
- **HTML 文件**: `dist/index.html`

## 🌐 其他部署平台

### Netlify
1. 连接 GitHub 仓库
2. 构建设置：
   - Build command: `pnpm build`
   - Publish directory: `dist`
3. 添加重定向规则到 `_redirects` 文件

### GitHub Pages
1. 安装 `gh-pages` 包
2. 添加部署脚本到 `package.json`
3. 运行 `pnpm deploy` 命令

### 传统服务器
1. 构建项目：`pnpm build`
2. 将 `dist` 目录上传到服务器
3. 配置 Web 服务器（Nginx/Apache）
4. 添加 SPA 路由重写规则

## 🚨 故障排除

### 常见问题

1. **路由 404 错误**
   - 确保配置了 SPA 路由重写规则
   - 检查 `vercel.json` 中的 `rewrites` 配置

2. **构建失败**
   - 检查 Node.js 版本（推荐 18+）
   - 确保所有依赖都已安装
   - 检查 TypeScript 类型错误

3. **资源加载失败**
   - 检查 `vite.config.ts` 中的 `base` 配置
   - 确保静态资源路径正确

4. **环境变量问题**
   - 确保所有必需的环境变量都已配置
   - 检查环境变量名称和值

### 调试命令
```bash
# 本地预览构建结果
pnpm preview

# 检查构建输出
ls -la dist/

# 查看构建日志
pnpm build --verbose
```

## 📊 性能优化

### 构建优化
- ✅ 代码分割和懒加载
- ✅ 资源压缩和缓存
- ✅ Tree shaking 移除未使用代码
- ✅ 图片优化和格式转换

### 运行时优化
- ✅ React Query 数据缓存
- ✅ 组件懒加载
- ✅ 虚拟滚动（大数据列表）
- ✅ 防抖和节流优化

## 🔒 安全配置

### 安全头设置
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## 📈 监控和分析

### 性能监控
- Vercel Analytics（内置）
- Google Analytics
- Sentry 错误监控

### 构建分析
```bash
# 分析包大小
pnpm build:analyze

# 查看依赖图
npx vite-bundle-analyzer dist
```

---

## 🎯 快速开始

1. **克隆项目**
   ```bash
   git clone <your-repo-url>
   cd react-ts-learning
   ```

2. **安装依赖**
   ```bash
   pnpm install
   ```

3. **本地开发**
   ```bash
   pnpm dev
   ```

4. **构建部署**
   ```bash
   pnpm build
   pnpm deploy
   ```

🎉 **恭喜！你的 React + TypeScript 学习项目已经可以部署到 Vercel 了！**
