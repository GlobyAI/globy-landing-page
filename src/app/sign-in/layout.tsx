import type { Metadata } from 'next'
import { METADATA } from '@/helpers/config'
export const metadata: Metadata = {
  title: METADATA.TITLE,
  description: METADATA.DESCRIPTION,
  applicationName: METADATA.NAME,
  openGraph: {
    title: METADATA.OG.TITLE,
    description: METADATA.OG.DESCRIPTION,
    url: METADATA.OG.URL,
    siteName: METADATA.NAME,
    type: 'website',
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
  return <div className="globy">{children}</div>
}