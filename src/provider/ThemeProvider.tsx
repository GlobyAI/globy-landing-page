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
      document.body.className = 'light'
      localStorage.setItem('theme', 'light')
    } else {
      document.body.className = 'dark'
      localStorage.setItem('theme', 'dark')
    }
    setIsDark(!isDark)
  }
  useEffect(() => {
    const localTheme = localStorage.getItem('theme') || 'null'

    if (localTheme) {
      document.body.className = localTheme
      setIsDark(localTheme === 'dark')
    }
  }, [])

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
