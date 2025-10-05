import { Link } from 'react-router-dom'
import { Card } from '@/components/Card'
import { ThemeToggle } from '@/components/ThemeToggle'

export function S7StylingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-primary-600 hover:text-primary-700">
                ← 返回首页
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                S7 样式体系
              </h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card title="S7 样式体系">
          <p className="text-gray-600 dark:text-gray-400">
            此页面正在开发中，将包含 Tailwind CSS 和响应式设计的演示。
          </p>
        </Card>
      </main>
    </div>
  )
}
