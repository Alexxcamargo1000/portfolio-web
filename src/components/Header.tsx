import Link from 'next/link'
import { SocialMedia } from './SocialMedia'

export function Header() {
  return (
    <div className="border-b border-b-neutral-900">
      <div className="md:flex  hidden px-8 py-8 justify-between max-w-[1440px] mx-auto  sm:px-32">
        <nav className="space-x-4  ">
          <Link
            href="/"
            className="font-slack text-2xl hover:text-cyan-600 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="font-slack text-2xl hover:text-cyan-600 transition-colors"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="font-slack text-2xl hover:text-cyan-600 transition-colors"
          >
            Portfolio
          </Link>
        </nav>

        <SocialMedia />
      </div>
    </div>
  )
}
