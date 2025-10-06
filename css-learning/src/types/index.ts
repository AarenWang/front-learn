export interface ResourceLink {
  label: string
  url: string
}

export interface StageModuleMeta {
  id: string
  title: string
  summary: string
}

export type LessonSectionType = 'theory' | 'activity' | 'project' | 'reflection'

export interface LessonSectionItem {
  title: string
  detail: string
  code?: string
  language?: 'css' | 'scss' | 'sass' | 'less' | 'html' | 'javascript' | 'typescript'
}

export interface LessonTeachingSection {
  id: string
  type?: LessonSectionType
  title: string
  description?: string
  duration?: string
  focus?: string
  items: LessonSectionItem[]
  outcome?: string
  tools?: string[]
}

export interface LearningStage {
  id: string
  title: string
  description: string
  duration: string
  module: StageModuleMeta
  foundationTopics: string[]
  project: {
    name: string
    description: string
    deliverables: string[]
  }
  practiceTasks: string[]
  acceptanceCriteria: string[]
  resources: ResourceLink[]
  teachingSections?: LessonTeachingSection[]
  route: string
  completed: boolean
}

export interface Theme {
  mode: 'light' | 'dark'
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
