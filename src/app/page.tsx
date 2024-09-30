'use client'

import { useThemeContext } from '@/provider/ThemeProvider'

export default function LandingPage() {
  const { toggleTheme } = useThemeContext()
  return (
    <div>
      <button onClick={toggleTheme}>Switch mode</button>
    </div>
  )
}
