import type { Metadata } from 'next'
import './globals.css'

import Header from '@/components/layouts/header'
import Providers from '@/components/providers'
import BlogTransition from '@/components/transition'
import clsx from 'clsx'
import localFont from 'next/font/local'
import { type ReactNode } from 'react'

const PatrickHandSC = localFont({
  src: '../utils/assets/fonts/PatrickHandSC-Regular.ttf',
  display: 'swap'
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
          PatrickHandSC.className,
          'relative min-h-screen flex flex-col '
        )}>
        <Providers>
          <Header />

          <BlogTransition>{children}</BlogTransition>
        </Providers>
      </body>
    </html>
  )
}
