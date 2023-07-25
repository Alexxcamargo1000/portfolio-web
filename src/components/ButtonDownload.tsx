'use client'
import { Download } from 'lucide-react'
import { ButtonHTMLAttributes } from 'react'

export interface ButtonDownloadProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ButtonDownload(props: ButtonDownloadProps) {
  function handleDownload() {
    window.open('/resume.pdf', '_blank')
  }

  return (
    <button
      {...props}
      onClick={handleDownload}
      className="hover:animate-stop animate-wiggle animate-infinite animate-ease-in md:w-fit w-full px-4 py-3 bg-cyan-600 flex items-center justify-center gap-2 rounded-md hover:bg-cyan-800 transition-colors"
    >
      Resume
      <Download />
    </button>
  )
}
