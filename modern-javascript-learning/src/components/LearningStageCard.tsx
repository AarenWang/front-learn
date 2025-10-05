import type { LearningStage } from '@/types'
import { Card } from './Card'
import { Button } from './Button'
import { Link } from 'react-router-dom'

interface LearningStageCardProps {
  stage: LearningStage
}

export function LearningStageCard({ stage }: LearningStageCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{stage.title}</h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">课时：{stage.duration}</p>
          </div>
          {stage.completed && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
              已完成
            </span>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{stage.description}</p>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">基础知识点：</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              {stage.foundationTopics.map((topic: string, index: number) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">项目实战：</h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 font-medium">{stage.project.name}</p>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              {stage.project.deliverables.map((deliverable: string, index: number) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  {deliverable}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Link to={stage.route}>
            <Button className="w-full">进入课时详情</Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
