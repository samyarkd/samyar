'use client'

import useTheme from '@/utils/hooks/useTheme'
import { useEffect, useState } from 'react'

interface ThemedHtml {
  dark: string
  light: string
}

const ThemedSVG = ({ dark, light }: ThemedHtml) => {
  const theme = useTheme()
  const [html, sethtml] = useState(dark)

  useEffect(() => {
    sethtml(theme.isDark ? dark : light)
  }, [theme.theme])

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default ThemedSVG
