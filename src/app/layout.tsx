/* eslint-disable camelcase */
import { Header } from '@/components/Header'
import { Metadata } from 'next'
import './globals.css'
import { Noto_Sans, Montserrat, Slackside_One } from 'next/font/google'

import { Footer } from '@/components/Footer'
import { ReactNode } from 'react'
import { MobileHeader } from '@/components/MobileHeader'

const noto = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto',
  weight: ['400', '500', '800'],
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: '800',
})

const slacksideOne = Slackside_One({
  subsets: ['latin'],
  variable: '--font-slack',
  weight: '400',
})

export const metadata: Metadata = {
  title: 'Alex Camargo',
  description: 'Portfolio de um desenvolvedor web',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-br"
      className={`${slacksideOne.variable} ${montserrat.variable} ${noto.variable} `}
    >
      <body className="font-noto bg-neutral-950 text-neutral-50 flex justify-center ">
        <div className="flex flex-col min-h-screen w-full">
          <MobileHeader />
          <Header />
          <div className="flex-1 px-4 flex">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
