import { useEffect, useState } from 'react'

const useTheme = () => {
  const [isDark, setIsDark] = useState(false)
  const [isLight, setIsLight] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark' | ''>('')

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true)
      setTheme('dark')
    } else {
      setIsLight(true)
      setTheme('light')
    }

    return () => {}
  }, [])

  return { isDark, isLight, theme }
}

export default useTheme
