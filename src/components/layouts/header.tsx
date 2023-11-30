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
    <div className="fixed w-full top-0 z-50 backdrop-blur border-b border-black/25 dark:border-white/25 dark:backdrop-brightness-50 border-solid">
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
    </div>
  )
}

export default Header
