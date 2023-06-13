import Image from 'next/image'
import Link from 'next/link'
import { Download} from 'lucide-react'

export default function Home() {
  return (
    <main className='flex flex-1 items-center justify-center gap-20'>
      <div>
        <div className='w-96 h-96 bg-neutral-900' />
      </div>

      <div className='max-w-lg space-y-8'>
        <h1 className='font-montserrat text-5xl'>Umlabore eu velit duis aliqua</h1>
        <p className='leading-relaxed text-base text-neutral-100 font-normal'>
          As a skilled full-stack developer, I am dedicated to turning ideas 
          into innovative web applications. Explore my latest projects and 
          articles, showcasing my expertise in React.js and web development.
        </p>

        <div className='flex gap-6 items-center'>
          <button className='px-4 py-3 bg-cyan-600 flex items-center justify-center gap-2 rounded-md hover:bg-cyan-800 transition-colors'>
            Resume 
            <Download/>
          </button>
          <Link href="/" className='underline leading-relaxed hover:text-neutral-400 transition-colors'>
            Contact
          </Link>
        </div>
      </div>
    </main>
  )
}
