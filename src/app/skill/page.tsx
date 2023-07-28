'use client'

import { Radar } from '@/components/Radar'
import { useState } from 'react'
import clsx from 'clsx'

import type { Skill } from '@/components/Radar'

export default function SkillPage() {
  const [skill, setSkill] = useState<Skill>('HTML')

  return (
    <div className="flex-1 flex items-center flex-col my-16 gap-16 max-w-3xl mx-auto">
      <h1 className="animate-fade font-montserrat md:text-5xl text-3xl font-bold">
        Minhas habilidades
      </h1>

      <div className="flex items-center leading-relaxed flex-col gap-6 max-w-2xl p-4 md:p-0">
        <h2 className="text-2xl font-montserrat font-bold text-neutral-800">
          Um resumo
        </h2>
        <p className=" ">
          Como desenvolvedor front-end, possuo habilidades sólidas em HTML, CSS
          e JavaScript, o que me permite transformar conceitos de design em
          interfaces web interativas e visualmente atraentes. Minha experiência
          e conhecimento em TypeScript, Node.js e Next.js me capacitam a criar
          aplicações web complexas, escaláveis e seguras.
        </p>
        <p className="">
          Ao utilizar TypeScript, sinto-me confiante em desenvolver código bem
          estruturado e tipado, aumentando a manutenibilidade e a segurança das
          minhas aplicações. Além disso, o uso do Node.js me permite construir
          aplicações do lado do servidor, fornecendo funcionalidades avançadas e
          em tempo real.
        </p>
        <p className="">
          Com o Next.js, posso explorar todo o potencial do React de forma
          otimizada, desenvolvendo aplicações de alto desempenho e amigáveis
          para SEO. Essa combinação de tecnologias modernas me torna um
          profissional valorizado na indústria, capaz de enfrentar desafios e
          entregar soluções inovadoras para projetos web.
        </p>

        <p className="">
          Com o Next.js, posso explorar todo o potencial do React de forma
          otimizada, desenvolvendo aplicações de alto desempenho e amigáveis
          para SEO. Essa combinação de tecnologias modernas me torna um
          profissional valorizado na indústria, capaz de enfrentar desafios e
          entregar soluções inovadoras para projetos web.
        </p>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-montserrat font-bold text-neutral-800">
          Skills
        </h2>
        <div className="mt-4">
          <ul className="flex flex-wrap items-center justify-center gap-6 w-full text-lg text-neutral-400">
            <li
              onClick={() => setSkill('HTML')}
              className={clsx(
                skill === 'HTML' && 'text-cyan-500',
                'cursor-pointer hover:text-cyan-500 transition-colors',
              )}
            >
              HTML
            </li>
            <li
              onClick={() => setSkill('CSS')}
              className={clsx(
                skill === 'CSS' && 'text-cyan-500',
                'cursor-pointer hover:text-cyan-500 transition-colors',
              )}
            >
              CSS
            </li>
            <li
              onClick={() => setSkill('Javascript')}
              className={clsx(
                skill === 'Javascript' && 'text-cyan-500',
                'cursor-pointer hover:text-cyan-500 transition-colors',
              )}
            >
              Javascript
            </li>
            <li
              onClick={() => setSkill('Next js')}
              className={clsx(
                skill === 'Next js' && 'text-cyan-500',
                'cursor-pointer hover:text-cyan-500 transition-colors',
              )}
            >
              Next js
            </li>
            <li
              onClick={() => setSkill('Node js')}
              className={clsx(
                skill === 'Node js' && 'text-cyan-500',
                'cursor-pointer hover:text-cyan-500 transition-colors',
              )}
            >
              Node js
            </li>
            <li
              onClick={() => setSkill('React js')}
              className={clsx(
                skill === 'React js' && 'text-cyan-500',
                'cursor-pointer hover:text-cyan-500 transition-colors',
              )}
            >
              React js
            </li>

            <li
              onClick={() => setSkill('SQL')}
              className={clsx(
                skill === 'SQL' && 'text-cyan-500',
                'cursor-pointer hover:text-cyan-500 transition-colors',
              )}
            >
              SQL
            </li>
            <li
              onClick={() => setSkill('Typescript')}
              className={clsx(
                skill === 'Typescript' && 'text-cyan-500',
                'cursor-pointer hover:text-cyan-500 transition-colors',
              )}
            >
              Typescript
            </li>
          </ul>

          <div className="mt-4 w-3/4 mx-auto flex items-center justify-center">
            <Radar skill={skill} />
          </div>
        </div>
      </div>
    </div>
  )
}
