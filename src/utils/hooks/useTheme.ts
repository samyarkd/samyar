import { useEffect, useState } from 'react'

/**
 * Listens for the theme change and sets the correct theme
 * @returns Theme
 */
const useTheme = () => {
  const [isDark, setIsDark] = useState(false)
  const [isLight, setIsLight] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark' | ''>('')

  function setThemeSetting(isDarkTheme: boolean) {
    if (isDarkTheme) {
      setIsDark(true)
      setIsLight(false)
      setTheme('dark')
    } else {
      setIsLight(true)
      setIsDark(false)
      setTheme('light')
    }
  }

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', (theme) => {
        console.log('dark', theme.matches)
        setThemeSetting(theme.matches)
      })

    setThemeSetting(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  return { isDark, isLight, theme }
}

export default useTheme
