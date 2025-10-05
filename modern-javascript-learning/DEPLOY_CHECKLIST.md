# 🚀 现代 JavaScript 学习项目部署检查清单

## ✅ 部署前检查

### 代码质量
- [ ] TypeScript 类型检查通过 (`pnpm typecheck` 或 `tsc --noEmit`)
- [ ] ESLint 检查通过 (`pnpm lint`)
- [ ] 代码已格式化 (`pnpm format`)
- [ ] 单元测试全部通过 (`pnpm test`)

### 构建验证
- [ ] 本地构建成功 (`pnpm build`)
- [ ] 构建产物完整 (`ls -la dist/`)
- [ ] 本地预览正常 (`pnpm preview`)
- [ ] 如需，完成包体积分析 (`pnpm build:analyze`)

### 功能体验
- [ ] 首页课时卡片与进度展示正常
- [ ] 课时详情页路由与内容正确
- [ ] 主题切换可用
- [ ] 响应式布局在移动/桌面端表现良好

## 🔧 Vercel 配置确认

### 必备文件
- [x] `vercel.json`
- [x] `.vercelignore`
- [x] `package.json`（含部署脚本）
- [x] `vite.config.ts`

### 核心配置
- [ ] Build Command: `pnpm build`
- [ ] Output Directory: `dist`
- [ ] SPA 重写规则正确 (`/(.*) -> /index.html`)
- [ ] 环境变量（如有）已在控制台配置

## 🌐 部署方式

### Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

### Vercel 控制台
- [ ] 连接 Git 仓库
- [ ] 确认自动部署分支
- [ ] 设置环境变量
- [ ] 配置自定义域名（可选）

### GitHub Actions
- [ ] 配置 `VERCEL_TOKEN`、`VERCEL_ORG_ID`、`VERCEL_PROJECT_ID`
- [ ] Workflow 文件通过 Lint
- [ ] 推送主分支触发部署

## 📊 性能与监控

### 构建优化
- [x] 启用代码分割与 Tree Shaking
- [x] Tailwind JIT 减少无用样式
- [x] 生产环境开启压缩

### 运行时检查
- [ ] 首屏加载时间在可接受范围
- [ ] 资源请求命中缓存策略
- [ ] 关键交互在 200ms 内响应

### 监控（可选）
- [ ] 集成性能监控或日志上报
- [ ] 配置访问统计工具
- [ ] 记录部署版本信息

## 🧪 部署后验证

- [ ] 访问主页与任意课时链接，确认内容正确
- [ ] 切换暗色模式并刷新验证持久化
- [ ] 检查 404 页面跳转是否有效
- [ ] 兼容主流浏览器（Chrome/Edge/Safari）
- [ ] 在移动端真实设备或模拟器预览

## 🚨 常见问题排查

| 问题 | 排查建议 |
|------|----------|
| 构建失败 | 检查 Node 版本、删除 `pnpm-lock.yaml` 重新安装、查看 `pnpm build --verbose` 日志 |
| 页面刷新 404 | 确保部署平台配置 SPA 重写到 `index.html` |
| 静态资源无法加载 | 检查 `vite.config.ts` 中 `base` 设置及静态资源路径 |
| 样式异常 | 清理缓存并确认 Tailwind 配置加载正确 |

## 📈 成功部署指标

- ✅ 构建和部署流水线 100% 通过
- ✅ 16 个课时页面均可访问
- ✅ 暗色模式与响应式体验稳定
- ✅ 没有未处理的浏览器控制台错误

---

完成以上检查即可安心发布现代 JavaScript 学习门户 🚀
