import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { ThemeToggle } from '@/components/ThemeToggle'

type ExperienceLevel = 'junior' | 'mid' | 'senior'

type ProfileFormValues = {
  name: string
  email: string
  role: 'frontend' | 'design' | 'product'
  bio: string
  notifications: boolean
  onboardingDate: string
  topics: string[]
}

type WorkshopMember = {
  name: string
  email: string
  experience: ExperienceLevel
}

type WorkshopFormValues = {
  teamName: string
  goal: string
  days: string[]
  mentorNeeded: boolean
  teamMembers: WorkshopMember[]
}

const profileSchema = z.object({
  name: z.string().min(2, '名字至少 2 个字符'),
  email: z.string().email('请输入有效邮箱'),
  role: z.enum(['frontend', 'design', 'product'] as const, { message: '请选择角色' }),
  bio: z.string().min(10, '请描述学习背景（至少 10 字）'),
  notifications: z.boolean(),
  onboardingDate: z.string().min(1, '请选择入组日期'),
  topics: z.array(z.string()).min(1, '至少选择一个学习主题')
})

const workshopSchema = z.object({
  teamName: z.string().min(2, '请输入团队名称'),
  goal: z.string().min(12, '请补充团队目标（至少 12 字）'),
  days: z.array(z.string()).min(1, '至少选择一天参加工作坊'),
  mentorNeeded: z.boolean(),
  teamMembers: z
    .array(
      z.object({
        name: z.string().min(2, '成员姓名至少 2 个字符'),
        email: z.string().email('请输入成员邮箱'),
  experience: z.enum(['junior', 'mid', 'senior'] as const)
      })
    )
    .min(1, '至少添加一名成员')
})

function InlineError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="text-xs text-red-500 mt-1">{message}</p>
}

function ProfileFormDemo() {
  const [submitted, setSubmitted] = useState<ProfileFormValues | null>(null)
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    reset,
    watch,
    formState: { errors, isSubmitting, isDirty }
  } = useForm<ProfileFormValues>({
    defaultValues: {
      name: '张同学',
      email: 'student@example.com',
      role: 'frontend',
      bio: '热爱前端的学习者，想掌握 React + TS 的最佳实践。',
      notifications: true,
      onboardingDate: new Date().toISOString().slice(0, 10),
      topics: ['state-management']
    },
    mode: 'onBlur'
  })

  const topics = [
    { value: 'state-management', label: '状态管理' },
    { value: 'forms', label: '表单验证' },
    { value: 'design-system', label: '设计系统' },
    { value: 'testing', label: '测试入门' }
  ]

  const onSubmit = handleSubmit(async values => {
    clearErrors()
    const result = profileSchema.safeParse(values)
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors
      Object.entries(fieldErrors).forEach(([key, messages]) => {
        if (!messages || messages.length === 0) return
        setError(key as keyof ProfileFormValues, {
          type: 'manual',
          message: messages[0]
        })
      })
      return
    }

    await new Promise(resolve => setTimeout(resolve, 400))
    setSubmitted(result.data)
  })

  const summary = useMemo(() => {
    if (!submitted) return null
    return (
      <div className="mt-4 rounded-lg border border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20 p-4 text-sm text-green-800 dark:text-green-200">
        <p className="font-medium mb-2">🎉 提交成功</p>
        <p>欢迎 {submitted.name} 加入，重点关注：{submitted.topics.join('、')}。</p>
      </div>
    )
  }, [submitted])

  const selectedTopics = watch('topics')

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">姓名</label>
          <input
            {...register('name')}
            className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <InlineError message={errors.name?.message} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">邮箱</label>
          <input
            type="email"
            {...register('email')}
            className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <InlineError message={errors.email?.message} />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">角色</label>
          <select
            {...register('role')}
            className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="frontend">前端工程师</option>
            <option value="design">设计师</option>
            <option value="product">产品经理</option>
          </select>
          <InlineError message={errors.role?.message} />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">入组日期</label>
          <input
            type="date"
            {...register('onboardingDate')}
            className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <InlineError message={errors.onboardingDate?.message} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">学习背景</label>
        <textarea
          {...register('bio')}
          rows={4}
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <InlineError message={errors.bio?.message} />
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-gray-700 dark:text-gray-300">关注主题</legend>
        <div className="mt-2 flex flex-wrap gap-3">
          {topics.map(topic => (
            <label key={topic.value} className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                value={topic.value}
                {...register('topics')}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              {topic.label}
            </label>
          ))}
        </div>
        <InlineError message={errors.topics?.message as string | undefined} />
      </fieldset>

      <label className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <input
          type="checkbox"
          {...register('notifications')}
          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
        />
        接收助教的任务提醒
      </label>

      <div className="rounded-lg bg-gray-100 dark:bg-gray-800/60 p-4 text-xs text-gray-600 dark:text-gray-300">
        <p className="font-medium mb-1">即时反馈</p>
        <p>已选择主题：{selectedTopics.length > 0 ? selectedTopics.join('、') : '暂无'}</p>
        <p>通知已开启：{watch('notifications') ? '是' : '否'}</p>
      </div>

      <div className="flex flex-wrap gap-3">
        <Button type="submit" loading={isSubmitting}>
          生成个性化学习计划
        </Button>
        <Button
          type="button"
          variant="secondary"
          disabled={!isDirty}
          onClick={() => {
            reset()
            setSubmitted(null)
          }}
        >
          重置表单
        </Button>
      </div>

      {summary}
    </form>
  )
}

