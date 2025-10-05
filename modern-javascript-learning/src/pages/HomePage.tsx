import { learningStages } from '@/types/learningStages'
import { LearningStageCard } from '@/components/LearningStageCard'
import { ThemeToggle } from '@/components/ThemeToggle'

export function HomePage() {
  const completedStages = learningStages.filter(stage => stage.completed).length
  const totalStages = learningStages.length
  const progressPercentage = totalStages === 0 ? 0 : (completedStages / totalStages) * 100

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">现代 JavaScript 学习路径</h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                16 个课时覆盖基础知识与项目实战，系统掌握现代 JavaScript 能力
              </p>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">学习进度</h2>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {completedStages} / {totalStages} 个课时
              </span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">完成进度：{progressPercentage.toFixed(1)}%</p>
          </div>
        </div>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">16 课时概览</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningStages.map(stage => (
              <LearningStageCard key={stage.id} stage={stage} />
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6V4m0 2a8 8 0 100 16 8 8 0 000-16zm0 0v2m0 8v2m8-8h-2M6 12H4"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 ml-3">基础 + 实战双线</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              每个课时同时覆盖语言核心概念与对应实战项目，确保知识落地。
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 ml-3">全链路能力建设</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              从语法、模块化、构建、质量到部署监控，打造现代 JavaScript 全链路能力。
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m2-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 ml-3">项目驱动成长</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              定义明确的交付物与验收标准，帮助你快速积累可展示的项目成果。
            </p>
          </div>
        </section>

        <div className="text-center text-gray-500 dark:text-gray-400">
          <p>基于现代 JavaScript 生态的系统化学习指南</p>
        </div>
      </main>
    </div>
  )
}
