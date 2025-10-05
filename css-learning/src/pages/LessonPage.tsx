import { useEffect, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { learningStages } from '@/types/learningStages'
import { Button } from '@/components/Button'

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
