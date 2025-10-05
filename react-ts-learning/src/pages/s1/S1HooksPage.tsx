import { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { ThemeToggle } from '@/components/ThemeToggle'

// S1 示例：搜索防抖
function SearchWithDebounce() {
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedTerm, setDebouncedTerm] = useState('')
  const [results, setResults] = useState<string[]>([])

  // 防抖效果
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm)
    }, 500)

    return () => clearTimeout(timer)
  }, [searchTerm])

  // 模拟搜索结果
  useEffect(() => {
    if (debouncedTerm) {
      const mockResults = [
        `${debouncedTerm} - 结果1`,
        `${debouncedTerm} - 结果2`,
        `${debouncedTerm} - 结果3`
      ]
      setResults(mockResults)
    } else {
      setResults([])
    }
  }, [debouncedTerm])

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">搜索防抖演示</h3>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="输入搜索关键词..."
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 mb-4"
      />
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        搜索词: {searchTerm} | 防抖后: {debouncedTerm}
      </div>
      <div className="space-y-2">
        {results.map((result, index) => (
          <div key={index} className="p-2 bg-gray-100 dark:bg-gray-700 rounded">
            {result}
          </div>
        ))}
      </div>
    </div>
  )
}

// S1 示例：useMemo 和 useCallback
function ExpensiveCalculation() {
  const [count, setCount] = useState(0)
  const [multiplier, setMultiplier] = useState(1)
  const renderCount = useRef(0)

  // 每次渲染时增加计数
  renderCount.current += 1

  // 使用 useMemo 缓存计算结果
  const expensiveValue = useMemo(() => {
    console.log('执行昂贵计算...')
    return count * multiplier * 1000
  }, [count, multiplier])

  // 使用 useCallback 缓存函数
  const handleIncrement = useCallback(() => {
    setCount(prev => prev + 1)
  }, [])

  const handleMultiplierChange = useCallback((newMultiplier: number) => {
    setMultiplier(newMultiplier)
  }, [])

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">useMemo 和 useCallback 演示</h3>
      <div className="space-y-4">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            组件渲染次数: {renderCount.current}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            计算结果: {expensiveValue}
          </p>
        </div>

        <div className="flex gap-2">
          <Button onClick={handleIncrement}>
            增加计数 ({count})
          </Button>
          <Button onClick={() => setCount(0)}>
            重置计数
          </Button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            乘数: {multiplier}
          </label>
          <input
            type="range"
            min="1"
            max="10"
            value={multiplier}
            onChange={(e) => handleMultiplierChange(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

export function S1HooksPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-primary-600 hover:text-primary-700">
                ← 返回首页
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                S1 Hooks 核心
              </h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 学习目标 */}
        <Card title="学习目标" className="mb-8">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• 掌握 useState 状态管理</li>
            <li>• 理解 useEffect 副作用处理</li>
            <li>• 学会使用 useRef 访问 DOM</li>
            <li>• 掌握 useMemo 性能优化</li>
            <li>• 学会 useCallback 函数缓存</li>
          </ul>
        </Card>

        {/* 任务清单 */}
        <Card title="任务清单" className="mb-8">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• 实现搜索防抖功能</li>
            <li>• 使用 useMemo 优化计算性能</li>
            <li>• 使用 useCallback 缓存函数</li>
          </ul>
        </Card>

        {/* 验收标准 */}
        <Card title="验收标准" className="mb-8">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• 理解副作用依赖数组的作用</li>
            <li>• 正确使用 memo 化函数避免不必要的重渲染</li>
            <li>• 掌握不同 Hook 的使用场景</li>
          </ul>
        </Card>

        {/* 演示项目 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="搜索防抖演示">
            <SearchWithDebounce />
          </Card>

          <Card title="性能优化演示">
            <ExpensiveCalculation />
          </Card>
        </div>

        {/* 代码示例 */}
        <Card title="代码要点" className="mt-8">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                1. useEffect 防抖
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedTerm(searchTerm)
  }, 500)

  return () => clearTimeout(timer)
}, [searchTerm])`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                2. useMemo 缓存计算
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`const expensiveValue = useMemo(() => {
  return count * multiplier * 1000
}, [count, multiplier])`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                3. useCallback 缓存函数
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`const handleIncrement = useCallback(() => {
  setCount(prev => prev + 1)
}, [])`}</code>
              </pre>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