function WorkshopSignupForm() {
  const [result, setResult] = useState<WorkshopFormValues | null>(null)
  const {
    control,
    register,
    handleSubmit,
    setError,
    clearErrors,
    watch,
    formState: { errors }
  } = useForm<WorkshopFormValues>({
    defaultValues: {
      teamName: 'React 进阶学习小组',
      goal: '',
      days: [],
      mentorNeeded: true,
      teamMembers: [
        { name: '小李', email: 'li@example.com', experience: 'junior' },
        { name: '小王', email: 'wang@example.com', experience: 'mid' }
      ]
    },
    mode: 'onSubmit'
  })

  const { fields, append, remove } = useFieldArray({ control, name: 'teamMembers' })

  const members = watch('teamMembers') ?? []

  const onSubmit = handleSubmit(values => {
    clearErrors()
    const parsed = workshopSchema.safeParse(values)
    if (!parsed.success) {
      parsed.error.issues.forEach(issue => {
        const path = issue.path.join('.')
        if (!path) return
        setError(path as keyof WorkshopFormValues, {
          type: 'manual',
          message: issue.message
        } as never)
      })
      return
    }
    setResult(parsed.data)
  })

  const dayOptions = [
    { value: 'friday', label: '周五晚 · 线上直播' },
    { value: 'saturday', label: '周六上午 · 线下共创' },
    { value: 'mentoring', label: '周日加餐 · 1:1 Mentoring' }
  ]

  const mentorSummary = useMemo(() => {
    const seniorCount = members.filter(member => member.experience === 'senior').length
    if (seniorCount === 0) return '建议安排资深导师陪练，帮助团队搭建架构。'
    if (seniorCount === members.length) return '团队资深度较高，可尝试由内部成员轮流主持分享。'
    return '团队能力层次多样，适合采用结对学习：初级与高级搭档完成练习。'
  }, [members])

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">学习小组名称</label>
        <input
          {...register('teamName')}
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <InlineError message={errors.teamName?.message} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">团队目标</label>
        <textarea
          rows={3}
          {...register('goal')}
          placeholder="例如：4 周内完成 Dashboard 项目并实现自动化测试。"
          className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <InlineError message={errors.goal?.message} />
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-gray-700 dark:text-gray-300">参加场次</legend>
        <div className="mt-2 flex flex-col gap-2">
          {dayOptions.map(option => (
            <label key={option.value} className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <input
                type="checkbox"
                value={option.value}
                {...register('days')}
                className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              {option.label}
            </label>
          ))}
        </div>
        <InlineError message={errors.days?.message as string | undefined} />
      </fieldset>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100">团队成员</h4>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() =>
              append({ name: '', email: '', experience: 'junior' })
            }
          >
            添加成员
          </Button>
        </div>
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="grid grid-cols-1 md:grid-cols-[1.5fr_1.5fr_1fr_auto] gap-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-4"
          >
            <div>
              <label className="block text-xs font-medium text-gray-600 dark:text-gray-400">姓名</label>
              <input
                {...register(`teamMembers.${index}.name` as const)}
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <InlineError message={errors.teamMembers?.[index]?.name?.message} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 dark:text-gray-400">邮箱</label>
              <input
                {...register(`teamMembers.${index}.email` as const)}
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <InlineError message={errors.teamMembers?.[index]?.email?.message} />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-600 dark:text-gray-400">经验</label>
              <select
                {...register(`teamMembers.${index}.experience` as const)}
                className="mt-1 w-full rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-3 py-2 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="junior">初级</option>
                <option value="mid">中级</option>
                <option value="senior">高级</option>
              </select>
              <InlineError message={errors.teamMembers?.[index]?.experience?.message} />
            </div>
            <Button type="button" variant="secondary" size="sm" onClick={() => remove(index)}>
              移除
            </Button>
          </div>
        ))}
      </div>

      <label className="inline-flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <input
          type="checkbox"
          {...register('mentorNeeded')}
          className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
        />
        需要助教全程陪跑
      </label>

      <div className="rounded-lg bg-gray-100 dark:bg-gray-800/60 p-4 text-xs text-gray-600 dark:text-gray-300">
        <p className="font-medium mb-1">助教建议</p>
        <p>{mentorSummary}</p>
      </div>

      <Button type="submit" className="w-full">
        生成工作坊安排
      </Button>

      {result && (
        <div className="rounded-lg border border-primary-200 dark:border-primary-800 bg-primary-50 dark:bg-primary-900/20 p-4 text-sm text-primary-900 dark:text-primary-100">
          <p className="font-medium mb-2">工作坊计划已生成 ✅</p>
          <p>
            {result.teamName} 将在 {result.days.length} 个场次参与，目标：{result.goal.slice(0, 60)}...
          </p>
        </div>
      )}
    </form>
  )
}

