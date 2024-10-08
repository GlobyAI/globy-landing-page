import type { Metadata } from 'next'
import '../styles/global.scss'
import { METADATA } from '@/helpers/config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: METADATA.NAME,
  description: METADATA.DESCRIPTION,
  applicationName: METADATA.NAME,
  openGraph: {},
  generator: METADATA.NAME,
  keywords: METADATA.KEYWORDS,
  authors: [{ name: METADATA.NAME, url: METADATA.LINKEDIN_URL }],
  creator: METADATA.CREATOR,
  publisher: METADATA.PUBLISHER,
  icons: {
    icon: '/images/globy logo.png',
    shortcut: '/icons/globy-black.svg',
    apple: '/icons/globy-black.svg',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="se">
      <body suppressHydrationWarning={true} className="light">
        <div className="globy">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
