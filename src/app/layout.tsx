import type { Metadata } from 'next'
import '../styles/global.scss'
import { METADATA } from '@/helpers/config'
import ThemeProvider from '@/provider/ThemeProvider'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

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
        <body suppressHydrationWarning={true} className="light">
          <div className="globy">
            <Header />
            {children}
            <Footer />
          </div>
        </body>
      </ThemeProvider>
    </html>
  )
}
