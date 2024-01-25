import { MobileMenu } from '@/components/layouts/mobile-menu'
import clsx from 'clsx'
import Link from 'next/link'
import { SamyarSvg } from './samyar-svg'

const Header = () => {
  return (
    <>
      <div className="fixed top-0 h-[65px] sm:h-[68px] w-full z-50 backdrop-blur border-b border-white/25 backdrop-brightness-50 border-solid">
        <header className="max-w-5xl flex items-center h-full mx-auto w-full px-4 py-2">
          <Link href="/" className={clsx('text-2xl h-full')}>
            <SamyarSvg />
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
    </>
  )
}

export default Header
