'use client'
import * as Dialog from '@radix-ui/react-dialog'
import { Mail, X } from 'lucide-react'
import { WhatsApp } from './WhatsApp'
import Link from 'next/link'

export interface ContactDialogProps {}

export function ContactDialog(props: ContactDialogProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="underline leading-relaxed hover:text-neutral-400 transition-colors">
        Contato
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-neutral-950/50 backdrop-blur-sm data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-36  max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-md text-neutral-50  bg-neutral-950 p-8 shadow shadow-neutral-900 focus:outline-none">
          <Dialog.Title className="text-xl font-medium font-montserrat">
            Entre em contato comigo
          </Dialog.Title>
          <Dialog.Description>
            <div className="text-neutral-50 flex gap-4 mt-4">
              <Link
                href="https://wa.me/5511971945271"
                target="_blank"
                className="flex items-center gap-2 underline hover:opacity-90"
              >
                <WhatsApp /> WhatsApp
              </Link>
              <Link
                href="mailto:alexxcamargo1000@gmail.com"
                target="_blank"
                className="flex items-center gap-2 underline hover:opacity-90"
              >
                <Mail className="text-red-600 " /> Gmail
              </Link>
            </div>
          </Dialog.Description>
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 focus:outline-none focus:ring-1 focus:ring-cyan-500 "
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
