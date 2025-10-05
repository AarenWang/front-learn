import { CommonModule } from '@angular/common'
import { Component, computed, inject, signal } from '@angular/core'
import { ActivatedRoute, Router, RouterModule } from '@angular/router'
import { takeUntilDestroyed } from '@angular/core/rxjs-interop'
import { LESSONS } from '../../data/learning-plan'
import { Lesson, LessonLevel } from '../../models/lesson.model'
import { LearningProgressService } from '../../services/learning-progress.service'

@Component({
  selector: 'app-lesson-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './lesson-detail.component.html',
  styleUrls: ['./lesson-detail.component.scss'],
})
export class LessonDetailComponent {
  private readonly route = inject(ActivatedRoute)
  private readonly router = inject(Router)
  private readonly progressService = inject(LearningProgressService)

  readonly lessons = [...LESSONS].sort((a, b) => a.order - b.order)
  readonly lessonId = signal<string | null>(this.route.snapshot.paramMap.get('lessonId'))

  readonly lesson = computed(() => {
    const id = this.lessonId()
    return id ? this.lessons.find((item) => item.id === id) ?? null : null
  })

  readonly lessonIndex = computed(() => {
    const current = this.lesson()
    return current ? this.lessons.findIndex((item) => item.id === current.id) : -1
  })

  readonly previousLesson = computed(() => {
    const index = this.lessonIndex()
    return index > 0 ? this.lessons[index - 1] : null
  })

  readonly nextLesson = computed(() => {
    const index = this.lessonIndex()
    return index >= 0 && index < this.lessons.length - 1 ? this.lessons[index + 1] : null
  })

  readonly levelLabel: Record<LessonLevel, string> = {
    foundation: '基础',
    advanced: '进阶',
    project: '项目',
  }

  constructor() {
    this.progressService.initialiseProgress(this.lessons)

    this.route.paramMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      this.lessonId.set(params.get('lessonId'))
    })
  }

  isCompleted(id: string) {
    return this.progressService.isLessonCompleted(id)
  }

  toggleCompletion(lesson: Lesson) {
    this.progressService.toggleLessonCompletion(lesson.id)
  }

  navigateTo(lesson: Lesson | null) {
    if (!lesson) {
      return
    }
    this.router.navigate(['/lessons', lesson.id])
  }
}
