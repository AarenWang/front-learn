import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/Card'
import { ThemeToggle } from '@/components/ThemeToggle'

const migrationSteps = [
  {
    id: 'routing',
    title: '升级路由体系',
    detail: '把 React Router 的页面映射到 Next.js app router 的 route segment。'
  },
  {
    id: 'data',
    title: '数据获取模式',
    detail: '利用 Next.js Server Action / fetch 缓存，统一数据层。'
  },
  {
    id: 'styling',
    title: '样式与设计系统',
    detail: '迁移 Tailwind 配置，考虑使用 @next/font 或 CSS Modules。'
  },
  {
    id: 'deployment',
    title: '部署策略',
    detail: '使用 Vercel 原生支持，开启 Edge Functions 或 SSR。'
  }
]

const advancedTopics = [
  {
    title: 'Server Components',
    description: '将数据依赖重的组件迁移到服务器渲染，减少客户端 JS。',
    benefit: '首屏加载更快，网络抖动时更稳。'
  },
  {
    title: 'Route Handlers',
    description: '在 Next.js 中实现轻量 API，处理表单提交或 webhook。',
    benefit: '减少 BFF 层，接口更靠近页面。'
  },
  {
    title: 'Edge Middleware',
    description: '基于请求动态重定向、A/B 实验或国际化切换。',
    benefit: '响应在边缘节点执行，延迟更低。'
  }
]

function MigrationPlanner() {
  const [selected, setSelected] = useState<string[]>(['routing'])

  const toggle = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-600 dark:text-gray-400">
        勾选你要优先迁移的能力，生成行动建议：
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {migrationSteps.map(step => (
          <button
            key={step.id}
            onClick={() => toggle(step.id)}
            className={`text-left rounded-xl border p-4 transition focus:outline-none focus:ring-2 focus:ring-primary-500 ${
              selected.includes(step.id)
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30'
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-primary-400'
            }`}
          >
            <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">{step.title}</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{step.detail}</p>
          </button>
        ))}
      </div>

      <div className="rounded-xl bg-gray-900 text-gray-100 p-4 text-sm space-y-2">
        <p className="font-semibold">迁移建议</p>
        {selected.includes('routing') && <p>• 先梳理现有路由结构，映射到 app/(marketing)/dashboard 等 Segment。</p>}
        {selected.includes('data') && <p>• 把 React Query 的关键请求迁移为 Server Component fetch，客户端保留交互态。</p>}
        {selected.includes('styling') && <p>• Tailwind 配置保持一致，新增 next/font 引入品牌字体，减少 FOUT。</p>}
        {selected.includes('deployment') && <p>• 使用 Vercel 环境变量组管理 staging/production，开启 Speed Insights 监控。</p>}
      </div>
    </div>
  )
}

function AdvancedShowcase() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {advancedTopics.map(topic => (
        <div
          key={topic.title}
          className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 space-y-3"
        >
          <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">{topic.title}</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">{topic.description}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">收益：{topic.benefit}</p>
        </div>
      ))}
    </div>
  )
}

function LearningRoadmap() {
  const roadmap = [
    {
      phase: '第 1 周',
      focus: '理解 Next.js App Router、layout 机制与服务器组件模型。'
    },
    {
      phase: '第 2 周',
      focus: '引入 Server Actions、Route Handlers，完成 Dashboard 迁移。'
    },
    {
      phase: '第 3 周',
      focus: '接入认证、RBAC，配置 Edge Middleware 与缓存策略。'
    }
  ]

  return (
    <ol className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
      {roadmap.map(step => (
        <li key={step.phase} className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4">
          <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">{step.phase}</h4>
          <p className="mt-1">{step.focus}</p>
        </li>
      ))}
    </ol>
  )
}

function CodePreview() {
  return (
    <pre className="bg-gray-900 text-green-300 text-xs p-4 rounded-xl overflow-x-auto">
{`// app/dashboard/page.tsx
import { Suspense } from 'react'
import { UserList } from '@/components/UserList'

export default async function DashboardPage() {
  const summary = await fetch('https://api.example.com/summary', { cache: 'no-store' }).then(res => res.json())

  return (
    <section className="space-y-6">
      <h1 className="text-2xl font-bold">欢迎回来</h1>
      <pre>{JSON.stringify(summary, null, 2)}</pre>
      <Suspense fallback={<p>加载用户...</p>}>
        <UserList />
      </Suspense>
    </section>
  )
}`}
    </pre>
  )
}

export function S11NextjsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-primary-600 hover:text-primary-700">
                ← 返回首页
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">S11 进阶路线 · Next.js</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Card title="学习目标">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 理解 Next.js App Router 与传统 CSR 项目的差异。</li>
            <li>• 设计一份渐进迁移计划，降低从 SPA 到 SSR 的心智成本。</li>
            <li>• 掌握 Server Components、Route Handlers、Edge Middleware 的核心场景。</li>
          </ul>
        </Card>

        <Card title="任务清单">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 把学习项目的一个页面迁移到 Next.js，并保留状态管理能力。</li>
            <li>• 使用 Route Handler 构建一个 API（例如 /api/users），配合前端使用。 </li>
            <li>• 撰写一次迁移复盘：总结挑战、踩坑与收益。</li>
          </ul>
        </Card>

        <Card title="验收标准">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 迁移后的页面支持 SSR 或 SSG，且指标优于原 SPA。</li>
            <li>• 数据请求统一在服务器处理，客户端仅处理交互态。</li>
            <li>• 能够讲述 Next.js 与 React Router 的取舍点。</li>
          </ul>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="迁移行动板">
            <MigrationPlanner />
          </Card>
          <Card title="高阶能力图谱">
            <AdvancedShowcase />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="三周学习路线">
            <LearningRoadmap />
          </Card>
          <Card title="Server Component 示例">
            <CodePreview />
          </Card>
        </div>
      </main>
    </div>
  )
}
