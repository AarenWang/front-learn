import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '@/components/Card'
import { Button } from '@/components/Button'
import { ThemeToggle } from '@/components/ThemeToggle'

// S0 示例组件：Counter
interface CounterProps {
  initialCount?: number
}

function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount)

  return (
    <div className="text-center">
      <h3 className="text-lg font-semibold mb-4">Counter 组件</h3>
      <div className="text-3xl font-bold text-primary-600 mb-4">{count}</div>
      <div className="space-x-2">
        <Button onClick={() => setCount(count - 1)}>减少</Button>
        <Button onClick={() => setCount(initialCount)}>重置</Button>
        <Button onClick={() => setCount(count + 1)}>增加</Button>
      </div>
    </div>
  )
}

// S0 示例组件：TodoList
interface Todo {
  id: number
  text: string
  completed: boolean
}

function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: '学习 React 基础', completed: false },
    { id: 2, text: '掌握 TypeScript', completed: false },
    { id: 3, text: '练习组件通信', completed: true }
  ])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, {
        id: Date.now(),
        text: newTodo,
        completed: false
      }])
      setNewTodo('')
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">TodoList 组件</h3>
      
      {/* 添加新任务 */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="输入新任务..."
          className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500"
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <Button onClick={addTodo}>添加</Button>
      </div>

      {/* 任务列表 */}
      <div className="space-y-2">
        {todos.map(todo => (
          <div
            key={todo.id}
            className={`flex items-center gap-2 p-2 rounded-md ${
              todo.completed 
                ? 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400' 
                : 'bg-white dark:bg-gray-800'
            }`}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
              className="rounded"
            />
            <span className={`flex-1 ${todo.completed ? 'line-through' : ''}`}>
              {todo.text}
            </span>
            <Button
              variant="danger"
              size="sm"
              onClick={() => deleteTodo(todo.id)}
            >
              删除
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

export function S0BasicsPage() {
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
                S0 基础起步
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
            <li>• 掌握 JSX 语法</li>
            <li>• 理解函数组件的概念</li>
            <li>• 学会使用 Props 和 State</li>
            <li>• 理解单向数据流</li>
            <li>• 为组件定义 TypeScript 类型</li>
          </ul>
        </Card>

        {/* 任务清单 */}
        <Card title="任务清单" className="mb-8">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• Counter 组件 - 实现计数器的增加、减少、重置功能</li>
            <li>• TodoList 组件 - 实现任务的添加、完成、删除功能</li>
          </ul>
        </Card>

        {/* 验收标准 */}
        <Card title="验收标准" className="mb-8">
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>• 使用函数组件而非类组件</li>
            <li>• 列表渲染正确显示所有项目</li>
            <li>• Props、State 都定义了 TypeScript 类型</li>
            <li>• 组件状态更新正确响应</li>
          </ul>
        </Card>

        {/* 演示项目 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card title="Counter 组件演示">
            <Counter initialCount={0} />
          </Card>

          <Card title="TodoList 组件演示">
            <TodoList />
          </Card>
        </div>

        {/* 代码示例 */}
        <Card title="代码要点" className="mt-8">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                1. 函数组件定义
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`interface CounterProps {
  initialCount?: number
}

function Counter({ initialCount = 0 }: CounterProps) {
  const [count, setCount] = useState(initialCount)
  // ...
}`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                2. 状态管理
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`const [count, setCount] = useState(initialCount)
const [todos, setTodos] = useState<Todo[]>([])`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                3. 列表渲染
              </h4>
              <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto text-sm">
                <code>{`{todos.map(todo => (
  <div key={todo.id}>
    {todo.text}
  </div>
))}`}</code>
              </pre>
            </div>
          </div>
        </Card>
      </main>
    </div>
  )
}
