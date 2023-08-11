import data from '../../data.json'

export interface projectProps {
  id: number
  name: string
  description: string
  image: string
  gitUrl?: string
  deployUrl?: string
  tags: string[]
}
export function getAllProjects() {
  const project: projectProps[] = data

  return project
}
