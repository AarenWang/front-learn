import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { ThemeToggle } from '@/components/ThemeToggle'

type TestType = 'unit' | 'component' | 'integration'

type TestCase = {
  id: number
  name: string
  description: string
  type: TestType
  status: 'pending' | 'passed' | 'failed'
  duration: number
}

const initialTests: TestCase[] = [
  {
    id: 1,
    name: 'Button renders correctly',
    description: '确保 Button 组件支持不同 variant/size 组合。',
    type: 'component',
    status: 'pending',
    duration: 1.2
  },
  {
    id: 2,
    name: 'useUsers hook handles error',
    description: 'Mock Axios 请求，断言错误信息被展示。',
    type: 'integration',
    status: 'pending',
    duration: 2.4
  },
  {
    id: 3,
    name: 'task store transitions',
    description: 'Zustand store 状态流转符合业务预期。',
    type: 'unit',
    status: 'pending',
    duration: 0.8
  },
  {
    id: 4,
    name: 'S4 pagination renders',
    description: '分页切换后列表与详情同步刷新。',
    type: 'integration',
    status: 'pending',
    duration: 3.1
  }
]

function TestStatusBadge({ status }: { status: TestCase['status'] }) {
  const style = {
    pending: 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
    passed: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-200',
    failed: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-200'
  }[status]
  const label = {
    pending: '等待运行',
    passed: '通过',
    failed: '失败'
  }[status]
  return <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${style}`}>{label}</span>
}

function TestingPlayground() {
  const [tests, setTests] = useState<TestCase[]>(initialTests)
  const [logs, setLogs] = useState<string[]>([])

  const passRate = useMemo(() => {
    const total = tests.length
    const passed = tests.filter(test => test.status === 'passed').length
    return total === 0 ? 0 : Math.round((passed / total) * 100)
  }, [tests])

  const totalDuration = useMemo(() => tests.reduce((sum, test) => sum + test.duration, 0), [tests])

  const runSuite = (mode: 'happy' | 'chaos') => {
    setTests(prev =>
      prev.map(test => {
        if (mode === 'happy') {
          return { ...test, status: 'passed' }
        }
        if (test.type === 'integration') {
          return { ...test, status: Math.random() > 0.5 ? 'failed' : 'passed' }
        }
        return { ...test, status: 'passed' }
      })
    )
    setLogs(prev => [
      `${new Date().toLocaleTimeString()} · 运行模式 ${mode === 'happy' ? 'Happy Path' : 'Chaos'}，请查看结果`,
      ...prev
    ])
  }

  const reset = () => {
    setTests(initialTests)
    setLogs([])
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Button onClick={() => runSuite('happy')}>运行 Happy Path</Button>
        <Button variant="secondary" onClick={() => runSuite('chaos')}>
          Chaos 模式
        </Button>
        <Button variant="secondary" onClick={reset}>
          重置状态
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tests.map(test => (
          <div
            key={test.id}
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 space-y-3 shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">{test.name}</h4>
              <TestStatusBadge status={test.status} />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">{test.description}</p>
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>{test.type === 'unit' ? '单元测试' : test.type === 'component' ? '组件测试' : '集成测试'}</span>
              <span>{test.duration.toFixed(1)}s</span>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={() =>
                  setTests(prev =>
                    prev.map(item =>
                      item.id === test.id ? { ...item, status: 'passed' } : item
                    )
                  )
                }
              >
                标记通过
              </Button>
              <Button
                size="sm"
                variant="danger"
                onClick={() =>
                  setTests(prev =>
                    prev.map(item =>
                      item.id === test.id ? { ...item, status: 'failed' } : item
                    )
                  )
                }
              >
                标记失败
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-gray-900 text-gray-100 p-4 text-sm space-y-2">
        <div className="flex items-center justify-between">
          <span>测试通过率</span>
          <span>{passRate}%</span>
        </div>
        <div className="w-full h-2 rounded-full bg-gray-700">
          <div
            className="h-2 rounded-full bg-emerald-400"
            style={{ width: `${passRate}%` }}
          />
        </div>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>预计运行耗时</span>
          <span>{totalDuration.toFixed(1)}s</span>
        </div>
      </div>

      <div>
        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">运行日志</h4>
        <div className="max-h-32 overflow-y-auto rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-xs text-gray-600 dark:text-gray-300 p-3 space-y-1">
          {logs.length === 0 ? <p>暂未运行测试，点击上方按钮试试。</p> : logs.map((log, index) => <p key={index}>{log}</p>)}
        </div>
      </div>
    </div>
  )
}

function TestPyramid() {
  const structure = [
    { label: 'E2E / 集成测试', ratio: 20, description: '验证关键用户旅程与跨模块流程。' },
    { label: '组件测试', ratio: 30, description: '以真实 UI + 状态组合驱动，确保交互正确。' },
    { label: '单元测试', ratio: 50, description: '覆盖纯函数、store、hooks 等逻辑层。' }
  ]

  return (
    <div className="space-y-4">
      {structure.map(item => (
        <div key={item.label} className="space-y-1">
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <span>{item.label}</span>
            <span>{item.ratio}%</span>
          </div>
          <div className="h-3 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
            <div className="h-3 bg-primary-500" style={{ width: `${item.ratio}%` }} />
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-300">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

function TestingChecklist() {
  const checklist = [
    '为关键 Hook/组件编写 Vitest + Testing Library 测试。',
    '利用 MSW mock API，覆盖成功与失败态。',
    'CI 中运行 pnpm test -- --run --coverage，并上传覆盖率报告。',
    '把测试指引写进 CONTRIBUTING.md，降低协作门槛。'
  ]

  return (
    <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 dark:text-gray-300">
      {checklist.map(item => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function CodeSamples() {
  return (
    <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">1. 组件测试</h4>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto">
{`import { render, screen } from '@testing-library/react'
import { Button } from '@/components/Button'

test('render primary button', () => {
  render(<Button>提交</Button>)
  expect(screen.getByRole('button', { name: '提交' })).toBeEnabled()
})`}
        </pre>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Hook 测试</h4>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto">
{`import { renderHook, act } from '@testing-library/react'
import { useTaskStore } from '@/store/task'

test('advance status to done', () => {
  const { result } = renderHook(() => useTaskStore())
  act(() => result.current.advanceStatus(1))
  expect(result.current.tasks[0].status).toBe('in-progress')
})`}
        </pre>
      </div>
    </div>
  )
}

export function S8TestingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-primary-600 hover:text-primary-700">
                ← 返回首页
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">S8 测试实践</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Card title="学习目标">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 建立测试金字塔意识：区分单元、组件、集成测试的关注点。</li>
            <li>• 掌握 Vitest + Testing Library 的常用断言与用户行为模拟。</li>
            <li>• 能在 CI 中集成测试命令，并用覆盖率指标衡量质量。</li>
          </ul>
        </Card>

        <Card title="任务清单">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 为 Stage S4 的数据获取逻辑编写集成测试，Mock 成功/失败两种响应。</li>
            <li>• 编写 Zustand store 的单元测试，验证状态流转。</li>
            <li>• 在 package.json 中新增 `test:ci` 脚本，输出覆盖率报告。</li>
          </ul>
        </Card>

        <Card title="验收标准">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 测试可重复运行，避免硬编码时间或随机数造成不稳定。</li>
            <li>• 每个测试说明“行为/期望”，见证价值而非重复实现细节。</li>
            <li>• 能在代码评审中解释测试覆盖的业务场景与边界。</li>
          </ul>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <Card title="测试演练场">
            <TestingPlayground />
          </Card>
          <Card title="测试金字塔指南">
            <TestPyramid />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="测试清单">
            <TestingChecklist />
          </Card>
          <Card title="代码示例">
            <CodeSamples />
          </Card>
        </div>
      </main>
    </div>
  )
}
