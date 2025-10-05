import { useState } from 'react'
import { Link } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { useUsers } from '@/hooks/useUsers'
import { useUserPosts as useUserPostsHook } from '@/hooks/usePosts'
import { userApi, type User } from '@/services/api'

// 创建 QueryClient 实例
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
})

// 基础 Axios 演示组件
function AxiosDemo() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fetchUsers = async () => {
    setLoading(true)
    setError(null)
    try {
      const data = await userApi.getUsers()
      setUsers(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : '获取用户失败')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button onClick={fetchUsers} loading={loading}>
          获取用户数据
        </Button>
        <Button 
          variant="secondary" 
          onClick={() => setUsers([])}
          disabled={loading}
        >
          清空数据
        </Button>
      </div>

      {error && (
        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <p className="text-red-800 dark:text-red-200 text-sm">错误: {error}</p>
        </div>
      )}

      {users.length > 0 && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900 dark:text-gray-100">
            用户列表 ({users.length})
          </h4>
          <div className="max-h-60 overflow-y-auto space-y-2">
            {users.slice(0, 5).map((user) => (
              <div
                key={user.id}
                className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  {user.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {user.email}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  {user.company.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// React Query 基础演示
function ReactQueryDemo() {
  const { data: users, isLoading, error, refetch } = useUsers()

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button onClick={() => refetch()} loading={isLoading}>
          刷新数据
        </Button>
      </div>

      {isLoading && (
        <div className="text-center py-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto"></div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">加载中...</p>
        </div>
      )}

      {error && (
        <div className="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
          <p className="text-red-800 dark:text-red-200 text-sm">
            错误: {error.message}
          </p>
        </div>
      )}

      {users && (
        <div className="space-y-2">
          <h4 className="font-medium text-gray-900 dark:text-gray-100">
            用户列表 ({users.length})
          </h4>
          <div className="max-h-60 overflow-y-auto space-y-2">
            {users.slice(0, 5).map((user) => (
              <div
                key={user.id}
                className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="font-medium text-gray-900 dark:text-gray-100">
                  {user.name}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {user.email}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-500">
                  {user.company.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// 分页演示组件
function PaginationDemo() {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null)
  const pageSize = 5

  const { data: users, isLoading: usersLoading } = useUsers()
  const { data: userPosts, isLoading: postsLoading } = useUserPostsHook(
    selectedUserId || 0
  )

  const paginatedUsers = users?.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  )

  const totalPages = users ? Math.ceil(users.length / pageSize) : 0

  return (
    <div className="space-y-6">
      {/* 用户分页 */}
      <div>
        <h4 className="font-medium text-gray-900 dark:text-gray-100 mb-4">
          用户分页列表
        </h4>
        
        {usersLoading ? (
          <div className="text-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600 mx-auto"></div>
          </div>
        ) : (
          <>
            <div className="space-y-2 mb-4">
              {paginatedUsers?.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                  onClick={() => setSelectedUserId(user.id)}
                >
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      {user.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {user.email}
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={(e) => {
                      e?.stopPropagation()
                      setSelectedUserId(user.id)
                    }}
                  >
                    查看文章
                  </Button>
                </div>
              ))}
            </div>

            {/* 分页控件 */}
            <div className="flex justify-center items-center gap-2">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                上一页
              </Button>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                第 {currentPage} 页，共 {totalPages} 页
              </span>
              <Button
                size="sm"
                variant="secondary"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                下一页
              </Button>
            </div>
          </>
        )}
      </div>

      {/* 用户文章 */}
      {selectedUserId && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-medium text-gray-900 dark:text-gray-100">
              用户文章
            </h4>
            <Button
              size="sm"
              variant="secondary"
              onClick={() => setSelectedUserId(null)}
            >
              关闭
            </Button>
          </div>

          {postsLoading ? (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary-600 mx-auto"></div>
            </div>
          ) : (
            <div className="space-y-2 max-h-60 overflow-y-auto">
              {userPosts?.map((post) => (
                <div
                  key={post.id}
                  className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
                >
                  <div className="font-medium text-gray-900 dark:text-gray-100 mb-1">
                    {post.title}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {post.body.substring(0, 100)}...
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// 缓存和失效演示
function CacheDemo() {
  const { data: users, refetch } = useUsers()
  const [lastFetchTime, setLastFetchTime] = useState<Date | null>(null)

  const handleRefresh = () => {
    setLastFetchTime(new Date())
    refetch()
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-gray-900 dark:text-gray-100">
          缓存管理演示
        </h4>
        <Button onClick={handleRefresh}>
          强制刷新
        </Button>
      </div>

      {lastFetchTime && (
        <div className="text-sm text-gray-600 dark:text-gray-400">
          上次刷新时间: {lastFetchTime.toLocaleTimeString()}
        </div>
      )}

      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-md">
        <p className="text-blue-800 dark:text-blue-200 text-sm">
          💡 React Query 会自动缓存数据，避免重复请求。点击"强制刷新"可以绕过缓存重新获取数据。
        </p>
      </div>

      {users && (
        <div className="text-sm text-gray-600 dark:text-gray-400">
          当前缓存用户数量: {users.length}
        </div>
      )}
    </div>
  )
}

// 主演示组件
function DataFetchingDemo() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card title="Axios 基础演示">
          <AxiosDemo />
        </Card>

        <Card title="React Query 演示">
          <ReactQueryDemo />
        </Card>

        <Card title="分页和关联数据">
          <PaginationDemo />
        </Card>

        <Card title="缓存管理">
          <CacheDemo />
        </Card>
      </div>
    </QueryClientProvider>
  )
}

export function S4DataFetchingPage() {
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
                S4 数据获取
              </h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 学习目标 */}
        <Card title="学习目标" className="mb-8">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• 掌握 Axios 的基本配置和使用</li>
            <li>• 理解 React Query 的数据获取和缓存机制</li>
            <li>• 学会处理加载状态和错误状态</li>
            <li>• 掌握数据分页和关联查询</li>
            <li>• 理解缓存失效和重新获取策略</li>
          </ul>
        </Card>

        {/* 任务清单 */}
        <Card title="任务清单" className="mb-8">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• 实现基础的 HTTP 请求（GET、POST、PUT、DELETE）</li>
            <li>• 配置请求和响应拦截器</li>
            <li>• 使用 React Query 进行数据获取和缓存</li>
            <li>• 实现分页功能和关联数据查询</li>
          </ul>
        </Card>

        {/* 验收标准 */}
        <Card title="验收标准" className="mb-8">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• HTTP 请求正常工作，错误处理完善</li>
            <li>• React Query 缓存机制生效</li>
            <li>• 加载状态和错误状态正确显示</li>
            <li>• 分页和关联查询功能正常</li>
          </ul>
        </Card>

        {/* 演示项目 */}
        <DataFetchingDemo />

        {/* 代码要点 */}
        <Card title="代码要点" className="mt-8">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                1. Axios 配置
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`// 创建 axios 实例
export const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000,
})

// 请求拦截器
api.interceptors.request.use((config) => {
  console.log('发送请求:', config.method, config.url)
  return config
})`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                2. React Query Hook
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: userApi.getUsers,
    staleTime: 5 * 60 * 1000, // 5分钟缓存
  })
}`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                3. 缓存管理
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`const queryClient = useQueryClient()

// 使缓存失效
queryClient.invalidateQueries({ queryKey: ['users'] })

// 更新缓存数据
queryClient.setQueryData(['users', id], newUser)`}</code>
              </pre>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
