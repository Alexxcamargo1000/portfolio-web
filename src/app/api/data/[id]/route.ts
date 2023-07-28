import { NextResponse } from 'next/server'
import { projectProps } from '../route'
import { api } from '@/lib/api'

export async function GET(
  request: Request,
  { params: { id } }: { params: { id: string } },
) {
  if (!id) {
    return NextResponse.json({ error: 'Missing id' })
  }
  const projects: projectProps[] = (await api('data')).data

  const project = projects.find((project) => project.id === Number(id))

  if (project === undefined) {
    return NextResponse.json({ message: 'No projects found' })
  }

  return NextResponse.json(project)
}
