export interface ResourceLink {
  label: string
  url: string
}

export interface LearningStage {
  id: string
  title: string
  description: string
  duration: string
  foundationTopics: string[]
  project: {
    name: string
    description: string
    deliverables: string[]
  }
  practiceTasks: string[]
  acceptanceCriteria: string[]
  resources: ResourceLink[]
  route: string
  completed: boolean
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}

export interface Theme {
  mode: 'light' | 'dark'
}

export interface LoginForm {
  email: string
  password: string
}

export interface UserForm {
  name: string
  email: string
  avatar?: string
}

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

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  onClick?: (e?: React.MouseEvent) => void
  className?: string
  type?: 'button' | 'submit' | 'reset'
  children: React.ReactNode
}

export interface CardProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export interface RouteConfig {
  path: string
  element: React.ComponentType
  title: string
  description?: string
}
