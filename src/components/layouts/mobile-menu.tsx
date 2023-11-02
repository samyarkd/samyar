'use client'

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return <>
    <button onClick={() => setOpen(!open)} className='sm:hidden ms-auto w-6'>
      {
        open ?
          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path fill="#000000" d="M195.2 195.2a64 64 0 0 1 90.496 0L512 421.504 738.304 195.2a64 64 0 0 1 90.496 90.496L602.496 512 828.8 738.304a64 64 0 0 1-90.496 90.496L512 602.496 285.696 828.8a64 64 0 0 1-90.496-90.496L421.504 512 195.2 285.696a64 64 0 0 1 0-90.496z" /></svg>
          :
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
            <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round" />
          </svg>
      }
    </button>
    <ul className={clsx(open ? "" : "hidden", 'absolute flex mt-10 bg-body w-full z-20 flex-col ms-auto sm:hidden left-0 p-2 space-y-4 items-baseline')}>
      <Link href='/blog' className={clsx("text-lg")}>Blog</Link>
      <Link href='/#contact' className={clsx("text-lg")}>Contact</Link>
      <Link href='/about' className={clsx("text-lg")}>About</Link>
    </ul>
    <div onClick={() => setOpen(false)} className={clsx("absolute bg-black/5 -bottom-32 h-screen w-screen left-0", open ? "" : "hidden")} />
  </>
}
