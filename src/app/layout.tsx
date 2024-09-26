import type { Metadata } from 'next'
import '../styles/global.scss'
import { METADATA } from '@/helpers/config'
import ThemeProvider from '@/provider/ThemeProvider'

export const metadata: Metadata = {
  title: METADATA.APP_NAME,
  description: METADATA.APP_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="se">
      <ThemeProvider>
        <body suppressHydrationWarning={true}>
          <div className="app-wrapper">{children}</div>
        </body>
      </ThemeProvider>
    </html>
  )
}
