# 部署指南

本项目基于 Vite 构建，默认使用 pnpm 管理依赖，可在 Vercel、Netlify 等平台快速部署。

## 🚀 Vercel 部署

### 方式一：Vercel CLI
1. 安装 CLI
   ```bash
   npm i -g vercel
   ```
2. 登录账号
   ```bash
   vercel login
   ```
3. 执行部署
   ```bash
   # 预览环境
   pnpm deploy:preview

   # 生产环境
   pnpm deploy
   ```

### 方式二：Vercel 控制台
1. 访问 [vercel.com](https://vercel.com) 并创建新项目
2. 关联 GitHub 仓库，保持默认配置：
   - Framework Preset: `Vite`
   - Install Command: `pnpm install`
   - Build Command: `pnpm build`
   - Output Directory: `dist`
3. 若使用环境变量，可在控制台的 **Environment Variables** 中配置

### 方式三：GitHub Actions 自动部署
1. 在仓库设置中添加 Secrets：
   ```
   VERCEL_TOKEN=your_vercel_token
   VERCEL_ORG_ID=your_org_id
   VERCEL_PROJECT_ID=your_project_id
   ```
2. 运行 `vercel link` 获取项目凭据
3. 推送到 `main` 分支后，工作流会自动部署

## 📦 构建与分析

```bash
# 标准构建
pnpm build

# 生成分析报告
pnpm build:analyze
```

### 构建配置亮点
- **ESBuild + Rollup**：Vite 默认提供极速热更新与高效打包
- **Tailwind CSS JIT**：按需生成原子类，减少体积
- **别名支持**：通过 `@` 指向 `src`，方便导入
- **TypeScript**：构建前可选运行 `pnpm typecheck` 确保类型安全

## 🔧 Vercel 配置示例

`vercel.json`
```json
{
  "buildCommand": "pnpm build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

## 🌐 其他部署方式

### Netlify
1. 关联仓库
2. Build command: `pnpm build`
3. Publish directory: `dist`
4. 添加 `_redirects` 文件内容：
   ```
   /*  /index.html  200
   ```

### GitHub Pages
1. 安装 `gh-pages`
2. 在 `package.json` 中添加 `deploy` 脚本：`pnpm build && gh-pages -d dist`
3. 运行 `pnpm deploy`

### 自建服务器
1. 执行 `pnpm build`
2. 将 `dist/` 上传至服务器
3. 配置 Nginx/Apache，将所有路由重写到 `/index.html`

## 🚨 常见问题

| 问题 | 解决方案 |
|------|----------|
| 访问内页返回 404 | 确保部署平台配置了 SPA 重写规则 |
| 构建失败 | 检查 Node 版本 (>=18)、重新安装依赖、排查 TypeScript 报错 |
| 静态资源路径错误 | 如非根路径部署，可在 `vite.config.ts` 中设置 `base` |
| 环境变量缺失 | 确认变量在本地 `.env` 与远程平台均已配置 |

## 🧪 调试命令
```bash
# 本地预览构建产物
pnpm preview

# 查看构建详情
pnpm build --verbose

# 检查 dist 输出
ls -la dist/
```

---

部署完成后，即可在任意设备上访问 30 课时的现代 CSS 互动式学习体验与 CSS Playground 实验室。
