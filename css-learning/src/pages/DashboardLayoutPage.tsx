import { useState } from 'react'

export function DashboardLayoutPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const sidebarItems = [
    { icon: '🏠', label: '仪表盘', active: true },
    { icon: '📊', label: '数据分析', active: false },
    { icon: '👥', label: '用户管理', active: false },
    { icon: '📦', label: '产品管理', active: false },
    { icon: '💰', label: '订单管理', active: false },
    { icon: '⚙️', label: '系统设置', active: false },
  ]

  const stats = [
    { label: '总用户数', value: '12,345', change: '+12%', trend: 'up', color: 'bg-blue-500' },
    { label: '活跃用户', value: '8,432', change: '+8%', trend: 'up', color: 'bg-green-500' },
    { label: '总收入', value: '¥234,567', change: '+23%', trend: 'up', color: 'bg-purple-500' },
    { label: '订单数', value: '1,234', change: '-5%', trend: 'down', color: 'bg-orange-500' },
  ]

  const recentActivities = [
    { user: '张三', action: '创建了新订单', time: '2分钟前', avatar: '👨' },
    { user: '李四', action: '更新了产品信息', time: '5分钟前', avatar: '👩' },
    { user: '王五', action: '完成了支付', time: '10分钟前', avatar: '👨' },
    { user: '赵六', action: '注册了新账户', time: '15分钟前', avatar: '👩' },
  ]

  const chartData = [
    { label: '周一', value: 65 },
    { label: '周二', value: 78 },
    { label: '周三', value: 90 },
    { label: '周四', value: 81 },
    { label: '周五', value: 56 },
    { label: '周六', value: 95 },
    { label: '周日', value: 72 },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 侧边栏 */}
      <aside
        className={`fixed top-0 left-0 z-40 h-screen transition-transform duration-300 ${
          sidebarOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex h-full flex-col bg-gray-900 text-white">
          {/* Logo */}
          <div className="flex h-16 items-center justify-between px-6 border-b border-gray-700">
            <span className="text-xl font-bold">Dashboard</span>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-gray-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          {/* 导航菜单 */}
          <nav className="flex-1 space-y-2 px-3 py-4">
            {sidebarItems.map((item, index) => (
              <a
                key={index}
                href="#"
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                  item.active
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </nav>

          {/* 用户信息 */}
          <div className="border-t border-gray-700 p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-lg">
                👤
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">管理员</p>
                <p className="text-xs text-gray-400">admin@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* 主内容区 */}
      <div
        className={`transition-all duration-300 ${
          sidebarOpen ? 'lg:ml-64' : 'lg:ml-0'
        }`}
      >
        {/* 顶部栏 */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between bg-white border-b border-gray-200 px-4 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
            >
              ☰
            </button>
            <div className="relative hidden sm:block">
              <input
                type="text"
                placeholder="搜索..."
                className="w-64 rounded-lg border border-gray-300 bg-gray-50 px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative rounded-lg p-2 hover:bg-gray-100">
              <span className="text-xl">🔔</span>
              <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <button className="rounded-lg p-2 hover:bg-gray-100">
              <span className="text-xl">⚙️</span>
            </button>
          </div>
        </header>

        {/* 内容区 */}
        <main className="p-4 lg:p-8">
          {/* 页面标题 */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900 lg:text-3xl">
              仪表盘概览
            </h1>
            <p className="mt-2 text-gray-600">欢迎回来！这是您的数据概览</p>
          </div>

          {/* 统计卡片 */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className={`h-12 w-12 rounded-lg ${stat.color} bg-opacity-10`}>
                    <div className={`flex h-full items-center justify-center text-2xl`}>
                      {stat.label.includes('用户') && '👥'}
                      {stat.label.includes('收入') && '💰'}
                      {stat.label.includes('订单') && '📦'}
                    </div>
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                  <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* 图表和活动列表 */}
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {/* 图表 */}
            <div className="lg:col-span-2">
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                <h2 className="text-lg font-semibold text-gray-900">周数据趋势</h2>
                <p className="mt-1 text-sm text-gray-600">过去7天的数据统计</p>

                <div className="mt-6 flex items-end justify-between gap-2 h-64">
                  {chartData.map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-1 flex-col items-center gap-2 group"
                    >
                      <div className="relative w-full flex items-end justify-center h-48 bg-gray-50 rounded-t-lg">
                        <div
                          className="w-full max-w-[40px] bg-blue-500 rounded-t-lg transition-all duration-300 group-hover:bg-blue-600"
                          style={{ height: `${item.value}%` }}
                        >
                          <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded transition-opacity">
                            {item.value}
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-600">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 最近活动 */}
            <div>
              <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                <h2 className="text-lg font-semibold text-gray-900">最近活动</h2>
                <p className="mt-1 text-sm text-gray-600">最新的用户操作</p>

                <div className="mt-6 space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-lg">
                        {activity.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">
                          {activity.user}
                        </p>
                        <p className="text-xs text-gray-600 truncate">
                          {activity.action}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="mt-4 w-full rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50">
                  查看全部
                </button>
              </div>
            </div>
          </div>

          {/* 底部快速操作 */}
          <div className="mt-8 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white shadow-lg">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold">需要帮助？</h3>
                <p className="mt-1 text-blue-100">
                  查看我们的文档或联系支持团队
                </p>
              </div>
              <div className="flex gap-3">
                <button className="rounded-lg bg-white px-4 py-2 text-sm font-medium text-blue-600 transition-colors hover:bg-blue-50">
                  查看文档
                </button>
                <button className="rounded-lg border border-white px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10">
                  联系支持
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* 遮罩层 */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  )
}
