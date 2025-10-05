import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { ThemeToggle } from '@/components/ThemeToggle'

type ColorPreset = {
  id: string
  label: string
  gradient: string
  text: string
  badge: string
  button: string
}

type RadiusPreset = {
  id: string
  label: string
  card: string
  badge: string
}

type DensityPreset = {
  id: string
  label: string
  cardPadding: string
  gridGap: string
}

const colorPresets: ColorPreset[] = [
  {
    id: 'ocean',
    label: '清爽蓝',
    gradient: 'from-sky-400 via-sky-500 to-blue-600',
    text: 'text-sky-900 dark:text-sky-50',
    badge: 'bg-sky-100 text-sky-700',
    button: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    id: 'sunset',
    label: '日落橙',
    gradient: 'from-amber-400 via-orange-500 to-rose-500',
    text: 'text-amber-900 dark:text-amber-50',
    badge: 'bg-orange-100 text-orange-700',
    button: 'bg-orange-500 hover:bg-orange-600'
  },
  {
    id: 'forest',
    label: '林木绿',
    gradient: 'from-emerald-400 via-emerald-500 to-teal-600',
    text: 'text-emerald-900 dark:text-emerald-50',
    badge: 'bg-emerald-100 text-emerald-700',
    button: 'bg-emerald-500 hover:bg-emerald-600'
  }
]

const radiusPresets: RadiusPreset[] = [
  { id: 'md', label: '中等圆角', card: 'rounded-xl', badge: 'rounded-full' },
  { id: 'xl', label: '柔和圆角', card: 'rounded-3xl', badge: 'rounded-full' },
  { id: 'sharp', label: '直角', card: 'rounded-lg', badge: 'rounded-md' }
]

const densityPresets: DensityPreset[] = [
  { id: 'comfortable', label: '舒适留白', cardPadding: 'p-6', gridGap: 'gap-4' },
  { id: 'compact', label: '紧凑信息', cardPadding: 'p-4', gridGap: 'gap-3' },
  { id: 'airy', label: '极致留白', cardPadding: 'p-8', gridGap: 'gap-6' }
]

type ScreenPreset = 'mobile' | 'tablet' | 'desktop'

const screenColumns: Record<ScreenPreset, string> = {
  mobile: 'grid-cols-1',
  tablet: 'grid-cols-2',
  desktop: 'grid-cols-3'
}

const screenLabels: Record<ScreenPreset, string> = {
  mobile: '375px 模拟 · 单列呈现',
  tablet: '768px 模拟 · 双列布局',
  desktop: '1280px 模拟 · 三列展示'
}

const features = [
  {
    title: '组件库基石',
    description: '统一间距、色彩与圆角，让界面拥有一致视觉语言。'
  },
  {
    title: '响应式断点',
    description: '用 Tailwind 的 sm/md/lg 类，快速调节布局栅格。'
  },
  {
    title: '可访问性',
    description: '保证文字与背景对比度 ≥ 4.5:1，兼顾夜间模式。'
  },
  {
    title: '动效节奏',
    description: '利用 transition 与 duration 设定交互节奏。'
  },
  {
    title: '暗色主题',
    description: '基于 data-theme 或 class 实现主题切换。'
  },
  {
    title: '品牌一致',
    description: '通过 token 统一品牌色与字体家族。'
  }
]

