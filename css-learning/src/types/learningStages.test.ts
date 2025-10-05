import { describe, it, expect } from 'vitest'
import { learningStages } from './learningStages'

describe('learningStages dataset', () => {
  it('should contain 30 lessons', () => {
    expect(learningStages).toHaveLength(30)
  })

  it('should have unique routes and ids', () => {
    const ids = new Set(learningStages.map(stage => stage.id))
    const routes = new Set(learningStages.map(stage => stage.route))

    expect(ids.size).toBe(learningStages.length)
    expect(routes.size).toBe(learningStages.length)
  })

  it('should include module metadata for each lesson', () => {
    learningStages.forEach(stage => {
      expect(stage.module).toBeDefined()
      expect(stage.module.title).toMatch(/模块/)
      expect(stage.foundationTopics.length).toBeGreaterThan(0)
      expect(stage.project.deliverables.length).toBeGreaterThan(0)
      expect(stage.resources.length).toBeGreaterThanOrEqual(1)
    })
  })
})
