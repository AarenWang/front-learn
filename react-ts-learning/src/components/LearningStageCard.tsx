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
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{stage.title}</h3>
          {stage.completed && (
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
              已完成
            </span>
          )}
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">{stage.description}</p>
        
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">学习目标：</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              {stage.objectives.map((objective: string, index: number) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></span>
                  {objective}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">任务清单：</h4>
            <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
              {stage.tasks.map((task: string, index: number) => (
                <li key={index} className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <Link to={stage.route}>
            <Button className="w-full">
              开始学习
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  )
}
