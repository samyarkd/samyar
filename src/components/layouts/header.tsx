import { MobileMenu } from '@/components/layouts/mobile-menu'
import clsx from 'clsx'
import localFont from 'next/font/local'
import Link from 'next/link'

const Agbalumo = localFont({
  src: '../../utils/assets/fonts/Agbalumo/Agbalumo-Regular.ttf',
  display: 'swap'
})

const Header = () => {
  return (
    <header className="max-w-5xl flex items-baseline mx-auto w-full p-4">
      <Link href="/" className={clsx(Agbalumo.className, 'text-2xl')}>
        Samyar
      </Link>

      <MobileMenu />

      <ul className="hidden ms-auto sm:flex gap-8 sm:items-baseline">
        <Link href="/blog" className={clsx('text-lg')}>
          Blog
        </Link>
        <Link href="/contact" className={clsx('text-lg')}>
          Contact
        </Link>
        <Link href="/about" className={clsx('text-lg')}>
          About
        </Link>
      </ul>
    </header>
  )
}

export default Header
