import { useState } from 'react'
import { Link } from 'react-router-dom'

type TabType = 'home' | 'explore' | 'notifications' | 'profile'

export function MobileAppPage() {
  const [activeTab, setActiveTab] = useState<TabType>('home')
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set())
  const [savedPosts, setSavedPosts] = useState<Set<number>>(new Set())

  // 模拟数据
  const stories = [
    { id: 1, user: '你的故事', avatar: '👤', isOwn: true },
    { id: 2, user: 'Alice', avatar: '👩', viewed: false },
    { id: 3, user: 'Bob', avatar: '👨', viewed: false },
    { id: 4, user: 'Carol', avatar: '👩', viewed: true },
    { id: 5, user: 'David', avatar: '👨', viewed: false },
  ]

  const posts = [
    {
      id: 1,
      user: 'Alice',
      avatar: '👩',
      time: '2小时前',
      content: '今天天气真好！出去走走 #生活 #心情',
      image: '🌅',
      likes: 234,
      comments: 45,
      shares: 12,
    },
    {
      id: 2,
      user: 'Bob',
      avatar: '👨',
      time: '4小时前',
      content: '刚完成了一个新项目，感觉很棒！感谢团队的支持 #工作 #成就',
      image: null,
      likes: 567,
      comments: 89,
      shares: 34,
    },
    {
      id: 3,
      user: 'Carol',
      avatar: '👩',
      time: '6小时前',
      content: '分享一张美图 #摄影 #风景',
      image: '🏔️',
      likes: 892,
      comments: 123,
      shares: 56,
    },
  ]

  const notifications = [
    {
      id: 1,
      type: 'like',
      user: 'Alice',
      avatar: '👩',
      content: '赞了你的帖子',
      time: '5分钟前',
      unread: true,
    },
    {
      id: 2,
      type: 'comment',
      user: 'Bob',
      avatar: '👨',
      content: '评论了你的帖子："太棒了！"',
      time: '15分钟前',
      unread: true,
    },
    {
      id: 3,
      type: 'follow',
      user: 'Carol',
      avatar: '👩',
      content: '开始关注你',
      time: '1小时前',
      unread: true,
    },
    {
      id: 4,
      type: 'mention',
      user: 'David',
      avatar: '👨',
      content: '在帖子中提到了你',
      time: '2小时前',
      unread: false,
    },
    {
      id: 5,
      type: 'like',
      user: 'Eve',
      avatar: '👩',
      content: '赞了你的评论',
      time: '3小时前',
      unread: false,
    },
  ]

  const toggleLike = (postId: number) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId)
      } else {
        newSet.add(postId)
      }
      return newSet
    })
  }

  const toggleSave = (postId: number) => {
    setSavedPosts((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId)
      } else {
        newSet.add(postId)
      }
      return newSet
    })
  }

  const renderHomeTab = () => (
    <div className="pb-20">
      {/* Stories */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex gap-4 overflow-x-auto px-4 py-3 scrollbar-hide">
          {stories.map((story) => (
            <button
              key={story.id}
              className={`flex-shrink-0 flex flex-col items-center gap-1 ${
                story.viewed && !story.isOwn ? 'opacity-60' : ''
              }`}
            >
              <div
                className={`h-16 w-16 rounded-full p-0.5 ${
                  story.isOwn
                    ? 'bg-gray-200'
                    : story.viewed
                    ? 'bg-gray-300'
                    : 'bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500'
                }`}
              >
                <div className="flex h-full w-full items-center justify-center rounded-full bg-white p-0.5">
                  <div
                    className={`flex h-full w-full items-center justify-center rounded-full text-3xl ${
                      story.isOwn ? 'bg-gray-100' : 'bg-white'
                    }`}
                  >
                    {story.avatar}
                  </div>
                </div>
              </div>
              <span className="text-xs text-gray-700">{story.user}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Posts */}
      <div className="divide-y divide-gray-200 bg-white">
        {posts.map((post) => (
          <article key={post.id} className="bg-white">
            {/* Post Header */}
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-2xl">
                  {post.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    {post.user}
                  </p>
                  <p className="text-xs text-gray-500">{post.time}</p>
                </div>
              </div>
              <button className="rounded-full p-2 hover:bg-gray-100 active:bg-gray-200 transition-colors">
                <span className="text-gray-600">⋯</span>
              </button>
            </div>

            {/* Post Content */}
            <div className="px-4 pb-3">
              <p className="text-sm text-gray-900 leading-relaxed">
                {post.content}
              </p>
            </div>

            {/* Post Image */}
            {post.image && (
              <div className="aspect-square w-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-8xl">
                {post.image}
              </div>
            )}

            {/* Post Actions */}
            <div className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className={`flex items-center gap-1.5 rounded-full p-2 transition-all active:scale-95 ${
                      likedPosts.has(post.id)
                        ? 'text-red-500'
                        : 'text-gray-700 hover:text-gray-900'
                    }`}
                  >
                    <span className="text-2xl">
                      {likedPosts.has(post.id) ? '❤️' : '🤍'}
                    </span>
                    <span className="text-sm font-medium">
                      {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                    </span>
                  </button>
                  <button className="flex items-center gap-1.5 rounded-full p-2 text-gray-700 hover:bg-gray-100 active:scale-95 transition-all">
                    <span className="text-2xl">💬</span>
                    <span className="text-sm font-medium">{post.comments}</span>
                  </button>
                  <button className="rounded-full p-2 text-gray-700 hover:bg-gray-100 active:scale-95 transition-all">
                    <span className="text-2xl">📤</span>
                  </button>
                </div>
                <button
                  onClick={() => toggleSave(post.id)}
                  className={`rounded-full p-2 transition-all active:scale-95 ${
                    savedPosts.has(post.id)
                      ? 'text-blue-500'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <span className="text-2xl">
                    {savedPosts.has(post.id) ? '🔖' : '📑'}
                  </span>
                </button>
              </div>

              {/* Likes preview */}
              <div className="mt-3 flex items-center gap-2">
                <div className="flex -space-x-1">
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs">❤️</div>
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-500 text-xs">
                    👤
                  </div>
                </div>
                <p className="text-xs text-gray-600">
                  被{' '}
                  <span className="font-semibold text-gray-900">
                    Alice, Bob
                  </span>{' '}
                  等{' '}
                  <span className="font-semibold text-gray-900">
                    {post.likes}
                  </span>{' '}
                  人赞过
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )

  const renderExploreTab = () => (
    <div className="pb-20">
      {/* Search Bar */}
      <div className="sticky top-0 z-10 bg-white p-4 border-b border-gray-200">
        <div className="relative">
          <input
            type="text"
            placeholder="搜索"
            className="w-full rounded-full bg-gray-100 py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
        </div>
      </div>

      {/* Tags */}
      <div className="flex gap-2 overflow-x-auto p-4 scrollbar-hide">
        {['推荐', '热门', '生活', '科技', '美食', '旅行', '运动'].map(
          (tag) => (
            <button
              key={tag}
              className="flex-shrink-0 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 active:scale-95 transition-all"
            >
              {tag}
            </button>
          )
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-1 px-1">
        {Array.from({ length: 12 }).map((_, i) => (
          <button
            key={i}
            className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-5xl hover:opacity-90 active:scale-95 transition-all"
          >
            {['🌅', '🏔️', '🌊', '🌸', '🎨', '🎭', '🏰', '🌃', '🎪', '🎡', '🎢', '🎠'][i]}
          </button>
        ))}
      </div>
    </div>
  )

  const renderNotificationsTab = () => (
    <div className="pb-20">
      <div className="sticky top-0 z-10 bg-white px-4 py-3 border-b border-gray-200">
        <h1 className="text-lg font-bold text-gray-900">通知</h1>
      </div>

      <div className="divide-y divide-gray-200">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`flex gap-3 p-4 transition-colors ${
              notif.unread ? 'bg-blue-50/50' : 'bg-white'
            }`}
          >
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-2xl text-white">
              {notif.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900">
                <span className="font-semibold">{notif.user}</span>{' '}
                {notif.content}
              </p>
              <p className="mt-0.5 text-xs text-gray-500">{notif.time}</p>
            </div>
            {notif.unread && (
              <div className="flex h-2 w-2 flex-shrink-0 rounded-full bg-blue-500"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )

  const renderProfileTab = () => (
    <div className="pb-20">
      {/* Profile Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="flex items-center justify-between p-4">
          <span className="text-lg font-bold text-gray-900">用户名</span>
          <div className="flex items-center gap-4">
            <button className="rounded-full p-2 hover:bg-gray-100">
              <span className="text-xl">➕</span>
            </button>
            <button className="rounded-full p-2 hover:bg-gray-100">
              <span className="text-xl">☰</span>
            </button>
          </div>
        </div>

        <div className="px-4 pb-4">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-5xl">
              👤
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-gray-900">你的名字</h2>
              <p className="text-sm text-gray-600">简介内容</p>
            </div>
          </div>

          <div className="mt-4 flex gap-8">
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900">123</p>
              <p className="text-xs text-gray-600">帖子</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900">4.5K</p>
              <p className="text-xs text-gray-600">粉丝</p>
            </div>
            <div className="text-center">
              <p className="text-lg font-bold text-gray-900">890</p>
              <p className="text-xs text-gray-600">关注</p>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white active:scale-95 transition-all">
              编辑资料
            </button>
            <button className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-900 active:scale-95 transition-all">
              分享主页
            </button>
          </div>
        </div>

        {/* Profile Tabs */}
        <div className="flex border-t border-gray-200">
          <button className="flex-1 border-t-2 border-gray-900 py-3">
            <span className="text-xl">📸</span>
          </button>
          <button className="flex-1 border-t-2 border-transparent py-3 text-gray-400">
            <span className="text-xl">🎞️</span>
          </button>
          <button className="flex-1 border-t-2 border-transparent py-3 text-gray-400">
            <span className="text-xl">🏷️</span>
          </button>
        </div>
      </div>

      {/* Profile Grid */}
      <div className="grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <button
            key={i}
            className="aspect-square bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-4xl hover:opacity-90 active:scale-95 transition-all"
          >
            {['📸', '🌅', '🏔️', '🌊', '🌸', '🎨', '🎭', '🏰', '🌃'][i]}
          </button>
        ))}
      </div>
    </div>
  )

  return (
    <div className="mx-auto min-h-screen max-w-md bg-gray-50">
      {/* 顶部导航栏 - 桌面端显示 */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 md:hidden">
        <div className="flex items-center gap-4">
          <Link
            to="/tailwind-learning"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span>←</span>
            <span>返回课程</span>
          </Link>
          <span className="text-gray-300">|</span>
          <h1 className="text-sm font-semibold text-gray-900">移动端 App 界面</h1>
        </div>
      </div>

      {/* App Header - 仅在非首页显示 */}
      {activeTab !== 'home' && (
        <div className="sticky top-0 z-20 bg-white">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <h1 className="text-lg font-bold text-gray-900">
              {activeTab === 'explore' && '探索'}
              {activeTab === 'notifications' && '通知'}
              {activeTab === 'profile' && '个人主页'}
            </h1>
            <div className="flex items-center gap-4">
              {activeTab === 'explore' && (
                <button className="rounded-full p-2 hover:bg-gray-100">
                  <span className="text-xl">🔔</span>
                </button>
              )}
              {activeTab === 'notifications' && (
                <button className="text-sm font-semibold text-blue-600">
                  全部已读
                </button>
              )}
              {activeTab === 'profile' && (
                <>
                  <button className="rounded-full p-2 hover:bg-gray-100">
                    <span className="text-xl">➕</span>
                  </button>
                  <button className="rounded-full p-2 hover:bg-gray-100">
                    <span className="text-xl">☰</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="bg-white">
        {activeTab === 'home' && renderHomeTab()}
        {activeTab === 'explore' && renderExploreTab()}
        {activeTab === 'notifications' && renderNotificationsTab()}
        {activeTab === 'profile' && renderProfileTab()}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t border-gray-200">
        <div className="mx-auto max-w-md">
          <div className="flex items-center justify-around">
            <button
              onClick={() => setActiveTab('home')}
              className={`flex flex-1 flex-col items-center gap-1 py-3 transition-colors ${
                activeTab === 'home'
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="text-2xl">
                {activeTab === 'home' ? '🏠' : '🏠'}
              </span>
              <span className="text-[10px] font-medium">首页</span>
            </button>
            <button
              onClick={() => setActiveTab('explore')}
              className={`flex flex-1 flex-col items-center gap-1 py-3 transition-colors ${
                activeTab === 'explore'
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="text-2xl">
                {activeTab === 'explore' ? '🔍' : '🔍'}
              </span>
              <span className="text-[10px] font-medium">探索</span>
            </button>
            <button className="flex flex-1 flex-col items-center gap-1 py-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 text-white">
                <span className="text-xl">➕</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`relative flex flex-1 flex-col items-center gap-1 py-3 transition-colors ${
                activeTab === 'notifications'
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="text-2xl">💬</span>
              <span className="text-[10px] font-medium">通知</span>
              {activeTab !== 'notifications' && (
                <div className="absolute right-6 top-2 h-2 w-2 rounded-full bg-red-500"></div>
              )}
            </button>
            <button
              onClick={() => setActiveTab('profile')}
              className={`flex flex-1 flex-col items-center gap-1 py-3 transition-colors ${
                activeTab === 'profile'
                  ? 'text-gray-900'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <span className="text-2xl">
                {activeTab === 'profile' ? '👤' : '👤'}
              </span>
              <span className="text-[10px] font-medium">我的</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Safe Area Indicator */}
      <div className="fixed bottom-0 left-0 right-0 z-40 h-6 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
    </div>
  )
}
