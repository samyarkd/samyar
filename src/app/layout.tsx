import type { Metadata } from 'next'
import './globals.css'

import Header from '@/components/layouts/header'
import Providers from '@/components/providers'
import clsx from 'clsx'
import { Playpen_Sans } from 'next/font/google'
import { type ReactNode } from 'react'

const Playpen = Playpen_Sans({
  weight: '400',
  subsets: [
    'latin'
  ]
})

export const metadata: Metadata = {
  title: 'Samyar 🏂',
  description: "Samyar's blog and portfolio"
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={clsx(
          Playpen.className,
          'relative min-h-screen scroll-smooth'
        )}>
        <Providers>
          <Header />

          {children}
        </Providers>
      </body>
    </html>
  )
}
