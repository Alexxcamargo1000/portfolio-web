'use client'
import { ArrowLeft } from 'lucide-react'

import { useRouter } from 'next/navigation'

export interface ButtonBackProps {}

export function ButtonBack(props: ButtonBackProps) {
  const router = useRouter()
  function handleBack() {
    router.back()
  }
  return (
    <button
      className="flex items-center gap-1 mb-4 hover:opacity-75"
      onClick={handleBack}
    >
      <ArrowLeft />
      Voltar
    </button>
  )
}
