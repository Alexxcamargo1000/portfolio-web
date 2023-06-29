'use client'
import { Github, Linkedin, Instagram, Menu, X } from 'lucide-react'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const LinkMotion = motion(Link)

export function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const menuVariants = {
    hidden: { height: 0, width: 0, display: 'none' },
    visible: { height: 'initial', width: '50%', display: 'block' },
  }

  return (
    <div className="relative md:hidden flex px-8 py-8 justify-between border-b border-b-neutral-900">
      <div>
        <motion.nav layout className="flex">
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

          <motion.div
            animate={isOpen ? 'visible' : 'hidden'}
            variants={menuVariants}
            className="w-1/2 bg-neutral-800  text-center absolute mt-9 rounded divide-y-2 divide-neutral-900"
          >
            <LinkMotion
              onClick={() => setIsOpen(false)}
              href="/"
              className="flex items-center cursor-pointer justify-center p-3"
            >
              Home
            </LinkMotion>
            <LinkMotion
              onClick={() => setIsOpen(false)}
              href="/about"
              className="flex items-center cursor-pointer justify-center p-3"
            >
              About
            </LinkMotion>
            <LinkMotion
              onClick={() => setIsOpen(false)}
              href="/portfolio"
              className="flex items-center cursor-pointer justify-center p-3"
            >
              Portfolio
            </LinkMotion>
          </motion.div>
        </motion.nav>
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