function TailwindTokenPlayground() {
  const [colorId, setColorId] = useState<ColorPreset['id']>('ocean')
  const [radiusId, setRadiusId] = useState<RadiusPreset['id']>('md')
  const [densityId, setDensityId] = useState<DensityPreset['id']>('comfortable')

  const color = colorPresets.find(item => item.id === colorId) ?? colorPresets[0]
  const radius = radiusPresets.find(item => item.id === radiusId) ?? radiusPresets[0]
  const density = densityPresets.find(item => item.id === densityId) ?? densityPresets[0]

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {colorPresets.map(preset => (
          <Button
            key={preset.id}
            variant={preset.id === colorId ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setColorId(preset.id)}
          >
            {preset.label}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {radiusPresets.map(preset => (
          <Button
            key={preset.id}
            variant={preset.id === radiusId ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setRadiusId(preset.id)}
          >
            {preset.label}
          </Button>
        ))}
      </div>
      <div className="flex flex-wrap gap-2">
        {densityPresets.map(preset => (
          <Button
            key={preset.id}
            variant={preset.id === densityId ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setDensityId(preset.id)}
          >
            {preset.label}
          </Button>
        ))}
      </div>

      <div
        className={`relative overflow-hidden ${radius.card} bg-gradient-to-br ${density.cardPadding} ${color.gradient} text-white`}
      >
        <span className={`inline-flex items-center px-3 py-1 text-xs font-medium ${color.badge} ${radius.badge}`}>
          Tailwind Token
        </span>
        <h3 className={`mt-4 text-xl font-semibold ${color.text}`}>
          设计系统调色板
        </h3>
        <p className={`mt-2 text-sm ${color.text}`}>
          颜色、圆角、留白三件套决定了产品的品牌气质。根据场景选取不同 token，即可快速塑造风格。
        </p>
        <button
          className={`mt-4 inline-flex items-center gap-2 rounded-lg px-4 py-2 text-white transition-colors ${color.button}`}
        >
          生成组件预览
        </button>
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" aria-hidden />
      </div>

      <div className="rounded-xl bg-gray-900/90 text-xs text-gray-100 p-4 space-y-2">
        <p className="font-semibold">当前设计 Token</p>
        <code className="block">color: {color.label}</code>
        <code className="block">radius: {radius.label}</code>
        <code className="block">density: {density.label}</code>
      </div>
    </div>
  )
}

function ResponsiveLayoutPreview() {
  const [screen, setScreen] = useState<ScreenPreset>('desktop')

  const gridClass = useMemo(() => screenColumns[screen], [screen])

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {(['mobile', 'tablet', 'desktop'] as ScreenPreset[]).map(preset => (
          <Button
            key={preset}
            variant={preset === screen ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setScreen(preset)}
          >
            {screenLabels[preset]}
          </Button>
        ))}
      </div>

      <div className="border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden bg-white dark:bg-gray-900">
        <div className="bg-gray-100 dark:bg-gray-800 px-4 py-2 text-xs text-gray-600 dark:text-gray-300">
          Tailwind 响应式类在 {screenLabels[screen]}
        </div>
        <div className={`p-6 grid ${gridClass} gap-4 transition-all`}>
          {features.map(feature => (
            <div
              key={feature.title}
              className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 backdrop-blur px-4 py-5 shadow-sm"
            >
              <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">{feature.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400">
        💡 小练习：把以上卡片封装为 FeatureCard 组件，并通过 className 或者变体系统（例如 cva）管理不同尺寸。
      </p>
    </div>
  )
}

const spacingScale = [4, 8, 12, 16, 20, 24, 32, 40]

function SpacingSystemGuide() {
  return (
    <div className="space-y-4">
      {spacingScale.map(space => (
        <div key={space} className="flex items-center gap-4">
          <div className="w-16 text-xs text-gray-500 dark:text-gray-400">{`space-${space}`}</div>
          <div className="flex-1 bg-primary-500/20 dark:bg-primary-500/40 rounded-full h-2" style={{ maxWidth: `${space * 4}px` }} />
          <span className="text-xs text-gray-600 dark:text-gray-300">{space}px</span>
        </div>
      ))}
      <p className="text-xs text-gray-500 dark:text-gray-400">
        采用 4px 基准线可以兼顾设计稿与代码实现的可控性。建议把常用间距写成 CSS 变量或 Tailwind 自定义 theme。
      </p>
    </div>
  )
}

function TeachingNotes() {
  return (
    <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
      <li>• 引导学员把设计 Token 抽象成配置：色板、字号、阴影都可以存于 theme.extend。</li>
      <li>• 在课堂上演示“设计稿 vs. 代码”的对照，让大家感受 Tailwind 在组件化项目中的效率。</li>
      <li>• 鼓励搭配 Storybook/Chromatic 做视觉回归测试，确保设计系统不会被悄悄破坏。</li>
    </ul>
  )
}

function CodeRecipes() {
  return (
    <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">1. Tailwind 主题扩展</h4>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto">
{`// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563eb',
          foreground: '#0f172a'
        }
      }
    }
  }
}`}
        </pre>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">2. class-variance-authority 变体</h4>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto">
{`const card = cva(
  'rounded-xl border transition',
  {
    variants: {
      tone: {
        subtle: 'bg-white/70 dark:bg-gray-900/40',
        bold: 'bg-gradient-to-br from-sky-500 to-blue-600 text-white'
      }
    }
  }
)`}
        </pre>
      </div>
    </div>
  )
}

export function S7StylingPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-primary-600 hover:text-primary-700">
                ← 返回首页
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">S7 样式体系</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Card title="学习目标">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 构建统一的设计 Token：颜色、圆角、阴影、间距等。</li>
            <li>• 熟练掌握 Tailwind 响应式语法与暗色模式的组合用法。</li>
            <li>• 通过组件抽象提升复用性，搭配设计工具进行回归检查。</li>
          </ul>
        </Card>

        <Card title="任务清单">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 构建一个主题 playground，快速切换品牌色与圆角。</li>
            <li>• 实现响应式 Dashboard 布局，并总结栅格的断点策略。</li>
            <li>• 输出一份“设计系统守则”，写入团队 README。</li>
          </ul>
        </Card>

        <Card title="验收标准">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 样式具备响应式、暗色模式适配，且对比度符合可访问性要求。</li>
            <li>• Token 抽象到配置层，组件通过 props/variant 切换风格。</li>
            <li>• 产出一套可复用的样式文档或 Storybook，方便团队协作。</li>
          </ul>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="设计 Token Playground">
            <TailwindTokenPlayground />
          </Card>
          <Card title="响应式布局演练">
            <ResponsiveLayoutPreview />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card title="间距系统可视化">
            <SpacingSystemGuide />
          </Card>
          <Card title="教学提示">
            <TeachingNotes />
          </Card>
          <Card title="代码配方">
            <CodeRecipes />
          </Card>
        </div>
      </main>
    </div>
  )
}
