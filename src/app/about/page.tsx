export default function About() {
  return (
    <div className="flex-1 flex items-center flex-col my-16 gap-16 max-w-3xl mx-auto">

        <h1 className="font-montserrat text-5xl font-bold">Umlabore eu velit duis aliqua</h1>

        <div className="flex items-center flex-col gap-6 max-w-2xl">
          <h2 className="text-2xl font-montserrat font-bold text-neutral-800">BIOGRAPHY</h2>
          <p className="">
            Consectetur consequat amet eiusmod occaecat. Reprehenderit adipisicing 
            proident adipisicing officia nostrud aute incididunt fugiat voluptate amet 
            mollit. Non exercitation cillum occaecat aliqua nulla ea ullamco ea voluptate 
            exercitation duis quis enim ex occaecat. Nisi reprehenderit nulla est officia 
            minim excepteur in dolor anim eiusmod mollit est laborum sint qui.
          </p>
          <p className="">
            Consectetur consequat amet eiusmod occaecat. Reprehenderit adipisicing 
            proident adipisicing officia nostrud aute incididunt fugiat voluptate amet 
            mollit. Non exercitation cillum occaecat aliqua nulla ea ullamco ea voluptate 
            exercitation duis quis enim ex occaecat. Nisi reprehenderit nulla est officia 
            minim excepteur in dolor anim eiusmod mollit est laborum sint qui.
          </p>

           <div className='w-60 h-60 bg-neutral-900 rounded-lg' />


        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-2xl font-montserrat font-bold text-neutral-800">Skills</h2>
          <div className="mt-4">
            <ul className="flex items-center justify-center gap-6 w-full text-lg text-neutral-400">
              <li className="text-cyan-600">HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Next js</li>
              <li>React js</li>
              <li>Node js</li>
              <li>Typescript</li>
              <li>SQL</li>
            </ul>
          </div>
        </div>
    </div>
  )
}