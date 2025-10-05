import type { LearningStage } from '@/types'
import { Card } from './Card'
import { Button } from './Button'
import { Link } from 'react-router-dom'

interface LearningStageCardProps {
  stage: LearningStage
}

export function LearningStageCard({ stage }: LearningStageCardProps) {
  return (
    <Card className="hover:shadow-elevated transition-shadow duration-300 border border-slate-200 dark:border-slate-800">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div className="space-y-2">
            <span className="inline-flex items-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-600/20 dark:text-primary-200 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
              {stage.module.title}
            </span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{stage.title}</h3>
            <p className="text-xs text-slate-400">课时时长：{stage.duration}</p>
          </div>
          {stage.completed && (
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-200">
              已完成
            </span>
          )}
        </div>

        <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">{stage.description}</p>

        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">核心知识点</h4>
            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
              {stage.foundationTopics.map((topic: string, index: number) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2">项目演练：{stage.project.name}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-2">{stage.project.description}</p>
            <ul className="text-sm text-slate-600 dark:text-slate-300 space-y-1">
              {stage.project.deliverables.map((deliverable: string, index: number) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
          <Link to={stage.route}>
            <Button className="w-full">查看课时详情</Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
