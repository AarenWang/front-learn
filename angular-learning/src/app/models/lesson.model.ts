export interface LessonResource {
  label: string
  url: string
}

export interface PracticeTask {
  title: string
  description: string
  deliverables: string[]
}

export interface LessonOutcome {
  title: string
  details: string
}

export type LessonLevel = 'foundation' | 'advanced' | 'project';

export interface Lesson {
  id: string
  order: number
  title: string
  section: string
  estimatedHours: number
  level: LessonLevel
  summary: string
  coreConcepts: string[]
  prerequisites: string[]
  projectPractices: PracticeTask[]
  outcomes: LessonOutcome[]
  resources: LessonResource[]
  tags: string[]
}

export interface LessonSection {
  name: string
  description: string
  targetLevel: LessonLevel | 'all'
}
