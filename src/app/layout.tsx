import type { Metadata } from 'next'
import '../styles/global.scss'
import { METADATA } from '@/helpers/config'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export const metadata: Metadata = {
  title: METADATA.TITLE,
  description: METADATA.DESCRIPTION,
  applicationName: METADATA.NAME,
  openGraph: {
    title: METADATA.TITLE,
    description: METADATA.OG.DESCRIPTION,
    url: METADATA.APP_URL,
    siteName: METADATA.NAME,
    type: 'website',
    images: [
      {
        url: '/images/favicon-512x512.png',
        width: 512,
        height: 512,
        alt: 'Globy link preview icon',
      },
    ],
    countryName: 'Sweden',
  },
  generator: METADATA.NAME,
  keywords: METADATA.KEYWORDS,
  authors: [{ name: METADATA.NAME, url: METADATA.LINKEDIN_URL }],
  creator: METADATA.CREATOR,
  publisher: METADATA.PUBLISHER,
  metadataBase: new URL(METADATA.APP_URL),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/images/favicon-16x16.png',
    apple: '/images/favicon-16x16.png',
  },
  manifest: 'manifest.json',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="se">
      <head>
        <meta name="google" content="notranslate" />
      </head>
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
