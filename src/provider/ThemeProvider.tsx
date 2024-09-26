'use client'
import React, { useEffect } from 'react'

export const ThemeContext = React.createContext({
  theme: 'light',
  toggleTheme: () => {},
})

interface Props {
  children: React.ReactNode
}

export const useThemeContext = () => React.useContext(ThemeContext)
export default function ThemeProvider({ children }: Props) {
  const [theme, setTheme] = React.useState('light')
  const toggleTheme = () => {
    const switchedTheme = theme === 'light' ? 'dark' : 'light'
    document.body.className = switchedTheme
    setTheme(switchedTheme)
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', switchedTheme)
    }
  }
  useEffect(() => {
    const localTheme = localStorage.getItem('theme')
    if (localTheme) {
      setTheme(localTheme)
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
