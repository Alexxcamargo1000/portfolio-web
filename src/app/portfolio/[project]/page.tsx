import { getProjectById } from '@/actions/getProjectById'
import { Tag } from '@/components/Tag'
import { Ghost, GithubIcon } from 'lucide-react'
import { Banner } from './components/Banner'
import { ButtonBack } from './components/ButtonBack'

export interface previewProps {
  params: { project: string }
}

export default async function Preview({ params }: previewProps) {
  const project = getProjectById(Number(params.project))

  return (
    <div className="mt-10 w-full max-w-7xl mx-auto">
      <ButtonBack />
      {/* Banner image */}
      <Banner image={project.image} />

      <div className="mt-8 p-4 max-md:flex max-md:flex-col max-md:items-center">
        <h1 className="text-3xl font-montserrat font-bold animate-fade ">
          {project.name}
        </h1>
        {/* Tags */}
        <div className="flex gap-2 mt-2 py-2">
          {project.tags.map((tag) => (
            <Tag key={tag} size="md" variant="primary">
              {tag}
            </Tag>
          ))}
        </div>

        {/* Description */}
        <div className="mt-8 grid grid-cols-2 max-md:grid-cols-1 max-md:space-y-8">
          <div className=" w-full p-4  ">
            <p className="animate-fade leading-relaxed text-zinc-300 text-lg max-md:text-justify">
              {project.description}
            </p>
          </div>
          {/* Links */}
          <div className=" w-full items-start gap-4 flex flex-col p-4 ">
            {project.gitUrl && (
              <div className="space-y-3">
                <span className="flex items-center gap-2">
                  <GithubIcon />
                  Link do projeto
                </span>
                <a
                  href={project.gitUrl}
                  target="_blank"
                  className="inline-block underline text-gray-600"
                  rel="noreferrer"
                >
                  {project.gitUrl}
                </a>
              </div>
            )}

            {project.deployUrl && (
              <div className="space-y-3">
                <span className="flex items-center gap-2">
                  <Ghost />
                  Link do deploy
                </span>
                <a
                  href={project.deployUrl}
                  target="_blank"
                  className="inline-block underline text-gray-600"
                  rel="noreferrer"
                >
                  {project.deployUrl}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
