import Link from 'next/link'
import { ButtonDownload } from '@/components/ButtonDownload'

export default function Home() {
  return (
    <main className="flex flex-1 flex-wrap items-center justify-center gap-10 lg:gap-20 py-5">
      <div className="md:pt-0 pt-10 flex items-center justify-center flex-col gap-10 ">
        <h1 className=" md:sr-only animate-fade-left font-montserrat text-xl">
          Alex Camargo de Oliveira
        </h1>
        <div className="w-96 h-96 animate-fade-left bg-neutral-900" />
      </div>

      <div className="max-w-lg space-y-8">
        <h1 className="md:not-sr-only sr-only animate-fade-left font-montserrat text-5xl">
          Alex Camargo de Oliveira
        </h1>
        <p className="leading-relaxed text-base text-neutral-100 font-normal">
          Sou especializado em desenvolvimento front-end de aplicações web,
          utilizando as linguagens de programação JavaScript, HTML, CSS e
          ReactJS. Tenho experiência em raciocínio lógico e sou flexível para
          lidar com inovações na área da tecnologia. Além disso, também utilizo
          TypeScript e Node.js em meus projetos para garantir uma base sólida e
          eficiente no desenvolvimento de aplicações web.
        </p>

        <div className="flex gap-6 flex-wrap items-center justify-center md:justify-normal">
          <ButtonDownload />
          <Link
            href="/"
            className="underline leading-relaxed hover:text-neutral-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </main>
  )
}
