import { useState } from 'react'
import { Link, Routes, Route, useNavigate, useParams, useLocation, Navigate } from 'react-router-dom'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { ThemeToggle } from '@/components/ThemeToggle'

// 模拟用户认证状态
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  return { isAuthenticated, setIsAuthenticated }
}

// 受保护的路由组件
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth()
  return isAuthenticated ? <>{children}</> : <Navigate to="/s3-routing/login" replace />
}

// 登录页面组件
function LoginPage() {
  const navigate = useNavigate()
  const { setIsAuthenticated } = useAuth()
  const [credentials, setCredentials] = useState({ username: '', password: '' })

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (credentials.username === 'admin' && credentials.password === 'password') {
      setIsAuthenticated(true)
      navigate('/s3-routing/dashboard', { replace: true })
    } else {
      alert('用户名或密码错误！请使用 admin/password')
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <Card title="登录页面">
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              用户名
            </label>
            <input
              type="text"
              value={credentials.username}
              onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="输入用户名 (admin)"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              密码
            </label>
            <input
              type="password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="输入密码 (password)"
            />
          </div>
          <Button type="submit" className="w-full">
            登录
          </Button>
        </form>
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-md">
          <p className="text-sm text-blue-800 dark:text-blue-200">
            💡 演示账号：用户名 <code>admin</code>，密码 <code>password</code>
          </p>
        </div>
      </Card>
    </div>
  )
}

// Dashboard 主页面
function DashboardPage() {
  const { setIsAuthenticated } = useAuth()
  
  const handleLogout = () => {
    setIsAuthenticated(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          Dashboard 主页面
        </h2>
        <Button variant="secondary" onClick={handleLogout}>
          退出登录
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="用户管理">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            管理用户信息、权限设置等
          </p>
          <Link to="/s3-routing/users">
            <Button className="w-full">查看用户</Button>
          </Link>
        </Card>
        
        <Card title="系统设置">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            系统配置、参数设置等
          </p>
          <Link to="/s3-routing/settings">
            <Button className="w-full">进入设置</Button>
          </Link>
        </Card>
        
        <Card title="数据统计">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            查看各种数据报表和统计信息
          </p>
          <Button className="w-full" disabled>
            即将开放
          </Button>
        </Card>
      </div>
    </div>
  )
}

// 用户列表页面
function UsersPage() {
  const navigate = useNavigate()
  const users = [
    { id: 1, name: '张三', email: 'zhangsan@example.com', role: '管理员' },
    { id: 2, name: '李四', email: 'lisi@example.com', role: '用户' },
    { id: 3, name: '王五', email: 'wangwu@example.com', role: '用户' },
  ]

  const handleUserClick = (userId: number) => {
    navigate(`/s3-routing/users/${userId}`)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          用户管理
        </h2>
        <Button onClick={() => navigate('/s3-routing/dashboard')}>
          返回 Dashboard
        </Button>
      </div>
      
      <Card title="用户列表">
        <div className="space-y-2">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
              onClick={() => handleUserClick(user.id)}
            >
              <div>
                <h3 className="font-medium text-gray-900 dark:text-gray-100">
                  {user.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {user.email}
                </p>
              </div>
              <span className="px-2 py-1 text-xs bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 rounded-full">
                {user.role}
              </span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

// 用户详情页面
function UserDetailPage() {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  
  const user = {
    id: Number(id),
    name: '张三',
    email: 'zhangsan@example.com',
    role: '管理员',
    createdAt: '2024-01-15',
    lastLogin: '2024-01-20'
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          用户详情
        </h2>
        <Button onClick={() => navigate('/s3-routing/users')}>
          返回用户列表
        </Button>
      </div>
      
      <Card title={`用户信息 - ${user.name}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              用户ID
            </label>
            <p className="text-gray-900 dark:text-gray-100">{user.id}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              姓名
            </label>
            <p className="text-gray-900 dark:text-gray-100">{user.name}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              邮箱
            </label>
            <p className="text-gray-900 dark:text-gray-100">{user.email}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              角色
            </label>
            <p className="text-gray-900 dark:text-gray-100">{user.role}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              创建时间
            </label>
            <p className="text-gray-900 dark:text-gray-100">{user.createdAt}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              最后登录
            </label>
            <p className="text-gray-900 dark:text-gray-100">{user.lastLogin}</p>
          </div>
        </div>
      </Card>
    </div>
  )
}

// 设置页面
function SettingsPage() {
  const navigate = useNavigate()
  const [settings, setSettings] = useState({
    theme: 'light',
    notifications: true,
    language: 'zh-CN'
  })

  const handleSave = () => {
    alert('设置已保存！')
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
          系统设置
        </h2>
        <Button onClick={() => navigate('/s3-routing/dashboard')}>
          返回 Dashboard
        </Button>
      </div>
      
      <Card title="偏好设置">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              主题设置
            </label>
            <select
              value={settings.theme}
              onChange={(e) => setSettings({ ...settings, theme: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="light">浅色主题</option>
              <option value="dark">深色主题</option>
              <option value="auto">跟随系统</option>
            </select>
          </div>
          
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              启用通知
            </label>
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
              className="rounded"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              语言设置
            </label>
            <select
              value={settings.language}
              onChange={(e) => setSettings({ ...settings, language: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="zh-CN">简体中文</option>
              <option value="en-US">English</option>
            </select>
          </div>
          
          <Button onClick={handleSave} className="w-full">
            保存设置
          </Button>
        </div>
      </Card>
    </div>
  )
}

// 404 页面
function NotFoundPage() {
  const navigate = useNavigate()
  
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
        页面未找到
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        抱歉，您访问的页面不存在。
      </p>
      <Button onClick={() => navigate('/s3-routing/dashboard')}>
        返回 Dashboard
      </Button>
    </div>
  )
}

export function S3RoutingPage() {
  const location = useLocation()
  
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-primary-600 hover:text-primary-700">
                ← 返回首页
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                S3 路由演示
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                当前路径: {location.pathname}
              </span>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 学习目标 */}
        <Card title="学习目标" className="mb-8">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• 掌握 React Router 的基本配置和使用</li>
            <li>• 理解嵌套路由和动态路由</li>
            <li>• 学会实现路由守卫和权限控制</li>
            <li>• 掌握路由参数和查询参数的使用</li>
            <li>• 理解 404 页面处理</li>
          </ul>
        </Card>

        {/* 任务清单 */}
        <Card title="任务清单" className="mb-8">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• 实现多页面路由导航</li>
            <li>• 创建受保护的路由（需要登录）</li>
            <li>• 实现动态路由参数传递</li>
            <li>• 添加 404 页面处理</li>
          </ul>
        </Card>

        {/* 验收标准 */}
        <Card title="验收标准" className="mb-8">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• 路由导航正常工作</li>
            <li>• 登录保护功能生效</li>
            <li>• 动态路由参数正确传递</li>
            <li>• 404 页面正确处理未知路由</li>
          </ul>
        </Card>

        {/* 路由演示 */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <DashboardPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/users" 
            element={
              <ProtectedRoute>
                <UsersPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/users/:id" 
            element={
              <ProtectedRoute>
                <UserDetailPage />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/settings" 
            element={
              <ProtectedRoute>
                <SettingsPage />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  )
}
