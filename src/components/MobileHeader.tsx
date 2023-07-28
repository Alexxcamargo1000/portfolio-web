'use client'
import { Menu, X, Home, Folder, GraduationCap } from 'lucide-react'
import clsx from 'clsx'
import { useState } from 'react'
import Link from 'next/link'
import { SocialMedia } from './SocialMedia'

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
            {isOpen ? <X size={24} /> : <Menu size={24} />}
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
              href="/skill"
              className="flex items-center cursor-pointer gap-2 justify-center p-3"
            >
              <GraduationCap size={16} />
              Skill
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

      <SocialMedia />
    </div>
  )
}
