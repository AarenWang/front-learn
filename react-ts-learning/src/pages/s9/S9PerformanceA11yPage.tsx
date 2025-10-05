import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { ThemeToggle } from '@/components/ThemeToggle'

type LessonRecord = {
  id: number
  title: string
  duration: number
  difficulty: '入门' | '进阶' | '挑战'
}

function generateLessons(): LessonRecord[] {
  return Array.from({ length: 800 }).map((_, index) => ({
    id: index + 1,
    title: `课程 ${index + 1} · React 高效实践`,
    duration: Math.floor(Math.random() * 12) + 8,
    difficulty: index % 5 === 0 ? '挑战' : index % 2 === 0 ? '进阶' : '入门'
  }))
}

const ITEM_HEIGHT = 64
const VIEWPORT_HEIGHT = 320
const BUFFER_COUNT = 5

function VirtualizedLearningList() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const lessons = useMemo(() => generateLessons(), [])
  const [search, setSearch] = useState('')
  const [scrollTop, setScrollTop] = useState(0)
  const [favoriteIds, setFavoriteIds] = useState<number[]>([])

  const filtered = useMemo(() => {
    if (!search.trim()) return lessons
    return lessons.filter(lesson => lesson.title.toLowerCase().includes(search.toLowerCase()))
  }, [lessons, search])

  const totalHeight = filtered.length * ITEM_HEIGHT
  const startIndex = Math.max(0, Math.floor(scrollTop / ITEM_HEIGHT) - BUFFER_COUNT)
  const endIndex = Math.min(
    filtered.length,
    Math.ceil((scrollTop + VIEWPORT_HEIGHT) / ITEM_HEIGHT) + BUFFER_COUNT
  )
  const visibleItems = filtered.slice(startIndex, endIndex)

  const onScroll = useCallback(() => {
    if (!containerRef.current) return
    setScrollTop(containerRef.current.scrollTop)
  }, [])

  const toggleFavorite = (id: number) => {
    setFavoriteIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    )
  }

  const favoriteCount = favoriteIds.length

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">虚拟滚动列表</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            一次只渲染 {visibleItems.length} 条数据，节省 DOM，体验真实的性能优化。
          </p>
        </div>
        <div className="flex gap-2">
          <input
            value={search}
            onChange={event => setSearch(event.target.value)}
            placeholder="搜索课程关键词..."
            className="px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Button variant="secondary" onClick={() => setFavoriteIds([])}>
            清空收藏
          </Button>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
        <div className="flex items-center justify-between px-4 py-2 text-xs text-gray-600 dark:text-gray-400">
          <span>共 {filtered.length} 节课 · 当前渲染 {visibleItems.length}</span>
          <span>收藏 {favoriteCount} 节</span>
        </div>
        <div
          ref={containerRef}
          className="relative h-80 overflow-y-auto"
          onScroll={onScroll}
        >
          <div style={{ height: totalHeight }}>
            <div style={{ transform: `translateY(${startIndex * ITEM_HEIGHT}px)` }}>
              {visibleItems.map(lesson => (
                <div
                  key={lesson.id}
                  className="flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900"
                  style={{ height: ITEM_HEIGHT }}
                >
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">{lesson.title}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      时长 {lesson.duration} 分钟 · 难度 {lesson.difficulty}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleFavorite(lesson.id)}
                    className={`text-xs px-3 py-1 rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                      favoriteIds.includes(lesson.id)
                        ? 'border-primary-500 bg-primary-100 text-primary-700'
                        : 'border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-primary-400'
                    }`}
                  >
                    {favoriteIds.includes(lesson.id) ? '已收藏' : '收藏' }
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400">
        实战建议：在真实项目中可以结合 React Query 的 keepPreviousData 与 Suspense，进一步提升滚动分页体验。
      </p>
    </div>
  )
}

function AccessibleModalDemo() {
  const [open, setOpen] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    if (open) {
      closeButtonRef.current?.focus()
    }
  }, [open])

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setOpen(false)
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const listener = (event: KeyboardEvent) => handleKeyDown(event)
    window.addEventListener('keydown', listener)
    return () => window.removeEventListener('keydown', listener)
  }, [open, handleKeyDown])

  return (
    <div className="space-y-4">
      <Button onClick={() => setOpen(true)}>打开可访问性模态框</Button>
      {open && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 px-4"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="a11y-modal-title"
            aria-describedby="a11y-modal-desc"
            className="max-w-md w-full rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-2xl"
            onClick={event => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 id="a11y-modal-title" className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  可访问性校验清单
                </h3>
                <p id="a11y-modal-desc" className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  支持键盘关闭 (Esc)、焦点自动回到关闭按钮，并使用语义化属性。
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                关闭
              </button>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300 list-disc pl-5">
              <li>角色(role) 与 aria 属性明确告知屏幕阅读器。</li>
              <li>通过 focus 管理保证键盘用户体验。</li>
              <li>背景加上半透明遮罩，提示用户处于模态状态。</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

function PerformanceChecklist() {
  return (
    <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
      <li>• 利用 React.lazy + Suspense 做路由级懒加载，避免一次性加载所有阶段页面。</li>
      <li>• 善用 useMemo/useCallback 缓存计算，搭配 useTransition 提升交互流畅度。</li>
      <li>• 对列表使用虚拟滚动或分页，结合骨架屏提升感知体验。</li>
      <li>• a11y 方面：保证焦点顺序、aria-label、对比度，使用 Lighthouse 定期巡检。</li>
    </ul>
  )
}

function CodeInsights() {
  return (
    <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">Suspense 分片渲染</h4>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto">
{`const UserList = lazy(() => import('./UserList'))

export function Dashboard() {
  return (
    <Suspense fallback={<Spinner />}>
      <UserList />
    </Suspense>
  )
}`}
        </pre>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">useId 辅助可访问性</h4>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto">
{`const id = useId()
return (
  <>
    <label htmlFor={id}>搜索课程</label>
    <input id={id} aria-describedby={id + '-hint'} />
  </>
)`}
        </pre>
      </div>
    </div>
  )
}

export function S9PerformanceA11yPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-primary-600 hover:text-primary-700">
                ← 返回首页
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">S9 性能与可访问性</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Card title="学习目标">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 掌握列表虚拟化、懒加载等前端性能优化策略。</li>
            <li>• 理解可访问性基准，学会为组件增加语义化支持。</li>
            <li>• 能够通过工具（Lighthouse、React Profiler）定位瓶颈并制定优化计划。</li>
          </ul>
        </Card>

        <Card title="任务清单">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 为课程列表加入虚拟滚动或分页，并提供骨架屏。</li>
            <li>• 实现可访问的模态框/对话框，确保键盘交互与 aria 属性完整。</li>
            <li>• 撰写性能报告：记录优化前后的加载/交互指标。</li>
          </ul>
        </Card>

        <Card title="验收标准">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 列表滚动流畅，首屏加载时间得到控制，指标有数据支撑。</li>
            <li>• 所有交互均可通过键盘操作，焦点管理正确。</li>
            <li>• 能解释每个优化手段的适用场景与取舍。</li>
          </ul>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="虚拟滚动 · 性能演练">
            <VirtualizedLearningList />
          </Card>
          <Card title="可访问模态框">
            <AccessibleModalDemo />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="优化清单">
            <PerformanceChecklist />
          </Card>
          <Card title="代码要点">
            <CodeInsights />
          </Card>
        </div>
      </main>
    </div>
  )
}
