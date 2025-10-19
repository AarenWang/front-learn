import { createContext, useContext, useMemo, useReducer, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { create } from 'zustand'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { ThemeToggle } from '@/components/ThemeToggle'

type CollaborationMode = 'focus' | 'collaboration'

type TeamMember = {
  id: number
  name: string
  role: 'Product' | 'Design' | 'Frontend' | 'Backend'
  strengths: string[]
  weeklyHours: number
}

type TeamState = {
  members: TeamMember[]
  activeMemberId: number | null
  mode: CollaborationMode
}

type TeamAction =
  | { type: 'select-member'; payload: number }
  | { type: 'toggle-mode' }
  | { type: 'update-hours'; payload: { id: number; hours: number } }
  | { type: 'add-member'; payload: Omit<TeamMember, 'id'> }
  | { type: 'remove-member'; payload: number }

interface TeamContextValue {
  state: TeamState
  selectMember: (id: number) => void
  toggleMode: () => void
  updateHours: (id: number, hours: number) => void
  addMember: (member: Omit<TeamMember, 'id'>) => void
  removeMember: (id: number) => void
}

const TeamContext = createContext<TeamContextValue | undefined>(undefined)

const initialTeamState: TeamState = {
  members: [
    {
      id: 1,
      name: 'Lina',
      role: 'Product',
      strengths: ['路线规划', '跨团队沟通'],
      weeklyHours: 30
    },
    {
      id: 2,
      name: 'Akira',
      role: 'Design',
      strengths: ['设计系统', '可访问性'],
      weeklyHours: 32
    },
    {
      id: 3,
      name: 'Chen',
      role: 'Frontend',
      strengths: ['React Query', '组件封装'],
      weeklyHours: 35
    }
  ],
  activeMemberId: 3,
  mode: 'collaboration'
}

function teamReducer(state: TeamState, action: TeamAction): TeamState {
  switch (action.type) {
    case 'select-member':
      return { ...state, activeMemberId: action.payload }
    case 'toggle-mode':
      return { ...state, mode: state.mode === 'focus' ? 'collaboration' : 'focus' }
    case 'update-hours':
      return {
        ...state,
        members: state.members.map(member =>
          member.id === action.payload.id
            ? { ...member, weeklyHours: action.payload.hours }
            : member
        )
      }
    case 'add-member':
      return {
        ...state,
        members: [
          ...state.members,
          { ...action.payload, id: Math.max(0, ...state.members.map(member => member.id)) + 1 }
        ]
      }
    case 'remove-member': {
      const remainingMembers = state.members.filter(member => member.id !== action.payload)
      const nextActiveId =
        state.activeMemberId === action.payload ? remainingMembers[0]?.id ?? null : state.activeMemberId

      return {
        ...state,
        members: remainingMembers,
        activeMemberId: nextActiveId
      }
    }
    default:
      return state
  }
}

function TeamProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(teamReducer, initialTeamState)

  const value = useMemo<TeamContextValue>(() => ({
    state,
    selectMember: id => dispatch({ type: 'select-member', payload: id }),
    toggleMode: () => dispatch({ type: 'toggle-mode' }),
    updateHours: (id, hours) => dispatch({ type: 'update-hours', payload: { id, hours } }),
    addMember: member => dispatch({ type: 'add-member', payload: member }),
    removeMember: id => dispatch({ type: 'remove-member', payload: id })
  }), [state])

  return <TeamContext.Provider value={value}>{children}</TeamContext.Provider>
}

function useTeam() {
  const context = useContext(TeamContext)
  if (!context) {
    throw new Error('useTeam 必须在 TeamProvider 中使用')
  }
  return context
}

type TaskStatus = 'todo' | 'in-progress' | 'done'

type Task = {
  id: number
  title: string
  owner: string
  status: TaskStatus
  estimate: number
}

type TaskFilter = 'all' | TaskStatus

interface TaskStore {
  tasks: Task[]
  filter: TaskFilter
  addTask: (task: Omit<Task, 'id' | 'status'> & { status?: TaskStatus }) => void
  advanceStatus: (id: number) => void
  setFilter: (filter: TaskFilter) => void
  reset: () => void
}

const initialTasks: Task[] = [
  {
    id: 1,
    title: '用户画像 Context 重构',
    owner: 'Lina',
    status: 'in-progress',
    estimate: 5
  },
  {
    id: 2,
    title: 'Zustand 缓存实验',
    owner: 'Chen',
    status: 'todo',
    estimate: 3
  },
  {
    id: 3,
    title: '设计指南更新',
    owner: 'Akira',
    status: 'done',
    estimate: 2
  }
]

