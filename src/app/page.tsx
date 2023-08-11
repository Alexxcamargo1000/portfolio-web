import { ButtonDownload } from '@/components/ButtonDownload'
import { ContactDialog } from '@/components/ContactDialog'

export default function Home() {
  return (
    <main className="flex flex-1 flex-wrap items-center justify-center gap-10 lg:gap-20 py-5">
      <div className="md:pt-0 pt-10 flex items-center justify-center flex-col gap-10 ">
        <h1 className=" md:sr-only animate-fade-left font-montserrat text-xl">
          Alex Camargo de Oliveira
        </h1>
        <div className="w-96 h-96 animate-fade-left bg-neutral-900" />
      </div>

      <div className="max-w-lg space-y-6">
        <div>
          <h1 className="md:not-sr-only leading-tight sr-only animate-fade-left font-montserrat text-5xl">
            Alex Camargo de Oliveira
          </h1>
          <h2 className="text-neutral-500 text-lg font-black">Developer</h2>
        </div>
        <p className="leading-relaxed text-base text-neutral-100 font-normal">
          Sou especializado em desenvolvimento front-end de aplicações web,
          utilizando as linguagens de programação JavaScript, HTML, CSS e
          ReactJS. Tenho experiência em raciocínio lógico e sou flexível para
          lidar com inovações na área da tecnologia.
        </p>

        <div className="flex gap-6 flex-wrap items-center justify-center md:justify-normal">
          <ButtonDownload />
          <ContactDialog />
        </div>
      </div>
    </main>
  )
}
