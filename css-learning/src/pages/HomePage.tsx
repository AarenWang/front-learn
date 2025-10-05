import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { learningStages } from '@/types/learningStages'
import { LearningStageCard } from '@/components/LearningStageCard'
import { ThemeToggle } from '@/components/ThemeToggle'
import { Button } from '@/components/Button'

const moduleHighlights = [
  {
    id: 'm1',
    title: '模块一｜CSS 原理与规范体系',
    summary: '梳理 CSS 规范脉络，掌握语法、层叠、渲染管线等核心底层原理。'
  },
  {
    id: 'm2',
    title: '模块二｜选择器与变量机制',
    summary: '熟悉选择器、伪类、cascade layers 与 CSS 变量，建立可维护的样式结构。'
  },
  {
    id: 'm3',
    title: '模块三｜盒模型与布局体系',
    summary: '掌握盒模型、Flex 与 Grid 布局、定位体系，搭建复杂响应式页面结构。'
  },
  {
    id: 'm4',
    title: '模块四｜图层、视觉与动效',
    summary: '理解层叠上下文、滤镜、混合模式与动画，实现细腻的视觉呈现。'
  },
  {
    id: 'm5',
    title: '模块五｜响应式与交互模式',
    summary: '全面掌握媒体查询、容器查询、渐进增强与纯 CSS 交互技巧。'
  },
  {
    id: 'm6',
    title: '模块六｜现代特性与规范前沿',
    summary: '探索字体排版、逻辑属性、CSS Houdini 与最新规范趋势，保持技术敏感度。'
  }
]

export function HomePage() {
  const completedStages = learningStages.filter(stage => stage.completed).length
  const totalStages = learningStages.length
  const progressPercentage = totalStages === 0 ? 0 : (completedStages / totalStages) * 100

  const moduleCount = moduleHighlights.length
  const uniqueTopics = useMemo(() => {
    const topics = new Set<string>()
    learningStages.forEach(stage => stage.foundationTopics.forEach(topic => topics.add(topic)))
    return topics.size
  }, [])

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <header className="border-b border-slate-200/70 bg-white/80 dark:border-slate-800 dark:bg-slate-900/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-[0.45em] text-primary-600">
                CSS MASTER PLAN
              </span>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100">
                现代 CSS 规范系统学习路径
              </h1>
              <p className="text-base text-slate-600 dark:text-slate-300 max-w-3xl">
                30 个课时串联规范、布局、视觉与工程化实践，从语法层叠到底层渲染，让你从“写样式”进阶到“设计与实现视觉系统”。
              </p>
            </div>
            <ThemeToggle />
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 px-5 py-4">
                <p className="text-xs text-slate-500 uppercase tracking-[0.3em]">模块数量</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">{moduleCount}</p>
                <p className="text-xs text-slate-500">六大主题循序渐进</p>
              </div>
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 px-5 py-4">
                <p className="text-xs text-slate-500 uppercase tracking-[0.3em]">课时总数</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">{totalStages}</p>
                <p className="text-xs text-slate-500">覆盖规范与实践</p>
              </div>
              <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 px-5 py-4">
                <p className="text-xs text-slate-500 uppercase tracking-[0.3em]">知识点</p>
                <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-slate-100">{uniqueTopics}</p>
                <p className="text-xs text-slate-500">从选择器到 Houdini</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#curriculum" className="sm:w-auto">
                <Button className="w-full">浏览全部课时</Button>
              </a>
              <Link to="/playground" className="sm:w-auto">
                <Button variant="secondary" className="w-full">
                  打开 CSS Playground
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
        <section className="bg-white dark:bg-slate-900/90 rounded-3xl border border-slate-200 dark:border-slate-800 p-6 md:p-10 shadow-sm">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">学习进度仪表盘</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                结合阶段评估与项目交付物追踪学习成效，支持自主安排复习节奏。
              </p>
            </div>
            <span className="text-sm text-slate-500 dark:text-slate-400">
              已完成 {completedStages} / {totalStages} 个课时
            </span>
          </div>
          <div className="mt-6">
            <div className="h-3 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              当前进度：{progressPercentage.toFixed(1)}%，建议每周 5 课，6 周完成全程。
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">模块亮点速览</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {moduleHighlights.map(module => (
              <div
                key={module.id}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{module.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{module.summary}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="curriculum" className="space-y-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">30 课时详尽路线</h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              每一课同时覆盖基础知识、规范原文和工程实践，配套任务、验收标准与进阶资源。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {learningStages.map(stage => (
              <LearningStageCard key={stage.id} stage={stage} />
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">规范驱动</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              每一课都附带 W3C 或 MDN 原始链接，帮助你建立阅读规范的能力。
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">项目导向</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              由浅入深构建主题样式库、响应式页面与动效系统，可直接演化为真实项目。
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/80 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-3">工程实践</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              贯穿设计系统化命名、样式层设计、性能优化与团队协作策略。
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
