import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeToggle } from '@/components/ThemeToggle'

type Lesson = {
  id: number
  title: string
  description: string
  cssCode: string
  tailwindCode: string
  explanation: string
  keyPoints: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

type Project = {
  id: number
  title: string
  description: string
  path: string
  icon: string
  features: string[]
  difficulty: 'intermediate' | 'advanced'
}

const lessons: Lesson[] = [
  {
    id: 1,
    title: '1. 基础间距与颜色',
    description: '学习 Tailwind 的间距系统（padding/margin）和颜色工具类',
    cssCode: `.card {
  background: white;
  padding: 1.5rem;
  margin: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}
.title {
  color: #1e293b;
  font-size: 1.25rem;
  font-weight: 600;
}
.text {
  color: #64748b;
  margin-top: 0.5rem;
}`,
    tailwindCode: `<div class="bg-white p-6 m-4 rounded-lg shadow-md">
  <h3 class="text-slate-800 text-xl font-semibold">标题</h3>
  <p class="text-slate-500 mt-2">这是一段描述文字</p>
</div>`,
    explanation: 'Tailwind 使用简写的工具类，如 p-6 (padding: 1.5rem), m-4 (margin: 1rem), bg-white (background: white)。间距遵循 4px 基础单位的倍数。',
    keyPoints: [
      'p-6 = padding: 1.5rem (24px)',
      'm-4 = margin: 1rem (16px)',
      'text-slate-800 = color: #1e293b',
      'rounded-lg = border-radius: 0.5rem'
    ],
    difficulty: 'beginner'
  },
  {
    id: 2,
    title: '2. Flexbox 布局',
    description: '使用 Tailwind 的 Flex 工具类快速构建布局',
    cssCode: `.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
.item {
  flex: 1;
  padding: 1rem;
}`,
    tailwindCode: `<div class="flex flex-row justify-between items-center gap-4">
  <div class="flex-1 p-4 bg-blue-100">项目 1</div>
  <div class="flex-1 p-4 bg-green-100">项目 2</div>
  <div class="flex-1 p-4 bg-purple-100">项目 3</div>
</div>`,
    explanation: 'Flex 布局在 Tailwind 中非常直观。flex-1 等同于 flex: 1，gap-4 设置项目间距，justify-between 和 items-center 控制对齐。',
    keyPoints: [
      'flex = display: flex',
      'flex-row = flex-direction: row',
      'justify-between = justify-content: space-between',
      'flex-1 = flex: 1 1 0%'
    ],
    difficulty: 'beginner'
  },
  {
    id: 3,
    title: '3. 响应式设计',
    description: '使用断点前缀实现移动优先的响应式布局',
    cssCode: `.container {
  padding: 1rem;
}
@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}
@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}`,
    tailwindCode: `<div class="p-4 md:p-8 lg:p-12 bg-white rounded-lg">
  <h2 class="text-lg md:text-xl lg:text-2xl font-bold">
    响应式标题
  </h2>
  <p class="text-sm md:text-base mt-2">
    文字大小也会随屏幕变化
  </p>
</div>`,
    explanation: 'Tailwind 采用移动优先策略。默认样式适用于移动端，然后使用 md: (768px+) 和 lg: (1024px+) 等断点前缀为更大屏幕添加样式。',
    keyPoints: [
      '移动优先：默认样式 → md: → lg:',
      'sm: 640px, md: 768px, lg: 1024px, xl: 1280px',
      '可以在一个元素上堆叠多个响应式类',
      '断点可以与任何工具类组合使用'
    ],
    difficulty: 'beginner'
  },
  {
    id: 4,
    title: '4. 悬停与状态',
    description: '使用状态前缀添加交互效果',
    cssCode: `.button {
  background: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s;
}
.button:hover {
  background: #2563eb;
  transform: translateY(-2px);
}
.button:active {
  transform: translateY(0);
}`,
    tailwindCode: `<button class="bg-blue-500 text-white px-6 py-3 rounded-lg
                  hover:bg-blue-600 hover:-translate-y-0.5
                  active:translate-y-0 transition-all duration-200">
  点击我
</button>`,
    explanation: '使用 hover:, focus:, active: 等前缀为不同状态添加样式。transition-all 和 duration-200 确保平滑过渡效果。',
    keyPoints: [
      'hover: 鼠标悬停时应用',
      'focus: 获得焦点时应用',
      'active: 被激活时应用',
      'transition-all 需要配合 duration 使用'
    ],
    difficulty: 'intermediate'
  },
  {
    id: 5,
    title: '5. Grid 布局',
    description: '使用 Tailwind 的 Grid 工具类创建网格系统',
    cssCode: `.grid-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;
}
@media (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(3, 1fr);
  }
}`,
    tailwindCode: `<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <div class="p-6 bg-white rounded-lg shadow-md">卡片 1</div>
  <div class="p-6 bg-white rounded-lg shadow-md">卡片 2</div>
  <div class="p-6 bg-white rounded-lg shadow-md">卡片 3</div>
  <div class="p-6 bg-white rounded-lg shadow-md">卡片 4</div>
  <div class="p-6 bg-white rounded-lg shadow-md">卡片 5</div>
  <div class="p-6 bg-white rounded-lg shadow-md">卡片 6</div>
</div>`,
    explanation: 'grid-cols-* 快速设置列数，gap 设置间距。结合响应式前缀可以轻松创建自适应网格布局。',
    keyPoints: [
      'grid-cols-1 = grid-template-columns: repeat(1, 1fr)',
      'grid-cols-2 = grid-template-columns: repeat(2, 1fr)',
      'gap-4 = gap: 1rem',
      '支持 grid-cols-*、grid-rows-* 等工具'
    ],
    difficulty: 'intermediate'
  },
  {
    id: 6,
    title: '6. 组合选择器',
    description: '使用 group 和 peer 处理组合元素的状态',
    cssCode: `.card {
  position: relative;
  padding: 1rem;
  background: white;
  border-radius: 0.5rem;
}
.card:hover .icon {
  color: #3b82f6;
  transform: rotate(90deg);
}`,
    tailwindCode: `<div class="group p-4 bg-white rounded-lg cursor-pointer">
  <h3 class="font-semibold">悬停这个卡片</h3>
  <svg class="icon text-slate-400 group-hover:text-blue-500
              group-hover:rotate-90 transition-transform">
    <circle cx="12" cy="12" r="10" />
  </svg>
</div>

<div>
  <input type="checkbox" class="peer" />
  <label class="peer-checked:text-blue-500 peer-checked:font-semibold">
    选中后变色
  </label>
</div>`,
    explanation: 'group 让父元素可以控制子元素的样式，peer 让兄弟元素相互影响。适用于复杂的交互场景。',
    keyPoints: [
      'group 在父元素上，group-hover:* 在子元素上',
      'peer 在前一个元素上，peer-checked:* 在后续元素上',
      '还支持 group-focus、peer-focus 等变体',
      '适合做下拉菜单、表单验证等'
    ],
    difficulty: 'advanced'
  },
  {
    id: 7,
    title: '7. 深色模式',
    description: '使用 dark: 前缀实现深色主题切换',
    cssCode: `/* 需要手动管理类切换 */
.card.dark {
  background: #1e293b;
  color: white;
}
.card.dark h3 {
  color: #f1f5f9;
}
.card {
  background: white;
  color: #1e293b;
}`,
    tailwindCode: `<div class="bg-white dark:bg-slate-800
                text-slate-900 dark:text-slate-100
                p-6 rounded-lg">
  <h3 class="font-semibold">自动适配深色模式</h3>
  <p class="mt-2 text-slate-600 dark:text-slate-300">
    根据系统设置自动切换
  </p>
</div>`,
    explanation: 'Tailwind 支持 class 策略的深色模式。在 tailwind.config.js 中配置 darkMode: "class"，然后在 HTML 或 body 上添加 dark 类即可。',
    keyPoints: [
      'dark: 前缀仅在深色模式激活时应用',
      '支持 class 和 media 两种策略',
      '可以在 tailwind.config.js 中配置',
      '所有颜色都有对应的 dark 变体'
    ],
    difficulty: 'intermediate'
  },
  {
    id: 8,
    title: '8. 自定义配置',
    description: '在 tailwind.config.js 中扩展主题',
    cssCode: `/* 需要写很多自定义 CSS */
:root {
  --primary: #6366f1;
  --secondary: #8b5cf6;
  --spacing-giant: 5rem;
}
.button {
  background: var(--primary);
  padding: var(--spacing-giant);
}`,
    tailwindCode: `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#6366f1',
        secondary: '#8b5cf6',
      },
      spacing: {
        '128': '32rem',
      }
    }
  }
}

// 使用
<div class="bg-primary text-white p-128">
  使用自定义配置
</div>`,
    explanation: '通过 tailwind.config.js 的 extend 选项，可以无缝扩展默认主题，添加自定义颜色、间距、字体等。',
    keyPoints: [
      '在 extend 中添加而非覆盖整个 theme',
      '可以自定义 colors、spacing、fontSize 等',
      '添加的配置会生成对应的工具类',
      '保持设计系统一致性'
    ],
    difficulty: 'advanced'
  }
]

const projects: Project[] = [
  {
    id: 1,
    title: 'Dashboard 布局',
    description: '复杂的管理后台布局，包含侧边栏、数据可视化、响应式设计',
    path: '/project/dashboard',
    icon: '📊',
    features: ['响应式侧边栏', '数据卡片', '图表展示', '实时活动列表'],
    difficulty: 'intermediate'
  },
  {
    id: 2,
    title: '电商产品页',
    description: '完整的电商产品详情页，包含图片画廊、颜色选择、评价系统',
    path: '/project/ecommerce',
    icon: '🛍️',
    features: ['图片画廊', '颜色/尺码选择', '用户评价', '购买流程'],
    difficulty: 'intermediate'
  },
  {
    id: 3,
    title: '登录认证页面',
    description: '登录/注册/忘记密码页面，包含表单验证和错误提示',
    path: '/project/login',
    icon: '🔐',
    features: ['表单验证', '加载状态', '错误提示', '社交登录'],
    difficulty: 'intermediate'
  },
  {
    id: 4,
    title: 'SaaS Landing Page',
    description: '专业的产品落地页，包含定价表、FAQ、客户评价',
    path: '/project/saas',
    icon: '🚀',
    features: ['Hero 区域', '特性展示', '定价表', 'FAQ'],
    difficulty: 'advanced'
  },
  {
    id: 5,
    title: '移动端 App 界面',
    description: '移动优先的社交应用界面，包含信息流、通知、个人主页',
    path: '/project/mobile',
    icon: '📱',
    features: ['Stories', '动态信息流', '底部导航', '手势交互'],
    difficulty: 'advanced'
  }
]

const difficultyColors = {
  beginner: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
  intermediate: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
  advanced: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
}

const difficultyLabels = {
  beginner: '入门',
  intermediate: '进阶',
  advanced: '高级'
}

export function TailwindLearningPage() {
  const [activeTab, setActiveTab] = useState<'css' | 'tailwind'>('tailwind')
  const [currentLesson, setCurrentLesson] = useState(0)
  const lesson = lessons[currentLesson]

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <header className="border-b border-slate-200/70 bg-white/80 dark:border-slate-800 dark:bg-slate-900/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <Link to="/" className="text-sm text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200">
              ← 返回首页
            </Link>
            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mt-2">
              Tailwind CSS 实践教程
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
              通过交互式示例学习 Tailwind CSS 的核心概念
            </p>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* 课程导航 */}
        <div className="mb-8 bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">课程目录</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {lessons.map((l, index) => (
              <button
                key={l.id}
                onClick={() => setCurrentLesson(index)}
                className={`text-left p-3 rounded-lg border transition-all ${
                  currentLesson === index
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-400'
                    : 'border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${difficultyColors[l.difficulty]}`}>
                    {difficultyLabels[l.difficulty]}
                  </span>
                </div>
                <div className="text-sm font-medium text-slate-900 dark:text-slate-100 line-clamp-2">
                  {l.title}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* 进阶项目 */}
        <div className="mb-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900/20 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">🚀 进阶实战项目</h2>
            <Link
              to="/"
              className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              返回首页 →
            </Link>
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
            完成基础课程后，通过这些真实项目巩固所学知识
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={project.path}
                className="group bg-white dark:bg-slate-800 rounded-lg p-4 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-3">{project.icon}</div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${difficultyColors[project.difficulty]}`}>
                    {project.difficulty === 'intermediate' ? '进阶' : '高级'}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <span key={idx} className="text-xs px-2 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded">
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 2 && (
                    <span className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 rounded">
                      +{project.features.length - 2}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 左侧：代码 */}
          <div className="space-y-6">
            {/* 标题和描述 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {lesson.title}
                </h2>
                <span className={`text-xs px-3 py-1 rounded-full font-medium ${difficultyColors[lesson.difficulty]}`}>
                  {difficultyLabels[lesson.difficulty]}
                </span>
              </div>
              <p className="text-slate-600 dark:text-slate-300">{lesson.description}</p>
            </div>

            {/* 代码切换 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="flex border-b border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setActiveTab('css')}
                  className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'css'
                      ? 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-b-2 border-slate-900 dark:border-slate-100'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  标准 CSS
                </button>
                <button
                  onClick={() => setActiveTab('tailwind')}
                  className={`flex-1 px-6 py-3 text-sm font-medium transition-colors ${
                    activeTab === 'tailwind'
                      ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100 border-b-2 border-blue-500'
                      : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100'
                  }`}
                >
                  Tailwind CSS
                </button>
              </div>
              <div className="p-6">
                <pre className="overflow-x-auto">
                  <code className="text-sm text-slate-800 dark:text-slate-200">
                    {activeTab === 'css' ? lesson.cssCode : lesson.tailwindCode}
                  </code>
                </pre>
              </div>
            </div>

            {/* 关键要点 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
              <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4">关键要点</h3>
              <ul className="space-y-2">
                {lesson.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-blue-800 dark:text-blue-200">
                    <span className="text-blue-500 mt-0.5">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 右侧：预览和说明 */}
          <div className="space-y-6">
            {/* 实时预览 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">实时预览</h3>
              </div>
              <div className="p-8 min-h-[300px] flex items-center justify-center bg-slate-50 dark:bg-slate-950">
                {currentLesson === 0 && (
                  <div className="bg-white p-6 m-4 rounded-lg shadow-md max-w-sm w-full">
                    <h3 className="text-slate-800 text-xl font-semibold">标题</h3>
                    <p className="text-slate-500 mt-2">这是一段描述文字</p>
                  </div>
                )}
                {currentLesson === 1 && (
                  <div className="flex flex-row justify-between items-center gap-4 max-w-lg w-full">
                    <div className="flex-1 p-4 bg-blue-100 dark:bg-blue-900/30 rounded">项目 1</div>
                    <div className="flex-1 p-4 bg-green-100 dark:bg-green-900/30 rounded">项目 2</div>
                    <div className="flex-1 p-4 bg-purple-100 dark:bg-purple-900/30 rounded">项目 3</div>
                  </div>
                )}
                {currentLesson === 2 && (
                  <div className="bg-white dark:bg-slate-800 p-4 md:p-8 lg:p-12 rounded-lg max-w-md w-full">
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-slate-900 dark:text-slate-100">
                      响应式标题
                    </h2>
                    <p className="text-sm md:text-base mt-2 text-slate-600 dark:text-slate-300">
                      调整浏览器宽度查看效果
                    </p>
                  </div>
                )}
                {currentLesson === 3 && (
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0">
                    点击我（悬停试试）
                  </button>
                )}
                {currentLesson === 4 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-lg w-full">
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md text-center">卡片 1</div>
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md text-center">卡片 2</div>
                    <div className="p-4 bg-white dark:bg-slate-800 rounded-lg shadow-md text-center">卡片 3</div>
                  </div>
                )}
                {currentLesson === 5 && (
                  <div className="space-y-4 max-w-sm w-full">
                    <div className="group p-4 bg-white dark:bg-slate-800 rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500 transition-colors">
                      <h3 className="font-semibold text-slate-900 dark:text-slate-100">悬停这个卡片</h3>
                      <div className="text-slate-400 group-hover:text-blue-500 group-hover:rotate-90 transition-all mt-2 inline-block">
                        ◉
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-800 rounded-lg">
                      <input type="checkbox" className="w-5 h-5 peer" />
                      <label className="peer-checked:text-blue-500 peer-checked:font-semibold text-slate-600 dark:text-slate-300 cursor-pointer">
                        选中复选框
                      </label>
                    </div>
                  </div>
                )}
                {currentLesson === 6 && (
                  <div className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 p-6 rounded-lg max-w-sm w-full">
                    <h3 className="font-semibold">自动适配深色模式</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm">
                      切换右上角主题查看效果
                    </p>
                  </div>
                )}
                {currentLesson === 7 && (
                  <div className="bg-primary text-white p-12 rounded-lg max-w-sm w-full text-center">
                    <h3 className="font-semibold text-lg">使用自定义配置</h3>
                    <p className="mt-2 text-white/80 text-sm">
                      自定义颜色和间距
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* 说明 */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">💡 核心概念</h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                {lesson.explanation}
              </p>
            </div>

            {/* 提示 */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl p-6 border border-amber-200 dark:border-amber-800">
              <h3 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-3">🎯 学习建议</h3>
              <ul className="space-y-2 text-sm text-amber-800 dark:text-amber-200">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>每个示例都对比了标准 CSS 和 Tailwind 写法</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>先理解左边 CSS，再看右边 Tailwind 如何简化</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>在预览区域悬停、点击、调整窗口查看交互效果</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>建议按顺序学习，从入门到高级逐步掌握</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 导航按钮 */}
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
            disabled={currentLesson === 0}
            className="px-6 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            ← 上一课
          </button>
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {currentLesson + 1} / {lessons.length}
          </span>
          <button
            onClick={() => setCurrentLesson(Math.min(lessons.length - 1, currentLesson + 1))}
            disabled={currentLesson === lessons.length - 1}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            下一课 →
          </button>
        </div>
      </main>
    </div>
  )
}
