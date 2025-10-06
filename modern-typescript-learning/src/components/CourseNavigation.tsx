import { useState } from 'react'
import { Link } from 'react-router-dom'
import { learningStages } from '@/types/learningStages'
import { Button } from './Button'

interface CourseNavigationProps {
  currentLessonId: string
}

export function CourseNavigation({ currentLessonId }: CourseNavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const currentIndex = learningStages.findIndex(stage => stage.id === currentLessonId)
  const currentStage = learningStages[currentIndex]

  return (
    <div className="relative">
      {/* 桌面端导航按钮 */}
      <Button
        variant="secondary"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-24 z-50 shadow-lg hidden lg:flex items-center"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        课程导航
      </Button>

      {/* 移动端导航按钮 */}
      <Button
        variant="secondary"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 top-20 z-50 shadow-lg lg:hidden"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </Button>

      {/* 导航面板 */}
      {isOpen && (
        <>
          {/* 遮罩层 */}
          <div 
            className="fixed inset-0 bg-black/20 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* 课程列表 */}
          <div className="fixed left-4 top-32 z-50 w-72 lg:w-80 max-h-80 lg:max-h-96 overflow-y-auto bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 lg:left-4 right-4 lg:right-auto">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                课程导航
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                当前：{currentStage?.title}
              </p>
            </div>
            
            <div className="p-2">
              {learningStages.map((stage, index) => {
                const isCurrent = stage.id === currentLessonId
                const isCompleted = stage.completed
                
                return (
                  <Link
                    key={stage.id}
                    to={stage.route}
                    onClick={() => setIsOpen(false)}
                    className={`block p-3 rounded-lg transition-colors ${
                      isCurrent
                        ? 'bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800'
                        : 'hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                          isCurrent
                            ? 'bg-primary-600 text-white'
                            : isCompleted
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                        }`}>
                          {index + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm font-medium truncate ${
                            isCurrent
                              ? 'text-primary-900 dark:text-primary-100'
                              : 'text-slate-900 dark:text-slate-100'
                          }`}>
                            {stage.title}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                            {stage.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        {isCompleted && (
                          <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                        {isCurrent && (
                          <div className="w-2 h-2 bg-primary-600 rounded-full" />
                        )}
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
            
            <div className="p-4 border-t border-slate-200 dark:border-slate-700">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
              >
                返回课程总览
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
