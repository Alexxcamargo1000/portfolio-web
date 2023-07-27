import { Tag } from '@/components/Tag'
import Image from 'next/image'
import Link from 'next/link'

export default function Portfolio() {
  return (
    <div className="flex flex-1 justify-center">
      <div className="max-w-5xl w-full mt-16">
        <h1 className=" pl-1 text-4xl font-montserrat font-bold animate-fade ">
          Portfolio
        </h1>

        <div className="my-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          <Link
            href="/portfolio/asda"
            className="h-60 rounded-lg shadow-sm group overflow-hidden shadow-neutral-800 relative "
          >
            <Image
              className="w-full h-full object-cover blur-sm group-hover:blur-none group-hover:scale-125 transition-all"
              alt="website food-explorer"
              src="/food-explorer.png"
              width={600}
              height={300}
            />

            <div className="absolute p-1 py-2 flex flex-col items-center justify-center w-full bg-neutral-900/20 hover:bg-neutral-900/50 transition-colors z-20 bottom-0 top-0 cursor-pointer">
              <div className="flex-1 flex items-center ">
                <span className="text-2xl font-montserrat font-black leading-relaxed text-neutral-200 drop-shadow-xl">
                  Food explorer
                </span>
              </div>

              <div className="flex w-full flex-wrap gap-2">
                <Tag size="xs">React js</Tag>
                <Tag size="xs">Node js</Tag>
              </div>
            </div>
          </Link>
          <div className=" h-60 bg-neutral-900 rounded-lg" />
          <div className=" h-60 bg-neutral-900 rounded-lg" />
          <div className=" h-60 bg-neutral-900 rounded-lg" />
          <div className=" h-60 bg-neutral-900 rounded-lg" />
          <div className=" h-60 bg-neutral-900 rounded-lg" />
          <div className=" h-60 bg-neutral-900 rounded-lg" />
          <div className=" h-60 bg-neutral-900 rounded-lg" />
        </div>
      </div>
    </div>
  )
}
