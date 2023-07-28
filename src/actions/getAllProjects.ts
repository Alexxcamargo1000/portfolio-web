import { projectProps } from '@/app/api/data/route'
import { api } from '@/lib/api'

export async function getAllProjects() {
  const project: projectProps[] = await (await api(`/data`)).data

  return project
}
