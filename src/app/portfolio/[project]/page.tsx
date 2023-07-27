import { Tag } from '@/components/Tag'
import { Ghost, GithubIcon } from 'lucide-react'
import Image from 'next/image'

export interface previewProps {
  params: { project: string }
}

export default function Preview({ params }: previewProps) {
  return (
    <div className="mt-10 w-full max-w-7xl mx-auto">
      {/* Banner image */}
      <div className="overflow-hidden animate-fade rounded-3xl drop-shadow-lg shadow-sm shadow-neutral-900  h-36 object-center w-full">
        <Image
          className="w-full h-full object-cover"
          quality={100}
          alt="website food-explorer"
          src="/food-explorer.png"
          width={400}
          height={400}
        />
      </div>

      <div className="mt-8 p-4 max-md:flex max-md:flex-col max-md:items-center">
        <h1 className="text-3xl font-montserrat font-bold animate-fade ">
          Food Explorer
        </h1>
        {/* Tags */}
        <div className="flex gap-2 mt-2 py-2">
          <Tag size="md" variant="primary">
            React js
          </Tag>

          <Tag size="md" variant="primary">
            Node js
          </Tag>

          <Tag size="md" variant="primary">
            SQL
          </Tag>
        </div>

        {/* Description */}
        <div className="mt-8 grid grid-cols-2 max-md:grid-cols-1 max-md:space-y-8">
          <div className=" w-full p-4  ">
            <p className="animate-fade leading-relaxed text-zinc-300 text-lg max-md:text-justify">
              Este é o front-end da aplicação Explorer Food, desenvolvida em
              React.js utilizando TypeScript e Styled Components. A aplicação
              permite que os usuários façam login, visualizem pratos disponíveis
              para compra, e também possui uma funcionalidade para o usuário
              administrador cadastrar e excluir pratos.
            </p>
          </div>
          {/* Links */}
          <div className=" w-full items-center gap-4 flex flex-col p-4 ">
            <div className="space-y-3">
              <span className="flex items-center gap-2">
                <GithubIcon />
                Link do projeto
              </span>
              <a
                href="#"
                target="_blank"
                className="inline-block underline text-gray-600"
              >
                https://github.com/Alexxcamargo1000/food-explorer
              </a>
            </div>
            <div className="space-y-3">
              <span className="flex items-center gap-2">
                <Ghost />
                Link do deploy
              </span>
              <a
                href="#"
                target="_blank"
                className="inline-block underline text-gray-600"
              >
                https://github.com/Alexxcamargo1000/food-explorer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
