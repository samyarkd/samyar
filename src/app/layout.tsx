import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

import Header from '@/components/layouts/header'
import Providers from '@/components/providers'
import clsx from 'clsx'
import { Inter } from 'next/font/google'
import { type ReactNode } from 'react'

const DefaultFont = Inter({
  weight: ['400', '100', '200', '300', '500', '600', '700', '800', '900'],
  subsets: ['latin']
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
          DefaultFont.className,
          'relative min-h-screen scroll-smooth'
        )}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
