import { Link } from 'react-router-dom'
import { Button } from '@/components/Button'

export function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 flex items-center justify-center px-4">
      <div className="text-center space-y-6">
        <div>
          <h1 className="text-8xl font-black text-primary-600">404</h1>
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mt-4">页面暂未纳入样式体系</h2>
          <p className="text-slate-600 dark:text-slate-300 mt-2">
            你访问的地址不在本次 CSS 学习路径中，返回首页选择一个课时或进入 Playground 继续实验。
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/">
            <Button>返回首页</Button>
          </Link>
          <Link to="/playground">
            <Button variant="secondary">前往 CSS Playground</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
