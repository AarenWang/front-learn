import { CommonModule } from '@angular/common'
import { Component, computed, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LESSONS, LESSON_SECTIONS, TOTAL_ESTIMATED_HOURS } from '../../data/learning-plan'
import { LessonSection } from '../../models/lesson.model'
import { LearningProgressService } from '../../services/learning-progress.service'

interface FeatureCard {
  icon: string
  title: string
  description: string
  highlights: string[]
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  private readonly progressService = inject(LearningProgressService)

  readonly lessons = [...LESSONS].sort((a, b) => a.order - b.order)
  readonly sections = LESSON_SECTIONS
  readonly totalEstimatedHours = TOTAL_ESTIMATED_HOURS
  readonly firstLessonId = this.lessons[0]?.id ?? null

  readonly completedCount = this.progressService.completedCount

  readonly progressPercentage = computed(() => {
    const completed = this.progressService.completedCount()
    return this.lessons.length === 0 ? 0 : (completed / this.lessons.length) * 100
  })

  readonly completedLessonIds = computed(() => new Set(this.progressService.completedLessons()))

  readonly sectionSummaries = computed(() => {
    const completedIds = this.completedLessonIds()
    return this.sections.map((section) => {
      const lessonsInSection = this.lessons.filter((lesson) => lesson.section === section.name)
      const completed = lessonsInSection.filter((lesson) => completedIds.has(lesson.id))
      const estimatedHours = lessonsInSection.reduce((sum, lesson) => sum + lesson.estimatedHours, 0)

      return {
        section,
        lessons: lessonsInSection,
        completedCount: completed.length,
        totalLessons: lessonsInSection.length,
        estimatedHours,
      }
    })
  })

  readonly nextLesson = computed(() => {
    const completedIds = this.completedLessonIds()
    return this.lessons.find((lesson) => !completedIds.has(lesson.id)) ?? this.lessons.at(-1) ?? null
  })

  readonly featureCards: FeatureCard[] = [
    {
      icon: '🧭',
      title: '阶段化路线图',
      description: 'S0-S3 四个阶段循序渐进地覆盖 Angular 基础、进阶与企业级项目交付能力。',
      highlights: ['每节课定位明确，便于拆解学习目标', '课程卡片提供导航、时长与重点标签', '支持进度追踪，随时掌握完成情况'],
    },
    {
      icon: '🛠️',
      title: '工程化最佳实践',
      description: '结合官方文档与社区案例，提供从脚手架、质量保障到部署监控的全链路示例。',
      highlights: ['内置 CI/CD、监控配置片段，便于直接复用', '项目实践任务指明交付物与验收标准', '涵盖 Signals、Standalone、RxJS 等现代能力'],
    },
    {
      icon: '🚀',
      title: '项目驱动输出',
      description: 'S3 聚焦企业级学习平台案例，覆盖需求拆解、敏捷迭代、灰度发布与观测回路。',
      highlights: ['逐课拆解的项目蓝图，确保每次迭代可交付', '配套 PRD、角色旅程与度量指标模板', '提供部署、监控与复盘的闭环指导'],
    },
  ]

  constructor() {
    this.progressService.initialiseProgress(this.lessons)
  }

  trackBySectionId(_: number, summary: { section: LessonSection }) {
    return summary.section.id
  }
}
