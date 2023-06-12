import './globals.css'
import { Noto_Sans, Montserrat, Slackside_One } from  "next/font/google"

const noto = Noto_Sans({
  subsets: ['latin'],
   variable: '--font-noto',
   weight: ['400', '500', '800']
})

const montserrat = Montserrat({
  subsets: ['latin'],
   variable: '--font-montserrat',
   weight: '800'
})

const slacksideOne = Slackside_One({
  subsets: ['latin'],
   variable: '--font-slack',
   weight: '400'
})

export const metadata = {
  title: 'Alex Camargo',
  description: 'Portfolio de um desenvolvedor web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${slacksideOne.variable} ${montserrat.variable} ${noto.variable} `}>
      <body className='font-noto'>{children}</body>
    </html>
  )
}
