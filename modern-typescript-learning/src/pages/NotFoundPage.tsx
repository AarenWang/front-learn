import { Link } from 'react-router-dom'
import { Button } from '@/components/Button'

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
            页面未找到
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            抱歉，您访问的页面不存在或已被移除。
          </p>
        </div>
        
        <Link to="/">
          <Button variant="primary">
            返回首页
          </Button>
        </Link>
      </div>
    </div>
  )
}
