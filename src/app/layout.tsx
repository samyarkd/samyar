import type { Metadata } from 'next'
import './globals.css'

import { MobileMenu } from '@/components/layouts/mobile-menu'
import Providers from '@/components/providers'
import BlogTransition from '@/components/transition'
import clsx from 'clsx'
import localFont from 'next/font/local'
import Link from 'next/link'

const PatrickHandSC = localFont({
  src: '../utils/assets/fonts/PatrickHandSC-Regular.ttf',
  display: 'swap',
})

const Agbalumo = localFont({
  src: '../utils/assets/fonts/Agbalumo/Agbalumo-Regular.ttf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Samyar 🏂',
  description: "Samyar's blog and portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(PatrickHandSC.className, "relative min-h-screen")}>
        <header className="max-w-5xl flex items-baseline mx-auto p-4">
          <Link href='/' className={clsx(Agbalumo.className, "text-2xl")}>Samyar</Link>

          <MobileMenu />

          <ul className='hidden ms-auto sm:flex gap-8 sm:items-baseline'>
            <Link href='/blog' className={clsx("text-lg")}>Blog</Link>
            <Link href='/contact' className={clsx("text-lg")}>Contact</Link>
            <Link href='/about' className={clsx("text-lg")}>About</Link>
          </ul>
        </header>

        <BlogTransition>
          <Providers>
            {children}
          </Providers>
        </BlogTransition>

      </body>
    </html>
  )
}

