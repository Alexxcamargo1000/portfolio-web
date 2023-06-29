'use client'
import {
  Github,
  Linkedin,
  Instagram,
  Menu,
  X,
  Home,
  User2,
  Folder,
} from 'lucide-react'
import clsx from 'clsx'
import { useState } from 'react'
import Link from 'next/link'

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative md:hidden flex px-8 py-8 justify-between border-b border-b-neutral-900">
      <div>
        <nav className="flex">
          <button
            className="cursor-pointer w-full h-full"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X size={24} className="" />
            ) : (
              <Menu size={24} className="" />
            )}
          </button>

          <div
            className={clsx(
              'w-1/2 bg-neutral-800 text-center absolute z-10 mt-9 rounded divide-y-2 divide-neutral-900',
              !isOpen && 'hidden ',
              isOpen && 'animate-fade-down ',
            )}
          >
            <Link
              onClick={() => setIsOpen(false)}
              href="/"
              className="flex items-center cursor-pointer gap-2 justify-center p-3"
            >
              <Home size={16} />
              <span>Home</span>
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href="/about"
              className="flex items-center cursor-pointer gap-2 justify-center p-3"
            >
              <User2 size={16} />
              About
            </Link>
            <Link
              onClick={() => setIsOpen(false)}
              href="/portfolio"
              className="flex items-center cursor-pointer gap-2 justify-center p-3"
            >
              <Folder size={16} />
              Portfolio
            </Link>
          </div>
        </nav>
      </div>

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
