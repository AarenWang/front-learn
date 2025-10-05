import { useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { learningStages } from '@/types/learningStages'
import type { LessonSectionType } from '@/types'
import { Button } from '@/components/Button'

const sectionTypeLabelMap: Record<LessonSectionType, string> = {
  theory: '知识讲解',
  activity: '课堂实践',
  project: '项目实战',
  reflection: '复盘总结'
}

const sectionTypeClassMap: Record<LessonSectionType, string> = {
  theory: 'bg-primary-100 text-primary-700 dark:bg-primary-900/60 dark:text-primary-200',
  activity: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-200',
  project: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-200',
  reflection: 'bg-sky-100 text-sky-700 dark:bg-sky-900/50 dark:text-sky-200'
}

export function LessonPage() {
  const { lessonSlug } = useParams<{ lessonSlug: string }>()
  const navigate = useNavigate()

  const stage = useMemo(
    () => learningStages.find(item => item.route === `/lessons/${lessonSlug}`),
    [lessonSlug]
  )

  useEffect(() => {
    if (!stage) {
      navigate('/404', { replace: true })
    }
  }, [stage, navigate])

  if (!stage) {
    return null
  }

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <div className="bg-white/85 dark:bg-slate-900/85 backdrop-blur border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary-600">
              {stage.module.title}
            </p>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-2">{stage.title}</h1>
            <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
              {stage.duration} · {stage.description}
            </p>
          </div>
          <Button variant="secondary" onClick={() => navigate(-1)}>
            返回
          </Button>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {stage.teachingSections && stage.teachingSections.length > 0 ? (
          <section className="space-y-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">教学设计</h2>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                结合课堂讲解、即时演示与项目操练，帮助你将 {stage.title} 的知识点真正落地到可交付成果。
              </p>
            </div>
            <div className="space-y-4">
              {stage.teachingSections.map(section => (
                <article
                  key={section.id}
                  className="bg-white dark:bg-slate-900/80 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-6 space-y-4"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex-1 space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        {section.type ? (
                          <span
                            className={`text-xs font-semibold tracking-[0.25em] px-3 py-1 rounded-full ${sectionTypeClassMap[section.type]}`}
                          >
                            {sectionTypeLabelMap[section.type]}
                          </span>
                        ) : null}
                        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">{section.title}</h3>
                        {section.duration ? (
                          <span className="text-xs text-slate-500 dark:text-slate-400">约 {section.duration}</span>
                        ) : null}
                      </div>
                      {section.description ? (
                        <p className="text-sm text-slate-600 dark:text-slate-300">{section.description}</p>
                      ) : null}
                      {section.focus ? (
                        <p className="text-xs font-medium text-primary-600 dark:text-primary-300">聚焦：{section.focus}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="space-y-3">
                    {section.items.map(item => (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-slate-200/70 dark:border-slate-700/70 bg-slate-50/70 dark:bg-slate-900/60 p-4"
                      >
                        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.title}</p>
                        <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{item.detail}</p>
                      </div>
                    ))}
                  </div>
                  {section.tools && section.tools.length > 0 ? (
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      配套工具：{section.tools.join(' / ')}
                    </p>
                  ) : null}
                  {section.outcome ? (
                    <p className="text-sm font-medium text-primary-700 dark:text-primary-300">预期产出：{section.outcome}</p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ) : null}

        <section className="bg-white dark:bg-slate-900/80 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">课时目标</h2>
          <ul className="space-y-3 text-slate-600 dark:text-slate-300">
            {stage.foundationTopics.map((topic, index) => (
              <li key={index} className="flex items-start">
                <span className="mt-1 w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white dark:bg-slate-900/80 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">项目演练 · {stage.project.name}</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">{stage.project.description}</p>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">交付物</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              {stage.project.deliverables.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="mt-1 w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900/80 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">实践任务</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              {stage.practiceTasks.map((task, index) => (
                <li key={index} className="flex items-start">
                  <span className="mt-1 w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-900/80 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">验收标准</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              {stage.acceptanceCriteria.map((criterion, index) => (
                <li key={index} className="flex items-start">
                  <span className="mt-1 w-2 h-2 bg-primary-500 rounded-full mr-3"></span>
                  <span>{criterion}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-900/80 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">进阶资源</h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-300">
              {stage.resources.map(resource => (
                <li key={resource.url}>
                  <a
                    href={resource.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary-600 dark:text-primary-300 hover:underline"
                  >
                    {resource.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
