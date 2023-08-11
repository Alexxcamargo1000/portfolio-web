// import { projectProps } from '@/app/api/data/route'
// import { api } from '@/lib/api'
import { getAllProjects } from './getAllProjects'

export function getProjectById(id: number) {
  const projects = getAllProjects()

  const project = projects.find((project) => project.id === id)

  if (!project) throw new Error('Project not found')

  return project
}
