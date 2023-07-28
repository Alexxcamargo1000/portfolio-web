import Image from 'next/image'
import Link from 'next/link'
import { Tag } from './Tag'
import { projectProps } from '@/app/api/data/route'

interface CardProps {
  project: projectProps
}

export function CardProject({ project }: CardProps) {
  return (
    <Link
      href={`/portfolio/${project.id}`}
      className="h-60 rounded-lg shadow-sm group overflow-hidden  shadow-neutral-800 relative "
    >
      <Image
        className="w-full h-full object-cover blur-sm brightness-50 group-hover:brightness-100 group-hover:blur-none group-hover:scale-125 transition-all"
        alt={project.name}
        src={project.image}
        width={600}
        height={300}
      />

      <div className="absolute p-1 py-2 flex flex-col items-center justify-center w-full bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors z-20 bottom-0 top-0 cursor-pointer">
        <div className="flex-1 flex items-center ">
          <span className="text-2xl font-montserrat font-black leading-relaxed text-neutral-200 drop-shadow-xl">
            {project.name}
          </span>
        </div>

        <div className="flex w-full flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag} size="xs">
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </Link>
  )
}
