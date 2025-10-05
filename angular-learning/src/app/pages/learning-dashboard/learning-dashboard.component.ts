import { CommonModule } from '@angular/common'
import { Component, computed, effect, inject, signal } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { LESSONS, LESSON_SECTIONS, TOTAL_ESTIMATED_HOURS } from '../../data/learning-plan'
import { Lesson, LessonLevel } from '../../models/lesson.model'
import { LearningProgressService } from '../../services/learning-progress.service'

interface LevelOption {
  value: 'all' | LessonLevel
  label: string
}

@Component({
  selector: 'app-learning-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './learning-dashboard.component.html',
  styleUrls: ['./learning-dashboard.component.scss'],
})
export class LearningDashboardComponent {
  private readonly progressService = inject(LearningProgressService)

  readonly lessons = LESSONS
  readonly sections = LESSON_SECTIONS
  readonly totalHours = TOTAL_ESTIMATED_HOURS

  readonly searchTerm = signal('')
  readonly levelFilter = signal<'all' | LessonLevel>('all')
  readonly sectionFilter = signal<'all' | string>('all')
  readonly selectedTags = signal<string[]>([])
  readonly selectedLessonId = signal<string | null>(this.initialLessonId())

  readonly levelText: Record<LessonLevel, string> = {
    foundation: '基础',
    advanced: '进阶',
    project: '项目',
  }

  readonly levelOptions: LevelOption[] = [
    { value: 'all', label: '全部阶段' },
    { value: 'foundation', label: '基础巩固' },
    { value: 'advanced', label: '进阶突破' },
    { value: 'project', label: '项目实战' },
  ]

  readonly uniqueTags = computed(() => {
    const tags = new Set<string>()
    for (const lesson of this.lessons) {
      lesson.tags.forEach((tag) => tags.add(tag))
    }
    return Array.from(tags).sort((a, b) => a.localeCompare(b, 'zh-CN'))
  })

  readonly filteredLessons = computed(() => {
    const keyword = this.searchTerm().trim().toLowerCase()
    const level = this.levelFilter()
    const section = this.sectionFilter()
    const tags = this.selectedTags()

    return this.lessons
      .filter((lesson) => (section === 'all' ? true : lesson.section === section))
      .filter((lesson) => (level === 'all' ? true : lesson.level === level))
      .filter((lesson) =>
        keyword.length === 0
          ? true
          : [lesson.title, lesson.summary, lesson.tags.join(' ')]
              .join(' ')
              .toLowerCase()
              .includes(keyword),
      )
      .filter((lesson) => (tags.length === 0 ? true : tags.every((tag) => lesson.tags.includes(tag))))
      .sort((a, b) => a.order - b.order)
  })

  readonly selectedLesson = computed(() => {
    const currentId = this.selectedLessonId()
    if (!currentId) {
      return this.lessons[0]
    }
    return this.lessons.find((lesson) => lesson.id === currentId) ?? this.lessons[0]
  })

  readonly sectionInsights = computed(() =>
    this.sections.map((section) => {
      const lessonsInSection = this.lessons.filter((lesson) => lesson.section === section.name)
      const completed = lessonsInSection.filter((lesson) => this.isCompleted(lesson.id))
      return {
        section,
        total: lessonsInSection.length,
        completed: completed.length,
        completionRate: lessonsInSection.length === 0 ? 0 : Math.round((completed.length / lessonsInSection.length) * 100),
        estimatedHours: lessonsInSection.reduce((sum, lesson) => sum + lesson.estimatedHours, 0),
      }
    }),
  )

  readonly upcomingPractices = computed(() => {
    const pending = this.lessons
      .filter((lesson) => !this.isCompleted(lesson.id))
      .map((lesson) => ({
        lesson,
        nextPractice: lesson.projectPractices[0],
      }))
      .filter((item) => Boolean(item.nextPractice))
      .slice(0, 3)
    return pending
  })

  constructor() {
    this.progressService.initialiseProgress(this.lessons)

    const initialLesson = this.selectedLessonId()
    if (!initialLesson && this.lessons.length > 0) {
      this.selectedLessonId.set(this.lessons[0].id)
    }

    if (typeof window !== 'undefined') {
      effect(() => {
        const lessonId = this.selectedLessonId()
        if (!lessonId) {
          return
        }
        const url = new URL(window.location.href)
        url.searchParams.set('lesson', lessonId)
        window.history.replaceState({}, '', url.toString())
      })
    }
  }

  private initialLessonId(): string | null {
    if (typeof window === 'undefined') {
      return this.lessons[0]?.id ?? null
    }
    const params = new URLSearchParams(window.location.search)
    const lessonId = params.get('lesson')
    const exists = this.lessons.some((lesson) => lesson.id === lessonId)
    return exists && lessonId ? lessonId : this.lessons[0]?.id ?? null
  }

  selectLesson(lesson: Lesson) {
    this.selectedLessonId.set(lesson.id)
  }

  toggleCompletion(lesson: Lesson) {
    this.progressService.toggleLessonCompletion(lesson.id)
  }

  toggleTag(tag: string) {
    const current = this.selectedTags()
    if (current.includes(tag)) {
      this.selectedTags.set(current.filter((item) => item !== tag))
    } else {
      this.selectedTags.set([...current, tag])
    }
  }

  changeSection(section: 'all' | string) {
    this.sectionFilter.set(section)
  }

  changeLevel(level: 'all' | LessonLevel) {
    this.levelFilter.set(level)
  }

  levelLabel(level: LessonLevel) {
    return this.levelText[level]
  }

  isCompleted(id: string) {
    return this.progressService.isLessonCompleted(id)
  }

  completionRate() {
    return this.progressService.completionRate()
  }

  completedCount() {
    return this.progressService.completedCount()
  }
}
