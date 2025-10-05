import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { ThemeToggle } from '@/components/ThemeToggle'

type ChecklistItem = {
  id: string
  title: string
  description: string
}

const checklistItems: ChecklistItem[] = [
  {
    id: 'env',
    title: '配置环境变量',
    description: '准备 VITE_API_BASE_URL、SENTRY_DSN 等变量，确认在 Vercel / GitHub 中均已配置。'
  },
  {
    id: 'lint',
    title: 'CI 运行检查',
    description: '在 GitHub Actions 中执行 pnpm lint && pnpm test -- --run --coverage。'
  },
  {
    id: 'build',
    title: '产物构建',
    description: '通过 pnpm build 生成 dist，上传到 Vercel 预览环境。'
  },
  {
    id: 'monitor',
    title: '部署监控',
    description: '接入 Vercel Analytics 或 Lighthouse CI，记录首屏和交互指标。'
  }
]

type Stage = 'preview' | 'staging' | 'production'

const environments: Record<Stage, { purpose: string; trigger: string; checklist: string[] }> = {
  preview: {
    purpose: '拉取请求自动部署，便于产品/设计提前体验。',
    trigger: 'pull_request',
    checklist: ['自动运行 lint/test', '生成 PR 评论预览链接', '标注变更说明']
  },
  staging: {
    purpose: '与生产环境一致的验证环境，包含 Mock/真实数据切换。',
    trigger: 'manual or protected branch',
    checklist: ['回归关键流程', '执行冒烟测试', '确认监控指标']
  },
  production: {
    purpose: '正式对外环境，开启监控、埋点与告警。',
    trigger: 'tag push / main branch',
    checklist: ['记录版本号', '确认回滚方案', '完成发布公告']
  }
}

function DeploymentChecklist() {
  const [completed, setCompleted] = useState<string[]>(['env'])

  const toggleItem = (id: string) => {
    setCompleted(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const progress = useMemo(
    () => Math.round((completed.length / checklistItems.length) * 100),
    [completed]
  )

  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 p-4 text-sm text-primary-800 dark:text-primary-100">
        当前完成度 {progress}% —— 通过 checklist 帮助学员建立“可复制的上线流程”。
      </div>

      <ul className="space-y-3">
        {checklistItems.map(item => (
          <li
            key={item.id}
            className={`rounded-xl border p-4 transition-colors ${
              completed.includes(item.id)
                ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30'
                : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
            }`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{item.description}</p>
              </div>
              <Button
                variant={completed.includes(item.id) ? 'secondary' : 'primary'}
                size="sm"
                onClick={() => toggleItem(item.id)}
              >
                {completed.includes(item.id) ? '撤销' : '标记完成'}
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PipelineTimeline() {
  const steps = [
    {
      title: '代码提交',
      detail: '每次 push 到 main / feature 分支自动触发 CI。'
    },
    {
      title: 'CI 检查',
      detail: '执行 lint、test、build，生成覆盖率报告。'
    },
    {
      title: '预览部署',
      detail: 'Vercel 生成 preview 链接，供产品、设计验收。'
    },
    {
      title: '生产发布',
      detail: '手动确认后 promote 到 production，记录版本。'
    }
  ]
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700 pl-6 space-y-6 text-sm text-gray-700 dark:text-gray-300">
      {steps.map((step, index) => (
        <li key={step.title} className="ml-4">
          <div className="absolute -left-[11px] top-1 w-3 h-3 rounded-full bg-primary-500"></div>
          <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">{index + 1}. {step.title}</h4>
          <p className="mt-1 text-sm">{step.detail}</p>
        </li>
      ))}
    </ol>
  )
}

function GithubActionPreview() {
  return (
    <pre className="bg-gray-900 text-green-300 text-xs p-4 rounded-xl overflow-x-auto">
{`# .github/workflows/deploy.yml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v4
      - run: pnpm install --frozen-lockfile
      - run: pnpm lint
      - run: pnpm test -- --run --coverage
      - run: pnpm build
      - name: Upload dist artifact
        uses: actions/upload-artifact@v4
        with:
          name: dist
          path: dist
`}
    </pre>
  )
}

function EnvironmentMatrix() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-300">环境</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-300">用途</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-300">触发方式</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-300">检查清单</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
          {(Object.entries(environments) as [Stage, (typeof environments)[Stage]][]).map(([stage, meta]) => (
            <tr key={stage}>
              <td className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">
                {stage === 'preview' ? 'Preview' : stage === 'staging' ? 'Staging' : 'Production'}
              </td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{meta.purpose}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{meta.trigger}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400">
                <ul className="list-disc pl-4 space-y-1">
                  {meta.checklist.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function S10DeploymentPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-primary-600 hover:text-primary-700">
                ← 返回首页
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">S10 部署与 CI</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Card title="学习目标">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 熟悉 Vercel 部署流程，理解 Preview → Production 的推广方式。</li>
            <li>• 掌握 GitHub Actions 基础，能够在 CI 中执行 lint/test/build。</li>
            <li>• 学会编写上线前自查清单，保证交付质量稳定。</li>
          </ul>
        </Card>

        <Card title="任务清单">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 配置一条基本的 GitHub Actions Workflow，实现自动测试与构建。</li>
            <li>• 在 Vercel 上创建 Preview 部署，邀请同伴进行验收打分。</li>
            <li>• 输出一份《上线回滚预案》，写进项目文档。</li>
          </ul>
        </Card>

        <Card title="验收标准">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• PR 自动触发 CI，测试失败时禁止合并。</li>
            <li>• 生产发布有监控与回滚方案，关键步骤有记录。</li>
            <li>• 团队成员能按照 checklist 独立完成一次上线。</li>
          </ul>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="部署 Checklist">
            <DeploymentChecklist />
          </Card>
          <Card title="流水线全景">
            <PipelineTimeline />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="环境矩阵">
            <EnvironmentMatrix />
          </Card>
          <Card title="GitHub Actions 示例">
            <GithubActionPreview />
          </Card>
        </div>
      </main>
    </div>
  )
}
