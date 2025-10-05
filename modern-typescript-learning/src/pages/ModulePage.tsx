import { useMemo, useState } from 'react'
import { Link, Navigate, NavLink, useParams } from 'react-router-dom'

import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { learningStages } from '@/types/learningStages'
import { CodeDisplay } from '@/components/CodeDisplay'

type ContentSegment =
  | { type: 'text'; content: string }
  | { type: 'code'; content: string; language?: string }

const codeBlockPattern = /```(\w+)?\n([\s\S]*?)```/g

function parseContentSegments(value: string): ContentSegment[] {
  const segments: ContentSegment[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = codeBlockPattern.exec(value)) !== null) {
    if (match.index > lastIndex) {
      const text = value.slice(lastIndex, match.index)
      if (text.trim()) {
        segments.push({ type: 'text', content: text })
      }
    }

    segments.push({
      type: 'code',
      content: match[2],
      language: match[1]?.trim() || undefined
    })

    lastIndex = match.index + match[0].length
  }

  const rest = value.slice(lastIndex)
  if (rest.trim()) {
    segments.push({ type: 'text', content: rest })
  }

  return segments
}

function renderContentSegments(
  value: string,
  keyPrefix: string,
  textClassName: string,
  codeClassName?: string
) {
  return parseContentSegments(value).flatMap((segment, index) => {
    if (segment.type === 'code') {
      return (
        <CodeDisplay
          key={`${keyPrefix}-code-${index}`}
          code={segment.content}
          language={segment.language}
          className={codeClassName}
        />
      )
    }

    return segment.content
      .split(/\n{2,}/)
      .map((paragraph) => paragraph.trim())
      .filter(Boolean)
      .map((paragraph, paragraphIndex) => (
        <p key={`${keyPrefix}-text-${index}-${paragraphIndex}`} className={textClassName}>
          {paragraph}
        </p>
      ))
  })
}

function CodeCompare({
  title,
  description,
  ts,
  js
}: {
  title: string
  description: string
  ts: string
  js: string
}) {
  const [view, setView] = useState<'ts' | 'js'>('ts')

  return (
    <Card title={title}>
      <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{description}</p>
      <div className="flex gap-2 mb-3">
        <Button
          variant={view === 'ts' ? 'primary' : 'secondary'}
          onClick={() => setView('ts')}
        >
          TypeScript
        </Button>
        <Button
          variant={view === 'js' ? 'primary' : 'secondary'}
          onClick={() => setView('js')}
        >
          JavaScript 输出
        </Button>
      </div>
      <pre className="bg-slate-900 text-slate-100 text-sm rounded-xl p-4 overflow-auto">
        <code>{view === 'ts' ? ts : js}</code>
      </pre>
    </Card>
  )
}

