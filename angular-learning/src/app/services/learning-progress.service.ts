import { Injectable, computed, effect, inject, signal } from '@angular/core'
import { Lesson } from '../models/lesson.model'

const STORAGE_KEY = 'angular-learning-progress'

function safeReadStorage(): string[] {
  if (typeof window === 'undefined') {
    return []
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return []
    }
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? (parsed.filter((id) => typeof id === 'string') as string[]) : []
  } catch {
    return []
  }
}

@Injectable({ providedIn: 'root' })
export class LearningProgressService {
  private readonly completedLessonsSignal = signal<string[]>(safeReadStorage())

  readonly completedLessons = computed(() => this.completedLessonsSignal())

  readonly completedCount = computed(() => this.completedLessonsSignal().length)

  readonly completionRate = computed(() => {
    const totalLessons = this.totalLessons()
    return totalLessons === 0 ? 0 : Math.round((this.completedCount() / totalLessons) * 100)
  })

  private readonly totalLessons = signal(0)

  constructor() {
    effect(() => {
      if (typeof window === 'undefined') {
        return
      }
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.completedLessonsSignal()))
    })
  }

  initialiseProgress(lessons: Lesson[]) {
    this.totalLessons.set(lessons.length)
  }

  toggleLessonCompletion(id: string) {
    const current = this.completedLessonsSignal()
    if (current.includes(id)) {
      this.completedLessonsSignal.set(current.filter((item) => item !== id))
    } else {
      this.completedLessonsSignal.set([...current, id])
    }
  }

  isLessonCompleted(id: string) {
    return this.completedLessonsSignal().includes(id)
  }
}
