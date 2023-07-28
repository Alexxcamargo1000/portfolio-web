import { NextResponse } from 'next/server'

export interface projectProps {
  id: number
  name: string
  description: string
  image: string
  gitUrl?: string
  deployUrl?: string
  tags: string[]
}

export async function GET(request: Request) {
  const projects: projectProps[] = [
    {
      id: 1,
      name: 'Food Explorer',
      image: '/food-explorer.png',
      description: 'A simple app to find recipes',
      gitUrl: 'https://github.com/Alexxcamargo1000/food-explorer',
      tags: ['React', 'TypeScript', 'Node.js'],
    },
    {
      id: 2,
      name: 'Todo-app',
      description: 'A simple app to find recipes',
      image: '/todo-app.png',
      gitUrl: 'https://github.com/Alexxcamargo1000/food-explorer',
      deployUrl: 'https://todo-app-alex.vercel.app/',
      tags: ['React', 'TypeScript', 'Node.js'],
    },
  ]

  return NextResponse.json(projects)
}