export function ModulePage() {
  const { lessonId } = useParams<{ lessonId: string }>()

  const stage = useMemo(
    () => learningStages.find((item) => item.id === lessonId),
    [lessonId]
  )

  const [checkedTasks, setCheckedTasks] = useState<string[]>([])
  const [activeMilestone, setActiveMilestone] = useState(0)

  if (!stage) {
    return <Navigate to="/404" replace />
  }

  const toggleTask = (task: string) => {
    setCheckedTasks((prev) =>
      prev.includes(task) ? prev.filter((item) => item !== task) : [...prev, task]
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <header className="bg-white/90 backdrop-blur dark:bg-slate-900/90 shadow-sm border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-primary-600 hover:text-primary-700 dark:text-primary-400">
                ← 返回课程总览
              </Link>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary-600 dark:text-primary-400">
                  Modern TypeScript Lab
                </p>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{stage.title}</h1>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="lg:w-64 lg:flex-shrink-0">
            <Card title="课程目录" className="lg:sticky lg:top-24">
              <nav className="space-y-1">
                {learningStages.map((item) => (
                  <NavLink
                    key={item.id}
                    to={item.route}
                    className={({ isActive }) =>
                      `block rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-primary-50 text-primary-600 dark:bg-primary-900/50 dark:text-primary-200 shadow-sm'
                          : 'text-slate-600 hover:text-primary-600 hover:bg-primary-50/60 dark:text-slate-400 dark:hover:text-primary-300 dark:hover:bg-slate-800/60'
                      }`
                    }
                  >
                    <span className="block truncate text-sm">{item.title}</span>
                    <span className="mt-1 block text-xs font-normal text-slate-500 dark:text-slate-500">
                      {item.description}
                    </span>
                  </NavLink>
                ))}
              </nav>
            </Card>
          </aside>

          <div className="flex-1 space-y-8">
            {/* Intro Section */}
            <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
              <Card title="课时导读">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{stage.description}</p>
              </Card>

              <Card title={stage.spotlight.label}>
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {stage.spotlight.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 inline-block w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
              <Card title="背景脉络">
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{stage.background}</p>
              </Card>

              <Card title="工具链聚焦">
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {stage.tooling.map((tool) => (
                    <li key={tool} className="flex items-center gap-2">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-300 text-xs font-semibold">
                        {tool.slice(0, 2).toUpperCase()}
                      </span>
                      <span>{tool}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>

            <section className="grid gap-6 lg:grid-cols-12">
              <Card title="知识目标" className="h-full lg:col-span-2">
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  {stage.objectives.map((objective) => (
                    <li key={objective} className="flex items-start gap-2">
                      <span className="mt-1 w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span>{objective}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card title="课程内容" className="h-full lg:col-span-8">
                {stage.courseContent ? (
                  <div className="space-y-6">
                    <div className="space-y-3">
                      {renderContentSegments(
                        stage.courseContent.summary,
                        `${stage.id}-summary`,
                        'text-slate-700 dark:text-slate-300 leading-relaxed'
                      )}
                    </div>
                    <div className="space-y-6">
                      {stage.courseContent.sections.map((section) => (
                        <div
                          key={section.title}
                          className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 p-4"
                        >
                          <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100">
                            {section.title}
                          </h4>
                          <div className="mt-2 space-y-3">
                            {renderContentSegments(
                              section.description,
                              `${section.title}-description`,
                              'text-sm text-slate-600 dark:text-slate-400 leading-relaxed'
                            )}
                          </div>
                          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-400">
                            {section.bullets.map((bullet, index) => (
                              <li key={`${section.title}-${index}`} className="flex items-start gap-2">
                                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary-500"></span>
                                <div className="flex-1 space-y-3">
                                  {renderContentSegments(
                                    bullet,
                                    `${section.title}-bullet-${index}`,
                                    'text-sm text-slate-600 dark:text-slate-400 leading-relaxed',
                                    'bg-slate-900/90'
                                  )}
                                </div>
                              </li>
                            ))}
                          </ul>
                          {section.examples?.length ? (
                            <div className="mt-4 space-y-4">
                              {section.examples.map((example, exampleIndex) => (
                                <div
                                  key={`${section.title}-example-${exampleIndex}`}
                                  className="rounded-lg border border-slate-200 bg-white/80 p-4 dark:border-slate-800 dark:bg-slate-900/50"
                                >
                                  {example.title ? (
                                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                                      {example.title}
                                    </p>
                                  ) : null}
                                  <div className="mt-2 space-y-3">
                                    {renderContentSegments(
                                      example.content,
                                      `${section.title}-example-${exampleIndex}-content`,
                                      'text-sm text-slate-600 dark:text-slate-400 leading-relaxed'
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    本课的课程内容正在编排中，敬请期待。
                  </p>
                )}
              </Card>

              <Card title="实践任务" className="h-full lg:col-span-2">
                <div className="space-y-3">
                  {stage.tasks.map((task) => (
                    <label
                      key={task}
                      className="flex items-start gap-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-3 py-2 shadow-sm"
                    >
                      <input
                        type="checkbox"
                        className="mt-1 h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
                        checked={checkedTasks.includes(task)}
                        onChange={() => toggleTask(task)}
                      />
                      <span className="text-sm text-slate-700 dark:text-slate-300">{task}</span>
                    </label>
                  ))}
                </div>
              </Card>
            </section>

            <section className="grid gap-6 lg:grid-cols-[1.3fr_1fr]">
              <Card title={stage.project.title}>
                <p className="text-slate-700 dark:text-slate-300 mb-4">{stage.project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {stage.project.milestones.map((milestone, index) => (
                    <Button
                      key={milestone}
                      variant={activeMilestone === index ? 'primary' : 'secondary'}
                      size="sm"
                      onClick={() => setActiveMilestone(index)}
                    >
                      里程碑 {index + 1}
                    </Button>
                  ))}
                </div>
                <div className="bg-slate-100 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-xl p-4">
                  <p className="text-sm text-slate-700 dark:text-slate-300">
                    {stage.project.milestones[activeMilestone]}
                  </p>
                </div>
              </Card>

              <Card title="验收标准">
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {stage.acceptanceCriteria.map((criteria) => (
                    <li key={criteria} className="flex items-start gap-2">
                      <span className="mt-1 w-2 h-2 rounded-full bg-indigo-500"></span>
                      <span>{criteria}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </section>

            {stage.codeDemo ? (
              <section>
                <CodeCompare {...stage.codeDemo} />
              </section>
            ) : null}

            <section className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
              <Card title="延伸阅读">
                <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                  {stage.resources.map((resource) => (
                    <li key={resource} className="flex items-start gap-2">
                      <span className="mt-1 w-2 h-2 rounded-full bg-amber-500"></span>
                      <span>{resource}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              <Card title="学习小结">
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  勾选任务、完成里程碑后，建议在团队内做一次分享，复盘 TypeScript 在该课题中的价值，并记录需要深入研究的盲点。
                </p>
              </Card>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
