import { Download } from 'lucide-react'
import Link from 'next/link'

export function ButtonDownload() {
  return (
    <Link
      target="_blank"
      download="Resume Alex   Camargo"
      title="Baixar currículo"
      href="/resume.pdf"
      className="md:w-fit w-full px-4 py-3 bg-cyan-600 flex items-center justify-center gap-2 rounded-md hover:bg-cyan-800 transition-colors"
    >
      Resume
      <Download />
    </Link>
  )
}
