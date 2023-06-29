'use client'

import { Radar } from '@/components/Radar'
import { useState } from 'react'
import clsx from 'clsx'

import type { Skill } from '@/components/Radar'

export default function About() {
  const [skill, setSkill] = useState<Skill>('HTML')

  return (
    <div className="flex-1 flex items-center flex-col my-16 gap-16 max-w-3xl mx-auto">
      <h1 className="animate-fade font-montserrat md:text-5xl text-3xl font-bold">
        Umlabore eu velit duis aliqua
      </h1>

      <div className="flex items-center flex-col gap-6 max-w-2xl p-4 md:p-0">
        <h2 className="text-2xl font-montserrat font-bold text-neutral-800">
          BIOGRAPHY
        </h2>
        <p className=" text-justify">
          Consectetur consequat amet eiusmod occaecat. Reprehenderit adipisicing
          proident adipisicing officia nostrud aute incididunt fugiat voluptate
          amet mollit. Non exercitation cillum occaecat aliqua nulla ea ullamco
          ea voluptate exercitation duis quis enim ex occaecat. Nisi
          reprehenderit nulla est officia minim excepteur in dolor anim eiusmod
          mollit est laborum sint qui.
        </p>
        <p className="text-justify">
          Consectetur consequat amet eiusmod occaecat. Reprehenderit adipisicing
          proident adipisicing officia nostrud aute incididunt fugiat voluptate
          amet mollit. Non exercitation cillum occaecat aliqua nulla ea ullamco
          ea voluptate exercitation duis quis enim ex occaecat. Nisi
          reprehenderit nulla est officia minim excepteur in dolor anim eiusmod
          mollit est laborum sint qui.
        </p>

        <div className="w-60 h-60 bg-neutral-900 rounded-lg" />
      </div>

      <div className="flex flex-col items-center ">
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