const statusFlow: TaskStatus[] = ['todo', 'in-progress', 'done']

const useTaskStore = create<TaskStore>((set) => ({
  tasks: initialTasks,
  filter: 'all',
  addTask: task =>
    set(state => ({
      tasks: [
        ...state.tasks,
        {
          id: Math.max(0, ...state.tasks.map(item => item.id)) + 1,
          status: task.status ?? 'todo',
          ...task
        }
      ]
    })),
  advanceStatus: id =>
    set(state => ({
      tasks: state.tasks.map(task => {
        if (task.id !== id) return task
        const currentIndex = statusFlow.indexOf(task.status)
        const nextStatus = statusFlow[(currentIndex + 1) % statusFlow.length]
        return { ...task, status: nextStatus }
      })
    })),
  setFilter: filter => set({ filter }),
  reset: () => set({ tasks: initialTasks, filter: 'all' })
}))

function TeamMemberList() {
  const {
    state: { members, activeMemberId, mode },
    selectMember,
    toggleMode,
    updateHours,
    removeMember
  } = useTeam()

  const activeMember = members.find(member => member.id === activeMemberId) ?? members[0]
  const collaborationScore = useMemo(() => {
    const totalHours = members.reduce((sum, member) => sum + member.weeklyHours, 0)
    const focusHours = members.filter(member => member.weeklyHours >= 32).length * 8
    return Math.round(((totalHours + focusHours) / (members.length * 40)) * 100)
  }, [members])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">团队概况</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            当前协作模式：{mode === 'focus' ? '深度专注' : '开放协作'} · 协作健康度 {collaborationScore}%
          </p>
        </div>
        <Button variant="secondary" size="sm" onClick={toggleMode}>
          切换协作模式
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {members.map(member => {
          const isActive = member.id === activeMember?.id
          return (
            <button
              key={member.id}
              onClick={() => selectMember(member.id)}
              className={`text-left p-4 rounded-xl border transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                isActive
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/30'
                  : 'border-gray-200 dark:border-gray-700 hover:border-primary-400'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  {member.name}
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                  {member.role}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                核心技能：{member.strengths.join(' · ')}
              </p>
              <div className="mt-3">
                <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">
                  每周可用小时
                </label>
                <input
                  type="range"
                  min={20}
                  max={40}
                  value={member.weeklyHours}
                  onChange={event => updateHours(member.id, Number(event.target.value))}
                  className="w-full accent-primary-500"
                />
                <div className="mt-1 text-sm text-gray-700 dark:text-gray-300">
                  {member.weeklyHours} 小时
                </div>
              </div>
              <div className="mt-4 flex justify-between text-xs text-gray-500 dark:text-gray-400">
                <span>学习建议：每周 1 次结对编程</span>
                <button
                  type="button"
                  onClick={event => {
                    event.stopPropagation()
                    removeMember(member.id)
                  }}
                  className="text-red-500 hover:text-red-600"
                >
                  移除
                </button>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function AddMemberForm() {
  const { addMember } = useTeam()
  const [form, setForm] = useState<Omit<TeamMember, 'id'>>({
    name: '',
    role: 'Frontend',
    strengths: ['可复用组件'],
    weeklyHours: 28
  })
  const [newStrength, setNewStrength] = useState('')

  const canSubmit = form.name.trim().length >= 2 && form.weeklyHours >= 20

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!canSubmit) return
        addMember({ ...form, strengths: form.strengths.filter(Boolean) })
        setForm({ name: '', role: 'Frontend', strengths: ['可复用组件'], weeklyHours: 28 })
        setNewStrength('')
      }}
      className="space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          成员姓名
        </label>
        <input
          value={form.name}
          onChange={event => setForm(current => ({ ...current, name: event.target.value }))}
          placeholder="例如：Mia"
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          角色定位
        </label>
        <select
          value={form.role}
          onChange={event =>
            setForm(current => ({ ...current, role: event.target.value as TeamMember['role'] }))
          }
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="Product">产品经理</option>
          <option value="Design">设计师</option>
          <option value="Frontend">前端工程师</option>
          <option value="Backend">后端工程师</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          团队优势
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {form.strengths.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs"
            >
              {item}
              <button
                type="button"
                onClick={() =>
                  setForm(current => ({
                    ...current,
                    strengths: current.strengths.filter((_, strengthIndex) => strengthIndex !== index)
                  }))
                }
                className="text-primary-500 hover:text-primary-700"
                aria-label="移除优势"
              >
                ×
              </button>
            </span>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={newStrength}
            onChange={event => setNewStrength(event.target.value)}
            placeholder="添加新的优势"
            className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              if (!newStrength.trim()) return
              setForm(current => ({ ...current, strengths: [...current.strengths, newStrength.trim()] }))
              setNewStrength('')
            }}
          >
            添加
          </Button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          每周可投入小时
        </label>
        <input
          type="number"
          min={20}
          max={40}
          value={form.weeklyHours}
          onChange={event =>
            setForm(current => ({ ...current, weeklyHours: Number(event.target.value) }))
          }
          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <Button type="submit" disabled={!canSubmit} className="w-full">
        添加成员并同步 Context
      </Button>
    </form>
  )
}

function TaskBoard() {
  const { tasks, filter, addTask, advanceStatus, setFilter, reset } = useTaskStore()
  const [title, setTitle] = useState('')
  const [owner, setOwner] = useState('Lina')
  const [estimate, setEstimate] = useState(2)

  const filteredTasks = useMemo(() => {
    if (filter === 'all') return tasks
    return tasks.filter(task => task.status === filter)
  }, [tasks, filter])

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Zustand 状态面板</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">感受全局 store 的轻量体验</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          {(['all', 'todo', 'in-progress', 'done'] as TaskFilter[]).map(option => (
            <Button
              key={option}
              variant={filter === option ? 'primary' : 'secondary'}
              size="sm"
              onClick={() => setFilter(option)}
            >
              {option === 'all' ? '全部' : option === 'todo' ? '待处理' : option === 'in-progress' ? '进行中' : '已完成'}
            </Button>
          ))}
          <Button variant="secondary" size="sm" onClick={reset}>
            还原示例数据
          </Button>
        </div>
      </div>

      <form
        onSubmit={event => {
          event.preventDefault()
          if (!title.trim()) return
          addTask({ title: title.trim(), owner, estimate, status: 'todo' })
          setTitle('')
          setEstimate(2)
        }}
        className="grid grid-cols-1 md:grid-cols-[1fr_160px_120px_auto] gap-2"
      >
        <input
          value={title}
          onChange={event => setTitle(event.target.value)}
          placeholder="描述要跟进的事情..."
          className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <select
          value={owner}
          onChange={event => setOwner(event.target.value)}
          className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="Lina">Lina · 产品</option>
          <option value="Akira">Akira · 设计</option>
          <option value="Chen">Chen · 前端</option>
        </select>
        <input
          type="number"
          min={1}
          max={8}
          value={estimate}
          onChange={event => setEstimate(Number(event.target.value))}
          className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
        <Button type="submit">添加任务</Button>
      </form>

      <div className="space-y-3">
        {filteredTasks.map(task => (
          <div
            key={task.id}
            className="flex flex-col md:flex-row md:items-center justify-between gap-2 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          >
            <div>
              <div className="flex items-center gap-2 text-gray-900 dark:text-gray-100">
                <span className="font-semibold">{task.title}</span>
                <span className="text-xs px-2 py-1 rounded-full bg-primary-100 text-primary-700">
                  {task.estimate}h
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">负责人：{task.owner}</p>
            </div>
            <Button
              variant={task.status === 'done' ? 'secondary' : 'primary'}
              size="sm"
              onClick={() => advanceStatus(task.id)}
            >
              {task.status === 'todo'
                ? '开始执行'
                : task.status === 'in-progress'
                  ? '标记为完成'
                  : '循环回到待处理'}
            </Button>
          </div>
        ))}
        {filteredTasks.length === 0 && (
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center py-6">
            当前筛选下没有任务，尝试调整状态过滤或添加新的任务。
          </p>
        )}
      </div>
    </div>
  )
}

function StoreInspector() {
  const snapshot = useTaskStore()
  return (
    <div>
      <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">Zustand Store 快照</h4>
      <pre className="bg-gray-900 text-green-300 text-xs p-4 rounded-lg overflow-x-auto">
        {JSON.stringify(snapshot, null, 2)}
      </pre>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
        ✅ 学习提示：Zustand 允许按切片订阅；在大型项目中可拆分 store 并组合。
      </p>
    </div>
  )
}

const contextVsZustand = [
  {
    aspect: '数据形态',
    context: '适合配置、主题、当前用户等变化频率低的数据',
    zustand: '可管理复杂对象、数组，并内置响应式订阅'
  },
  {
    aspect: '更新方式',
    context: '结合 useReducer 控制状态；更新范围随 Provider 嵌套而变化',
    zustand: '局部订阅，更新不会导致整个子树重渲染'
  },
  {
    aspect: '最佳实践',
    context: '搭配自定义 Hook 导出数据 + actions；减少 Provider 过度嵌套',
    zustand: '拆分 slice，利用中间件（persist/devtools）提升可观测性'
  }
]

function ComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 text-sm">
        <thead className="bg-gray-100 dark:bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-300">维度</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-300">Context API</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-700 dark:text-gray-300">Zustand</th>
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-800">
          {contextVsZustand.map(row => (
            <tr key={row.aspect}>
              <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{row.aspect}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.context}</td>
              <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.zustand}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function TeachingTips() {
  return (
    <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
      <li>• 让学习者先使用 Context 实现共享状态，再引导体验 Zustand 的“按需订阅”差异，理解为什么需要更轻量的状态工具。</li>
      <li>• 鼓励拆分 action 与 selector：在课堂上演示 useTaskStore(state =&gt; state.tasks) 减少重渲染。</li>
      <li>• 通过“团队排班”这类具象场景讲解状态归属，帮助学员明确：页面局部用 useState，全局跨页用 Context 或 Zustand。</li>
    </ul>
  )
}

export function S5GlobalStatePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-4">
              <Link to="/" className="text-primary-600 hover:text-primary-700">
                ← 返回首页
              </Link>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">S5 全局状态管理</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Card title="学习目标">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            <li>• 理解 React Context 的设计初衷与适用边界，掌握 useReducer + 自定义 Hook 的组合模式。</li>
            <li>• 熟悉 Zustand 的核心 API（create、selector、middleware），体验轻量 store 的优势。</li>
            <li>• 会分析状态归属：判断何时使用局部 useState、何时抽离成全局 store。</li>
          </ul>
        </Card>

        <Card title="任务清单">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            <li>• 为团队排期面板实现 Context Provider，支持选择成员、切换协作模式。</li>
            <li>• 使用 Zustand 构建任务列表：新增、状态流转、筛选展示。</li>
            <li>• 通过代码评审总结“如何防止状态蔓延”——给出三条实践准则。</li>
          </ul>
        </Card>

        <Card title="验收标准">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            <li>• 组件拆分合理，Context Provider 只暴露必要的值与动作。</li>
            <li>• Zustand store 支持重置、筛选且状态更新后 UI 即时同步。</li>
            <li>• 能清晰解释：为什么不建议把所有状态都塞进 Context。</li>
          </ul>
        </Card>

        <TeamProvider>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card title="Context API · 团队排班面板">
              <TeamMemberList />
            </Card>
            <Card title="添加成员 · 引导学员扩展上下文">
              <AddMemberForm />
            </Card>
          </div>
        </TeamProvider>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <Card title="Zustand · 项目任务流">
            <TaskBoard />
          </Card>
          <Card title="Store 结构观察" className="xl:col-span-1">
            <StoreInspector />
          </Card>
          <Card title="教学提示" className="xl:col-span-1">
            <TeachingTips />
          </Card>
        </div>

        <Card title="Context vs Zustand 对比指南">
          <ComparisonTable />
        </Card>

        <Card title="代码要点">
          <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">1. Provider 解耦</h4>
              <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto">
{`const TeamContext = createContext<TeamContextValue | undefined>(undefined)

export function useTeam() {
  const ctx = useContext(TeamContext)
  if (!ctx) throw new Error('useTeam 必须在 TeamProvider 中使用')
  return ctx
}`}
              </pre>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">2. Zustand Selector 用法</h4>
              <pre className="bg-gray-900 text-green-300 p-4 rounded-lg overflow-x-auto">
{`const progress = useTaskStore(state =>
  state.tasks.filter(task => task.status === 'done').length
)`}
              </pre>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              延伸阅读：在真实项目中建议将 Context、Zustand 的定义拆分到 src/store 或 src/context 目录，并编写测试确保状态逻辑稳定。
            </p>
          </div>
        </Card>
      </main>
    </div>
  )
}
