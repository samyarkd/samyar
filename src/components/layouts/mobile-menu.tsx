'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import TransitionHelper from '../transition/transition-helper'
import { AnimatePresence } from 'framer-motion'
import { nav } from '@/utils/nav'

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <>
      <button
        onClick={() => {
          setOpen(!open)
        }}
        className="ms-auto w-6 sm:hidden"
      >
        {open ? (
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path
              fill={'#fff'}
              d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z"
            />
          </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 18L20 18"
              stroke={'#fff'}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 12L20 12"
              stroke={'#fff'}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <path
              d="M4 6L20 6"
              stroke={'#fff'}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>
      <AnimatePresence>
        {open && (
          <TransitionHelper
            className="absolute left-0 top-full z-20 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <ul
              className={clsx(
                'bg-body ms-auto flex flex-col items-baseline space-y-2 border-y border-white/25 p-2 sm:hidden'
              )}
            >
              {nav.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={clsx(
                    'w-full rounded px-2 py-1 text-lg transition hover:bg-white/20'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </TransitionHelper>
        )}
      </AnimatePresence>
      <div
        onClick={() => {
          setOpen(false)
        }}
        className={clsx(
          'absolute left-0 top-full h-screen w-screen bg-black/5',
          open ? '' : 'hidden'
        )}
      />
    </>
  )
}
