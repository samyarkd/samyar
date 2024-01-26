import { MobileMenu } from '@/components/layouts/mobile-menu'
import clsx from 'clsx'
import Link from 'next/link'
import { SamyarSvg } from './samyar-svg'

const Header = () => {
  return (
    <>
      <div className="fixed top-0 z-50 h-[65px] w-full border-b border-solid border-white/25 backdrop-blur backdrop-brightness-50 sm:h-[68px]">
        <header className="mx-auto flex h-full w-full max-w-5xl items-center px-4 py-2">
          <Link href="/" className={clsx('h-full text-2xl')}>
            <SamyarSvg />
          </Link>

          <MobileMenu />

          <ul className="ms-auto hidden gap-8 sm:flex sm:items-baseline">
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
