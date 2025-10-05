import { learningStages } from '@/types/learningStages'
import { LearningStageCard } from '@/components/LearningStageCard'
import { ThemeToggle } from '@/components/ThemeToggle'

export function HomePage() {
  const completedStages = learningStages.filter((stage) => stage.completed).length
  const totalStages = learningStages.length
  const progressPercentage = (completedStages / totalStages) * 100

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur dark:bg-slate-900/90 shadow-sm border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex flex-col">
              <span className="text-sm uppercase tracking-widest text-primary-600 dark:text-primary-400">
                Modern TypeScript Lab
              </span>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                现代 TypeScript 16 课交互式学习路径
              </h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* Progress Section */}
        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="bg-white dark:bg-slate-900 rounded-2xl shadow p-6 border border-slate-100 dark:border-slate-800">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">学习进度</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  共 16 个课时，覆盖 TypeScript 起源、类型系统与工程化实战。
                </p>
              </div>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                {completedStages} / {totalStages} 个课时
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2">
              <div
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
              完成进度：{progressPercentage.toFixed(1)}%
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-500 to-indigo-600 text-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-semibold mb-2">课程亮点</h3>
            <ul className="space-y-2 text-sm text-primary-50">
              <li>• 以 TypeScript 起源、生态与现代工程场景为主线</li>
              <li>• 理论 + 实战双轨，每课都有项目里程碑</li>
              <li>• 代码示例支持 TS ⇆ JS 对照，理解编译链</li>
            </ul>
          </div>
        </section>

        {/* Learning Stages Grid */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">课时概览</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningStages.map((stage) => (
              <LearningStageCard key={stage.id} stage={stage} />
            ))}
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-xl bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 ml-3">理解语言演化</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              从起源故事到 TC39 流程，系统了解 TypeScript 如何与 JavaScript 标准共进，建立扎实的背景知识。
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/50 dark:text-emerald-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .843-3 1.882v4.235C9 15.157 10.343 16 12 16s3-.843 3-1.883V9.882C15 8.843 13.657 8 12 8z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9v5c0 3.866-3.582 7-8 7s-8-3.134-8-7V9" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 ml-3">类型系统深度</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              覆盖基础类型、泛型、条件类型与类型守卫，结合代码演练理解 TypeScript 的结构化类型系统。
            </p>
          </div>

          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow p-6">
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-xl bg-indigo-100 text-indigo-600 dark:bg-indigo-900/50 dark:text-indigo-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 ml-3">工具链与实战</h3>
            </div>
            <p className="text-slate-600 dark:text-slate-400">
              深入 tsc、tsconfig、tsup、React、Node.js 等场景，打通从源码到部署的完整 TypeScript 工程链路。
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-slate-500 dark:text-slate-400 pb-10">
          <p>基于 AI Vibing Code 学习体系，专注 TypeScript 语言与工程实践。</p>
        </footer>
      </main>
    </div>
  )
}
