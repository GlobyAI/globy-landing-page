'use client'
import React, { useEffect } from 'react'

export const ThemeContext = React.createContext({
  isDark: false,
  toggleTheme: () => {},
})

interface Props {
  children: React.ReactNode
}

export const useThemeContext = () => React.useContext(ThemeContext)
export default function ThemeProvider({ children }: Props) {
  const [isDark, setIsDark] = React.useState(false)
  const toggleTheme = () => {
    if (isDark) {
      localStorage.setItem('theme', 'light')
    } else {
      localStorage.setItem('theme', 'dark')
    }
    setIsDark(!isDark)
  }
  useEffect(() => {
    const localTheme = localStorage.getItem('theme') || ''
    if (localTheme) {
      document.body.className = localTheme
      setIsDark(localTheme === 'dark')
      return
    }
  }, [])
  useEffect(() => {
    if (!isDark) {
      document.body.className = 'light'
    } else {
      document.body.className = 'dark'
    }
  }, [isDark])

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
