import { useEffect, useState } from 'react'

const useTheme = () => {
  const [isDark, setIsDark] = useState(window.matchMedia("(prefers-color-scheme: dark)").matches)
  const [isLight, setIsLight] = useState(!window.matchMedia("(prefers-color-scheme: dark)").matches)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    if (
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setIsDark(true)
      setTheme('dark')
    } else {
      setIsLight(true)
      setTheme('light')
    }

    return () => {
    }
  }, [])

  return { isDark, isLight, theme }
}

export default useTheme
