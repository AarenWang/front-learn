// 学习阶段类型
export interface LearningStage {
  id: string
  title: string
  description: string
  objectives: string[]
  tasks: string[]
  acceptanceCriteria: string[]
  route: string
  completed: boolean
}

// 用户类型
export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

// 主题类型
export interface Theme {
  mode: 'light' | 'dark'
}

// 表单相关类型
export interface LoginForm {
  email: string
  password: string
}

export interface UserForm {
  name: string
  email: string
  avatar?: string
}

// API 响应类型
export interface ApiResponse<T> {
  data: T
  message: string
  success: boolean
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  limit: number
}

// 组件 Props 类型
export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  className?: string
  children: React.ReactNode
}

export interface CardProps {
  title?: string
  children: React.ReactNode
  className?: string
}

// 路由类型
export interface RouteConfig {
  path: string
  element: React.ComponentType
  title: string
  description?: string
}
