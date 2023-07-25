import { Github, Instagram, Linkedin } from 'lucide-react'

export function SocialMedia() {
  return (
    <div className="flex items-center gap-4">
      <a
        target="_blank"
        href="https:github.com/alexxcamargo1000"
        className="hover:text-cyan-600 transition-colors"
        rel="noreferrer"
      >
        <Github size={24} />
      </a>
      <a
        target="_blank"
        href="https:linkedin.com/in/alex-camargo1000/"
        className="hover:text-cyan-600 transition-colors"
        rel="noreferrer"
      >
        <Linkedin size={24} />
      </a>
      <a
        target="_blank"
        href="https://www.instagram.com/oalexcamargo"
        className="hover:text-cyan-600 transition-colors"
        rel="noreferrer"
      >
        <Instagram size={24} />
      </a>
    </div>
  )
}
