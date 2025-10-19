import { Link, useParams } from 'react-router-dom'
import { learningStages } from '@/types/learningStages'

interface CourseNavigationProps {
  currentLessonSlug?: string
}

export function CourseNavigation({ currentLessonSlug }: CourseNavigationProps) {
  const { lessonSlug } = useParams<{ lessonSlug: string }>()

  // Use currentLessonSlug prop if provided, otherwise use the slug from URL params
  const activeSlug = currentLessonSlug || lessonSlug

  const currentIndex = learningStages.findIndex(stage => stage.route === `/lessons/${activeSlug}`)
  const currentStage = learningStages[currentIndex]

  return (
    <div className="bg-white dark:bg-slate-900/80 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 p-6">
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">课程导航</h3>
          {currentStage && (
            <p className="text-sm text-slate-600 dark:text-slate-400">当前：{currentStage.title}</p>
          )}
        </div>

        <div className="space-y-2">
          {learningStages.map((stage, index) => {
            const isCurrent = stage.route === `/lessons/${activeSlug}`

            return (
              <Link
                key={stage.id}
                to={stage.route}
                className={`block p-3 rounded-lg transition-colors ${
                  isCurrent
                    ? 'bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800'
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      isCurrent
                        ? 'bg-primary-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm font-medium truncate ${
                        isCurrent
                          ? 'text-primary-900 dark:text-primary-100'
                          : 'text-slate-900 dark:text-slate-100'
                      }`}
                    >
                      {stage.title}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      {stage.duration} · {stage.description}
                    </p>
                  </div>

                  {isCurrent && <div className="w-2 h-2 bg-primary-600 rounded-full" />}
                </div>
              </Link>
            )
          })}
        </div>

        <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
          <Link
            to="/"
            className="block w-full text-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            返回课程总览
          </Link>
        </div>
      </div>
    </div>
  )
}
