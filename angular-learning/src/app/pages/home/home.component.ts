import { CommonModule } from '@angular/common'
import { Component, computed, inject } from '@angular/core'
import { RouterModule } from '@angular/router'
import { LESSONS, LESSON_SECTIONS, TOTAL_ESTIMATED_HOURS } from '../../data/learning-plan'
import { LearningProgressService } from '../../services/learning-progress.service'
import type { LessonSection } from '../../models/lesson.model'

interface HeroStat {
  label: string
  value: number
  meta: string
}

interface ModuleHighlight {
  id: string
  section: LessonSection
  tagline: string
  summary: string
  focusAreas: string[]
  lessonCount: number
  estimatedHours: number
  completedCount: number
  firstLessonId: string | null
}

interface LessonCardView {
  id: string
  order: number
  title: string
  section: string
  summary: string
  estimatedHours: number
  isCompleted: boolean
}

const MODULE_TAGLINES: Record<string, string> = {
  s0: '夯实底座 · 快速启动',
  s1: '掌握核心 · 构建能力',
  s2: '进阶强化 · 打磨质量',
  s3: '项目闭环 · 交付实践',
}

const MODULE_FOCUS_AREAS: Record<string, string[]> = {
  s0: ['环境搭建与工作区治理', 'TypeScript 与架构认知', '组件树建模与依赖注入'],
  s1: ['模板语法与数据绑定', '组件通讯与路由体系', '表单、验证与可访问性'],
  s2: ['性能优化与信号模式', '可测试性与质量保障', '状态管理、RxJS 策略'],
  s3: ['企业项目需求拆解', 'CI/CD 与部署监控', '可观测性与复盘评估'],
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

  readonly uniqueTagCount = computed(() => {
    const tags = new Set<string>()
    this.lessons.forEach((lesson) => {
      lesson.tags.forEach((tag) => tags.add(tag))
    })
    return tags.size
  })

  readonly heroStats = computed<HeroStat[]>(() => [
    {
      label: '模块数量',
      value: this.sections.length,
      meta: 'S0 - S3 全链路能力沉淀',
    },
    {
      label: '课时总数',
      value: this.lessons.length,
      meta: `${this.totalEstimatedHours} 小时企业级实战`,
    },
    {
      label: '技术标签',
      value: this.uniqueTagCount(),
      meta: '覆盖 CLI / RxJS / 架构 / 部署',
    },
  ])

  readonly moduleHighlights = computed<ModuleHighlight[]>(() => {
    const completedIds = this.completedLessonIds()

    return this.sections.map((section) => {
      const lessonsInSection = this.lessons.filter((lesson) => lesson.section === section.name)
      const estimatedHours = lessonsInSection.reduce((sum, lesson) => sum + lesson.estimatedHours, 0)
      const completed = lessonsInSection.filter((lesson) => completedIds.has(lesson.id))

      return {
        id: section.id,
        section,
        tagline: MODULE_TAGLINES[section.id] ?? section.name,
        summary: section.description,
        focusAreas: MODULE_FOCUS_AREAS[section.id] ?? [],
        lessonCount: lessonsInSection.length,
        estimatedHours,
        completedCount: completed.length,
        firstLessonId: lessonsInSection[0]?.id ?? null,
      }
    })
  })

  readonly lessonCards = computed<LessonCardView[]>(() => {
    const completedIds = this.completedLessonIds()

    return this.lessons.map((lesson) => ({
      id: lesson.id,
      order: lesson.order,
      title: lesson.title,
      section: lesson.section,
      summary: lesson.summary,
      estimatedHours: lesson.estimatedHours,
      isCompleted: completedIds.has(lesson.id),
    }))
  })

  readonly featureCards = [
    {
      icon: '🧭',
      title: '阶段化路线图',
      description: 'S0-S3 四个阶段循序渐进地覆盖 Angular 基础、进阶与企业级项目交付能力。',
      highlights: ['阶段目标清晰、便于拆解学习任务', '课程卡片展示时长、阶段与重点标签', '搭配进度追踪与复盘提示，便于持续迭代'],
    },
    {
      icon: '🛠️',
      title: '工程化最佳实践',
      description: '结合官方文档与社区案例，覆盖从脚手架、质量保障到部署观测的全链路实践。',
      highlights: ['内置 CI/CD、监控配置片段，随取随用', '项目任务明确交付物与验收标准', '涵盖 Signals、Standalone、RxJS 等现代能力'],
    },
    {
      icon: '🚀',
      title: '项目驱动输出',
      description: 'S3 聚焦企业级学习平台案例，陪伴你完成需求拆解、敏捷迭代与灰度发布。',
      highlights: ['逐课拆解的项目蓝图，确保每次迭代可交付', '配套 PRD、角色旅程与度量指标模板', '提供部署、监控与复盘闭环指导'],
    },
  ]

  readonly nextLesson = computed(() => {
    const completedIds = this.completedLessonIds()
    return this.lessons.find((lesson) => !completedIds.has(lesson.id)) ?? this.lessons.at(-1) ?? null
  })

  constructor() {
    this.progressService.initialiseProgress(this.lessons)
  }

  trackByModuleId(_: number, highlight: ModuleHighlight) {
    return highlight.id
  }

  trackByLessonId(_: number, lesson: LessonCardView) {
    return lesson.id
  }
}
