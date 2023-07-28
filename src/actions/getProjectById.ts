import { projectProps } from '@/app/api/data/route'
import { api } from '@/lib/api'

export async function getProjectById(id: number) {
  const project: projectProps = await (await api(`/data/${id}`)).data

  return project
}