function TeachingStrategies() {
  return (
    <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
      <li>• 让学员体验“即时校验 vs. 提交校验”，引导他们根据场景选择 mode、触发时机。</li>
      <li>• 演示如何将表单拆分为多步骤：本示例可扩展为 StepForm，配合 useFormContext 管理状态。</li>
      <li>• 鼓励把真实业务的接口契约抽象为 zod Schema，提交前先 parse，再与 API 交互。</li>
    </ul>
  )
}

function CodeHighlights() {
  return (
    <div className="space-y-4 text-sm text-gray-700 dark:text-gray-300">
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">zod 校验套路</h4>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto">
{`const profileSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  topics: z.array(z.string()).min(1)
})`}
        </pre>
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">处理嵌套错误</h4>
        <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto">
{`parsed.error.issues.forEach(issue => {
  const path = issue.path.join('.')
  setError(path as any, { message: issue.message, type: 'manual' })
})`}
        </pre>
      </div>
    </div>
  )
}

export function S6AdvancedFormsPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-primary-600 hover:text-primary-700">
                ← 返回首页
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">S6 表单进阶</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Card title="学习目标">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 熟悉 React Hook Form 的核心 API（useForm、useFieldArray、watch）。</li>
            <li>• 会用 zod/TypeScript Schema 抽象表单契约，确保类型与校验一致。</li>
            <li>• 具备设计可迭代表单的能力：即时反馈、动态字段、多步骤体验。</li>
          </ul>
        </Card>

        <Card title="任务清单">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 实现“学习者画像”表单：支持多选、实时提示、提交校验。</li>
            <li>• 构建“工作坊报名”动态表单：可增删成员并生成助教建议。</li>
            <li>• 总结如何把后端的 DTO 转换为前端表单 schema，写在项目文档中。</li>
          </ul>
        </Card>

        <Card title="验收标准">
          <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>• 所有字段都有显式的错误反馈，支持键盘无障碍操作。</li>
            <li>• 表单状态（成功、失败、提交中）都有视觉提示，逻辑清晰。</li>
            <li>• 能解释为何表单数据应与 UI 分离：Schema 即契约、类型即文档。</li>
          </ul>
        </Card>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <Card title="学习者画像 · React Hook Form">
            <ProfileFormDemo />
          </Card>
          <Card title="工作坊报名 · 动态字段实践">
            <WorkshopSignupForm />
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="教学提示">
            <TeachingStrategies />
          </Card>
          <Card title="代码要点">
            <CodeHighlights />
          </Card>
        </div>
      </main>
    </div>
  )
}
