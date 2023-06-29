import { Github, Linkedin, Instagram } from 'lucide-react'
import Link from 'next/link'

export function Header() {
  return (
    <div className="md:flex hidden px-8 py-8 justify-between border-b border-b-neutral-900 sm:px-32">
      <nav className="space-x-4">
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

      <div className="flex items-center gap-4">
        <a href="" className="hover:text-cyan-600 transition-colors">
          <Github size={24} />
        </a>
        <a href="" className="hover:text-cyan-600 transition-colors">
          <Linkedin size={24} />
        </a>
        <a href="" className="hover:text-cyan-600 transition-colors">
          <Instagram size={24} />
        </a>
      </div>
    </div>
  )
}
