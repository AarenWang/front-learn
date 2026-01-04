import { useState } from 'react'
import { Link } from 'react-router-dom'

type MenuItem = {
  icon: string
  label: string
  id: string
}

export function DashboardLayoutPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeMenu, setActiveMenu] = useState('dashboard')

  const sidebarItems: MenuItem[] = [
    { icon: '🏠', label: '仪表盘', id: 'dashboard' },
    { icon: '📊', label: '数据分析', id: 'analytics' },
    { icon: '👥', label: '用户管理', id: 'users' },
    { icon: '📦', label: '产品管理', id: 'products' },
    { icon: '💰', label: '订单管理', id: 'orders' },
    { icon: '⚙️', label: '系统设置', id: 'settings' },
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

  // 数据分析模块数据
  const analyticsData = {
    overview: [
      { label: '总访问量', value: '128,456', change: '+23%', trend: 'up' },
      { label: '独立访客', value: '45,678', change: '+18%', trend: 'up' },
      { label: '页面浏览', value: '345,678', change: '+15%', trend: 'up' },
      { label: '跳出率', value: '42.3%', change: '-5%', trend: 'down' },
    ],
    trafficSources: [
      { source: '直接访问', visitors: 12453, percentage: 35, color: 'bg-blue-500' },
      { source: '搜索引擎', visitors: 8934, percentage: 25, color: 'bg-green-500' },
      { source: '社交媒体', visitors: 7123, percentage: 20, color: 'bg-purple-500' },
      { source: '外部链接', visitors: 5342, percentage: 15, color: 'bg-orange-500' },
      { source: '其他', visitors: 1789, percentage: 5, color: 'bg-gray-500' },
    ],
  }

  // 用户管理模块数据
  const users = [
    {
      id: 1,
      name: '张三',
      email: 'zhangsan@example.com',
      role: '管理员',
      status: 'active',
      avatar: '👨',
      lastActive: '2分钟前',
    },
    {
      id: 2,
      name: '李四',
      email: 'lisi@example.com',
      role: '编辑',
      status: 'active',
      avatar: '👩',
      lastActive: '15分钟前',
    },
    {
      id: 3,
      name: '王五',
      email: 'wangwu@example.com',
      role: '用户',
      status: 'inactive',
      avatar: '👨',
      lastActive: '3天前',
    },
    {
      id: 4,
      name: '赵六',
      email: 'zhaoliu@example.com',
      role: '用户',
      status: 'active',
      avatar: '👩',
      lastActive: '1小时前',
    },
    {
      id: 5,
      name: '孙七',
      email: 'sunqi@example.com',
      role: '编辑',
      status: 'pending',
      avatar: '👨',
      lastActive: '从未登录',
    },
  ]

  // 产品管理模块数据
  const products = [
    {
      id: 1,
      name: '高级纯棉T恤',
      category: '服装',
      price: 199,
      stock: 999,
      status: '在售',
      image: '👕',
      sales: 1234,
    },
    {
      id: 2,
      name: '运动跑鞋',
      category: '鞋类',
      price: 599,
      stock: 50,
      status: '库存紧张',
      image: '👟',
      sales: 856,
    },
    {
      id: 3,
      name: '时尚背包',
      category: '配饰',
      price: 299,
      stock: 0,
      status: '缺货',
      image: '🎒',
      sales: 432,
    },
    {
      id: 4,
      name: '智能手表',
      category: '电子产品',
      price: 1299,
      stock: 234,
      status: '在售',
      image: '⌚',
      sales: 567,
    },
    {
      id: 5,
      name: '太阳眼镜',
      category: '配饰',
      price: 399,
      stock: 156,
      status: '在售',
      image: '🕶️',
      sales: 234,
    },
    {
      id: 6,
      name: '无线耳机',
      category: '电子产品',
      price: 899,
      stock: 12,
      status: '库存紧张',
      image: '🎧',
      sales: 678,
    },
  ]

  // 订单管理模块数据
  const orders = [
    {
      id: 'ORD-2024-001',
      customer: '张三',
      email: 'zhangsan@example.com',
      amount: 599,
      status: 'completed',
      items: 3,
      date: '2024-01-15',
      time: '14:30',
    },
    {
      id: 'ORD-2024-002',
      customer: '李四',
      email: 'lisi@example.com',
      amount: 1299,
      status: 'processing',
      items: 1,
      date: '2024-01-15',
      time: '15:45',
    },
    {
      id: 'ORD-2024-003',
      customer: '王五',
      email: 'wangwu@example.com',
      amount: 199,
      status: 'pending',
      items: 2,
      date: '2024-01-15',
      time: '16:20',
    },
    {
      id: 'ORD-2024-004',
      customer: '赵六',
      email: 'zhaoliu@example.com',
      amount: 899,
      status: 'shipped',
      items: 1,
      date: '2024-01-14',
      time: '10:15',
    },
    {
      id: 'ORD-2024-005',
      customer: '孙七',
      email: 'sunqi@example.com',
      amount: 1598,
      status: 'completed',
      items: 4,
      date: '2024-01-14',
      time: '09:30',
    },
  ]

  // 系统设置数据
  const settings = {
    general: [
      { key: 'siteName', label: '网站名称', value: '我的网站', type: 'text' as const },
      { key: 'siteUrl', label: '网站地址', value: 'https://example.com', type: 'url' as const },
      { key: 'adminEmail', label: '管理员邮箱', value: 'admin@example.com', type: 'email' as const },
      { key: 'timezone', label: '时区', value: 'Asia/Shanghai', type: 'select' as const, options: ['Asia/Shanghai', 'America/New_York', 'Europe/London'] as const },
    ],
    notifications: [
      { key: 'emailNotifications', label: '邮件通知', value: true as const, type: 'toggle' as const },
      { key: 'smsNotifications', label: '短信通知', value: false as const, type: 'toggle' as const },
      { key: 'pushNotifications', label: '推送通知', value: true as const, type: 'toggle' as const },
      { key: 'digestFrequency', label: '摘要频率', value: 'daily' as const, type: 'select' as const, options: ['daily', 'weekly', 'monthly'] as const },
    ],
    security: [
      { key: 'twoFactor', label: '双因素认证', value: false as const, type: 'toggle' as const },
      { key: 'sessionTimeout', label: '会话超时（分钟）', value: '30', type: 'number' as const },
      { key: 'passwordPolicy', label: '密码策略', value: 'strong' as const, type: 'select' as const, options: ['weak', 'medium', 'strong'] as const },
      { key: 'loginAttempts', label: '最大登录尝试次数', value: '5', type: 'number' as const },
    ],
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 顶部导航栏 */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3">
        <div className="flex items-center justify-between max-w-full">
          <div className="flex items-center gap-4">
            <Link
              to="/tailwind-learning"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span>←</span>
              <span>返回课程</span>
            </Link>
            <span className="text-gray-300">|</span>
            <h1 className="text-lg font-semibold text-gray-900">Dashboard 布局</h1>
          </div>
        </div>
      </nav>

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
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveMenu(item.id)
                  // 在移动端点击菜单后自动关闭侧边栏
                  if (window.innerWidth < 1024) {
                    setSidebarOpen(false)
                  }
                }}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 transition-colors ${
                  activeMenu === item.id
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </button>
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
          {/* 根据激活的菜单显示不同内容 */}
          {activeMenu === 'dashboard' && (
            <>
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
            </>
          )}

          {activeMenu === 'analytics' && (
            <>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                    数据分析
                  </h1>
                  <p className="mt-2 text-gray-600">查看详细的业务数据分析</p>
                </div>
                <div className="flex gap-3">
                  <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>最近7天</option>
                    <option>最近30天</option>
                    <option>最近90天</option>
                  </select>
                  <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                    导出报告
                  </button>
                </div>
              </div>

              {/* 概览卡片 */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                {analyticsData.overview.map((stat, index) => (
                  <div
                    key={index}
                    className="overflow-hidden rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5 transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">{stat.label}</span>
                      <span
                        className={`text-sm font-semibold ${
                          stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {stat.change}
                      </span>
                    </div>
                    <p className="mt-3 text-3xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                ))}
              </div>

              {/* 流量来源 */}
              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">流量来源</h2>
                  <div className="space-y-4">
                    {analyticsData.trafficSources.map((source, index) => (
                      <div key={index}>
                        <div className="mb-2 flex items-center justify-between text-sm">
                          <span className="font-medium text-gray-900">{source.source}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-600">{source.visitors.toLocaleString()}</span>
                            <span className="text-gray-400">({source.percentage}%)</span>
                          </div>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                          <div
                            className={`h-full ${source.color} transition-all duration-500`}
                            style={{ width: `${source.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 设备分布 */}
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                  <h2 className="text-lg font-semibold text-gray-900 mb-4">设备分布</h2>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="rounded-lg bg-gray-50 p-4 text-center">
                      <div className="text-3xl mb-2">📱</div>
                      <p className="text-2xl font-bold text-gray-900">65%</p>
                      <p className="text-sm text-gray-600">移动端</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4 text-center">
                      <div className="text-3xl mb-2">💻</div>
                      <p className="text-2xl font-bold text-gray-900">30%</p>
                      <p className="text-sm text-gray-600">桌面端</p>
                    </div>
                    <div className="rounded-lg bg-gray-50 p-4 text-center">
                      <div className="text-3xl mb-2">📟</div>
                      <p className="text-2xl font-bold text-gray-900">5%</p>
                      <p className="text-sm text-gray-600">平板</p>
                    </div>
                  </div>

                  {/* 转化漏斗 */}
                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">转化漏斗</h3>
                    <div className="space-y-2">
                      {[
                        { label: '访问', value: 128456, rate: 100 },
                        { label: '注册', value: 25678, rate: 20 },
                        { label: '购买', value: 5123, rate: 4 },
                      ].map((step, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <span className="w-12 text-sm text-gray-600">{step.label}</span>
                          <div className="flex-1 h-8 bg-blue-500 rounded flex items-center px-3 text-white text-sm font-medium" style={{ width: `${step.rate * 3}px` }}>
                            {step.value.toLocaleString()}
                          </div>
                          <span className="w-16 text-sm text-gray-600">{step.rate}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeMenu === 'users' && (
            <>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                    用户管理
                  </h1>
                  <p className="mt-2 text-gray-600">管理系统用户和权限</p>
                </div>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                  + 添加用户
                </button>
              </div>

              {/* 搜索和筛选 */}
              <div className="mb-6 flex flex-col gap-4 sm:flex-row">
                <div className="relative flex-1">
                  <input
                    type="text"
                    placeholder="搜索用户..."
                    className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    🔍
                  </span>
                </div>
                <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">所有角色</option>
                  <option value="admin">管理员</option>
                  <option value="editor">编辑</option>
                  <option value="user">用户</option>
                </select>
                <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="">所有状态</option>
                  <option value="active">活跃</option>
                  <option value="inactive">未激活</option>
                  <option value="pending">待审核</option>
                </select>
              </div>

              {/* 用户列表 */}
              <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-900">
                          用户
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-900">
                          邮箱
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-900">
                          角色
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-900">
                          状态
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-900">
                          最后活跃
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-900">
                          操作
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                          <td className="whitespace-nowrap px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-xl">
                                {user.avatar}
                              </div>
                              <span className="font-medium text-gray-900">
                                {user.name}
                              </span>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                            {user.email}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <span className="inline-flex rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-900">
                              {user.role}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <span
                              className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                                user.status === 'active'
                                  ? 'bg-green-100 text-green-700'
                                  : user.status === 'inactive'
                                  ? 'bg-gray-100 text-gray-700'
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}
                            >
                              {user.status === 'active' && '活跃'}
                              {user.status === 'inactive' && '未激活'}
                              {user.status === 'pending' && '待审核'}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                            {user.lastActive}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm">
                            <div className="flex items-center gap-2">
                              <button className="rounded p-1.5 text-gray-600 hover:bg-gray-100 hover:text-gray-900">
                                ✏️
                              </button>
                              <button className="rounded p-1.5 text-gray-600 hover:bg-gray-100 hover:text-red-600">
                                🗑️
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 分页 */}
                <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-6 py-4">
                  <p className="text-sm text-gray-600">
                    显示 <span className="font-medium text-gray-900">1</span> 到{' '}
                    <span className="font-medium text-gray-900">5</span> 共{' '}
                    <span className="font-medium text-gray-900">5</span> 个用户
                  </p>
                  <div className="flex gap-2">
                    <button className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50">
                      上一页
                    </button>
                    <button className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50">
                      下一页
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeMenu === 'products' && (
            <>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                    产品管理
                  </h1>
                  <p className="mt-2 text-gray-600">管理产品和库存</p>
                </div>
                <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                  + 添加产品
                </button>
              </div>

              {/* 统计卡片 */}
              <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                  <p className="text-sm text-gray-600">总产品数</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">248</p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                  <p className="text-sm text-gray-600">在售</p>
                  <p className="mt-2 text-3xl font-bold text-green-600">186</p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                  <p className="text-sm text-gray-600">库存紧张</p>
                  <p className="mt-2 text-3xl font-bold text-yellow-600">12</p>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                  <p className="text-sm text-gray-600">缺货</p>
                  <p className="mt-2 text-3xl font-bold text-red-600">50</p>
                </div>
              </div>

              {/* 产品网格 */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5 transition-shadow hover:shadow-md"
                  >
                    <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center text-8xl">
                      {product.image}
                      <div className="absolute top-3 right-3">
                        <span
                          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                            product.status === '在售'
                              ? 'bg-green-100 text-green-700'
                              : product.status === '库存紧张'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {product.status}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="mb-2">
                        <span className="text-xs font-medium text-blue-600">
                          {product.category}
                        </span>
                      </div>
                      <h3 className="font-semibold text-gray-900">
                        {product.name}
                      </h3>
                      <div className="mt-2 flex items-center justify-between">
                        <span className="text-2xl font-bold text-gray-900">
                          ¥{product.price}
                        </span>
                        <span className="text-sm text-gray-600">
                          销量 {product.sales}
                        </span>
                      </div>
                      <div className="mt-3 flex items-center justify-between text-sm">
                        <span className="text-gray-600">库存: {product.stock}</span>
                        <div className="flex gap-2">
                          <button className="rounded p-1.5 text-gray-600 hover:bg-gray-100 hover:text-blue-600">
                            ✏️
                          </button>
                          <button className="rounded p-1.5 text-gray-600 hover:bg-gray-100 hover:text-red-600">
                            🗑️
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 加载更多 */}
              <div className="mt-8 text-center">
                <button className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                  加载更多产品
                </button>
              </div>
            </>
          )}

          {activeMenu === 'orders' && (
            <>
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                    订单管理
                  </h1>
                  <p className="mt-2 text-gray-600">处理和跟踪订单</p>
                </div>
                <div className="flex gap-3">
                  <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">所有状态</option>
                    <option value="pending">待处理</option>
                    <option value="processing">处理中</option>
                    <option value="shipped">已发货</option>
                    <option value="completed">已完成</option>
                  </select>
                  <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700">
                    导出订单
                  </button>
                </div>
              </div>

              {/* 订单统计 */}
              <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                <div className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-900/5">
                  <p className="text-xs text-gray-600">总订单</p>
                  <p className="mt-1 text-2xl font-bold text-gray-900">1,234</p>
                </div>
                <div className="rounded-xl bg-yellow-50 p-4 shadow-sm ring-1 ring-gray-900/5">
                  <p className="text-xs text-yellow-700">待处理</p>
                  <p className="mt-1 text-2xl font-bold text-yellow-700">56</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-4 shadow-sm ring-1 ring-gray-900/5">
                  <p className="text-xs text-blue-700">处理中</p>
                  <p className="mt-1 text-2xl font-bold text-blue-700">78</p>
                </div>
                <div className="rounded-xl bg-purple-50 p-4 shadow-sm ring-1 ring-gray-900/5">
                  <p className="text-xs text-purple-700">已发货</p>
                  <p className="mt-1 text-2xl font-bold text-purple-700">234</p>
                </div>
                <div className="rounded-xl bg-green-50 p-4 shadow-sm ring-1 ring-gray-900/5">
                  <p className="text-xs text-green-700">已完成</p>
                  <p className="mt-1 text-2xl font-bold text-green-700">866</p>
                </div>
              </div>

              {/* 订单列表 */}
              <div className="overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-gray-900/5">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-900">
                          订单号
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-900">
                          客户
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-900">
                          金额
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-900">
                          状态
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-900">
                          商品数
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-900">
                          下单时间
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-900">
                          操作
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {orders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                          <td className="whitespace-nowrap px-6 py-4">
                            <span className="font-mono text-sm font-medium text-blue-600">
                              {order.id}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {order.customer}
                              </p>
                              <p className="text-xs text-gray-600">{order.email}</p>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-semibold text-gray-900">
                            ¥{order.amount}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            <span
                              className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
                                order.status === 'completed'
                                  ? 'bg-green-100 text-green-700'
                                  : order.status === 'processing'
                                  ? 'bg-blue-100 text-blue-700'
                                  : order.status === 'shipped'
                                  ? 'bg-purple-100 text-purple-700'
                                  : 'bg-yellow-100 text-yellow-700'
                              }`}
                            >
                              {order.status === 'completed' && '已完成'}
                              {order.status === 'processing' && '处理中'}
                              {order.status === 'shipped' && '已发货'}
                              {order.status === 'pending' && '待处理'}
                            </span>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                            {order.items}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                            <div>
                              <p>{order.date}</p>
                              <p className="text-xs">{order.time}</p>
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm">
                            <button className="rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50">
                              查看
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* 分页 */}
                <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-6 py-4">
                  <p className="text-sm text-gray-600">
                    显示 <span className="font-medium text-gray-900">1</span> 到{' '}
                    <span className="font-medium text-gray-900">5</span> 共{' '}
                    <span className="font-medium text-gray-900">1,234</span>{' '}
                    个订单
                  </p>
                  <div className="flex items-center gap-2">
                    <button className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                      上一页
                    </button>
                    <div className="flex gap-1">
                      <button className="rounded-lg border border-blue-500 bg-blue-50 px-3 py-2 text-sm font-medium text-blue-600">
                        1
                      </button>
                      <button className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        2
                      </button>
                      <button className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        3
                      </button>
                      <span className="px-2 text-gray-500">...</span>
                      <button className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                        247
                      </button>
                    </div>
                    <button className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
                      下一页
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeMenu === 'settings' && (
            <>
              <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                  系统设置
                </h1>
                <p className="mt-2 text-gray-600">配置系统参数</p>
              </div>

              <div className="space-y-6">
                {/* 基本设置 */}
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                  <h2 className="mb-4 text-lg font-semibold text-gray-900">
                    基本设置
                  </h2>
                  <div className="space-y-4">
                    {settings.general.map((setting) => (
                      <div key={setting.key}>
                        <label className="mb-1.5 block text-sm font-medium text-gray-700">
                          {setting.label}
                        </label>
                        {setting.type === 'select' ? (
                          <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            {setting.options?.map((option) => (
                              <option
                                key={option}
                                value={option}
                                selected={setting.value === option}
                              >
                                {option}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={setting.type}
                            defaultValue={setting.value}
                            className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 通知设置 */}
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                  <h2 className="mb-4 text-lg font-semibold text-gray-900">
                    通知设置
                  </h2>
                  <div className="space-y-4">
                    {settings.notifications.map((setting) => (
                      <div
                        key={setting.key}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {setting.label}
                          </p>
                        </div>
                        {setting.type === 'toggle' ? (
                          <button
                            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                              setting.value ? 'bg-blue-600' : 'bg-gray-200'
                            }`}
                          >
                            <span
                              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                setting.value
                                  ? 'translate-x-5'
                                  : 'translate-x-0'
                              }`}
                            />
                          </button>
                        ) : (
                          <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            {setting.options?.map((option) => (
                              <option
                                key={option}
                                value={option}
                                selected={setting.value === option}
                              >
                                {option === 'daily' && '每日'}
                                {option === 'weekly' && '每周'}
                                {option === 'monthly' && '每月'}
                              </option>
                            ))}
                          </select>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 安全设置 */}
                <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-900/5">
                  <h2 className="mb-4 text-lg font-semibold text-gray-900">
                    安全设置
                  </h2>
                  <div className="space-y-4">
                    {settings.security.map((setting) => (
                      <div
                        key={setting.key}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {setting.label}
                          </p>
                        </div>
                        {setting.type === 'toggle' ? (
                          <button
                            className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                              setting.value ? 'bg-blue-600' : 'bg-gray-200'
                            }`}
                          >
                            <span
                              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                                setting.value
                                  ? 'translate-x-5'
                                  : 'translate-x-0'
                              }`}
                            />
                          </button>
                        ) : setting.type === 'select' ? (
                          <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
                            {setting.options?.map((option) => (
                              <option
                                key={option}
                                value={option}
                                selected={setting.value === option}
                              >
                                {option === 'weak' && '弱'}
                                {option === 'medium' && '中'}
                                {option === 'strong' && '强'}
                              </option>
                            ))}
                          </select>
                        ) : (
                          <input
                            type={setting.type}
                            defaultValue={setting.value}
                            className="w-32 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 危险区域 */}
                <div className="rounded-xl bg-red-50 p-6 ring-1 ring-red-900/5">
                  <h2 className="mb-2 text-lg font-semibold text-red-900">
                    危险区域
                  </h2>
                  <p className="mb-4 text-sm text-red-700">
                    这些操作是不可逆的，请谨慎操作。
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button className="rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50">
                      清除所有缓存
                    </button>
                    <button className="rounded-lg border border-red-300 bg-white px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50">
                      重置所有设置
                    </button>
                    <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
                      删除所有数据
                    </button>
                  </div>
                </div>

                {/* 保存按钮 */}
                <div className="flex justify-end gap-3">
                  <button className="rounded-lg border border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">
                    取消
                  </button>
                  <button className="rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-blue-700">
                    保存更改
                  </button>
                </div>
              </div>
            </>
          )}

          {/* 图表和活动列表 - 仅在仪表盘显示 */}
          {activeMenu === 'dashboard' && (
            <>
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
            </>
          )}
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
